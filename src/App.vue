<template>
  <div id="app">
    顶顶顶顶
    <p>{{count}}</p>
    <router-view />
    <van-button type="primary">主要按钮</van-button>
    <input type="button" value="点击" @click="add" />
    <input type="button" value="点击22" @click="abc" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
// import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['count'])
    // count () {
    //   return this.$store.state.count
    // }
  },
  methods: {
    ...mapMutations(['add']),
    // add () {
    //   this.$store.commit('add')
    // }
    ...mapActions(['abc'])
    // abc () {
    //   this.$store.dispatch('abc')
    // }
  }
}
</script>
<style lang="less">
#app{
  width: 375px;
  height: 200px;
  background-color: red;
}
</style>
