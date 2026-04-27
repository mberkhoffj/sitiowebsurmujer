<template>
  <div class="card-content">
    <div class="">
      <component :is="svgComponent" />
    </div>
    <div class="step-title">
      <h1 class="sub-title">{{ title }}</h1>
      <p>{{ subTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    svgComponent: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../cardStep.scss";
</style>
