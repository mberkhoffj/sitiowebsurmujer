<template>
  <div class="countdown">
    <div class="countdown-item">
      <div class="countdown-title">
        <h2 class="sub-title no-seleccionable">{{ title }}</h2>
        <router-link :to="newUrl" class="button-contact no-seleccionable"
          >Ver Detalles</router-link
        >
      </div>
      <div class="countdown-elements">
        <div class="countdown-ele">
          <p class="no-seleccionable">{{ timeLeft.days }}</p>
          <span class="no-seleccionable">Días</span>
        </div>
        <div class="countdown-ele">
          <p class="no-seleccionable">{{ timeLeft.hours }}</p>
          <span class="no-seleccionable">Horas</span>
        </div>
        <div class="countdown-ele">
          <p class="no-seleccionable">{{ timeLeft.minutes }}</p>
          <span class="no-seleccionable">Minutos</span>
        </div>
        <div class="countdown-ele">
          <p class="no-seleccionable">{{ timeLeft.seconds }}</p>
          <span class="no-seleccionable">Segundos</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  props: {
    deadline: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      interval: null,
      targetDate: new Date("2024-10-31T23:59:59"), // Fecha de comienzo
      timeLeft: {
        total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  computed: {
    newUrl() {
      return `/proyectos/${this.url}`;
    },
  },
  methods: {
    countdown() {
      const now = new Date();
      const difference = this.targetDate - now;
      if (difference > 0) {
        this.timeLeft = {
          total: difference,
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        clearInterval(this.interval);
        this.timeLeft = { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    },
    startTime(deadline) {
      if (deadline <= 0) {
        this.days = "00";
        this.hours = "00";
        this.minutes = "00";
        this.seconds = "00";
      } else {
        const countdown = new Date(deadline).getTime();

        this.interval = setInterval(() => {
          const now = new Date().getTime();
          const remainDays = countdown - now;

          const days = Math.floor(remainDays / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (remainDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (remainDays % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((remainDays % (1000 * 60)) / 1000);

          if (remainDays <= 0) {
            clearInterval(this.interval);
            this.days = "00";
            this.hours = "00";
            this.minutes = "00";
            this.seconds = "00";
          } else {
            this.days = days < 10 ? `0${days}` : days;
            this.hours = hours < 10 ? `0${hours}` : hours;
            this.minutes = minutes < 10 ? `0${minutes}` : minutes;
            this.seconds = seconds < 10 ? `0${seconds}` : seconds;
          }
        }, 1000);
      }
    },
  },
  watch: {
    deadline(newDeadline) {
      this.startTime(newDeadline);
    },
  },
  mounted() {
    this.startTime(this.deadline);
    this.countdown(); // Iniciar la cuenta regresiva
    this.interval = setInterval(this.countdown, 1000); // Actualiza cada segundo
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss">
@import "./countdown.scss";
</style>
