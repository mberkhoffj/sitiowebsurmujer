<template>
  <div>
    <div class="container-proyects background-container">
      <div class="left-column">
        <div class="sub-left-container">
          <h1>{{ title }}</h1>
          <p>{{ content }}</p>
        </div>
        <div class="sub-left-container">
          <h2>Requisitos</h2>
          <p>{{ requirements }}</p>
        </div>
        <div class="sub-left-container">
          <h2>Documentos requeridos</h2>
          <div class="reque-list">
            <li v-for="(document, index) in documents" :key="index">
              {{ document }}
            </li>
          </div>
        </div>
        <div class="contact no-seleccionable contact-button-proyects">
          <router-link to="/contacto" class="button-contact-proyects"
            >Contactanos</router-link
          >
        </div>
      </div>
      <div class="right-column">
        <div class="image-gallery">
          <div class="image-container">
            <transition name="fade">
              <img
                :src="currentImage"
                :alt="'Imagen ' + (currentIndex + 1)"
                :key="currentIndex"
              />
            </transition>
            <div class="controls">
              <button @click="previousImage" class="control-button left">
                &lt;
              </button>
              <button @click="nextImage" class="control-button right">
                &gt;
              </button>
            </div>
          </div>
        </div>
        <div class="video-container">
          <iframe
            width="560"
            height="315"
            :src="youtubeEmbedUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "./assets/cvImg1.jpeg";
import image2 from "./assets/cvImg2.jpeg";
import image3 from "./assets/cvImg3.jpeg";

export default {
  name: "App",
  data() {
    return {
      title: "Colector Solar Térmico",
      content:
        "Son equipos que aprovechan la energía solar para generar calor y producir agua caliente que será utilizada en la vivienda. Este sistema genera un ahorro importante en el consumo de energía, el cual se traspasa al presupuesto familiar.",
      imageAlt: "Imagen de ejemplo",
      requirements:
        "Poseer registro social de hogares (idealmente entre el 40% al 70%), no tener otros subsidios vigentes, contar con un calefón y una instalación de agua en buen estado; en cuanto a quienes cuenten con ducha eléctrica la postulación está sujeto a revisión técnica.",
      documents: [
        "Fotocopia de carnet por ambos lados.",
        "Cuenta de ahorro para la vivienda (Cartola en Banco Estado o Coopeuch).",
        "Avaluó fiscal detallado, del SII (Servicio de Impuestos Internos). ",
        "Certificado de Vivienda Social (Dirección de Obras Municipal).",
        "Cartola Registro Social de Hogares.",
        "Fotocopia Certificado de discapacidad o CONADI (solo si se acredita).",
      ],
      youtubeVideoId: "xPyJ2XhSKOI",
      images: [image1, image2, image3],
      currentIndex: 0,
    };
  },
  methods: {
    previousImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
  computed: {
    youtubeEmbedUrl() {
      return `https://www.youtube.com/embed/${this.youtubeVideoId}`;
    },
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
};
</script>

<style lang="scss"></style>
