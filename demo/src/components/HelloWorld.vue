<template>
  <div class="">
    <h1>{{demonum}}</h1>
    <button type="button" name="button" @click="change">改变状态后刷新</button>
    <button type="button" name="button" onClick='localStorage.clear();'>清空localstorage后在刷新</button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  computed: {
    demonum () {
      return this.$store.state.count
    }
  },
  methods: {
    change () {
      this.$store.commit('increment')
    }
  }
}
</script>

<style scoped>

</style>
