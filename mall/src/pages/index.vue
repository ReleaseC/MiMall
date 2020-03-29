<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机电话卡</a>
                            <div class="children">
                                <ul v-for="(item,i) in menuList" v-bind:key="i">
                                    <li v-for="(sub,j) in item" v-bind:key="j">
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                        <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                        {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide 
                        v-for="item in slideList"
                        :key="item.id"
                    >
                        <a v-bind:href="`/#/product/${item.id}`">
                            <img v-bind:src="item.img">
                        </a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a 
                    :href="'/#/product/'+item.id"
                    v-for="(item, index) in adsList" 
                    :key="index">
                    <img v-lazy="item.img" data-img="" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="'/#/product/30'">
                    <img v-lazy="'/imgs/banner-1.png'" alt="">
                </a>
            </div>
        </div>
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35"><img src="/imgs/mix-alpha.jpg"></a>
                    </div>
                    <div class="list-box">
                        <div class="list"
                            v-for="(arr, index) in phoneList"
                            :key="index"
                            >
                            <div class="item"
                                v-for="(item, arr_index) in arr"
                                :key="arr_index"
                            >
                                <span :class="{'new-pro':arr_index%2 ==0}">新品</span>
                                <div class="item-img">
                                    <img v-lazy="'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=250&h=250&f=webp&q=90'" alt="">
                                </div>
                                <div class="item-info">
                                    <h3>{{item.name}}</h3>
                                    <p>{{item.subtitle}}</p>
                                    <p class="price" @click="addCart(item.id)">{{item.price | currency}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <modal 
            title="提示" 
            sureText="查看购物车" 
            btnType="1" 
            modalType="middle"
            :showModal="showModal"
            @submit="goToCart"
            @cancel="showModal = false"
            >
            <template v-slot:body>
                <p>商品添加成功! </p>
            </template>
            </modal>
    </div>
</template>
<script>
import ServiceBar from '../components/ServiceBar.vue'
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import Modal from './../components/Modal.vue'
import 'swiper/css/swiper.css'
export default {
    name:'index',
    data(){
        return{
            showModal:false,
            swiperOptions:{
                autoplay:true,
                loop:true,
                effect:'cube',
                cubeEffect: {
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true
                },
                navigation:{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev'
                }
            },
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'45',
                    img:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:'46',
                    img:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:'47',
                    img:'/imgs/slider/slide-4.jpg'
                }
            ],
            menuList:[
                [
                  {
                      id:30,
                      img:'/imgs/item-box-1.png',
                      name:'小米CC9',
                  }, 
                  {
                      id:31,
                      img:'/imgs/item-box-2.png',
                      name:'小米8',
                  }, 
                  {
                      id:32,
                      img:'/imgs/item-box-3.jpg',
                      name:'Red',
                  }, 
                  {
                      id:33,
                      img:'/imgs/item-box-4.jpg',
                      name:'移动4g',
                  }, 
                ],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
            ],
            adsList:[
                {
                    id:33,
                    img:'/imgs/ads/ads-1.png'      
                },
                {
                    id:48,
                    img:'/imgs/ads/ads-2.jpg'
                },
                {
                    id:45,
                    img:'/imgs/ads/ads-3.png'      
                },
                {
                    id:47,
                    img:'/imgs/ads/ads-4.jpg'      
                }
            ],
            phoneList:[
                [1,1,1,1],
                [1,1,1,1],
            ]
        }
    },
    components:{
        Modal,
        ServiceBar,
        Swiper,
        SwiperSlide
    },
    filters:{
        currency(val){
            if(!val)return '0.00'
            return '￥' + val.toFixed(2) +'元';
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            this.axios.get('/api/products',{
                params:{
                    categoryId:100012,
                    pageSize:8
                }
            }).then((res)=>{
                //splice会分割，slice不会改变原对象
                this.phoneList = [res.list.slice(0, 4),res.list.slice(4, 8)]
            })
        },
        addCart(id){
            console.log(id)
            // this.axios.get()
            this.showModal = true
        },
        goToCart(){
            this.$router.push
        }
    }
}
</script>
<style lang="scss">
    @import './../assets/resource/mixin.scss';
    @import './../assets/resource/config.scss';
    .index{
        .swiper-box{
            .nav-menu{
                position: absolute;
                width: 264px;
                height: 451px;
                z-index: 9;
                padding:26px 0;
                background-color: #55585A7a;
                box-sizing: border-box;
                .menu-wrap{
                    .menu-item{
                        height: 50px;
                        line-height: 50px;
                        a{
                            position: relative;
                            font-size: 16px;
                            color: #ffffff;
                            padding-left:30px;
                            display: block;
                            &:after{
                                position: absolute;
                                right: 30px;
                                top:17.5px;
                                content: ' ';
                                @include bgImg(10px,15px,'/imgs/icon-arrow.png')
                            }
                        }
                        &:hover{
                            background:#ff6600;
                            .children{
                                display: block;
                                opacity: 1;
                            }
                        }
                        .children{
                            display: none;
                            opacity: 0;
                            width: 962px;
                            height: 451px;
                            background-color: #ffffff;
                            position: absolute;
                            top:0;
                            left: 264px;
                            border:1px solid #151515;
                            ul{
                                display: flex;
                                justify-content: space-between;
                                height: 75px;
                                li{
                                    height: 75px;
                                    line-height: 75px;
                                    flex: 1;
                                    padding-left: 23px;
                                }
                                a{
                                    color: #333333;
                                    font-size: 14px;
                                }
                                img{
                                    width: 42px;
                                    height: 35px;
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
                        }
                    }
                }
            }
            .swiper-container{
                height: 451px;
                .swiper-button-prev{
                    left:274px;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .ads-box{
            @include flex();
            margin-top: 14px;
            margin-bottom: 31px;
            a{
                width: 296px;
                height: 167px;

            }
        }
        .banner{
            margin-bottom: 50px;
        }
        .product-box{
            background-color: #f5f5f5;
            padding:30px 0 50px;
            h2{
                font-size: 22px;
                height: 21px;
                line-height: 21px;
                color: #333333;
                margin-bottom: 20px;
            }
            .wrapper{
                display: flex;
                .banner-left{
                    margin-right: 16px;
                    img{
                        width: 224px;
                        height: 619px;
                    }
                }
                .list-box{
                    .list{
                        @include flex();
                        width:986px;
                        margin-bottom: 14px;
                        &:last-child{
                            margin-bottom: 0;
                        }
                        .item{
                            width: 236px;
                            height: 302px;
                            background: #ffffff;
                            text-align: center;
                            span{
                                display: inline-block;
                                width: 67px;
                                height: 24px;
                                font-size: 14px;
                                line-height: 24px;
                                color:white;
                                &.new-pro{
                                    background-color: #7ecf68;
                                }
                                &.kill-pro{
                                    background-color: #e82626;
                                }
                            }
                            .item-img{
                                img{
                                    height: 195px;
                                    width: 100%;
                                }
                            }
                            .item-info{
                                h3{
                                    font-size: $fontJ;
                                    color: $colorB;
                                    line-height: $fontJ;
                                    font-weight: bold;
                                }
                                p{
                                    color:$colorD;
                                    line-height: 13px;
                                    margin:6px auto 13px;
                                }
                                .price{
                                    color: #f20A0A;
                                    font-size: $fontJ;
                                    font-weight: bold;
                                    cursor: pointer;
                                    &:after{
                                        @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                                        content: '';
                                        margin-left: 5px;
                                        vertical-align: middle;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>