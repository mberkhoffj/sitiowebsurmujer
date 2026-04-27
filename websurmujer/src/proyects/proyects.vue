<template>
  <div class="container-proyect">
    <h2 class="title no-seleccionable">
      Proyectos en <span class="green-span"> Sur</span>Mujer
    </h2>
    <h3 class="sub-title no-seleccionable main-proyect-card">
      Selecciona el proyecto para ver en detalle lo necesario para su
      postulación
    </h3>
    <div class="sub-title no-seleccionable">
      (DS. 255, TÍTULO II, MEJORAMIENTO DE VIVIENDA)
    </div>

    <div class="container-new-card">
      <!-- 
      <CountDownCard
        :project="proyect1"
        deadline="Fri Jun 24 2025 00:00:00 GMT-0400"
        :svgComponent="mejoramientoImg"
      />
      -->
      <CountDownCard
        :project="proyect2"
        deadline="Sat Oct 30 2025 00:00:00 GMT-0300"
        :svgComponent="pdaImg"
      />
      <CountDownCard
        :project="proyect3"
        deadline="Fri Jun 26 2025 00:00:00 GMT-0400"
        :svgComponent="colectorSolarImg"
      />
      <CountDownCard
        :project="proyect4"
        deadline="Fri Jun 28 2025 00:00:00 GMT-0400"
        :svgComponent="bancoMaterialesImg"
      />
    </div>
  </div>
</template>

<script>
import CountDownCard from "./components/countdown-card/countdown-card.vue";
import Mejoramiento from "./asset/mejoramiento.svg";
import PdaAsset from "./asset/pda.svg";
import ColectorSolarAsset from "./asset/colector-solar.svg";
import BancomaterialesAsset from "./asset/banco-materiales.svg";

export default {
  name: "Proyects",
  components: {
    CountDownCard,
    //Mejoramiento,
    //PdaAsset,
    //ColectorSolarAsset,
    //BancomaterialesAsset
  },
  data() {
    return {
      mejoramientoImg: Mejoramiento,
      pdaImg: PdaAsset,
      colectorSolarImg: ColectorSolarAsset,
      bancoMaterialesImg: BancomaterialesAsset,
      proyect1: {
        title: "Mejoramiento de Vivienda",
        url: "/proyectos/mejoramiento-vivienda",
      },
      proyect2: {
        title: "Plan Descontaminación Atmosférica PDA",
        url: "/proyectos/pda",
      },
      proyect3: {
        title: "Colector Solar",
        url: "/proyectos/colector-solar",
      },
      proyect4: {
        title: "Banco Materiales",
        url: "/proyectos/banco-materiales",
      },
    };
  },
};
</script>

<style lang="scss">
@import "./proyects.scss";
</style>
