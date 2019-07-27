import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.min.js'
Vue.use(Vant)

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  // ...
  state: {
    count: 100
  },
  mutations: {
    add (state, newnum) {
      console.log(newnum)
      state.count = newnum
    }
  },
  actions: {
    abc (store) {
      console.log(11)
      setTimeout(() => {
        const newnum = 500
        store.commit('add', newnum)
      }, 1000)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
