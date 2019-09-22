import createApp from './main'
import Vue from 'vue'

// Vue.mixin({
//   beforeRouteUpdate(to, from, next) {
//     const {asyncData} = this.$options
//     if (asyncData) {
//       asyncData({
//         store: this.$store,
//         router: to
//       })
//     }
//   }
// })
const { app, router, store } = createApp()

if (window.__INITIAL_STATE__)  {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const preMatched = router.getMatchedComponents(from)

    let diff = false
    const  activated = matched.filter((c,i) => diff || (diff = (preMatched[i] !== c)))

    if (!activated.length) {
      return next()
    }

    Promise.all((activated.map((c) => {
      if (c.asyncData) {
        return c.asyncData({ store, route: to })
      }
    })).then(() => {
      // 停止加载指示器(loading indicator)
      next()
    }).catch(next)
    app.$mount('#app')
  })
})
