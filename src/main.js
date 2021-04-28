import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  validations:{},
  render: h => h(App),
}).$mount('#app')
