<template>
  <input
    type="text"
    class="form-control mb-2"
    placeholder="Ingrese el Nivel"
    v-model.trim="telefono.nivel"
  />
  <input
    type="text"
    class="form-control mb-2"
    placeholder="Ingrese Ubicación"
    v-model.trim="telefono.ubicacion"
  />
  <input
    type="text"
    class="form-control mb-2"
    placeholder="Ingrese N° Telefono"
    v-model.trim="telefono.numero"
  />

  <!-- radio -->
  <h4 class="py-3">Estado del Telefono:</h4>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      value="completo"
      id="radio-1"
      v-model="telefono.estado"
    />
    <label class="form-check-label" for="radio-1"> Completo </label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      value="incompleto"
      id="radio-2"
      v-model="telefono.estado"
    />
    <label class="form-check-label" for="radio-2"> Incompleto </label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      value="no existe"
      id="radio-3"
      v-model="telefono.estado"
    />
    <label class="form-check-label" for="radio-3"> No Existe </label>
  </div>

  <!-- checkbox -->
  <div v-if="aparece" class="my-2">
    <h4 class="py-3">Componentes</h4>
    <div class="form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="check-1"
        value="fibra"
        v-model="telefono.componentes"
      />
      <label for="check-1" class="form-check-label">Fibra</label>
    </div>
    <div class="form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="check-2"
        value="alimentador"
        v-model="telefono.componentes"
      />
      <label for="check-2" class="form-check-label">Alimentador</label>
    </div>
    <div class="form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="check-3"
        value="fusion"
        v-model="telefono.componentes"
      />
      <label for="check-3" class="form-check-label">Fusion</label>
    </div>
  </div>
  <button type="submit" class="btn btn-secondary w-100" :disabled="bloquear">
    Procesar
  </button>
</template>

<script>
import { computed, watchEffect } from 'vue'

export default {
    name:'Input',
    components:{},
    props:{
        telefono:Object
    },

    setup(props){

        watchEffect(() => {
            if(props.telefono.estado === 'completo'){
                props.telefono.componentes = ['fibra','alimentador','fusion']
            }else{
              props.telefono.componentes = []
            }
        })

        return{

            bloquear: computed(() => {
                return props.telefono.nivel === "" || 
                props.telefono.ubicacion === "" || 
                props.telefono.numero === ""
                ? true
                : false;
            }),

            aparece: computed(() => {
                return props.telefono.estado === "incompleto" ? true :false
            })
        }
    }

};
</script>

<style>
</style>