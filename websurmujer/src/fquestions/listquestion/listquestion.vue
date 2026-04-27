<template>
  <div class="contenedor-preguntas">
    <div
      v-for="(element, index) in question"
      :key="index"
      @click="toggleActive"
      class="contenedor-pregunta"
    >
      <div class="question-container">
        <p class="pregunta no-seleccionable">{{ element.title }}</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg>
      </div>
      <p v-if="element.content" class="respuesta no-seleccionable">{{ element.content }}</p>
      <ul v-else class="respuesta no-seleccionable">
        <li v-for="(item, i) in element.arrayContent" :key="i">- {{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      preguntas: {
        activeObject: null,
        objects: this.question || []
      }
    };
  },
  methods: {
    toggleActive(event) {
      const container = event.currentTarget;
      const respuesta = container.querySelector(".respuesta");
      const alturaElemento = respuesta.scrollHeight;

      if (!respuesta.style.maxHeight) {
        container.classList.add("activeplus");
        respuesta.style.maxHeight = alturaElemento + "px";
      } else {
        respuesta.style.maxHeight = null;
        container.classList.remove("activeplus");
      }
    }
  }
};
</script>


