import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import VueCookie from 'vue-cookie'
import store from './store'
import { Message } from 'element-ui'
// import env from './env'
//根据前端的跨域方式做调整 /a/b
// /api/a/b => /a/b

//mock开关
const mock = true;
if (mock){
  require('./mock/api')
}
// axios.defaults.baseURL = '/api'; 
axios.defaults.timeout = 8000;
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
// let path = location.hash 
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0) {
    return res.data
  }else if(res.status == 10){
    window.location.href = '/#/login'
    return Promise.reject();
  }else{
    console.log("status 0")
    Message.warning("err")
    return Promise.reject();
  }
},(error)=>{
  let res = error.response;
  console.log(res)
  return Promise.reject(error);
})

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading:'/imgs/loading-svg/loading-bars.svg'
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
