<template>
  <div>
    <div class="container-uni">
      <div class="left-column">
        <h1>Alianza Universidad Santo Tomas</h1>
        <h2>{{ subtitle }}</h2>
        <p>{{ content }}</p>
        <div class="contact no-seleccionable contact-button-proyects">
          <router-link
            :to="{
              name: 'contacto',
              params: { title: titleInfo },
            }"
            class="button-contact-proyects st-button"
            >Contactanos</router-link
          >
        </div>
      </div>
      <div class="right-column">
        <img :src="imageSrc" :alt="imageAlt" />
        <div class="video-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/ust-santiago.jpg";
export default {
  name: "App",
  data() {
    return {
      title: "Colector Solar",
      subtitle: "Practicas Profesionales ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum ipsum quis finibus feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In et sem vitae diam vestibulum faucibus. Vivamus rhoncus nibh vitae pharetra feugiat. Nunc tempus consequat neque, non hendrerit purus maximus a. Nunc blandit vestibulum nibh a ultricies. Duis non massa vel nisl lacinia faucibus. Sed eu enim faucibus, cursus nibh ut, imperdiet quam. Curabitur fringilla nibh ex, placerat cursus augue ultrices porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris interdum, dolor nec porttitor tristique, eros libero laoreet justo, vitae elementum dolor odio et metus. Fusce vitae turpis non enim malesuada tincidunt. Ut venenatis neque ipsum. Mauris aliquam turpis nibh, ac lacinia ante pulvinar convallis. Morbi lobortis mattis turpis, id pharetra leo. Maecenas consectetur odio vitae tincidunt imperdiet. Aliquam erat volutpat. Nulla porta ultrices quam a porttitor. Sed auctor felis vitae mauris dapibus tristique. Aliquam ultricies enim et laoreet pretium. Etiam dapibus eros mauris, sit amet egestas arcu dapibus id. Vivamus et magna tellus.",
      imageSrc: image1,
      imageAlt: "Imagen de ejemplo",
      youtubeVideoId: "xPyJ2XhSKOI",
      titleInfo:
        "Contactacte con nosotros para ayudarte con tus dudas y procesos de practicas",
    };
  },
  computed: {
    youtubeEmbedUrl() {
      return `https://www.youtube.com/embed/${this.youtubeVideoId}`;
    },
  },
};
</script>

<style lang="scss">
@import "./aboutU.scss";
</style>
