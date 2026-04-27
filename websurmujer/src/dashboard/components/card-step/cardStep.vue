<template>
  <div class="container-services">
    <div class="group">
      <div class="card-group-v2">
        <div class="card-group-header">
          <h2 class="no-seleccionable">Junta de vecinos</h2>
        </div>
        <div class="step-flex">
          <ItemStep
            title="Quiero postular"
            subTitle="Revisa los subsidios disponibles"
            :svgComponent="postularImg"
          />
          <ItemStep
            title="Comunica"
            subTitle="Habla con tu junta de vecinos"
            :svgComponent="supportImg"
          />
          <ItemStep
            title="Documentacion"
            subTitle="Reunan documentacion necesaria"
            :svgComponent="comunicaImg"
          />
          <ItemStep
            title="Deposita en tu cuenta"
            subTitle="Si , en tu cuenta  de ahorro para 
            la vivienda"
            :svgComponent="depositoImg"
          />
          <ItemStep
            title="Asesorate con nosotros"
            subTitle="Te apoyamos en el proceso"
            :svgComponent="asesoriaImg"
          />

          <div class="card-step-contacto card-step-contacto-vecinos">
            <router-link to="/contacto" class="button-contact"
              >Contactanos</router-link
            >
            <p>Asesoramiento particular</p>
          </div>
        </div>
      </div>
    </div>
    <div class="single">
      <div class="card-single">
        <div class="card-single-header">
          <h2 class="no-seleccionable">Particulares</h2>
        </div>
        <div class="step-flex-v2">
          <ItemStep
            title="Quiero postular"
            subTitle="Revisa los subsidios disponibles"
            :svgComponent="postularImg"
          />
          <ItemStep
            title="Asesorate con nosotros"
            subTitle="Contactanos, te apoyamos en el proceso"
            :svgComponent="asesoriaImg"
          />
          <ItemStep
            title="Deposita en tu cuenta"
            subTitle="Si , en tu cuenta  de ahorro para la vivienda"
            :svgComponent="depositoImg"
          />
          <ItemStep
            title="Documentacion"
            subTitle="Reune tu documentacion necesaria"
            :svgComponent="comunicaImg"
          />

          <div class="card-step-contacto card-step-contacto-particular">
            <router-link to="/contacto" class="button-contact"
              >Contactanos</router-link
            >
            <p>Asesoramiento particular</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemStep from "./component/item-step.vue";
import Postular from "./asset/postular.svg";
import Support from "./asset/support.svg";
import Asesoria from "./asset/asesoria.svg";
import Comunica from "./asset/comunica.svg";
import Deposito from "../../../assets/deposito.svg";

export default {
  name: "CardStep",
  components: {
    ItemStep,
  },
  data() {
    return {
      postularImg: Postular,
      supportImg: Support,
      asesoriaImg: Asesoria,
      comunicaImg: Comunica,
      depositoImg: Deposito,
    };
  },
};
</script>

<style lang="scss">
@import "./cardStep.scss";
</style>
