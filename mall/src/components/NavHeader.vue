<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart()"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>红米手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product" 
                                    v-for="item in phoneList" 
                                    :key="item.id"
                                >
                                    <a v-bind:href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                             
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-header',
    data(){
        return{
            phoneList:[]
        }
    },
    computed:{
        username(){
            return this.$store.state.username
        }
    },
    mounted(){
        this.getProductList();
    },
    filters:{
        currency(val){
            if(!val)return '0.00'
            return '￥' + val.toFixed(2) +'元';
        }
    },
    methods:{
        login(){
            this.$router.push('/login')
        },
        getProductList(){
            this.axios.get('/api/products',
            {
                params:{
                    categoryId:'10012',
                    pageSize:6,
                }
            }
            ).then((res)=>{
                if(res.list.length>=6){
                    this.phoneList = res.list.slice(0,6)
                    console.log("photolist",this.phoneList)
                }
            })
        },
        goToCart(){
            this.$router.push('/cart');
            //go to cart
        }
    }
}
</script>
<style lang="scss">
    @import '../assets/resource/base.scss';
    @import '../assets/resource/mixin.scss';
    @import '../assets/resource/config.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #b0b0b0;
            .container{
                @include flex();
                a{
                    display: inline-block;
                    color: #b0b0b0;
                    margin-right: 17px;
                }
                .my-cart{
                    width: 110px;
                    background-color: #ff6600;
                    text-align: center;
                    color: #ffffff;
                    margin-right: 0;
                    .icon-cart{
                        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header{
            .container{
                height: 112px;
                position: relative;
                @include flex();
                
                .header-menu{
                    width: 643px;
                    display: inline-block;
                    padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            color:$colorA;
                            .children{
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        .children{
                            z-index: 10;
                            background: white;
                            position: absolute;
                            top:112px;
                            left: 0;
                            width: 1226px;
                            height: 0px;
                            opacity: 0;
                            transition:all .5s;
                            overflow: hidden;
                            border-top:1px solid #e5e5e5e5;
                            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                            .product{
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                position: relative;
                                &:before{
                                    content: ' ';
                                    position: absolute;
                                    top:28px;
                                    right: 0;
                                    border-left:1px solid $colorF;
                                    height: 100px;
                                    width: 1px;
                                }
                                &:last-child:before{
                                    display: none;
                                }
                                a{
                                    display: inline-block;
                                }
                                img{
                                    height: 110px;
                                    width: auto;
                                    margin-top: 26px;
                                }
                                .pro-img{
                                    height: 137px;
                                }
                                .pro-name{
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                }
                                .pro-price{
                                    color:#ff6600
                                }
                            }

                        }
                    }
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border:1px solid #E0E0E0;
                        display: flex;
                        align-items: center;
                        input{
                            box-sizing: border-box;
                            border: none;
                            border-right: 1px solid #E0E0E0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a{  
                            @include bgImg(18px,18px,'/imgs/icon-search.png');
                            margin-left: 14px;
                        }
                    }
                }
            }
        }
    }
</style>