<template>
  <div id="app">
    <Header/>
    <transition
      :name="transitionName"
      mode="out-in"
      v-on:after-enter="routeSwitch"
      :duration="{ enter: 0, leave: 300 }"
    >
      <Main>
        <router-view :key="$route.fullPath"/>
      </Main>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import styled from 'vue-styled-components'
import Header from '@/components/Header'
const DEFAULT_TRANSITION = 'fade'

const Main = styled.main`
  width: 100%;
  padding: 2rem;
`

export default {
  components: {
    Header,
    Main
  },
  data () {
    return {
      isHome: null,
      transitionName: 'fade'
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;
      if (transitionName === 'slide') {
        const toOrder = to.meta.order;
        const fromOrder = from.meta.order;
        transitionName = from.meta.order > to.meta.order ? 'slide-left' : 'slide-right';
      }
      this.transitionName = transitionName || DEFAULT_TRANSITION;
      next();
    });
  },
  methods: {
    routeSwitch () {
      window.scrollTo(0, 0)
      this.clicks()
      if (this.$route.path === '/') {
        this.pageHistory('/')
        this.isHome = true
      } else {
        this.isHome = false
        this.pageHistory(this.$route.path)
      }
    },
    ...mapActions(
      {
        pageHistory: 'GET_PAGE_HISTORY',
        clicks: 'GET_PAGE_COUNT'
      }
    )
  }
}
</script>
