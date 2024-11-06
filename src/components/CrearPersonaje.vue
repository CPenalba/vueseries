<template>
  <div>
    <h1>Crear Personaje</h1>
    <hr />
    <form v-on:submit.prevent="insertPersonaje()">
      <input
        type="hidden"
        v-model="personaje.idPersonaje"
        class="form-control"
      />
      <label>Nombre</label>
      <input
        type="text"
        v-model="personaje.nombre"
        class="form-control"
      /><br />
      <label>Imagen</label>
      <input
        type="text"
        v-model="personaje.imagen"
        class="form-control"
      /><br />
      <label>Serie</label>
      <select class="form-select" v-model="personaje.idSerie">
        <option v-for="s in series" :key="s" :value="s.idSerie">
          {{ s.nombre }}
        </option>
      </select>

      <br />

      <button class="btn btn-success">Crear personaje</button>
    </form>
  </div>
</template>

<script>
import ServiceSeries from "./../services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "CrearPersonaje",
  data() {
    return {
      series: [],
      personaje: {
        idPersonaje: 0,
        nombre: "",
        imagen: "",
        idSerie: 0,
      },
    };
  },
  methods: {
    insertPersonaje() {
      service.crearPersonaje(this.personaje).then(() => {
        this.$router.push(`/buscarpers/${this.personaje.idSerie}`);
      });
    },
  },
  mounted() {
    service.loadSeries().then((result) => {
      this.series = result;
    });
  },
};
</script>
