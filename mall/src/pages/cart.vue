<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1"><span class="checkbox" v-bind:class="{'checked':allChecked}" @click="toggleAll()"></span>全选</li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item" 
                v-for="item in list" 
                :key="item.id"
            >
              <div class="item-check">
                <span class="checkbox" :class="{'checked':item.productSelected}" @click="selectPhone(item)"></span>
              </div>
              <div class="item-name">
                <img src="/imgs/item-box-2.png" alt="">
                <span>{{item.productName}} {{item.productSubtitle}} </span>
              </div>
              <div class="item-price">{{item.productPrice}}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart(item,'-')">-</a>
                  <span>{{item.quantity}}</span>
                  <a href="javascript:;" @click="updateCart(item,'+')">+</a>
                </div>
              </div>
              <div class="item-total">{{item.productPrice * item.quantity | currency}}</div>
              <div class="item-del" @click="delProduct(item.id)"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/">继续购物</a>
            共<span>{{list.length}}</span>件商品，已选择<span>{{checkedNum}}</span>件
          </div>
          <div class="total fr">
            合计：<span>{{totalPrice | currency}}</span>
            <a href="javascript:;" class="btn" @click="checkout">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import { Message } from 'element-ui'
import OrderHeader from './../components/OrderHeader'
import ServiceBar from './../components/ServiceBar'
import NavFooter from './../components/NavFooter'
export default {
   name:'index',
    components:{
      OrderHeader,
      ServiceBar,
      NavFooter
    },
    data(){
      return {
        list:[],//商品列表
        cartTotalPrice:0,//商品总金额
        checkedNum:0//选中商品数量
      }
    },
    filters:{
        currency(value){
        if(!value)return 0.00;
        return '￥' + value.toFixed(2) + '元'
        }//a*1
    },
    computed:{
        //计算总金额
        totalPrice(){
            let money = 0;
            this.list.forEach((item)=>{
                if(item.productSelected){
                    money += item.productPrice*item.quantity
                }
            })
            return money
        },
        allChecked(){
            return this.list.every((item)=>{
                return item.productSelected == true
            })
        }
    },
    methods:{
        delProduct(id){
            this.list.forEach((item, index)=>{
                if (item.id == id){
                    this.list.splice(index,1);
                }
            })
        },
        checkout(){
            this.$router.push('/order/confirm')
        },
        updateCart(item,type){
            if(type == '-'){
                if(item.quantity == 1){
                    Message.warning("商品至少保留一件")
                    return
                }
                item.quantity--;
            }else{
                if(item.quantity >=item.productStock){
                    alert("商品不能大于库存数量")
                    return
                }
                item.quantity++;
            }
            console.log(item.quantity)
        },
        getCartList(){
            this.axios.get('/api/carts').then((res)=>{
                this.list = res.cartProductVoList || [];
                this.cartTotalPrice = res.cartTotalPrice;
                this.checkedNum = this.list.filter((item)=>{
                    if(item.productSelected == true){
                        return true
                    }
                }).length
            })
        },
        selectPhone(item){
            item.productSelected = !item.productSelected
            this.checkedNum = this.list.filter((item)=>{
                if(item.productSelected == true){
                    return true
                }
            }).length
        },
        toggleAll(){
            if(this.allChecked){
                this.list.forEach(element => {
                    element.productSelected = false
                });
                this.allChecked = false
            }else{
                this.list.forEach(element => {
                    element.productSelected = true
                });
                this.allChecked = true
            }
            this.checkedNum = this.list.filter((item)=>{
                if(item.productSelected == true){
                    return true
                }
            }).length
        }
    },
    mounted(){
      this.getCartList();
    }
}
</script>
<style lang="scss">
  .cart{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:114px;
      .cart-box{
        background-color:#fff;
        font-size:14px;
        color:#999999;
        text-align:center;
        .checkbox{
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid #E5E5E5;
          vertical-align: middle;
          margin-right: 17px;
          cursor:pointer;
          &.checked{
            background:url('/imgs/icon-gou.png') #FF6600 no-repeat center;
            background-size:16px 12px;
            border:none;
          }
        }
        .cart-item-head{
          display:flex;
          height: 79px;
          line-height: 79px;
          .col-1{
            flex:1;
          }
          .col-2{
            flex:2;
          }
          .col-3{
            flex:3;
          }
        }
        .cart-item-list{
          .cart-item{
            display:flex;
            align-items:center;
            height:125px;
            border-top:1px solid #E5E5E5;
            font-size:16px;
            .item-check{
              flex:1;
            }
            .item-name{
              flex:3;
              font-size: 18px;
              color: #333333;
              display: flex;
              align-items: center;
              img{
                width:80px;
                height:80px;
                vertical-align:middle;
              }
              span{
                margin-left: 30px;
              }
            }
            .item-price{
              flex:1;
              color:#333333;
            }
            .item-num{
              flex:2;
              .num-box{
                display:inline-block;
                width:150px;
                height:40px;
                line-height:40px;
                border:1px solid #E5E5E5;
                font-size:14px;
                a{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                }
                span{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                }
              }
            }
            .item-total{
              flex:1;
              color:#FF6600;
            }
            .item-del{
              flex:1;
              width:14px;
              height:12px;
              background:url('/imgs/icon-close.png') no-repeat center;
              background-size:contain;
              cursor:pointer;
            }
          }
        }
      }
      .order-wrap{
        font-size:14px;
        color: #666666;
        margin-top: 20px;
        height: 50px;
        line-height: 50px;
        .cart-tip{
          margin-left: 29px;
          a{
            color: #666666;
            margin-right:37px;
          }
          span{
            color:#FF6600;
            margin:0 5px;
          }
        }
        .total{
          font-size:14px;
          color:#FF6600;
          span{
            font-size:24px;
          }
          a{
            width:202px;
            height:50px;
            line-height:50px;
            font-size:18px;
            margin-left:37px;
          }
        }
      }
    }
  }
</style>