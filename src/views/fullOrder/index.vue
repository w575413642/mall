<template>
  <div class="fullOrder">
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow />
    <van-tabs v-model="active">
      <van-tab title="全部">
        <div v-for="(ins,index) in order" :key="index">
          <div class="business"><i class="store_icon iconfont icon-shangcheng"></i> 订单号：<span> {{ins.orderId}} </span><span style="float:right;margin-right: 12px;">{{ins.status}}</span></div>
          <van-card v-for="(item,index) in ins.detail" :key="index" style="background: white;border-bottom: 1px solid #f5f5f5;" :num="item.number"  :price="item.price" :desc="item.description"
            title="商品标题" :thumb="item.img" >
            <!-- origin-price="10.00" 原价 -->
            <div slot="footer">
              <!-- <van-button size="mini">按钮</van-button>
              <van-button size="mini">按钮</van-button> -->
            </div>
          </van-card>
          <div class="priceProduct">
            共{{2}}件商品 实付：<span>￥{{3600}}</span>({{'免邮'}})
          </div>
          <div class="btn">
              <van-button class="btnType" type="default">默认按钮</van-button>
              <van-button class="btnType" type="primary">主要按钮</van-button>
              <van-button class="btnType" type="warning">警告按钮</van-button>
              <van-button class="btnType" type="danger">危险按钮</van-button>
          </div>
        <div class="centerGray"></div>
        </div>
      </van-tab>
      <van-tab title="代付款">内容 2</van-tab>
      <van-tab title="待发货">内容 3</van-tab>
      <van-tab title="待收货">内容 4</van-tab>
      <van-tab title="待评价">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
    name: "fullOrder",
    data() {
        return {
            active: 0,
            order: {}
        }
    },
    mounted() {
        this.getProductInfo();
    },
    methods: {
        getProductInfo() {
            this.$store.dispatch("allProductInfo").then(s => {
                if (s.code == 1) {
                    this.order = s.data
                }
            })
        }
    }
}

</script>
<style>
.business {
  text-align: left;
  padding-left: 20px;
  line-height: 35px;
  font-size: 14px;
  border-bottom: 1px solid #f5f5f5;
}

.priceProduct {
  text-align: right;
  font-size: 14px;
  margin-right: 20px;
  line-height: 35px;
  border-bottom: 1px solid #f5f5f5;
}

.priceProduct span {
  color: red;
}
.centerGray {
  height: 10px;
  border-top: #eeeeee;
  border-bottom: #eeeeee;
  background: #f3f5f7;
  width: 100%;
  box-shadow: inset 0px 0px 4px 1px #e2e2e2;
}
.btn{
    padding: 10px 0px;
}
</style>
