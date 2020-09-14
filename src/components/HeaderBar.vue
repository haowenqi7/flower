<template>
  <div>
    <div class="header1">
      <div class="header11" @click="back()">&lt;</div>
      <div class="header12">鲜花</div>
      <div class="header13">
        <span class="iconfont photo1">&#xe605;</span>
        <span class="iconfont photo2">&#xe604;</span>
      </div>
    </div>

    <div class="header2" v-show="$store.state.Show">
      <div class="header21">综合</div>
      <div class="header22">销量</div>
      <div class="header23">
        <p>价格</p>
        <span class="icon1"></span>
        <span class="icon2"></span>
      </div>
      <div class="header24">新品</div>
    </div>

    <div class="header3">
      <div class="header31">
        <p>送女友</p>
      </div>
      <div class="header32">
        <p>送男友</p>
      </div>
      <div class="header33">
        <p>送朋友</p>
      </div>
      <div class="header34">
        <p>送长辈</p>
      </div>
      <div class="header35">
        <p>筛选</p>
        <span class="icon"></span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.header1 {
  display: flex;
  height: 44px;
  width: 100%;
  line-height: 44px;
  .header11 {
    width: 25%;
    font-size: 30px;
    color: #666;
    font-weight: 200;
    text-indent: 10px;
  }
  .header12 {
    flex: 1;
    text-align: center;
  }
  .header13 {
    width: 25%;
    .photo1 {
      font-size: 25px;
      font-weight: 500;
      float: left;
      padding-left: 15px;
    }
    .photo2 {
      float: right;
      font-size: 21px;
      padding-right: 10px;
    }
  }
}

.header2 {
  width: 100%;
  height: 45px;
  display: flex;
  line-height: 45px;
  text-align: center;
  border-bottom: 1px solid #e9ecf0;
  .header21,
  .header22,
  .header23,
  .header24 {
    flex: 1;
  }
  .header21 {
    color: #ff734c;
  }
  .header23 {
    display: flex;
    position: relative;
    text-indent: 22px;
    font-size: 16px;
    .icon1 {
      display: block;
      position: absolute;
      top: 14px;
      left: 60px;
      width: 0;
      height: 0;
      font-size: 0;
      border: 4px solid #999;
      border-color: transparent transparent #999 transparent;
    }
    .icon2 {
      display: block;
      position: absolute;
      top: 25px;
      left: 60px;
      width: 0;
      height: 0;
      font-size: 0;
      border: 4px solid #999;
      border-color: #999 transparent transparent transparent;
    }
  }
}

.header3 {
  height: 44px;
  display: flex;
  font-size: 12px;
  color: #232628;
  .header31,
  .header32,
  .header33,
  .header34,
  .header35 {
    text-align: center;
    margin: 10px 4px;
    width: 66px;
    height: 24px;
    border: 1px solid #f7f9fa;
    background-color: #f7f9fa;
    p {
      margin: 5px 0;
    }
  }
  .header35 {
    position: relative;
    .icon {
      position: absolute;
      top: 12px;
      left: 48px;
      display: block;
      width: 0px;
      height: 0px;
      font-size: 0;
      border: 4px solid #333;
      border-color: #333 transparent transparent transparent;
    }
  }
}
</style>