<template>
  <div class="regist-container">
    <div class="box">
      <h3>注册</h3>
      <div class="username">
        <input type="text" v-model="user.username" placeholder="请输入用户名" />
      </div>
      <div class="password">
        <input type="password" v-model="user.password" placeholder="请输入密码" />
      </div>
      <p class="switch"><span @click="login">已有账号去登录</span></p>
      <div class="btn" @click="regist">注册</div>
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
    // 跳转登录页
    login () {
      this.$router.push({path: 'Login'})
    },

    // 提交注册信息
    regist () {
      let userinfo = this.user

      this.$axios({
        method: 'post',
        url: 'api/regist',
        data: userinfo
      })
        .then(({data}) => {
          console.log(data)
          if (data.status === 0) {
            this.$toast({
              message: data.msg,
              position: 'middle',
              duration: 2000
            })
          } else if (data.status === 1) {
            this.$toast({
              message: data.msg,
              iconClass: 'iconfont icon-zhengque',
              duration: 1000
            })

            this.$router.push({path: 'Login'})
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.regist-container {
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
      margin-top: 40px;
      padding-bottom: 2px;
      border-bottom: 1px solid #777;
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
    .switch {
      margin-top: 30px;
      font-size: 26px;
      color: #555;
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
