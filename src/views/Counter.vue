<template>
  <div id="app">
    <h3>Counter Page</h3>
    <p>{{ count }}</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    },
  },
}
</script>
