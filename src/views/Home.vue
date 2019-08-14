<template>
  <div class="home">
    <img
      class="inline"
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <button
      class="btn btn-primary"
      @click="gotoPage('tree-table')"
    >Goto Page</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    gotoPage(pathName) {
      console.log("goto " + pathName);
      this.$router.push({ name: pathName });
    }
  }
};
</script>
