<template>
    <div class="nav-bar" :class="{'is_fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
                小米8
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-bar',
    data(){
        return {
            isFixed: false
        }
    },
    mounted(){
        window.addEventListener('scroll', this.initHeight)
    },
    methods:{
        initHeight(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; 
            this.isFixed = scrollTop > 152 ? true: false;
        }
    },
    destroyed(){
        window.removeEventListener('scroll', this.initHeight,false)
    }
}
</script>
<style lang="scss">
    @import './../assets/resource/config.scss';
    @import './../assets/resource/mixin.scss';
    .nav-bar{
        height:70px;
        line-height: 70px;
        border-top: 1px solid $colorH;
        z-index: 10;
        &.is_fixed{
            position: fixed;
            top: 0;
            width: 100%;
            background: #ffffff;
            box-shadow: 0 3px 3px #cccccc;
        }
        .container{
            @include flex();
            .pro-title{
                font-size: $fontH;
                color:$colorB;
                font-weight: bold;
            }
            .pro-param{
                font-size: $fontJ;
                span{
                    margin: 0 10px;
                }
                a{
                    color:$colorC;
                }
            }
        }
    }
</style>