<template>
  <div class="evaluate">
    <div class="card">
      <van-row>
        <van-col span="5">
          <img :src="info.header" :alt="info.name">
        </van-col>
        <van-col span="9">
          <p class="name">{{info.name}}</p>
        </van-col>
        <van-col span="5">
          <div class="msgBox">
            <p>全部评价</p>
            <p>{{info.evaluate.allEvaluate}}</p>
          </div>
        </van-col>
        <van-col span="5">
          <div class="msgBox">
            <p>有图评价</p>
            <p>{{info.evaluate.haveImgEvaluate}}</p>
          </div>
        </van-col>
      </van-row>
    </div>
    <p v-if="info.evaluate_info.length > 0" class="number">待评价 · 3</p>
    <div v-if="info.evaluate_info.length > 0" class="ev">
      <div class="evCard" v-for="items in info.evaluate_info" :key="items.id">
        <div class="business"><i>icon</i><span> {{items.business}} > </span></div>
        <van-card style="background: white;" :num="items.number" :price="items.price" :desc="items.description" :title="items.name" :thumb="items.img" >
        <div slot="footer">
    <van-button style="width: 80px;border-radius: 3px;font-size
    12px;" size="mini">查看订单</van-button>
    <van-button style="border-radius: 3px;font-size
    12px;border: 1px solid #ff9b00;color:#ff9b00;" size="mini">评价</van-button>
  </div>
  </van-card>
      </div>
    </div>
  </div>
</template>
<script>
import {
  mapGetters
} from "vuex";

export default {
  name: "evaluate",
  data() {
    return {
      info: {
        evaluate_info: [],
        evaluate: {
          allEvaluate: "暂无数据",
          haveImgEvaluate: "暂无数据",
        }
      }
    }
  },
  // computed: {
  //   // 查看用户是否admin
  //   ...mapGetters(["info"])
  // },
  mounted() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.$store.dispatch("searchEvaluate").then(s => {
        if (s.code == 1) {
          console.log(s)
          this.info = s.data
        }
      })
    }
  }
}

</script>
<style>
.evaluate {
  background: #f2f2f2;
  overflow: hidden;
}

.evaluate .card {
  background: #ffffff;
  width: 95%;
  overflow: hidden;
  margin: 10px auto;
  border-radius: 7px;
}

.evaluate .card img {
  width: 60px;
  height: 60px;
  display: block;
  border-radius: 1000px;
  margin: 8px 16%;
  margin-right: 0%;
  border: 1px solid #dcdcdc;
}

.card van-row {
  width: 95%;
  margin: auto;
}

.evaluate .card p {
  font-size: 13px;
}

.evaluate .card .name {
  line-height: 75px;
  text-indent: 0.5em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 900;
}

.evaluate .card .msgBox {
  padding: 21px 0px;
}

.evaluate .card .msgBox p {
  line-height: 18px;
  font-size: 12px;
}

.evaluate .card .msgBox p:nth-child(1) {
  color: #999;
}

.evaluate .card .msgBox p:nth-child(2) {
  color: black;
  font-weight: 900;
  font-size: 13px;
}

.number {
  font-weight: 900;
  width: 95%;
  margin: auto;
  text-align: left;
  font-size: 14px;
}

.ev .evCard {
  background: #ffffff;
  width: 95%;
  overflow: hidden;
  margin: 10px auto;
  border-radius: 7px;
}

.evCard .business {
  text-align: left;
  padding-left: 20px;
  line-height: 35px;
  font-size: 14px;
  border-bottom: 1px solid #f5f5f5;
}
</style>
