<template>
  <div id="app" class="app-body">
    <div class="header-nav">
      <Nav />
      <Wsp />
    </div>
    <div class="">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "./ui/nav/nav.vue";
import Wsp from "./whatsapp/whatsapp.vue";

export default {
  name: "App",
  components: {
    Nav,
    Wsp,
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
