<template>
  <div>
    
    <component :is="currentRole"></component>
  </div>
</template>
<script>
  import user from './components/user'
  export default {
    name: "homePage",
    data() {
      return {
        //   type
        currentRole: "user",
      }
    },
    components: {
      user,
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
