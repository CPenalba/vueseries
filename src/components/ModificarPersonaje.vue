<template>
  <div>
    <h1>Modificar personaje</h1>
    <hr />
    <form>
      <label>Serie</label>
      <br />
      <select class="form-select">
        <option v-for="s in series" :key="s" :value="s.idSerie">
          {{ s.nombre }}
        </option>
      </select>
      <br />
      <label>Personaje</label>
      <br />
      <select class="form-select">
        <option v-for="p in personajes" :key="p" :value="p.idPersonaje">
          {{ p.nombre }}
        </option>
      </select>
      <br />
      <button class="btn btn-success">Modificar personaje</button>
    </form>
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
    };
  },
  mounted() {
    service.loadSeries().then((result) => {
      this.series = result;
    });
    service.loadPersonajes().then((result) => {
      this.personajes = result;
    });
  },
};
</script>

<style></style>
