<template>
  <div class="container-benefit card-proyect">
    <div>
      <router-link :to="project.url" class="card-benefit-proyect">
        <h2 class="sub-title no-seleccionable">{{ project.title }}</h2>
        <div class="image-benefit">
          <component :is="svgComponent" />
        </div>
        <div class="postulacion">
          <div class="title-proyect-card">Proceso postulacion:</div>
          <p
            class=""
            :class="days > 0 ? 'count-size-green bg-green' : 'count-size'"
          >
            {{ days > 0 ? `Finaliza en ${days} dias` : "Finalizado" }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountDownCard",
  props: {
    /*
    deadline: {
      type: Number,
      default: 0,
    },
    */
    project: {
      type: Object,
      required: true,
    },
    svgComponent: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      days: "3",
      interval: null,
    };
  },
  methods: {
    /*
    startTime(deadline) {
      if (deadline <= 0) {
        this.days = 0;
      } else {
        const countdown = new Date(deadline).getTime();
        this.interval = setInterval(() => {
          const now = new Date().getTime();
          const remainDays = countdown - now;

          const days = Math.floor(remainDays / (1000 * 60 * 60 * 24));

          if (remainDays <= 0) {
            clearInterval(this.interval);
            this.days = 0;
          } else {
            this.days = days;
          }
        }, 1000);
      }
    },
    */
  },
  mounted() {
    //this.startTime(this.deadline);
  },
  beforeDestroy() {
    /*    if (this.interval) {
      clearInterval(this.interval);
    }
    */
  },
};
</script>

<style lang="scss">
@import "../../proyects.scss";

.router-link-active {
  text-decoration: none;
  color: inherit;
}

.router-link {
  text-decoration: none;
  color: inherit;
}
</style>
