<template>
  <div class="login-container">
    <div class="box">
      <h3>登录</h3>
      <div class="username">
        <input v-model="user.username" type="text" placeholder="请输入用户名">
      </div>
      <div class="password">
        <input v-model="user.password" type="password" placeholder="请输入密码">
      </div>
      <div class="rember">
        <input id="rember"  v-model="checked" type="checkbox">
        <label :class="{active: checked}" for="rember">记住我</label>
      </div>
      <div class="switch"><span @click="regist">没有账号去注册</span><span class="split">|</span><span>忘记密码</span></div>
      <div @click="login" class="btn">登录</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: false,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {

    // 跳转到注册页面
    regist () {
      this.$router.push({path: 'Regist'})
    },

    // 登录请求
    login () {
      var userinfo = this.user
      this.$axios({
        method: 'post',
        url: 'api/login',
        data: userinfo
      })
        .then(({data}) => {
          if (data.status === 1) {
            this.$router.push({path: 'Home'})
          } else {
            this.$toast({
              message: data.msg,
              duration: 2000,
              position: 'middle'
            })
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 70%;
    h3 {
      font-size: 42px;
      font-weight: normal;
      letter-spacing: 20px;
    }
    .username, .password {
      border-bottom: 1px solid #777;
      padding-top: 40px;
      padding-bottom: 1px;
      width: 100%;
      height: 100%;
      input {
        width: 100%;
        height: 100px;
        font-size: 32px;
        outline: none;
        border: 0 none;
        color: #555;
      }
    }

    .rember {
      font-size: 26px;
      margin: 30px 0;
      position: relative;
      input[type="checkbox"] {
        vertical-align: middle;
        visibility: hidden;
      }
      label {
        position: absolute;
        left: 0;
        top:0;
        background-image: url('../../assets/checkbox-no.png');
        background-repeat: no-repeat;
        background-size: 32px 32px;
        background-position: left center;
        padding-left: 36px;
      }
      label.active {
        background-image: url('../../assets/checkbox.png');
        background-size: 32px 32px;
      }
    }

    .switch {
      color: #555;
      font-size: 26px;
      .split {
        padding: 0 20px;
      }
    }

    .btn {
      width: 100%;
      height: 78px;
      background-color: #3385ff;
      text-align: center;
      line-height: 78px;
      font-size: 30px;
      color: #ffffff;
      letter-spacing: 10px;
      margin-top: 40px;
    }
  }
}
</style>
