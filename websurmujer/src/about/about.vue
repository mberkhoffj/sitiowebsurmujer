<template>
  <div class="about-main">
    <div class="container-team">
      <div class="image">
        <CardBanner></CardBanner>
      </div>
    </div>

    <div class="container-title no-seleccionable">
      <h1 class="title title-team">Equipo Sur Mujer</h1>
    </div>
    <div class="about team no-seleccionable">
      <Team :profile="profile_elisa"></Team>
      <Team :profile="profile_miguel"></Team>

      <div class="card-vision description-person">
        <h1 class="sub-title">Misión</h1>
        <div class="line"></div>
        <p>
          Entregar una solución habitacional integral, que cumpla con las
          expectativas de sus futuros propietarios; acompañarlos y orientarlos
          desde el proceso de elaboración y postulación del proyecto hasta la
          obtención del beneficio y luego su materialización.
        </p>

        <h1 class="sub-title">Visión</h1>
        <div class="line"></div>
        <p>
          Ser un actor principal en la asesoría de subsidios y gestión técnica,
          reconocida por sus valores éticos y pasión por alcanzar la más alta
          calidad en el desarrollo de soluciones habitacionales y acompañamiento
          social.
        </p>
      </div>

      <div class="no-seleccionable title-team-xs">
        <h1 class="title">Equipo Sur Mujer</h1>
      </div>
    </div>
    <div class="about team no-seleccionable">
      <Team :profile="profile_barbara"></Team>
    </div>
    <div class="line-about-deads"></div>
    <div class="subtitle-line">
      Todos los que pasaron por el sendero , hicieron el camino
    </div>
    <div class="about team no-seleccionable">
      <Team :profile="profile_katy"></Team>
      <Team :profile="profile_damaris"></Team>
    </div>
  </div>
</template>

<script>
import elisa from "../assets/elisa2.jpg";
import damaris from "../assets/damaris2.jpg";
import sebastian from "../assets/sebastian2.jpg";
import katherine from "../assets/katherin.jpg";
import miguel from "../assets/miguel2.jpg";
import barbara from "../assets/BarbaraMunoz.png";
import alberto from "../assets/Alberto.png";
import Team from "../about/component/card-team.vue";
import CardBanner from "./component/card-banner.vue";

export default {
  name: "About",
  components: {
    Team,
    CardBanner,
  },
  data() {
    return {
      profile_elisa: {
        name: "Maria Elisa Jerez",
        logo: elisa,
        position: "Fundadora y Representante legal",
        description: [
          "Creadora de EP, profesional del area Entregar Creadora de EP, profesional del area Entregar Creadora de EP, profesional del area Entregar Creadora de EP, profesional del area Entregar Creadora de EP, profesional del area Entregar Creadora de EP, profesional del area Entregar Creadora de EP, profesional del area Entregar Creadora de EP, profesional del area Entregar Creadora de EP, profesional del area Entregar",
        ],
      },
      profile_miguel: {
        name: "Miguel Navarrete Roa",
        logo: miguel,
        position: "Arquitecto",
        description: [
          "Arquitecto de la Universidad del Biobio, con una vasta experiencia en obras de Servicios públicos como el Hospital Victor Ríos Ruiz de Los Angeles y obras de arquitectura en el área Privada; destacando algunas obras especiales como el Proyecto del edificio consistorial de la municipalidad de Alto BioBio.",
          "En vivienda he participado de proyectos en varias comunas de la región: Santa Bárbara, Negrete, mulchen, Laja, entre otros.",
        ],
      },
      profile_damaris: {
        name: "Dámaris Aguayo",
        logo: damaris,
        position: "Trabajadora Social",
        description: [
          "Trabajadora Social egresada de la Universidad del Biobío sede Chillán. Me desempeño como profesional del área social en entidad patrocinante sur mujer, entregando orientación y acompañamiento a las familias en el proceso de postulación y aplicación de proyectos.",
          "Tengo el deber de evidenciar necesidades comunes en los grupos de postulantes y sus familias, con el fin de desarrollar actividades educativas/participativas que aporten al mejoramiento de la calidad de vida de cada una de ellas.",
        ],
      },
      profile_sebastian: {
        name: "Sebastian Cuevas",
        logo: sebastian,
        position: "Dibujante técnico",
        description: [
          "Trabajadora Social egresada de la Universidad del Biobío sede Chillán. Me desempeño como profesional del área social en entidad patrocinante sur mujer, entregando orientación y acompañamiento a las familias en el proceso de postulación y aplicación de proyectos.",
          "Tengo el deber de evidenciar necesidades comunes en los grupos de postulantes y sus familias, con el fin de desarrollar actividades educativas/participativas que aporten al mejoramiento de la calidad de vida de cada una de ellas.",
        ],
      },
      profile_katy: {
        name: "Katherine Cid Arias",
        logo: katherine,
        position: "Trabajadora Social",
        description: [
          "Trabajadora Social egresada de la Universidad del Biobío sede Chillán. Me desempeño como profesional del área social en entidad patrocinante sur mujer, entregando orientación y acompañamiento a las familias en el proceso de postulación y aplicación de proyectos.",
          "Tengo el deber de evidenciar necesidades comunes en los grupos de postulantes y sus familias, con el fin de desarrollar actividades educativas/participativas que aporten al mejoramiento de la calidad de vida de cada una de ellas.",
        ],
      },
      profile_barbara: {
        name: "Barbara Muñoz",
        logo: barbara,
        position: "Trabajadora Social",
        description: [
          "Trabajadora Social egresada de la Universidad del Biobío sede Chillán. Me desempeño como profesional del área social en entidad patrocinante sur mujer, entregando orientación y acompañamiento a las familias en el proceso de postulación y aplicación de proyectos.",
          "Tengo el deber de evidenciar necesidades comunes en los grupos de postulantes y sus familias, con el fin de desarrollar actividades educativas/participativas que aporten al mejoramiento de la calidad de vida de cada una de ellas.",
        ],
      },
      profile_Alberto: {
        name: "Alberto Maass",
        logo: alberto,
        position: "Ingeniero Civil Estructural",
        description: [
          "Trabajadora Social egresada de la Universidad del Biobío sede Chillán. Me desempeño como profesional del área social en entidad patrocinante sur mujer, entregando orientación y acompañamiento a las familias en el proceso de postulación y aplicación de proyectos.",
          "Tengo el deber de evidenciar necesidades comunes en los grupos de postulantes y sus familias, con el fin de desarrollar actividades educativas/participativas que aporten al mejoramiento de la calidad de vida de cada una de ellas.",
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "./about.scss";
</style>
