<template>
    <div class="ali-pay">
        <loading v-if="loading"></loading>
        <div class="form" v-html="content"></div>
    </div>
</template>
<script>
import Loading from './../components/Loading.vue'
export default {
    name:'aliPay',
    components:{
        Loading
    },
    data(){
        return{
            orderId:this.$route.query.orderNo,
            content:'',
            loading:true
        }
    },
    mounted(){

    },
    methods:{
        paySubmit(){
            
            // setTimeout(()=>{
                // document.forms[0].submit();
            // },100)
        }
    }
}
</script>