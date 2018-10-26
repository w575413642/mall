<template>
  <div class="pay">
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow />
    <div class="address" @click="show = true">
      <van-row>
        <van-col span="3">
          <img style="margin-top: 16px;" src="@/assets/address.png" alt="">
        </van-col>
        <van-col class="userInfo" offset="1" span="17">
          <p class="user"><span>收货人：{{defaultInfo.name}}</span> <span>电话：{{defaultInfo.phone}}</span></p>
          <p class="addressMsg">收货地址：{{defaultInfo.address}}</p>
        </van-col>
        <van-col span="3">
          <p style="margin-top: 24px;">></p>
        </van-col>
      </van-row>
    </div>
    <div class="centerGray"></div>
    <div class="order">
      <div v-for="items in productShopping.toPay" :key="items.name">
        <div class="title"><i class="store_icon iconfont icon-shangcheng" style="margin-right: 10px;"></i>{{items.name}}</div>
        <van-card v-for="ins in items.data" :key="ins.id" :num="ins.number" :price="ins.price" :desc="ins.description"
          :title="ins.name" :thumb="ins.img" />
        <div class="centerGray"></div>
      </div>
    </div>
    <van-actionsheet v-model="show" title="更换地址">
      <div class="changeAddress" @click="replaceAddress({name:123,phone:123,address:123})" v-for="(item,index) in [1,2,3,11,22,33,14,25,36,17,28,39,40]"
        :key="index">
        <div>
          <p>收货人：{{defaultInfo.name +item}}</p>
          <p>电话：{{defaultInfo.phone}}</p>
        </div>
        <p class="address">收货地址：{{defaultInfo.address}}</p>
      </div>
    </van-actionsheet>
  </div>
</template>
<script>
  import {
    mapGetters
  } from "vuex";

  export default {
    name: "pay",
    data() {
      return {
        defaultInfo: {},
        show: false
      }
    },
    mounted() {
      this.getUserInfo();
      console.log(this.productShopping)
    },
    computed: {
      ...mapGetters(["productShopping"])
    },
    methods: {
      replaceAddress(s) {
        this.show = false;
        this.defaultInfo = s;
        this.$toast('地址更换成功！');
      },
      getUserInfo() {
        this.$store.dispatch("defaultUserInfo").then(s => {
          this.defaultInfo = s.data.default
        })
      }
    }
  }

</script>
<style>
*{
  margin: 0px;
  padding: 0px;
}
  .button {
    position: absolute;
    top: 0px;
    right: 0px;
    background: #f44;
    color: white;
    border-radius: 3px;
  }

  .address {
    padding: 18px 0px;
    border-top: 1px solid #f5f5f5;
    background: #fff url(../../assets/abbress.png) left bottom repeat-x;
    background-size: auto 2px;
  }

  .address img {
    width: 80%;
    margin-left: 15%;
  }

  .address .userInfo {
    text-align: left;
  }

  .address .user {
    font-size: 13px;
    line-height: 28px;
  }

  .address .user span:nth-child(2) {
    float: right;
  }

  .address .addressMsg {
    font-size: 12px;
    line-height: 19px;
    color: #7a7a7a;
  }

  .centerGray {
    height: 10px;
    border-top: #eeeeee;
    border-bottom: #eeeeee;
    background: #f3f5f7;
    width: 100%;
    box-shadow: inset 0px 0px 4px 1px #e2e2e2;
  }

  .changeAddress {
    font-size: 14px;
    text-align: left;
    line-height: 27px;
    width: 90%;
    margin: auto;
  }

  .changeAddress div {
    overflow: hidden;
  }

  .changeAddress div p {
    line-height: 45px;
    float: left;
  }

  .changeAddress div p:nth-child(2) {
    float: right;
  }

  .order .title {
    line-height: 20px;
    box-shadow: 1px 1px 4px 1px #dcdcdc;
    text-align: left;
    text-indent: 2em;
    margin-bottom: 12px;
    font-size: 14px;
  }
  .order .title i{
    font-size: 20px;
    line-height: 55px;
  }
</style>
