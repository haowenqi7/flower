<template>
  <div class="outer" ref="floscroll">
    <div class="inter">
      <div>
        <div></div>
        <HeaderBar></HeaderBar>
        <FloList v-for="item in flolist" :flo="item" :key="item.ItemCode"></FloList>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import HeaderBar from "@/components/HeaderBar";
import FloList from "@/views/newflower/flolist/FloList";
import BScroll from "@better-scroll/core";
import { get } from "@/api/http";
import { mapMutations } from "vuex";

export default {
  components: {
    HeaderBar,
    FloList,
  },
  data() {
    return {
      flolist: [],
    };
  },
  async created() {
    let rs = await get("/ProductList");
    this.flolist = rs.data;
    this.$nextTick(() => {
      this.initscroll();
    });
  },
  methods: {
    ...mapMutations(["setShow"]),
    handleClick() {},
    initscroll() {
      this.$nextTick(() => {
        this.init();
      });
    },

    init() {
      this.bs = new BScroll(this.$refs.floscroll, {
        click: true,
        scrollY: true,
        probeType: 3,
      });
      this.bs.on("scrollEnd", () => {});
      this.bs.on("scroll", (parmas) => {
        if (parmas.y < -1) {
          this.setShow(false);
        } else {
          this.setShow(true);
        }
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.outer {
  height: 100%;
  overflow: hidden;
  .inter {
    // height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>

