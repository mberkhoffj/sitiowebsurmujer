<template>
  <div>
    <div class="welcome-image">
      <Card />
    </div>
    <div class="container">
      <div>
        <h2 class="title no-seleccionable">
          ¿Cómo funciona la postulación a un subsidio?
        </h2>
        <br />
        <h4 class="sub-title no-seleccionable">
          Toda postulación tiene sus matices, estos son algunos de los
          requisitos generales para iniciar tu proceso de postulación.
        </h4>
      </div>

      <div>
        <CardStep />
      </div>

      <div>
        <CardSubsidio />
      </div>

      <div>
        <h2 class="title no-seleccionable">
          Tiempo restante para término postulaciones a subsidios 2021
        </h2>
        <Countdown
          title="Plan de Descontaminación Atmosférica 'PDA'"
          url="pda"
        />
        <Countdown title="Colector Solar Térmico" url="colector-solar" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Card from "./components/card/Card.vue";
import Footer from "../ui/footer/Footer.vue";
import Countdown from "./components/countdown/countdown.vue";
import CardSubsidio from "./components/card-subsidio/cardSubsidio.vue";
import CardStep from "./components/card-step/cardStep.vue";
//import Nav from "../ui/nav/nav.vue";

export default {
  name: "Dashboard",
  components: {
    Card,
    Footer,
    Countdown,
    CardSubsidio,
    CardStep,
    //Nav,
  },
};
</script>

<style lang="scss">
@import "./dashboard.scss";
</style>
