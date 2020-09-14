<template>
  <div class="flo-list">
    <div class="list">
      <div class="img-wrap">
        <img :src="flo.img" alt @click="handleClick(flo)" />
      </div>
      <div class="list-bottom">
        <div class="p1">{{flo.Cpmc}}</div>
        <div class="p2">{{flo.Instro}}</div>
        <div class="p3">￥{{flo.Price}}</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["flo"],
  methods: {
    handleClick(flo) {
      this.$router.push({ path: "/details", query: flo });
    },
  },
};
</script>

<style lang="scss" scoped>
.flo-list {
  width: 179px;
  padding: 0 4px;
  padding-bottom: 8px;
  background: #e9ecf0;
  display: inline-block;
  .list {
    background: #fff;
    overflow: hidden;
    box-shadow: 0 4px 12px 0 #e9ecf0;
    border-radius: 4px;
    .img-wrap {
      max-height: 187px;
      min-height: 187px;
      overflow: hidden;
      img {
        width: 179px;
        height: 191px;
        vertical-align: middle;
      }
    }
    .list-bottom {
      padding: 8px 8px 16px;
      height: 82px;
      overflow: hidden;
      position: relative;
      .p1 {
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        height: 30px;
      }
      .p2 {
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
        height: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .p3 {
        padding-top: 10px;
        font-size: 20px;
        font-weight: 500;
        line-height: 25px;
        height: 25px;
        color: #ff734c;
      }
    }
  }
}
</style>