<template>
  <div class="login">
    <van-nav-bar title="标题" left-text="首页" right-text="注册" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <van-tabs @click="onClick">
      <van-tab title="普通登录">
        <van-cell-group>
          <van-field v-model="form.username" clearable label="用户名" placeholder="请输入用户名" />
          <van-field v-model="form.password" type="password" clearable label="密码" placeholder="请输入密码" />
        </van-cell-group>
        <div style="overflow: hidden;">
          <van-checkbox style="float: left; margin-left: 15px;margin-top: 20px;" v-model="form.auto">自动登录</van-checkbox>
        </div>
        <div @click="login" class="submit">确认登录</div>
      </van-tab>
      <van-tab title="动态密码登录">
        <van-cell-group>
          <van-field v-model="form.username" clearable label="手机号" placeholder="请输入手机号" />
          <div style="position:relative;">
            <van-field v-model="form.password" type="password" clearable label="动态码" placeholder="请输入动态码" />
            <van-button class="button">获取验证码</van-button>
          </div>
        </van-cell-group>
        <div style="overflow: hidden;">
          <van-checkbox style="float: left; margin-left: 15px;margin-top: 20px;" v-model="form.auto">自动登录</van-checkbox>
        </div>
        <div @click="login" class="submit">确认登录</div>
      </van-tab>
    </van-tabs>

  </div>
</template>
<script>
  export default {
    name: "login",
    data() {
      return {
        value14: '1231232131',
        form: {}
      }
    },
    mounted() {},
    methods: {
      onClick(index, title) {
        // this.$toast(title);
      },
      login() {
        this.$store.dispatch("loginInfo", { ...this.form
        }).then(s => {
          if (s.code != 1) {

          } else {
            this.$router.push({
              path: "/"
            });
          }
        })
      },
      onClickLeft() {},
      onClickRight() {},
      tag(s) {
        this.activeKey = s
      }
    }
  }

</script>
<style>
  .submit {
    width: 90%;
    margin: auto;
    background: #f44;
    color: white;
    line-height: 45px;
    border-radius: 3px;
    margin-top: 20px;
  }

  .button {
    position: absolute;
    top: 0px;
    right: 0px;
    background: #f44;
    color: white;
    border-radius: 3px;
  }

</style>
