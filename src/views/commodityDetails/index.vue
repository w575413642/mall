<template>
  <div>
    <van-nav-bar title="宝贝详情" left-text="返回" left-arrow>
      <div slot="right">
        购物车
      </div>
    </van-nav-bar>
    <div class="details">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="item in detail.topHeaderPicture" :key="item.id">
          <img :src="item.img" :alt="item.title">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="centerGray"></div>
    <div v-if="loadOver" class="productMsg">
      <p class="name">{{detail.name}}</p>
      <div>
        <span class="present">{{detail.price.presentPrice}}￥</span>
        <s class="origin">{{detail.price.originalPrice}}￥</s>
        <span class="sales">销量：{{detail.sales}}{{detail.company}}</span>
      </div>
    </div>
    <div class="centerGray"></div>
    <div class="specifications" @click="open">
      <b style="color: #999;">规格：</b> {{specifications}}
    </div>
    <div class="centerGray"></div>
    <div class="evaluateSize">
      <b style="color: #999;">商品评价 </b><span>{{detail.evaluateSize}} 人评价</span>
    </div>
    <div class="centerGray"></div>
    <div class="detailImg">
      <img v-for="msg in detail.descriptionPicture" :key="msg.id" :src="msg.img" :alt="msg.name">
    </div>
    <!-- operation -->
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickMiniBtn" />
      <van-goods-action-mini-btn icon="cart" text="购物车" info="5" @click="onClickMiniBtn" />
      <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
      <van-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary />
    </van-goods-action>
    <!-- spec -->
    <van-sku v-model="showBase" :sku="product.sku" :goods="product.messages" :goods-id="product.id" :hide-stock="product.hide_stock" :quota="product.quota"
      :quota-used="product.quotaUsed" :custom-stepper-config="product.customStepperConfig" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />
    <div class="last">
      已经到最后了
    </div>
  </div>
</template>
<script>
  export default {
    name: "commodityDetails",
    data() {
      return {
        detail: {},
        loadOver: false,
        specifications: "选择规格",
        showBase: false,
        product: {
          id:123,
          // 限购
          quota:0,
          sku: {
            // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
            // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
            tree: [{
              k: '颜色', // skuKeyName：规格类目名称
              v: [{
                  id: '30349', // skuValueId：规格值 id
                  name: '红色', // skuValueName：规格值名称
                  imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                },
                {
                  id: '1215',
                  name: '蓝色',
                  imgUrl: 'https://img.yzcdn.cn/2.jpg'
                }
              ],
              k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            }],
            // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
            list: [{
              id: 2259, // skuId，下单时后端需要
              price: 100, // 价格（单位分）
              s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
              s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
              s3: '0', // 最多包含3个规格值，为0表示不存在该规格
              stock_num: 110 // 当前 sku 组合对应的库存
            }],
            price: '1.00', // 默认价格（单位元）
            stock_num: 227, // 商品总库存
            collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
            none_sku: false, // 是否无规格商品
            messages: [{
              // 商品留言
              datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
              multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
              name: '留言', // 留言名称
              type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
              required: '1' // 是否必填 '1' 表示必填
            }],
            hide_stock: false // 是否隐藏剩余库存
          }
        }
      }
    },

    mounted() {
      this.getDetail();
    },
    methods: {
      open() {
        this.showBase = true;
      },
      getDetail() {
        this.$store.dispatch("getDetailInfo", {
          id: 12
        }).then(s => {
          if (s.code == 1) {
            this.detail = s.data;
            this.loadOver = true;
          }
          console.log(this.detail)
        })
      },
      onClickMiniBtn() {},
      onClickMiniBtn() {},
      onClickBigBtn() {},
      onClickBigBtn() {},
      onBuyClicked() {},
      onAddCartClicked() {}
    }
  }
  //

</script>
<style>
  /* .topSearch {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 999;
  } */
  .details {
    padding: 10px 0px;
  }

  .productMsg {
    padding: 10px 0px;
    width: 95%;
    margin: auto;
  }

  .productMsg div {
    overflow: hidden;
    width: 100%;
    margin-top: 12px;
  }

  .productMsg .origin {
    color: #999;
    font-size: 13px;
    float: left;
    line-height: 30px;
  }

  .productMsg .present {
    font-size: 18px;
    color: red;
  }


  .productMsg div span {
    display: inline-block;
    float: left;
    text-align: left;

  }

  .productMsg .sales {
    color: #999;
    font-size: 13px;
    float: right;
    line-height: 30px;
  }

  .productMsg .name {
    font-size: 15px;
    font-weight: 900;
    text-align: left;
  }

  .specifications {
    text-align: left;
    width: 95%;
    margin: auto;
    font-size: 15px;
    line-height: 45px;
  }

  .evaluateSize {
    text-align: left;
    width: 95%;
    margin: auto;
    font-size: 15px;
    line-height: 45px;
  }

  .evaluateSize span {
    float: right;
    color: #999;
    margin-right: 12px;
  }

  .detailImg img {
    display: block;
    padding: 0px;
    margin: 0px;
    width: 100%;
  }

  .last {
    background: #f3f5f7;
    color: #b3b3b3;
    font-size: 12px;
    line-height: 35px;
    margin-bottom: 50px;
  }

  .centerGray {
    height: 10px;
    border-top: #eeeeee;
    border-bottom: #eeeeee;
    background: #f3f5f7;
    width: 100%;
    box-shadow: inset 0px 0px 4px 1px #e2e2e2;
  }

</style>
