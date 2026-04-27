<template>
  <a
    class="container-whatsapp float-whatsapp"
    href="https://api.whatsapp.com/send?phone=56976360106"
    target="_blank"
  >
    <whatsapp />
    <p>Contactanos</p>
  </a>
</template>

<script>
import whatsapp from "./asset/whatsapp.svg";

export default {
  data() {
    return {
      whatsapp,
    };
  },
  components: {
    whatsapp,
  },
};
</script>

<style lang="scss">
@import "./whatsapp.scss";
</style>
