import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(Vuelidate)

Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  validations:{},
  render: h => h(App),
}).$mount('#app')
