<template>
  <div>
    <h1>Modificar personaje</h1>
    <hr />
    <form v-on:submit.prevent="updatePersonaje()">
      <label>Serie</label>
      <br />
      <select class="form-select" @change="mostrarSerie" v-model="idSerie">
        <option v-for="s in series" :key="s" :value="s.idSerie">
          {{ s.nombre }}
        </option>
      </select>
      <br />
      <label>Personaje</label>
      <br />
      <select
        class="form-select"
        @change="mostrarPersonaje"
        v-model="idPersonaje"
      >
        <option v-for="p in personajes" :key="p" :value="p.idPersonaje">
          {{ p.nombre }}
        </option>
      </select>
      <br />
      <button class="btn btn-success">Modificar personaje</button>
    </form>

    <div class="containerr">
      <div v-if="serie">
        <h2>{{ serie.nombre }}</h2>
        <hr />
        <img :src="serie.imagen" width="400px" height="400px" />
      </div>
      <div v-if="personaje">
        <h2>{{ personaje.nombre }}</h2>
        <hr />
        <img :src="personaje.imagen" width="400px" height="400px" />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSeries from "./../services/ServiceSeries";
const service = new ServiceSeries();

export default {
  name: "ModificarPersonaje",
  data() {
    return {
      series: [],
      personajes: [],
      idSerie: 0,
      idPersonaje: 0,
      serie: null,
      personaje: null,
    };
  },
  mounted() {
    service.loadSeries().then((result) => {
      this.series = result;
      if (this.series.length > 0) {
        this.idSerie = this.series[0].idSerie;
      }
    });
    service.loadPersonajes().then((result) => {
      this.personajes = result;
      if (this.personajes.length > 0) {
        this.idPersonaje = this.personajes[0].idPersonaje;
      }
    });
  },
  methods: {
    mostrarSerie() {
      service.findSerie(this.idSerie).then((result) => {
        this.serie = result;
      });
    },
    mostrarPersonaje() {
      service.findPersonaje(this.idPersonaje).then((result) => {
        this.personaje = result;
      });
    },
    updatePersonaje() {
      service
        .modificarPersonaje(this.idPersonaje, this.idSerie)
        .then((result) => {
          console.log(result);
          this.$router.push("/buscarpers/" + this.idSerie);
        });
    },
  },
};
</script>

<style>
.containerr {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
</style>
