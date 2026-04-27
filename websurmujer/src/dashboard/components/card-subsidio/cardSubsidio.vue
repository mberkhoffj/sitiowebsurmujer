<template>
  <div>
    <h2 class="title no-seleccionable">
      ¿Qué subsidios existen para postular?
    </h2>
    <br />
    <h4 class="sub-title no-seleccionable">
      ¡Entérate de todos los subsidios del 2021 habilitados para iniciar tu
      proceso de postulación con Surmujer para la región del Biobío!
    </h4>
    <div class="container-benefit">
      <router-link to="/proyectos/mejoramiento-vivienda" class="card-benefit">
        <div></div>
        <h2 class="sub-title no-seleccionable">Mejoramiento de Vivienda</h2>
        <div class="image-benefit">
          <Mejoramiento />
        </div>
      </router-link>

      <router-link to="/proyectos/pda" class="card-benefit">
        <div></div>
        <h3 class="sub-title no-seleccionable title-long">
          Plan Descontaminación Atmosférica
        </h3>
        <div class="image-benefit">
          <PdaAsset />
        </div>
      </router-link>

      <router-link to="/proyectos/colector-solar" class="card-benefit">
        <div></div>
        <h2 class="sub-title no-seleccionable">Colector Solar</h2>
        <div class="image-benefit">
          <ColectorSolarAsset />
        </div>
      </router-link>

      <router-link to="/proyectos/colector-solar" class="card-benefit">
        <div></div>
        <h2 class="sub-title no-seleccionable">Banco Materiales</h2>
        <div class="image-benefit">
          <BancomaterialesAsset />
        </div>
      </router-link>

      <router-link to="/proyectos" class="card-benefit-last">
        <h2 class="sub-title no-seleccionable">Todos los subsidios</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import Mejoramiento from "../../../proyects/asset/mejoramiento.svg";
import PdaAsset from "../../../proyects/asset/pda.svg";
import ColectorSolarAsset from "../../../proyects/asset/colector-solar.svg";
import BancomaterialesAsset from "../../../proyects/asset/banco-materiales.svg";

export default {
  name: "CardSubsidio",
  components: {
    Mejoramiento,
    PdaAsset,
    ColectorSolarAsset,
    BancomaterialesAsset,
  },
};
</script>

<style lang="scss">
@import "./cardSubsidio.scss";
</style>
