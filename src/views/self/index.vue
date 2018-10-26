
<template>
  <div>
    <component :is="who"></component>
  </div>
</template>
<script>
  import user from './components/user'
  export default {
    name: "homePage",
    data() {
      return {
        who: "user",
      }
    },
    components: {
      user,
    },
    mounted() {
    },
    methods: {
      loadMore(){
        console.log('s')
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
