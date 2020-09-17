<template>
  <div class="module-federation">
    <h1>webpack5 module-federation</h1>
    <div>
      <remoteButton class="btn" alertValue="这是来自使用页面的消息" />
    </div>
  </div>
</template>

<script>
import remoteButton from "app1Remote/myButton";
// const myButton = () => import("app1Remote/myButton");
import utils from "app1Remote/utils";

export default {
  name: "module-federation",
  mixins: [],
  components: {
    remoteButton,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    console.log(utils.add(1, 2));
    console.log(utils.getMostNum([5, 2, 8]));
  },
};
</script>

<style lang="less" scoped></style>
