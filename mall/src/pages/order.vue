<template>
    <div>
        <order-header v-bind:title="title"></order-header>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import OrderHeader from '../components/OrderHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
    name:'order',
    data(){
        return {
            title:'',
        }
    },
    components:{
        OrderHeader,
        NavFooter,
        ServiceBar
    },
    mounted(){
        let path = this.$route.path;
        if(path == '/order/confirm'){
            this.title = "订单确认"
        }else if(path == "/order/list"){
            this.title = "订单列表"
        }else if(path == '/order/pay'){
            this.title = "支付列表"
        }
    }
}
</script>