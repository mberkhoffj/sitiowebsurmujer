<template>
  <div class="container-card">
    <div class="card">
      <div class="card-body no-seleccionable">
        <h2>
          Creemos en un mundo donde todo ser humano tenga derecho a vivir
          dignamente
        </h2>
        <p>¿Buscas postular a un subsidio?</p>
      </div>

      <div class="card-dashboard">
        <div class="services">
          <div class="proyects no-seleccionable">
            <router-link to="/proyectos" class="button-proyects"
              >Proyectos</router-link
            >
            <p class="subtitle-proyects">
              Revisa las postulaciones disponibles
            </p>
          </div>
          <div class="contact no-seleccionable">
            <router-link to="/contacto" class="button-contact"
              >Ir formulario</router-link
            >
            <p>Necesitas contactarnos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style lang="scss">
@import "./card.scss";
</style>
