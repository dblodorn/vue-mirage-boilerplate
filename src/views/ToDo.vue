<template>
  <TodoWrapper class="list-item">
    <div class="edit-wrapper">
      <transition 
        name="fade"
        mode="out-in"
      >
        <div class="edit-inner" v-if="!edit">
          <label>
            <span>{{todo}}</span>
          </label>
        </div>
      </transition>
      <transition 
        name="fade"
        mode="out-in"
      >
        <div class="edit-inner" v-if="edit">
          <input type="text" v-model="todo">
        </div>
      </transition>
    </div>
    <div class="edit-buttons">
      <button class="edit" @click="editTodo" v-if="!edit"><span>Edit</span></button>
      <button class="edit" @click="updateUser(todoData.id, todo)" v-if="edit"><span>Update</span></button>
      <button @click="deleteUser(todoData.id)"><span>Delete</span></button>
    </div>
  </TodoWrapper>
</template>

<script>
import styled from 'vue-styled-components'
import axios from 'axios'
import * as _ from '@/styles/mixins'
import { colors, shared, spacing } from '@/styles/theme'
import chroma from 'chroma-js'

const TodoWrapper = styled.li`
  ${_.flexRow};
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: ${spacing.double_pad} ${spacing.single_pad};
  transition: all 350ms;
  &.list-enter,
  &.list-leave-to {
    opacity: 0;
    transform: translateY(-1rem);
  }
  &:nth-child(odd) {
    background-color: ${chroma(colors.green).brighten(1.5)};
  }
  &:nth-child(even) {
    background-color: ${chroma(colors.green).brighten(2)};
  }
  border-bottom: 1px dashed ${colors.green};
  label {
    ${_.mediumType};
    height: 100%;
    ${_.flexRowCenteredVert};
    margin-right: ${spacing.micro_pad};
    color: ${colors.blue};
  }
  .edit-wrapper {
    position: relative;
    width: 100%;
    display: flex;
  }
  .edit-inner {
    transition: all 350ms;
    ${_.flexRow};
    position: absolute;
    width: 100%;
    will-change: all;
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
      transform: translateX(-25rem);
    }
  }
  .edit-buttons {
    ${_.flexRow};
  }
  .edit {
    margin-right: ${spacing.single_pad};
  }
`

export default {
  props: [
    'todoData',
    'fetchTodos'
  ],
  components: {
    TodoWrapper
  },
  data () {
    return {
      todo: this.todoData.todo_item,
      edit: false
    }
  },
  methods: {
    editTodo() {
      this.edit = !this.edit
    },
    deleteUser(id) {
      axios
        .delete(`/api/todos/${id}`)
        .then(
          this.fetchTodos()
        )
    },
    updateUser(id, todo) {
      this.edit = !this.edit
      axios
        .patch(`/api/todos/${id}`, {
          'todo_item': todo
        })
        .then(
          this.fetchTodos()
        )
    }
  }
}
</script>