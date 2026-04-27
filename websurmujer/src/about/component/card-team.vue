<template>
  <div class="card-team">
    <div class="image-person">
      <img :src="profile.logo" :alt="profile.name" />
    </div>

    <h2>{{ profile.name }}</h2>
    <h3 class="sub-title-card">{{ profile.position }}</h3>
    <div class="line2"></div>
    <div>
      <p
        v-for="(element, index) in profile.description"
        :key="index"
        :class="index === 0 ? 'text-card' : 'text-card salto'"
      >
        {{ element }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
@import "../about.scss";
</style>
