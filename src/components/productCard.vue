<template>
  <div style="overflow: hidden;">
    <van-row class="shoppingBox">
      <van-col span="3">
        <van-checkbox class="boxCheck" @change="changePrice" v-model="product.checked"></van-checkbox>
      </van-col>
      <van-col span="6">
        <img :src="product.img" :alt="product.name">
      </van-col>
      <van-col offset="1" span="13">
        <p class="name">{{product.name}}</p>
        <p class="description">{{product.description}}</p>
        <p class="price">￥{{product.price}}</p>
        <div>
          <i class="iconfont icon-shanchu"></i>
          <van-stepper @change="changePrice" v-model="product.number" />
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
  export default {
    name: "productCard",
    props: {
      product: {
        type: Object,
        default: {}
      },
    },
    methods: {
      changePrice() {
        this.$parent.allPriceChange()
      }
    }
  }

</script>
<style>
  .shoppingBox {
    overflow: hidden;
    border-bottom: 1px solid #f5f5f5;
    padding: 10px 0px;
  }

  .shoppingBox img {
    width: 80%;
    margin: auto;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
  }

  .shoppingBox p {
    font-size: 12px;
    text-align: left;
    line-height: 22px;
  }

  .shoppingBox .name {
    font-weight: 900;
    font-size: 15px;
  }

  .shoppingBox div i {
    float: left;
    margin-top: 4px;
    font-size: 20px;
  }

  .shoppingBox .description {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #9f9f9f;
  }

  .shoppingBox div .van-stepper {
    float: right;
  }

  .shoppingBox .price {
    color: red;
  }

  .shoppingBox .boxCheck {
    margin-top: 18px;
    margin-left: 6px;
  }

</style>
