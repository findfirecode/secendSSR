<template>
  <div class="home">
    <p>欢迎来到我的ssr</p>
    <div v-for="(item, index) in infoList" :key="index">
      <img :src="item.img" alt="">
      <p>{{item.title}}</p>
      <p>{{item.sale}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  // data() {
  //   return {
  //     xList: []
  //   }
  // },
  asyncData ({ store }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchList')
  },
  //  mounted() {
  //   this.$store.dispatch('fetchList')
  // },
  computed: {
    infoList() {
      return this.$store.state.listinfo
    }
  },
};
</script>
<style type="text/css">
  p {
    font-size: 20px;
    text-align: center;
  }
</style>
