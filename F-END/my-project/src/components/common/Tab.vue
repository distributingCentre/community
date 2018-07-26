<template>
  <div class="tab-container">
    <div class="tab-box">
      <div @click="tab('Home')" :class="currentTab == 'Home' ? 'active':''" class="tag home">
        <div class="icon">
          <i class="iconfont icon-shouye"></i>
        </div>
        <div class="title">
          <span>首页</span>
        </div>
      </div>
      <div @click="tab('Rec')" :class="currentTab == 'Rec' ? 'active':''" class="tag rec">
        <div class="icon">
          <i class="iconfont icon-tuijian"></i>
        </div>
        <div class="title">
          <span>推荐</span>
        </div>
      </div>
      <div @click="tab('Spot')" :class="currentTab == 'Spot' ? 'active':''" class="tag spot">
        <div class="icon">
          <i class="iconfont icon-compass"></i>
        </div>
        <div class="title">
          <span>发现</span>
        </div></div>
      <div @click="tab('Mine')" :class="currentTab == 'Mine' ? 'active':''" class="tag mine">
        <div class="icon">
          <i class="iconfont icon-wodejuhuasuan"></i>
        </div>
        <div class="title">
          <span>我的</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentTab: 'Home'
    }
  },
  methods: {
    tab (currentTab) {
      console.log(currentTab)
      this.currentTab = currentTab
      this.$router.push({path: currentTab})
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-container {
  width: 100%;
  height: 100%;
  .tab-box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100px;
    border-top: 1px solid #ccc;
    .tag {
      display: flex;
      width: 25%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .iconfont {
        font-size: 40px;
      }
    }
    .tag.active {
      color: #3385ff;
    }
  }
}
</style>
