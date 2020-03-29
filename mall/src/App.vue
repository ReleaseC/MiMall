<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      res:{}
    }
  },
  mounted(){
    //给默认值
    this.axios.get('/api/products').then((res={})=>{
      this.res = res;
      console.log("res",this.res)
    })
  },
  methods:{
    getUser(){
      // this.axios.get()
      //保存到vuex里面
    },
    getCartCount(){

    }
  }
}
</script>

<style lang="scss">
@import './assets/resource/reset.scss';
@import './assets/resource/config.scss';
@import './assets/resource/button.scss';
@import './assets/resource/base.scss';
</style>
