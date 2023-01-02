<template>
  <div class="container">
    <h1 class="text-center py-3">Telefonos</h1>

    <form @submit.prevent="procesarFormulario">

      <Input :telefono="telefono"/>

    </form>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
import { ref } from "vue";
import { useStore } from 'vuex';

const shortid = require('shortid');

export default {
  name: "Formularios",
  components: {
    Input
  },

  setup() {

    const store = useStore()

    const telefono = ref({
      id : shortid.generate(),
      nivel : '',
      ubicacion : '',
      numero : '',
      estado : '',
      componentes : []
    })

    return {
      telefono,

      procesarFormulario: () => {
        console.log(telefono)
        store.dispatch('getTelefonos', telefono)
      }

    };
  },
};
</script>
