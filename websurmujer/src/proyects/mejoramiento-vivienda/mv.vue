<template>
  <div>
    <div class="container">
      <div class="left-column">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <p>{{ content }}</p>
      </div>
      <div class="right-column">
        <img :src="imageSrc" :alt="imageAlt" />
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
export default {
  name: "App",
  data() {
    return {
      title: "Colector Solar",
      subtitle: "Subtítulo",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum ipsum quis finibus feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In et sem vitae diam vestibulum faucibus. Vivamus rhoncus nibh vitae pharetra feugiat. Nunc tempus consequat neque, non hendrerit purus maximus a. Nunc blandit vestibulum nibh a ultricies. Duis non massa vel nisl lacinia faucibus. Sed eu enim faucibus, cursus nibh ut, imperdiet quam. Curabitur fringilla nibh ex, placerat cursus augue ultrices porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris interdum, dolor nec porttitor tristique, eros libero laoreet justo, vitae elementum dolor odio et metus. Fusce vitae turpis non enim malesuada tincidunt. Ut venenatis neque ipsum. Mauris aliquam turpis nibh, ac lacinia ante pulvinar convallis. Morbi lobortis mattis turpis, id pharetra leo. Maecenas consectetur odio vitae tincidunt imperdiet. Aliquam erat volutpat. Nulla porta ultrices quam a porttitor. Sed auctor felis vitae mauris dapibus tristique. Aliquam ultricies enim et laoreet pretium. Etiam dapibus eros mauris, sit amet egestas arcu dapibus id. Vivamus et magna tellus.",
      imageSrc:
        "https://media.istockphoto.com/id/1400238072/es/vector/personas-que-tienen-una-reuni%C3%B3n-familiar-para-celebrar-juneteenth-en-el-parque.jpg?s=2048x2048&w=is&k=20&c=AlSiY9jTQO7b6cqqqWebQHDcFT89HK92opI4LM2XF8Y=",
      imageAlt: "Imagen de ejemplo",
      youtubeVideoId: "xPyJ2XhSKOI",
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
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  margin-top: 5rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.left-column,
.right-column {
  flex: 1;
  padding: 20px;
}

h1 {
  color: #333;
}
h2 {
  color: #666;
}
img,
.video-container {
  max-width: 100%;
  margin-bottom: 20px;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
