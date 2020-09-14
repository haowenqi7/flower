<template>
  <div>
    <header class="headerbar">
      <div class="headerbar-left">
        <span class="iconfont1" @click="back()">&lt;</span>
      </div>
      <div class="headerbar-logo">
        <img src="@/assets/images/m_hualogo.png" />
      </div>
      <div class="headerbar-right">
        <span class="iconfont">&#xe604;</span>
      </div>
    </header>

    <div class="img">
      <img :src="item.img" alt />
    </div>

    <section class="proinfo">
      <div class="proinfo-head">
        <div class="proinfo-head-title">{{item.Cpmc}}</div>
        <div class="proinfo-head-title2">{{item.Instro}}</div>
      </div>
      <div class="proinfo-body">
        <div class="proinfo-body-price">
          <span class="proinfo-body-price-sjg">{{item.Price}}</span>
          <s class="proinfo-body-price-jg">{{item.LinePrice}}</s>
        </div>
        <div class="proinfo-body-sales">
          已售
          <span>7.20万</span>件
        </div>
      </div>
    </section>

    <section class="detailsinfo">
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">花语</div>
        <div
          class="detailsinfo-item-desc"
        >以热烈主题的红玫瑰及红色包装，搭配象征白色无暇的桔梗为设计主题，打造全新韩式系列。将这一簇美景包裹在一片雪白中，一条满载希望的丝带扎紧了无限的惊喜，只为将全世界的风景奉献于你怀里</div>
      </div>
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">材料</div>
        <div
          class="detailsinfo-item-desc"
        >韩式花束系列：卡罗拉玫瑰11枝、3头或以上白底粉边洋桔梗5枝（如白底粉边桔梗缺货，可用白色桔梗代替）、大叶尤加利10枝、4枝红豆（红豆属于季节性花材，如缺货用相思梅等类似花材代替）</div>
      </div>
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">包装</div>
        <div class="detailsinfo-item-desc">红/金色鎏金纸5张、透明雾面纸3张、酒红色罗纹烫金丝带2米</div>
      </div>
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">配送</div>
        <div class="detailsinfo-item-desc">全国(小城市请提前一天预定)</div>
      </div>
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">附送</div>
        <div class="detailsinfo-item-desc">下单填写留言，即免费赠送精美贺卡！</div>
      </div>
    </section>

    <nav>
      <div class="nav1">
        <span class="iconfont">&#xe605;</span>
        <p>客服</p>
      </div>
      <div class="nav1">
        <span class="iconfont">&#xe661;</span>
        <p>购物车</p>
      </div>
      <div class="nav3">
        <p>加入购物车</p>
      </div>
      <div class="nav4">
        <p>立即购买</p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.query);
  },
  computed: {
    item() {
      return this.$route.query;
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>


<style lang="scss" scoped>
.headerbar {
  justify-content: center;
  display: flex;
  height: 44px;
  .headerbar-left {
    text-align: left;
    width: 88px;
    height: 44px;
    line-height: 44px;
    font-size: 30px;
    text-indent: 10px;
  }
  .headerbar-logo {
    flex: 1;
    height: 44px;
    text-align: center;
    img {
      margin-left: 25px;
      margin-top: 11px;
      width: 150px;
      height: 20px;
      display: block;
    }
  }
  .headerbar-right {
    text-align: right;
    width: 78px;
    height: 44px;
    line-height: 44px;

    padding-right: 10px;
    .iconfont {
      font-size: 20px;
    }
  }
}

.img {
  img {
    width: 375px;
    height: 409px;
    display: block;
  }
}

.proinfo {
  padding: 14px 22px;
  display: flex;
  flex-direction: column;
  background: #fff;
  .proinfo-head {
    .proinfo-head-title {
      font-size: 18px;
      height: 30px;
      line-height: 30px;
    }
    .proinfo-head-title2 {
      font-size: 14px;
      width: 330px;
      line-height: 20px;
      color: #666;
    }
  }
  .proinfo-body {
    align-items: center;
    margin-top: 10px;
    display: flex;
    .proinfo-body-price {
      flex: 1;
      .proinfo-body-price-sjg {
        font-size: 25px;
        color: #ff734c;
        font-weight: 600;
      }
      .proinfo-body-price-jg {
        color: #b4babf;
        margin-left: 8px;
        font-size: 16px;
        margin-right: 16px;
      }
    }
    .proinfo-body-sales {
      width: 112px;
      font-size: 12px;
      text-align: right;
    }
  }
}

.detailsinfo {
  padding: 0 18px;
  .detailsinfo-item {
    display: flex;
    font-size: 14px;
    position: relative;
    .detailsinfo-item-title {
      width: 42px;
      min-width: 3rem;
      font-weight: 500;
      color: #232323;
      padding: 14px 0;
    }
    .detailsinfo-item-desc {
      flex: 1;
      padding: 12px 0;
      justify-content: center;
    }
  }
}

.detailsinfo-item:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 2.85714286rem;
  right: 0;
  height: 0;
  border-bottom: 1px solid #e9ecf0;
}

nav {
  display: flex;
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background: #fff;
  .nav1 {
    width: 75px;
    font-size: 12px;
    text-align: center;
    padding-top: 6px;
    .iconfont {
      font-size: 20px;
    }
  }
  .nav3 {
    width: 112px;
    height: 49px;
    line-height: 49px;
    text-align: center;
    color: #fff;
    background: #333;
  }
  .nav4 {
    width: 112px;
    height: 49px;
    line-height: 49px;
    text-align: center;
    color: #fff;
    background: #ff734c;
  }
}
</style>