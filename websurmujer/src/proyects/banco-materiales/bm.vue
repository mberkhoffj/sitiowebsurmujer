<template>
  <div>
    <div class="container-proyects">
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
import image1 from "./assets/bmImg1.jpeg";
import image2 from "./assets/bmImg2.jpeg";
import image3 from "./assets/bmImg3.jpeg";

export default {
  name: "App",
  data() {
    return {
      title: "Banco de Materiales",
      content:
        "Permite la adquisición de materiales de construcción para mejorar la vivienda. Este beneficio se entrega en formato “giftcard” a los beneficiarios con hasta 40 UF de subsidio. ",
      imageAlt: "Imagen de ejemplo",
      requirements:
        "Poseer registro social de hogares (idealmente entre el 40% al 70%), no tener otros subsidios vigentes.",
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
