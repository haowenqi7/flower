<template>
  <div class="wrap" ref="scroll">
    <div class="first">
      <header class="headerbar">
        <div class="headerbar-left">
          <span class="iconfont iconfont1" @click="go('/home/search')">&#xe604;</span>
        </div>
        <div class="headerbar-logo">
          <img src="@/assets/images/m_hualogo.png" />
        </div>
        <div class="headerbar-right" id="onlineChat">
          <span class="iconfont iconfont2">&#xe605;</span>
        </div>
      </header>
      <div class="main">
        <van-swipe @change="onChange" class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="@/assets/images/swiper1.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/images/swiper2.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/images/swiper3.jpg" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/images/swiper4.jpg" alt />
          </van-swipe-item>
          <template #indicator>
            <ul class="custom-indicator">
              <li class="circle">0</li>
              <li class="circle">1</li>
              <li class="circle">2</li>
              <li class="circle">3</li>
            </ul>
          </template>
        </van-swipe>

        <div class="conpany-info">
          <div class="conpany-info-item">
            <span class="iconfont">&#xe684;</span>
            认证龙头企业
          </div>
          <div class="conpany-info-item">
            <span class="iconfont">&#xe684;</span>
            15年品牌
          </div>
          <div class="conpany-info-item">
            <span class="iconfont">&#xe684;</span>
            3小时送花
          </div>
          <div class="conpany-info-item">
            <span class="iconfont">&#xe684;</span>
            最近
            <a href>383805</a>
            条好评
          </div>
        </div>

        <nav class="procate">
          <router-link tag="div" class="procate-item" to="/newflower/flolist">
            <a href class="navigation">
              <img src="@/assets/images/nav1.png" alt="鲜花" />
              <p>鲜花</p>
            </a>
          </router-link>
          <div class="procate-item">
            <a href class="navigation">
              <img src="@/assets/images/nav2.png" alt="永生花" />
              <p>永生花</p>
            </a>
          </div>
          <div class="procate-item">
            <a href class="navigation">
              <img src="@/assets/images/nav3.png" alt="蛋糕" />
              <p>蛋糕</p>
            </a>
          </div>
          <div class="procate-item">
            <a href class="navigation">
              <img src="@/assets/images/nav4.png" alt="礼品" />
              <p>礼品</p>
            </a>
          </div>
          <div class="procate-item">
            <a href class="navigation">
              <img src="@/assets/images/nav5.png" alt="企业团购" />
              <p>企业团购</p>
            </a>
          </div>
        </nav>

        <div class="nav2">
          <img src="@/assets/images/nav6.png" alt />
          <div class="nav2-bot">
            <div class="nav2-flower">
              <div class="flower2">
                <div class="flower-item">
                  <p class="text1">温暖向阳</p>
                  <p class="text2">全网热销</p>
                  <p class="text3">¥340</p>
                </div>
                <div class="flower-item">
                  <p class="text1">韩式爆款</p>
                  <p class="text2">致敬恩师</p>
                  <p class="text3">¥275</p>
                </div>
              </div>
              <div class="flower2">
                <div class="flower-item">
                  <p class="text1">丰富花材</p>
                  <p class="text2">桌面风景</p>
                  <p class="text3">¥282</p>
                </div>
                <div class="flower-item">
                  <p class="text1">高端礼盒</p>
                  <p class="text2">芳香馥郁</p>
                  <p class="text3">¥388</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul>
          <List v-for="item in flowerlist" :flist="item" :key="item.ItemCode"></List>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import List from "@/views/home/first/list/List";
import BScroll from "@better-scroll/core";
import { get } from "@/api/http";
// const bs = new BScroll(".div");

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  components: {
    List,
  },
  data() {
    return {
      current: 0,
      flowerlist: [],
    };
  },
  async created() {
    let rs = await get("/ProductPrices");
    this.flowerlist = rs.data;
    this.$nextTick(() => {
      this.initscroll();
    });
  },
  methods: {
    go(path) {
      this.$router.push({ path });
    },
    onChange(index) {
      this.current = index;
      let rs = document.querySelectorAll(".custom-indicator li");
      rs[this.current].style.width = "32px";
      rs[this.current].style.background = "#FF734C";
      setTimeout((index) => {
        rs[this.current].style.width = "6px";
        rs[this.current].style.background = "#fff";
      }, 2980);
    },
    initscroll() {
      this.$nextTick(() => {
        this.init();
      });
    },
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        click: true,
        scrollY: true,
        probeType: 3,
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.wrap {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .first {
    // height: 100%;
    // overflow: hidden;
    display: flex;
    flex-direction: column;
    .headerbar {
      display: flex;
      height: 48px;
      align-items: center;
      justify-content: center;
      background: #435448;
      //   overflow: hidden;
      color: #fff;
      .headerbar-logo {
        flex: 1;
        text-align: center;
        img {
          width: 150px;
        }
      }
      .headerbar-left,
      .headerbar-right {
        width: 48px;
        height: 48px;
        line-height: 48px;
        box-sizing: content-box;
        .iconfont1 {
          font-size: 24px;
        }
        .iconfont2 {
          font-size: 28px;
          font-weight: 500;
        }
      }
      .headerbar-left {
        padding-left: 14px;
      }
      .headerbar-right {
        padding-right: 14px;
        text-align: right;
      }
    }

    .main {
      //   overflow: hidden;
      flex: 1;
      height: 100%;
      position: relative;
      .my-swipe .van-swipe-item {
        width: 100%;
        height: 180px;
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
        float: left;
        img {
          display: inline-block;
          width: 375px;
          height: 180px;
        }
      }
    }

    .custom-indicator {
      position: absolute;
      top: 155px;
      left: 165px;
      padding: 2px 5px;
      font-size: 12px;
      list-style: none;
      .circle {
        float: left;
        width: 6px;
        height: 6px;
        margin: 0 4px;
        background: #fff;
        border-radius: 2px;
        font-size: 0px;
      }
    }

    .conpany-info {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 36px;
      //   overflow: hidden;
      float: left;
      background: #fff;
      .conpany-info-item {
        width: auto;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 11px;
        margin-left: 12px;
        .iconfont {
          font-size: 12px;
          color: #333;
          margin: 0 -2px 0 0;
        }
        a {
          color: #333;
        }
      }
    }

    .procate {
      width: 100%;
      height: 68px;
      display: flex;
      background: #fff;
      padding: 8px 0;
      .procate-item {
        flex: 1;
        text-align: center;
        a {
          font-size: 12px;
          color: #333;
          text-decoration: none;
          display: inline-block;
          height: 100%;
          width: 100%;
          img {
            width: 36px;
            vertical-align: middle;
          }
        }
      }
    }

    .nav2 {
      width: 100%;
      height: 292px;
      img {
        width: 100%;
        height: 92px;
        border: 0;
        vertical-align: middle;
      }
      .nav2-bot {
        width: 100%;
        height: 200px;
        background: #b96757;
        .nav2-flower {
          padding: 12px 8px;
          .flower2 {
            display: flex;
          }
          .flower-item {
            float: left;
            width: 50%;
            margin: 3px;
            height: 86px;
            border-radius: 4px;
            flex-wrap: wrap;
            background: #fff url("../../../assets/images/flower.jpg") no-repeat;
            background-size: contain;
            background-position: top right;
          }
          .text1 {
            font-weight: 400;
            padding-top: 12px;
            font-size: 14px;
            padding-left: 10px;
          }
          .text2 {
            font-weight: 300;
            font-size: 12px;
            padding-left: 10px;
            color: #71797f;
          }
          .text3 {
            font-weight: 500;
            padding-top: 12px;
            color: #ff734c;
            padding-left: 10px;
            font-size: 16px;
          }
        }
      }
    }

    .list {
      width: 100%;
      height: 200px;
      background: red;
    }
  }
}
</style>