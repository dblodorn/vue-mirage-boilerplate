<template>
  <div>
    <StyledTitle>TODO'S</StyledTitle>
    <ul>
      <li v-for="item in users" v-bind:key="`user-${item.id}`">
        <span>{{item.name}}: {{item.id}}</span>
      </li>
    </ul>
    <data>{{user}}</data>
  </div>
</template>

<script>
import { StyledTitle } from '@/styles/components'
import axios from 'axios'

export default {
  components: {
    StyledTitle
  },
  data () {
    return {
      users: false,
      user: false
    }
  },
  mounted () {
    axios
      .get('/api/users')
      .then(response => (this.users = response.data.users))
    
    axios
      .get('/api/users/1')
      .then(response => (this.user = response))
  }
}
</script>