<template>
  <div>
    <div class="header">
      <van-row>
        <van-col span="8">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
            alt="">
        </van-col>
        <van-col span="16">
          <ul class="userMsg">
            <li>
              <van-tag :type="type">未实名</van-tag><span style="margin-left: 6px;;">{{self.name}}</span>
            </li>
            <li>手机号已绑定：{{self.phone}}</li>
            <li>
              <van-tag type="success">{{self.type}}</van-tag><span style="margin-left: 6px;;">分享人：{{self.share}}</span>
            </li>
          </ul>
        </van-col>
      </van-row>
      <div class="userAccount">
        <div :style="[{width:(100/account.length) - 5 + '%'}]" v-for="item in account" :key="item.name">
          <p>{{item.number}} {{item.company}}</p>
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="operation">
      <div class="order">
        <div class="searchOrder">
          <b>全部订单</b>
          <span>查看更多订单 ></span>
        </div>
        <div class="lineGary"></div>
        <ul class="process">
          <li :style="[{width:(100/processInfos.length) - 6 + '%'}]" v-for="item in processInfos" :key="item.icon">
            <van-tag class="tag" round type="danger">{{item.info}}</van-tag>
            <i :class="['iconfont', 'icon', `icon-${item.icon}`]" style="font-size:36px; color: #dcdcdc;"></i>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      <div class="centerGray"></div>
      <div class="menu">
        <href-line :icon="base.icon" :text="base.text" :info="base.info" :border="base.border"></href-line>
        <href-line :icon="base.icon" :text="base.text" :info="base.info" :border="base.border"></href-line>
        <href-line :icon="base.icon" :text="base.text" :info="base.info" :border="base.border"></href-line>
        <href-line :icon="base.icon" :text="base.text" :info="base.info"></href-line>
      </div>
      <div class="centerGray"></div>
    </div>
  </div>
</template>
<script>
  import hrefLine from '@/components/hrefLine'
  export default {
    name: "homePage",
    data() {
      return {
        type: "",
        self: {},
        account: [],
        active: -1,
        processInfos: [],
        base: {
          icon: "shoucang",
          text: "收藏管理",
          info: "6",
          border: "1px solid #dcdcdc"
        }
      }
    },
    components: {
      hrefLine
    },
    mounted() {
      this.getUserAccount()
    },
    methods: {
      // account info
      getUserAccount() {
        this.$store.dispatch("accountMsg").then(s => {
          this.self = s.data
        })
        this.$store.dispatch("accountInfo").then(s => {
          this.account = s.data.account_info
        })
        this.$store.dispatch("accountProcess").then(s => {
          this.processInfos = s.data.process
        })
      },
    }
  }

</script>
<style>
  img {
    width: 70%;
    display: block;
    margin: 40px auto;
    border-radius: 1000px;
  }

  .header {
    background: url('../../../assets/self.jpg') 100% 100%;
    background-position: center center;
    background-size: cover;
  }

  .header .userMsg {
    margin: 40px 6px;
  }

  .header .userMsg li {
    text-align: left;
    color: white;
    line-height: 27px;
    font-size: 14px;
  }

  .userAccount {
    background: rgba(0, 0, 0, 0.1);
  }

  .userAccount {
    overflow: hidden;
    padding: 5px 0px;
  }

  .userAccount div {
    float: left;
    margin: 10px 2.5%;
  }

  .userAccount div p {
    color: white;
    text-align: center;
    font-size: 14px;
    line-height: 22px;
  }

  .operation {
    overflow: hidden;
  }

  .operation .searchOrder {
    overflow: hidden;
    width: 90%;
    margin: auto;
    line-height: 40px;
  }

  .operation .searchOrder b {
    font-weight: normal;
    float: left;
    font-size: 15px;
  }

  .operation .searchOrder span {
    float: right;
    font-size: 15px;
    color: #b3b3b3;
  }

  .centerGray {
    height: 10px;
    border-top: #eeeeee;
    border-bottom: #eeeeee;
    background: #f3f5f7;
    width: 100%;
    box-shadow: inset 0px 0px 4px 1px #e2e2e2;
  }
 
  .lineGary {
    height: 1px;
    background: #dcdcdc;
    width: 100%;
  }

  .process {
    overflow: hidden;
    padding: 15px 0px 8px;
  }

  .process li {
    float: left;
    position: relative;
    line-height: 40px;
    margin-left: 4.5%;
    text-align: center;
  }

  .process li .tag {
    position: absolute;
    right: 5px;
    top: -5px;
  }

  .process li p {
    line-height: 20px;
    font-size: 14px;
  }

</style>
