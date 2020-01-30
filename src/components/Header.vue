<template>
  <HeaderWrapper class="slideInDown animated show">
    <TitleWrapper>
      <H1>Vue.js / Mirage.js CRUD App Boilerplate</H1>
    </TitleWrapper>
  </HeaderWrapper>
</template>

<script>
import { mapState } from 'vuex'
import styled from 'vue-styled-components'
import { H1 } from '@/styles/components'
import { colors, shared, spacing } from '@/styles/theme'

const TitleWrapper = styled.div`
  display: flex;
  height: ${shared.nav_height};
  align-items: center;
  padding: 0 ${spacing.single_pad};
  * {
    color: ${colors.white};
  }
`

const HeaderWrapper = styled.main`
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  background-color: #fa2b00;
  z-index: 100;
  visibility: hidden;
  &.show {
    visibility: visible;
  }
`

export default {
  components: {
    HeaderWrapper,
    H1,
    TitleWrapper
  }
}
</script>