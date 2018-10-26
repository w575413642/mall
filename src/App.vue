<template>
  <div id="app">
    <!-- common tips -->
    <van-popup class="tips" v-model="tips" :overlay="true">
      <p>{{errorMsg.msg}}</p>
    </van-popup>
    <router-view />
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";

  export default {
    name: 'App',
    data() {
      return {
        tips: false,
      }
    },
    computed: {
      // 查看用户是否admin
      ...mapGetters(["errorMsg"])
    },
    watch: {
      errorMsg() {
        this.tips = true
      }
    }
  }

</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .tips {
    color: white;
    width: 70%;
    border-radius: 0;
    line-height: 20px;
    background-color: rgba(255, 68, 68, 0.9);
    line-height: 50px;
    font-size: 15px;
    border-radius: 3px;
  }

</style>
