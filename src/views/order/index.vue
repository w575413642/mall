<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow />
    <div class="status">
      <div class="info">
        <p>卖家已发货</p>
        <p>还剩9天23时自动确认收货</p>
      </div>
    </div>
    <van-row class="where">
      <van-col span="5" class="icons">icon</van-col>
      <van-col span="19" class="msg">
        <p>卖家发货</p>
        <p>2018-10-25 15:34:36</p>
      </van-col>
    </van-row>
    <van-row class="people">
      <van-col span="5" class="icons">icon</van-col>
      <van-col span="19" class="msg">
        <p>收货人：王伟俊</p>
        <p>收货地址：山东省济南市市中区正觉寺小区1区7号楼</p>
      </van-col>
    </van-row>
    <div class="centerGray"></div>
    <div class="producInfo">
      <div class="businessInfo">
        <i class="store_icon iconfont icon-shangcheng"></i>
        <span>&nbsp;静的点点灬</span>&nbsp;&nbsp;>
      </div>
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="'https://demoshop.youpzt.com/uploads/product/2017-01-27/588a21675dd1d.jpg'">
        <div slot="footer">
          <van-button size="mini">退款</van-button>
        </div>
      </van-card>
      <van-card num="6" price="2.00" desc="描述信息" title="商品标题" :thumb="'https://demoshop.youpzt.com/uploads/product/2017-01-27/588a21675dd1d.jpg'">
        <div slot="footer">
          <van-button size="mini">退款</van-button>
        </div>
      </van-card>
    </div>
    <div class="centerGray"></div>
    <div class="producInfo">
      <div class="businessInfo">
        <i class="store_icon iconfont icon-shangcheng"></i>
        <span>&nbsp;静的点点灬</span>&nbsp;&nbsp;>
      </div>
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="'https://demoshop.youpzt.com/uploads/product/2017-01-27/588a21675dd1d.jpg'">
        <div slot="footer">
          <van-button size="mini">退款</van-button>
        </div>
      </van-card>
      <van-card num="6" price="2.00" desc="描述信息" title="商品标题" :thumb="'https://demoshop.youpzt.com/uploads/product/2017-01-27/588a21675dd1d.jpg'">
        <div slot="footer">
          <van-button size="mini">退款</van-button>
        </div>
      </van-card>
    </div>
    <div class="centerGray"></div>
    <div class="orderInfo">
      <p>订单编号：123983271291348712</p>
      <p>交易号：8771231238123123</p>
      <p>创建时间：2018-10-25 15:34:36</p>
      <p>付款时间：2018-10-25 15:34:36</p>
      <p>发货时间：2018-10-25 15:34:36</p>
    </div>
    <van-row class="contact">
      <van-col span="12">
        <p>联系卖家</p>
      </van-col>
      <van-col span="12">
        <p class="right">拨打电话</p>
      </van-col>
    </van-row>

  </div>
</template>
<script>
  export default {
    name: "homePage",
    data() {
      return {
        active: 0,
      }
    },

    mounted() {},
    methods: {

    }
  }

</script>
<style>
  .status {
    background-image: -webkit-linear-gradient(0deg, #ff9000, #ff5100);
  }

  .status .info {
    padding-top: 20px;
    padding-bottom: 20px;
    color: white;
    width: 85%;
    margin: auto;
    text-align: left;
  }

  .status .info p {
    font-size: 13px;
    line-height: 22px;
  }

  .where {
    overflow: hidden;
    padding: 6px 0px;
    border-bottom: 1px solid #f5f5f5;
  }

  .where .icons {
    line-height: 40px;
    color: #3c9e33;
  }

  .where .msg {
    line-height: 20px;
  }

  .where .msg p {
    text-align: left;
  }

  .where .msg p:nth-child(1) {
    color: #3c9e33;
    font-size: 14px
  }

  .where .msg p:nth-child(2) {
    font-size: 12px;
    color: #999;
  }

  .people {
    overflow: hidden;
    padding: 6px 0px;
    border-bottom: 1px solid #f5f5f5;
  }

  .people .icons {
    line-height: 40px;
    color: #3c9e33;
  }

  .people .msg {
    line-height: 20px;
  }

  .people .msg p {
    text-align: left;
  }

  .people .msg p:nth-child(1) {
    color: #3c9e33;
    font-size: 14px
  }

  .people .msg p:nth-child(2) {
    font-size: 12px;
    color: #999;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .centerGray {
    height: 10px;
    border-top: #eeeeee;
    border-bottom: #eeeeee;
    background: #f3f5f7;
    width: 100%;
    box-shadow: inset 0px 0px 4px 1px #e2e2e2;
  }

  .producInfo {
    width: 95%;
    margin: auto;
    padding-bottom: 10px;
  }

  .producInfo .businessInfo {
    overflow: hidden;
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 6px;
  }

  .producInfo .businessInfo {
    line-height: 18px;
    margin-top: 12px;
    font-size: 14px;
    text-align: left;
    text-indent: 0.5em;
  }

  .orderInfo {
    padding: 10px 0px;
    border-bottom: 1px solid #f5f5f5;
  }

  .orderInfo p {
    color: rgb(189, 189, 189);
    font-size: 12px;
    line-height: 18px;
    text-align: left;
    width: 95%;
    margin: auto;
  }

  .contact {
    width: 100%;
    line-height: 50px;
    font-size: 15px;
  }

  .contact p {
    line-height: 50px;
    font-size: 14px;
    color: #636363;
  }

  .contact .right {
    border-left: 1px solid #f5f5f5;
  }

</style>
