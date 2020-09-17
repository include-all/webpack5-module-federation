<template>
  <div class="my-button">
    <button @click="handleClick">remote-button(远程按钮)</button>
  </div>
</template>

<script>
export default {
  name: "my-button",
  mixins: [],
  components: {},
  props: {
    alertValue: {
      type: String,
      default: "",
    },
  },
  computed: {},
  watch: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    handleClick() {
      alert(this.alertValue);
    },
  },
  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.my-button {
  color: red;
  button {
    font-size: 20px;
    color: blue;
  }
}
</style>
