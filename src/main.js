// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import createregistration from '@/components/CreateRegistration'
import pastregistration from '@/components/PastRegistration'
import dynamicform from '@/components/DynamicForm'
import BootstrapVue from 'bootstrap-vue'
import vueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material/dist/vue-material.css'

var VueMaterial = require('vue-material')

Vue.use(VueMaterial)

Vue.use(BootstrapVue)
Vue.use(vueResource)

Vue.use(require('vue-moment'))

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.component('Create-Registration', createregistration)
Vue.component('Past-Registration', pastregistration)
Vue.component('dynamic-form', dynamicform)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
