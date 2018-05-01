// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import SongList from './components/songs/list'
import Lyrics from './components/songs/lyrics'

Vue.config.productionTip = false
Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'SongList',
    component: SongList
  }, {
    path: '/:songId',
    name: 'Lyrics',
    component: Lyrics
  }]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
