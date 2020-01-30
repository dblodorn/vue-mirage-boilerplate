<template>
  <PageWrapper>
    <div id="form-wrapper">
      <H1>Add A ToDo:</H1>
      <form @submit="formSubmit">
        <input type="text" class="form-control" placeholder="ToDo" v-model="todo_item">
        <button>
          <span>ADD</span>
        </button>
      </form>
    </div>
    <transition-group name="list" tag="ul">
      <ToDo
        v-for="item in todo_items"
        v-bind:key="`td-${item.id}`"
        :todoData="item"
        :fetchTodos="fetchTodos"
      />
    </transition-group>
  </PageWrapper>
</template>

<script>
import styled from 'vue-styled-components'
import { H1 } from '@/styles/components'
import { colors, shared, spacing } from '@/styles/theme'
import * as _ from '@/styles/mixins'
import ToDo from './ToDo'
import axios from 'axios'

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  ul {
    ${_.flexColumn};
  }
  #title-wrapper {
    padding: ${spacing.single_pad};
  }
  #form-wrapper {
    ${_.flexRowCenteredVert};
    h1 {
      display: flex;
      white-space: nowrap;
      margin-right: ${spacing.double_pad};
    }
    border-bottom: 1px dashed ${colors.green};
    padding: ${spacing.double_pad} ${spacing.single_pad};
    background-color: #ffcfc4;
    form {
      padding: ${spacing.micro_pad} 0;
      width: 100%;
      ${_.flexRow};
      justify-content: space-between;
    }
  }
`

export default {
  components: {
    H1,
    PageWrapper,
    ToDo
  },
  data () {
    return {
      todo_items: false,
      todo_item: '',
      output: ''
    }
  },
  methods: {
    formSubmit(e) {
      e.preventDefault()
      let currentObj = this
      if (this.todo_item !== '') {
        axios.post('/api/todos', {
          todo_item: this.todo_item
        })
        .then(function (response) {
          currentObj.output = response.data
          currentObj.fetchTodos()
        })
        .catch(function (error) {
          currentObj.output = error
        })
      } else {
        currentObj.output = "Oops - Enter something with words in it!"
      }
      this.todo_item = ''
    },
    fetchTodos() {
      axios
        .get('/api/todos')
        .then(response => (this.todo_items = response.data.todos))
    }
  },
  mounted () {
    this.fetchTodos()
  }
}
</script>