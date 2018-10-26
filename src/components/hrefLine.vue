<template>
  <div style="overflow: hidden;">
    <div class="iconLine">
      <i :class="['iconfont', 'icon', `icon-${icon}`]" style="font-size:36px; color: #dcdcdc;"></i>
    </div>
    <div class="msg" :style="[{borderBottom:border}]">
      <span class="msgInfo">{{text}}</span>
      <b>{{info}} ></b>
    </div>
  </div>
</template>
<script>
  export default {
    name: "homePage",
    props: {
      icon: "",
      text: "",
      info: "",
      border: ""
    },
  }

</script>
<style>
  .iconLine {
    float: left;
    display: block;
    width: 13%;
    height: 45px;
  }

  .iconLine i {
    font-size: 20px !important;
    line-height: 50px;
  }

  .msg {
    float: left;
    width: 87%;
    text-align: right;
    overflow: hidden;
    line-height: 45px;
  }

  .msg .msgInfo {
    text-align: left;
    float: left;
  }

  .msg b {
    font-weight: normal;
    padding-right: 15px;
    color: #dcdcdc;
  }

</style>
