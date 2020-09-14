<template>
  <div class="list-wrap">
    <div>
      <img :src="flist.img" alt />
    </div>
    <div class="list-right">
      <div class="list-right1">
        <p>{{flist.Cpmc}}</p>
        <p class="det">{{flist.Instro}}</p>
      </div>
      <div class="list-right2">
        <i>￥{{flist.Price}}</i>
        <span>￥{{flist.LinePrice}}</span>
        <p>已销售{{flist.Sales}}件</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["flist"],
};
</script>


<style lang="scss" scoped>
.list-wrap {
  width: 360px;
  height: 192px;
  margin-left: 7px;
  margin-top: 15px;
  box-shadow: 1px 1px 2px 2px rgb(247, 238, 238);
  display: flex;
  img {
    width: 176px;
    height: 192px;
  }
  .list-right {
    width: 135px;
    height: 192px;
    padding-left: 25px;
    font-size: 14px;
    color: #232628;
    .list-right1 {
      padding-top: 30px;
      line-height: 24px;
      border-bottom: 1px solid rgb(231, 227, 227);
      padding-bottom: 18px;
      .det {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .list-right2 {
      padding-top: 18px;
      line-height: 20px;
      padding-bottom: 15px;
      i {
        color: #ff734c;
        font-size: 20px;
        font-weight: 500;
        font-style: normal;
        // margin-left:5px;
      }
      span {
        font-size: 10px;
        text-decoration: line-through;
        margin-left: 8px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}
</style>