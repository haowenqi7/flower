<template>
  <div class="home">
    <div class="view">
      <router-view></router-view>
    </div>
    <ul class="nav">
      <router-link to="/home/first" tag="li" active-class="active">
        <span class="iconfont">&#xe610;</span>
        <p>首页</p>
      </router-link>

      <router-link to="/home/search" tag="li" active-class="active">
        <span class="iconfont">&#xe604;</span>
        <p>分类</p>
      </router-link>

      <router-link to="/home/carts" tag="li" active-class="active">
        <span class="iconfont iconfont3">&#xe661;</span>
        <p>购物车</p>
      </router-link>

      <router-link to="/home/my" tag="li" active-class="active">
        <span class="iconfont iconfont4">&#xe688;</span>
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>


<script>
import "@/assets/iconfont/iconfont.css";

export default {
  
};
</script>


<style lang="scss" scoped>
.home {
  display: flex;
  height: 100%;
//   overflow: hidden;
  flex-direction: column;
  .view {
    flex: 1;
    // height: 100%;
    height: 100%;
    overflow: hidden;
  }
  .nav {
    width: 100%;
    height: 49px;
    display: flex;
    align-items: center;
    font-size: 14px;
    background: #F7F9FA;
    li {
      list-style: none;
      height: 49px;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 93.8px;
      .iconfont {
        font-size: 24px;
      }
      .iconfont3 {
        font-size: 34px;
        font-weight: 500;
      }
      .iconfont4 {
        font-size: 28px;
      }
    }
    .active {
      color: #ff734c;
    }
  }
}
</style>