<template>
  <div class="product" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="5">
    <van-actionsheet v-model="setting" title="筛选查找">
      <p>各种设置</p>
      <p>各种设置</p>
      <p>各种设置</p>
      <p>各种设置</p>
      <p>各种设置</p>
      <p>各种设置</p>
      <p>各种设置</p>
      <p>各种设置</p>
      <p>各种设置</p>
      <p>各种设置</p>
      <p>各种设置</p>
    </van-actionsheet>
    <van-nav-bar title="标题" left-text="首页" right-text="注册" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <van-row class="setting">
      <van-col span="8">销量优先</van-col>
      <van-col span="8">新品由高到低</van-col>
      <van-col span="8">
        <div @click="open">
          筛选
        </div>
      </van-col>
    </van-row>
    <div class="content">
      <ul>
        <li class="productBox" v-for="item in product" :key="item.id+Math.random()">
          <van-row class="productLine">
            <van-col span="6">
              <img :src="item.img" alt="">
            </van-col>
            <van-col offset="1" span="16">
              <p class="name">{{item.name}}</p>
              <p class="description">{{item.description}}</p>
              <span class="price">￥{{item.price}}</span>
              <van-row class="msg">
                <van-col span="8">{{['免运费','不免运费'][item.freight]}}</van-col>
                <van-col span="8">{{item.payment}}人付款</van-col>
                <van-col span="8">{{item.address}}</van-col>
              </van-row>
            </van-col>
          </van-row>
        </li>
      </ul>
    </div>
    <div class="loading">
      <van-loading v-if="switchLoad" class="loadingCs" type="spinner" />
      <p v-else>{{load}}</p>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">标签</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    name: "product",
    data() {
      return {
        value14: '1231232131',
        form: {},
        setting: false,
        page: {
          page: 0,
          pageSize: 12
        },
        switchLoad: true,
        load: "没有更多了",
        disabled: false,
        product: [],
        active: 0
      }
    },
    mounted() {},
    methods: {
      loadMore() {
        if (!this.switchLoad) return
        this.page.page++
        this.disabled = true;
        this.$store.dispatch("ProductInfo", { ...this.page
        }).then(s => {
          if (s.code != 1) {} else {
            if (s.data.length == 0) {
              this.switchLoad = false
            }
            this.product = [...this.product, ...s.data]
          }
        })
      },
      open() {
        this.setting = true
      },
      onClick(index, title) {
        // this.$toast(title);
      },
      login() {
        this.$store.dispatch("loginInfo", { ...this.form
        }).then(s => {
          if (s.code != 1) {

          } else {
            this.$router.push({
              path: "/"
            });
          }
        })
      },

      onClickLeft() {},
      onClickRight() {},
      tag(s) {
        this.activeKey = s
      }
    }
  }

</script>
<style>
  .van-col {
    border-left: 1px solid #ececec;
    font-size: 12px;
    line-height: 38px;
    border-bottom: 1px solid #ececec;
  }

  .van-col:nth-child(1) {
    border-left: 0px;
  }

  .content {
    background: #f3f5f7;
  }

  .loading {
    height: 50px;
    line-height: 50px;
    background: #a7a7a7;
    color: white;
    font-size: 14px;
    overflow: hidden;
    box-shadow: inset 0px 0px 15px 5px #929292;
    margin-bottom: 46px;
  }

  .loadingCs {
    margin: auto;
    margin-top: 10px;
    display: block;
  }

  .productBox {
    width: 100%;
    overflow: hidden;
  }

  .productBox .van-col {
    border: 0px;
  }

  .productBox img {
    width: 95%;
    margin: auto;
    display: block;
  }

  .productBox p,
  .productBox span {
    text-align: left;
    line-height: 20px;
  }

  .productBox span {
    text-align: left;
    display: block;
    color: #eb5211;
  }

  .loading p {
    line-height: 50px;
    text-align: center;
  }

  .productBox .description {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .productBox .productLine {
    border-bottom: 1px solid #dcdcdc;
    padding: 10px 0px;
  }

  .productBox .productLine .msg .van-col {
    line-height: 20px;
    text-align: left;
    color: #929292;
  }

</style>
