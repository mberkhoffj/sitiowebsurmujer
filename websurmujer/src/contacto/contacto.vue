<template>
  <div class="contact-container no-seleccionable">
    <h2 class="title">
      {{
        title != null
          ? title
          : "Para asesorarte con nosotros completa el formulario y te contactaremos muy pronto!"
      }}
    </h2>

    <div v-if="!status" class="container-contact">
      <div class="single-contact">
        <div class="card-single special">
          <div class="card-single-header">
            <h3>Formulario de contacto</h3>
          </div>
          <div class="contact-form">
            <form @submit.prevent="submitForm" ref="form">
              <div class="item-form">
                <div class="input-double">
                  <input
                    v-model="form.user_rut"
                    class="input-form"
                    type="text"
                    name="user_rut"
                    placeholder="Ingrese su rut sin puntos"
                    v-validate="'required|rut'"
                    data-vv-as="RUT"
                  />

                  <span v-if="errors.has('user_rut')" class="error">
                    {{ errors.first("user_rut") }}
                  </span>
                </div>
              </div>

              <div class="item-form">
                <div class="input-double">
                  <input
                    v-model="form.user_name"
                    class="input-form"
                    type="text"
                    name="user_name"
                    placeholder="Nombre completo"
                    v-validate="'required|min:10|max:40|nombre'"
                    data-vv-as="nombre"
                  />
                  <span v-if="errors.has('user_name')" class="error">
                    {{ errors.first("user_name") }}
                  </span>
                </div>
              </div>

              <div class="item-form">
                <div class="input-double">
                  <input
                    v-model="form.user_email"
                    class="input-form"
                    type="text"
                    name="user_email"
                    placeholder="Correo de contacto"
                    v-validate="'required|email|max:40'"
                    data-vv-as="correo"
                  />

                  <span v-if="errors.has('user_email')" class="error">
                    {{ errors.first("user_email") }}
                  </span>
                </div>
              </div>

              <div class="item-form">
                <div class="input-double">
                  <input
                    v-model="form.user_number"
                    class="input-form"
                    type="number"
                    name="user_number"
                    placeholder="Telefono de contacto de 8 dígitos"
                    v-validate="'required|regex:\\d{8}|max:8|min:8'"
                    data-vv-as="telefono"
                  />

                  <span v-if="errors.has('user_number')" class="error">
                    {{ errors.first("user_number") }}
                  </span>
                </div>
              </div>

              <div class="item-form text-area-item">
                <textarea
                  v-model="form.user_message"
                  id="textarea"
                  name="user_message"
                  placeholder="Motivo de contacto"
                  cols="40"
                  rows="5"
                  v-validate="'required|min:20|max:100'"
                  data-vv-as="mensaje"
                ></textarea>
                <span v-if="errors.has('user_message')" class="error">
                  {{ errors.first("user_message") }}
                </span>
              </div>

              <input
                class="button-proyects"
                type="submit"
                value="Enviar"
                :disabled="status"
              />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="center-loader">
      <div class="loader"></div>
      <div>{{ message }}</div>
    </div>
  </div>
</template>

<script>
//import emailjs from "emailjs-com";

export default {
  props: ["title"],
  data() {
    return {
      status: false,
      message: "Procesando...",
      form: {
        user_rut: "",
        user_name: "",
        user_email: "",
        user_number: "",
        user_message: "",
      },
    };
  },
  methods: {
    /*
    onSubmit() {
      this.status = true;

      emailjs
        .sendForm(
          "service_4lya95f",
          "template_oe7ps2k",
          this.$refs.form,
          "user_E0zBHBwZzvhVVzI2CISMP"
        )
        .then(
          () => {
            this.message = "Formulario enviado correctamente";
            setTimeout(() => {
              this.$router.push("/");
            }, 3000);
          },
          (error) => {
            this.status = false;
            console.log(error.text);
          }
        );
    },
    */
    submitForm() {
      this.$validator.validateAll().then((isValid) => {
        if (isValid) {
          alert("Formulario enviado correctamente");
        } else {
          alert("Hay errores en el formulario");
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "./contacto.scss";
</style>
