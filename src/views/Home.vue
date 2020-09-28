<template>
  <div id="app">
    <input v-model="message" />
    <button v-on:click="reverseMessage">Reverse Message</button>
    <ul>
      <todo-item
        v-for="todo in todos"
        v-bind:key="todo.id"
        v-bind:item="todo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem'

export default {
  components: {
    'todo-item': TodoItem,
  },
  data() {
    return {
      message: 'Hello Vue.js!',
      todos: [
        { id: '1', text: 'Learn JavaScript' },
        { id: '2', text: 'Learn Vue' },
        { id: '3', text: 'Build something awesome' },
      ],
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
