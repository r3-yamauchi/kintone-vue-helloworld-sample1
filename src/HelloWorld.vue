<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["param1", "param2"],
  data() {
    return {
      msg: `${this.param1} および ${this.param2}`
    };
  }
};
</script>
