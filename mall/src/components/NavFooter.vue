<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="" target="_blank">我的主页</a><span>|</span>
            <a href="" target="_blank">这是脚本</a><span>|</span>
            <a href="" target="_blank">这是消息,支付相关信息</a><span>|</span>
            <a href="" target="_blank">这是支付</a><span>|</span>
        </div>
        <div class="copyright">CopyRight@2019 <span class="domain">www.baidu.com</span> All Right Reserverd</div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss">
    .footer{
        height: 234px;
        border-top:4px solid #ff6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top:46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }
            margin-bottom: 13px
        }
        .copyright{
            .domain{
                color: #ff6600;
            }
        }
    }
</style>