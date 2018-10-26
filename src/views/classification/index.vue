<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <van-search class="topSearch" placeholder="请输入搜索关键词" v-model="value" />
    <div class="warrp">
      <van-badge-group :style="[{height:height - 50 - 46 - 30 + 'px'}]" class="boxTop" :active-key="activeKey">
        <van-badge title="标签名称" @click="tag(0)" />
        <van-badge title="标签名称" @click="tag(1)" />
        <van-badge title="标签名称" @click="tag(2)" />
        <van-badge title="标签名称" @click="tag(3)" />
        <van-badge title="标签名称" @click="tag(4)" />
        <van-badge title="标签名称" @click="tag(5)" />
        <van-badge title="标签名称" @click="tag(6)" />
        <van-badge title="标签名称" @click="tag(7)" />
        <van-badge title="标签名称" @click="tag(8)" />
        <van-badge title="标签名称" @click="tag(9)" />
        <van-badge title="标签名称" @click="tag(10)" />
        <van-badge title="标签名称" @click="tag(11)" />
        <van-badge title="标签名称" @click="tag(12)" />
        <van-badge title="标签名称" @click="tag(13)" />
        <van-badge title="标签名称" @click="tag(14)" />
      </van-badge-group>
      <div class="showBox" :style="[{width:width - 85 + 'px'},{height:height - 50 - 46 - 30 + 'px'}]">
        <van-swipe :autoplay="3000">
          <van-swipe-item>
            <img style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
              alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
              alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
              alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
              alt="">
          </van-swipe-item>
        </van-swipe>
        <div class="commodity">
          <van-col span="8">
            <img style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
              alt="">
            <p>RNG牛逼</p>
          </van-col>
          <van-col span="8">
            <img style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
              alt="">
            <p>RNG牛逼</p>
          </van-col>
          <van-col span="8">
            <img style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
              alt="">
            <p>RNG牛逼</p>
          </van-col>
          <van-col span="8">
            <img style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
              alt="">
            <p>RNG牛逼</p>
          </van-col>
          <van-col span="8">
            <img style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
              alt="">
            <p>RNG牛逼</p>
          </van-col>
          <van-col span="8">
            <img style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
              alt="">
            <p>RNG牛逼</p>
          </van-col>
          <van-col span="8">
            <img style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
              alt="">
            <p>RNG牛逼</p>
          </van-col>
          <van-col span="8">
            <img style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
              alt="">
            <p>RNG牛逼</p>
          </van-col>
          <van-col span="8">
            <img style="width: 100%;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540205869159&di=8a4f3fff34f33dfca69944a867e22274&imgtype=0&src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2cf2041403f724f138581aa1ec64faec6_750_0.jpg"
              alt="">
            <p>RNG牛逼</p>
          </van-col>
        </div>
      </div>
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
    name: "classification",
    data() {
      return {
        activeKey: 0,
        width: document.body.clientWidth,
        height: window.screen.height,
        value: '',
        active: 0
      }
    },
    mounted() {
      console.log(this.$store)
    },
    methods: {
      onClickLeft() {},
      onClickRight() {},
      tag(s) {
        this.activeKey = s
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
  .boxTop {
    float: left;
    overflow: auto;
  }

  .warrp {
    /* margin-top: 45px; */
  }

  .showBox {
    float: left;
    overflow: auto;
  }

  .commodity {
    width: 90%;
    margin: auto;
  }

  .commodity p {
    font-size: 12px;
  }

</style>
