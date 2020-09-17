<template>
  <div class="module-federation">
    <h1>app1 page</h1>
    <myButton alertValue="弹出提示" />
    <myText></myText>
  </div>
</template>

<script>
import myButton from "./myButton";
import myText from "appRemote/myText";

export default {
  name: "module-federation",
  components: { myButton, myText },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
