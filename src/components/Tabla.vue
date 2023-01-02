<template>
  <div class="container py-2">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nivel</th>
          <th scope="col">Ubicación</th>
          <th scope="col">N° Telefono</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="telefono in telefonos" :key="telefono.id">
          <td>{{ telefono.nivel }}</td>
          <td>{{ telefono.ubicacion }}</td>
          <td>{{ telefono.numero }}</td>
          <td>
            <button class="btn btn-warning btn-sm">Actualizar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <pre>{{ telefonos }}</pre>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Tabla",

  setup() {
    const store = useStore();

    return {
      telefonos: computed(() => store.getters["allTelefonos"]),
    };
  },
};
</script>

<style>
</style>