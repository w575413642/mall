<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" class="boxScroll" infinite-scroll-distance="5">
    <van-search v-model="search" placeholder="请输入搜索关键词" show-action />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="img in picture" :key="img.id">
        <a :href="img.href">
          <img :src="img.img" :alt="img.title">
        </a>
      </van-swipe-item>
    </van-swipe>
    <ul class="list">
      <li :style="[{width:(100/list.length) - 10 + '%'}]" v-for="ins in list" :key="ins.id">
        <a :href="ins.href">
          <img :src="ins.icon" :alt="ins.name">
          <p>{{ins.name}}</p>
        </a>
      </li>
    </ul>
    <div class="centerGray"></div>
    <div class="hotRecommend">
      <div class="title">
        <b>热门推荐</b>
        <span>更多></span>
      </div>
      <div class="lineGary"></div>
      <van-swipe :autoplay="3000">
        <van-swipe-item style="overflow: hidden;" :show-indicators="indicators" v-for="(commodity,index) in recommendCommodity"
          :key="index">
          <div class="recommendCommodity" :style="[{width:(100/commodity.length) - 10 + '%'}]" v-for="ins in commodity"
            :key="ins.id">
            <img :src="ins.img" :alt="ins.name">
            <p>{{ins.description}}</p>
            <span>￥{{ins.price}}</span>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="centerGray"></div>
    <div class="hotRecommend">
      <div class="title">
        <b>新品推荐</b>
        <span>更多></span>
      </div>
      <div class="lineGary"></div>
      <!-- arrivals -->
      <ul>
        <li class="arrivals" :style="[{width:'50%'},{float:'left'},]" v-for="item in arrivals" :key="item.id">
          <img :src="item.img" alt="">
          <p>{{item.description}}</p>
          <span>￥{{item.price}}</span>
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
  import {
    Waterfall
  } from 'vant';
  export default {
    name: "homePage",
    data() {
      return {
        search: '',
        picture: [],
        list: [],
        recommendCommodity: [],
        indicators: true,
        arrivals: [],
        disabled: true,
        waterfall: {
          page: 0,
          pageSize: 12
        },
        load: "没有更多了",
        switchLoad: true,
        active: 0
      }
    },
    mounted() {
      this.grab()
    },
    directives: {
      WaterfallLower: Waterfall('lower'),
      WaterfallUpper: Waterfall('upper')
    },
    methods: {
      // Grab pictures
      grab() {
        // pictures
        this.$store.dispatch("getCommonPicture").then(s => {
          if (s.code != 1) {

          } else {
            this.picture = s.data.pictures
          }
        })
        // list
        this.$store.dispatch("getCommonList").then(s => {
          if (s.code != 1) {} else {
            this.list = s.data.list
          }
        })
        this.$store.dispatch("getCommonCommodity").then(s => {
          if (s.code != 1) {} else {
            this.recommendCommodity = s.data.commodity
          }
        })
        // this.$store.dispatch("arrivalsCommodity", { ...this.waterfall
        // }).then(s => {
        //   if (s.code != 1) {} else {
        //     this.arrivals = s.data
        //   }
        // })
      },
      // waterfall flow
      loadMore() {
        if (!this.switchLoad) return
        this.waterfall.page++
        this.disabled = true;
        this.$store.dispatch("arrivalsCommodity", { ...this.waterfall
        }).then(s => {
          console.log(s)
          if (s.code != 1) {} else {
            if (s.data.length == 0) {
              this.switchLoad = false
            }
            this.arrivals = [...this.arrivals, ...s.data]
          }
        })
      }
    }
  }

</script>
<style>
  /* .topSearch {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 999;
  } */
  img {
    width: 100%;
  }

  .list {
    width: 90%;
    overflow: hidden;
    margin: auto;
    margin-top: 15px;
  }

  .list li {
    margin: 0px 5%;
    float: left;
  }

  .list li p {
    margin: 4px 0px 10px;
    color: black;
  }

  .centerGray {
    height: 10px;
    border-top: #eeeeee;
    border-bottom: #eeeeee;
    background: #f3f5f7;
    width: 100%;
  }

  .lineGary {
    height: 1px;
    background: #dcdcdc;
    width: 100%;
  }

  .hotRecommend {
    width: 100%;
    margin: auto;
    margin-top: 10px;
    overflow: hidden;
  }

  .hotRecommend .title {
    width: 90%;
    margin: auto;
    overflow: hidden;
    padding-bottom: 12px;
  }

  .hotRecommend b {
    float: left;
  }

  .hotRecommend span {
    float: right;
  }

  .recommendCommodity {
    float: left;
    margin: 10px 5% 0px;
    padding-bottom: 16px;
  }

  .recommendCommodity p {
    font-size: 12px;
    text-align: left;
  }

  .recommendCommodity span {
    float: left;
    line-height: 30px;
    font-size: 13px;
    color: red;
  }

  .arrivals {
    border: 1px solid #f5f5f5;
    box-sizing: border-box;
  }

  .arrivals p {
    font-size: 14px;
    width: 90%;
    margin: auto;
    text-align: left;
  }

  .arrivals span {
    float: left;
    width: 90%;
    display: block;
    text-align: left;
    margin-left: 4.5%;
    line-height: 30px;
    font-size: 16px;
    color: red;
  }

  .boxScroll {
    overflow: hidden;
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

  .warrp {
    /* margin-top: 45px; */
  }

  .showBox {
    float: left;
  }

  .commodity {
    width: 90%;
    margin: auto;
  }

  .commodity p {
    font-size: 12px;
  }

</style>
