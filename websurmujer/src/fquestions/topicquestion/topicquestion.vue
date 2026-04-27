<template>
  <div class="fquestion">
    <div class="container-questions">
      <div
        v-for="(element, index) in topic.objects"
        :key="index"
        :class="element.class"
        @click="toggleActive(index, element)"
      >
        <component :is="element.img" />
        <p>{{ element.name }}</p>
      </div>
    </div>
    <div class="anwsers">
      <Listquestion
        v-if="topic.activeObject === 0"
        :question="question1"
      ></Listquestion>
      <Listquestion
        v-if="topic.activeObject === 1"
        :question="question2"
      ></Listquestion>
      <Listquestion
        v-if="topic.activeObject === 2"
        :question="question3"
      ></Listquestion>
      <Listquestion
        v-if="topic.activeObject === 3"
        :question="question4"
      ></Listquestion>
    </div>
  </div>
</template>

<script>
import Svgmap from "./asset/svgmap";
import Svglist from "./asset/svglist";
import Svgmessage from "./asset/svgmessage";
import Svgsecurity from "./asset/svgsecurity";
import Listquestion from "../listquestion/listquestion";

export default {
  components: {
    Svgmap,
    Svglist,
    Svgmessage,
    Svgsecurity,
    Listquestion,
  },
  data() {
    return {
      question1: [
        {
          id: 1,
          title: "¿Qué son las Entidades Patrocinantes o EP?",
          content:
            "Son personas naturales o jurídicas, públicas o privadas, con o sin fines de lucro, cuyas principales funciones son: asesorar individual o colectivamente a las familias en el proceso de postulación a un subsidio del MINVU, elaborar los proyectos técnicos de vivienda y/o de urbanización, prestar asesoría legal durante el desarrollo del proyecto y acompañar socialmente a las familias desde la postulación hasta el término definitivo del proyecto.",
        },
        {
          id: 2,
          title: "¿Cúal es el Nombre de la E.P.?",
          content: " Consultora y E.P. Sur Mujer Ltda. ",
        },

        {
          id: 3,
          title: "¿Cúal es la dirección de la oficina?",
          content: "Avda. Alemania 355",
        },
        {
          id: 4,
          title:
            "¿Dónde saco el certificado de avalúo fiscal detallado del S.I.I?",
          content:
            "1° piso Municipalidad, Caupolican #399, Los angeles, Region del biobio",
        },
        {
          id: 5,
          title: "¿Qué es el RSH?",
          content:
            "El registro social de hogares o RSH es un sistema de información cuyo fin es apoyar los procesos de selección de beneficiarios de un conjunto amplio de subsidios y programas sociales",
        },
        {
          id: 6,
          title: "¿Qué es un CST?",

          arrayContent: [
            "Colector solar térmico o CST son equipos que aprovechan la energía solar para calentar agua para el consumo doméstico, lo que trae consigo una serie de beneficios",
            "1. Permite a las familias que no cuentan con otro medio para producir agua caliente sanitaria, acceder a este servicio. ",
            "2. En viviendas que si cuentan con un medio para producir agua caliente (generalmente calefón a gas), un SST genera un ahorro importante en el consumo de energía, el cual se traspasa al presupuesto familiar.",
            "3. El uso de energías renovables no convencionales, como la solar, permite reducir la emisión de contaminantes al interior y exterior de las viviendas, contribuye a la conservación de los recursos naturales y a la disminución del consumo de energía a nivel país",
          ],
        },
      ],
      question2: [
        {
          id: 1,
          title: "¿Para qué sirven los proyectos?",
          content:
            "Debido a que Los Ángeles es considerada zona saturada de material particulado, estos proyectos buscan la adaptación de las comunidades más vulnerables a los impactos de la contaminación, la pobreza energética y la vulnerabilidad habitacional, así como a fortalecer la mitigación asociada a la reducción del consumo energético de viviendas por medio de la aplicación de estas medidas y así atender a las familias que requieren acondicionar térmicamente sus viviendas para mejorar su estándar de confort térmico.",
        },
        {
          id: 2,
          title:
            "¿Con qué constructora trabajamos los proyectos plan de Descontaminación Atmosférica PDA?",
          content: "Constructora H&H, Temuco",
        },
        {
          id: 3,
          title:
            "¿Con qué constructora trabajamos los proyectos colector Solar Térmico CST?",
          content: "Constructora e Inmobiliaria P&M, Chillán.",
        },
      ],
      question3: [
        {
          id: 1,
          title: "¿Qué es un subsidio?",
          content:
            "Los subsidios son son un incentivo económico para personas o familias de ingresos medios o bajos",
        },
        {
          id: 2,
          title:
            "¿En qué consiste el subsidio plan de Descontaminación Atmosférica PDA?",
          content:
            "Proyecto de mejoramiento de vivienda con el fin de cumplir con los requisitos para el acondicionamiento térmico de su vivienda en zonas saturadas con plan de descontaminación atmosférica, destinado al revestimiento de la fachada exterior de la vivienda, cambio de ventanas originales, por ventanas de termo panel, sellado de puertas, recambio de estufa y regularización de la vivienda.",
        },
        {
          id: 3,
          title: "¿En qué consiste el subsidio de colector Solar Térmico CST?",
          content:
            "En la instalación en obras de innovación de eficiencia energética que se destinan a la instalación de un Colector Solar Térmico en la vivienda. Este sistema transforma la energía solar en energía térmica, llevando por medio de las tuberías agua caliente para baño y/o cocina.",
        },
      ],
      question4: [
        {
          id: 1,
          title: "¿Cuánto es el ahorro que debo tener?",
          content:
            "Para acceder al subsidio necesita un ahorro de 1,5UF las personas que su calificación socioeconómica sea entre el 40% y 60% más vulnerable en su RSH. Para quienes estén sobre el 60% y hasta el 90% menos vulnerable en la CSE del RSH deben enterar el total del ahorro mínimo que son 3UF. En el caso de Adultos Mayores podrán postular a este llamado, en forma individual o colectiva, quienes estén hasta en el tramo del 90% de Clasificación Socioeconómica según el Registro Social de Hogares con una 1UF de ahorro",
        },
        {
          id: 2,
          title: "¿Qué plazo se tiene para realizar el depósito?",
          content:
            "El ahorro mínimo exigido para proyectos debe estar en una cuenta de ahorro para la vivienda (a nombre del postulante), que puede ser del Banco Estado, Banco Scotiabank, Coopeuch o Caja los Andes. Este ahorro mínimo debe estar como plazo máximo el último día hábil del mes anterior al ingreso de los proyectos en la delegación de SERVIU según corresponda. ",
        },
        {
          id: 3,
          title:
            "¿Qué documentos se necesitan para la postulación de plan de Descontaminación Atmosférica PDA?",

          arrayContent: [
            "Fotocopia de carnet de identidad por ambos lados. (y de su cónyuge si corresponde)",
            "Cartola (Banco) que acredite el ahorro minimo 1,5UF para tramo 40% - 60% RSH y 3UF para tramo de mas de 61% RSH",
            "Copia datos Cuenta de Ahorro",
            "Copia Certificado de la DOM VIGENTE o Certificado de Vivienda Social",
            "Certificado de Avalúo Fiscal Detallado",
            "Copia Registro Social de Hogares",
            "Copia Credencial del Registro Nacional de Discapacidad en el caso de existir personas con discapacidad en el grupo familiar",
          ],
        },
        {
          id: 4,
          title:
            "¿Qué documentos se necesitan para la postulación de colector Solar Térmico CST?",
          arrayContent: [
            "Fotocopia de carnet de identidad por ambos lados. (y de su cónyuge si corresponde)",
            "Cartola (Banco) que acredite el ahorro minimo 1,5UF para tramo 40% - 60% RSH y 3UF para tramo de mas de 61% RSH",
            "Copia Cuenta de Ahorro",
            "Copia Certificado de la DOM VIGENTE o Certificado de Vivienda Social",
            "Certificado de Avalúo Fiscal Detallado",
            "Copia Registro Social de Hogares",
            "Copia Credencial del Registro Nacional de Discapacidad en el caso de existir personas con discapacidad en el grupo familiar",
          ],
        },
        {
          id: 5,
          title:
            "¿Qué condiciones debe tener la vivienda para poder postular a plan de Cescontaminación Atmosférica PDA?",
          arrayContent: [
            "Vivienda social, ",
            "Se considerarán viviendas objeto del programa las que hayan obtenido su Permiso de Edificación y Recepción con posterioridad al 31 de diciembre del año 2007.",
            "Las viviendas deberán contar con permiso de edificación y recepción definitiva.",
            "Excepcionalmente, podrán postular a este llamado los propietarios de viviendas de hasta 200 m2 de superficie, previa revisión de SERVIU de su factibilidad.",
          ],
        },
        {
          id: 6,
          title:
            "¿Qué condiciones debe tener la vivienda para poder postular colector Solar Térmico CST?",
          arrayContent: ["Vivienda social, ", "Techo de zinc"],
        },
      ],
      topic: {
        activeObject: 0,
        objects: [
          {
            name: "General",
            img: "Svgmessage",
            id: 1,
            class: "question-item active",
          },
          {
            name: "Proyecto & Constructora",
            img: "Svgmap",
            id: 2,
            class: "question-item large",
          },
          {
            name: "Subsidios",
            img: "Svgsecurity",
            id: 3,
            class: "question-item",
          },
          {
            name: "Requerimientos",
            img: "Svglist",
            id: 4,
            class: "question-item",
          },
        ],
      },
    };
  },
  methods: {
    toggleActive(index, element) {
      this.topic.objects.forEach((item, i) => {
        item.class = i === index ? "question-item active" : "question-item";
      });

      this.topic.activeObject = index;
    },
  },
};
</script>
