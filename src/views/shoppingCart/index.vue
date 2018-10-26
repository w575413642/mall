<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="5" class="login">
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <div class="shopping">
      <div v-for="item in product" :product="item" :key="item.name">
        <div class="title"><i class="store_icon iconfont icon-shangcheng"></i>{{item.name}}</div>
        <product-card v-for="ins in item.data" :product="ins" :key="ins.price + Math.random()"></product-card>
        <div class="centerGray"></div>
      </div>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">标签</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
    </van-tabbar>
    <div class="priceBox">
      <van-row>
        <van-col offset="1" span="5">
          <van-checkbox v-model="checked" @change="allChange">全选</van-checkbox>
        </van-col>
        <van-col span="9">
          合计：￥{{allPrice}}
        </van-col>
        <van-col span="9">
          <van-button class="allBtn" @click="toPaySave" type="default">去结算</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="loading">
      <van-loading v-if="switchLoad" class="loadingCs" type="spinner" />
      <p v-else>{{load}}</p>
    </div>
  </div>
</template>
<script>
import productCard from '@/components/productCard'
export default {
  name: "shoppingCart",
  data() {
    return {
      checked: false,
      product: [],
      page: {
        page: 0,
        pageSize: 12
      },
      switchLoad: true,
      load: "没有更多了",
      active: 0,
      allPrice: 0,
      special: false,
      first: true,
    }
  },
  components: {
    productCard
  },
  mounted() { },
  methods: {
    toPaySave() {
      let toPayArray = ''
      toPayArray = this.product.map(s => {
        return {
          ...s,
          data: s.data.map(pro => {
            if (pro.checked) {
              return {
                ...pro
              }
            } else {
              return {

              }
            }
          })
        }
      })
      let toPay = [];
      toPayArray = Array.from(new Set(toPayArray));
      toPayArray = toPayArray.map(s => {
        return {
          name: s.name,
          data: Array.from(s.data)
        }
      })
      for (let ins of toPayArray) {
        for (let is in ins.data) {
          if (!ins.data[is].id) {
            ins.data.splice(is, 1)
          }
        }
      }
      for (let save of toPayArray) {
        if (save.data.length != 0) {
          toPay.push(save)
        }
      }
      this.$store.dispatch("savePorduct", {
        toPay: toPay,
        price: this.allPrice
      })
      this.$router.push({
        path: "/pay"
      });
    },
    allPriceChange() {
      this.allPrice = 0;
      this.product.map(s => {
        s.data.map(price => {
          if (price.checked) {
            this.allPrice += (price.price * price.number)
          }
        })
      })
    },
    allChange() {
      if (this.first) {
        this.first = false;
        this.special = false;
      } else {
        if (this.special) return this.special = false;
      }
      if (this.checked) {
        this.product = this.product.map(s => {
          return {
            ...s,
            data: s.data.map(pros => {
              return {
                ...pros,
                checked: true
              }
            })
          }
        })
      } else {
        this.product = this.product.map(s => {
          return {
            ...s,
            data: s.data.map(pros => {
              return {
                ...pros,
                checked: false
              }
            })
          }
        })
      }
      this.allPriceChange()
    },
    onClickLeft() {

    },
    onClickRight() {

    },
    loadMore() {
      if (!this.switchLoad) return
      this.page.page++
      this.disabled = true;
      this.$store.dispatch("shoppingCarInfo", {        ...this.page
      }).then(s => {
        if (s.code != 1) { } else {
          if (s.data.length == 0) {
            this.switchLoad = false
          }
          this.product = [...this.product, ...s.data.map(s => {
            return {
              ...s,
              data: s.data.map(pros => {
                return {
                  ...pros,
                  checked: false
                }
              })
            }
          })]
          if (this.page.page = 1) {
            this.special = true;
          } else {
            this.special = false;
          }
          this.checked = false;
          console.log(this.special)
        }
      })
    }
  }
}

</script>
<style>
.loading {
  height: 50px;
  line-height: 50px;
  background: #a7a7a7;
  color: white;
  font-size: 14px;
  overflow: hidden;
  box-shadow: inset 0px 0px 15px 5px #929292;
  margin-bottom: 91px;
}

.loadingCs {
  margin: auto;
  margin-top: 10px;
  display: block;
}

.priceBox {
  position: fixed;
  bottom: 50px;
  left: 0px;
  height: 45px;
  width: 100%;
  z-index: 9;
  background: white;
  line-height: 50px;
  font-size: 13px;
  text-align: center;
}

.allBtn {
  background: #f23030;
  color: white;
  float: right;
}

.centerGray {
  height: 10px;
  border-top: #eeeeee;
  border-bottom: #eeeeee;
  background: #f3f5f7;
  width: 100%;
}

.shopping .title {
  text-align: left;
  line-height: 45px;
  text-indent: 1em;
  border-bottom: 1px solid #f5f5f5;
}

.shopping i {
  margin-right: 10px;
}
</style>
