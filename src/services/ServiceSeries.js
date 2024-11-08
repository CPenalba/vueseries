import Global from "@/Global";
import axios from "axios";

export default class ServiceSeries {
  loadSeries() {
    return new Promise(function (resolve) {
      let series = [];
      let request = "api/series";
      let url = Global.urlApiSeries + request;
      axios.get(url).then((response) => {
        series = response.data;
        resolve(series);
      });
    });
  }

  findSerie(id) {
    return new Promise(function (resolve) {
      let request = "api/series/" + id;
      let url = Global.urlApiSeries + request;
      let serie = {};
      axios.get(url).then((response) => {
        serie = response.data;
        resolve(serie);
      });
    });
  }

  findPersonaje(id) {
    return new Promise(function (resolve) {
      let request = "api/personajes/" + id;
      let url = Global.urlApiSeries + request;
      let personaje = {};
      axios.get(url).then((response) => {
        personaje = response.data;
        resolve(personaje);
      });
    });
  }

  findPersonajes(id) {
    return new Promise(function (resolve) {
      let request = "api/series/personajesserie/" + id;
      let url = Global.urlApiSeries + request;
      let personajes = {};
      axios.get(url).then((response) => {
        personajes = response.data;
        resolve(personajes);
      });
    });
  }

  crearPersonaje(personaje) {
    return new Promise(function (resolve) {
      let request = "api/personajes";
      let url = Global.urlApiSeries + request;
      axios.post(url, personaje).then(() => {
        resolve(personaje);
      });
    });
  }

  loadPersonajes() {
    return new Promise(function (resolve) {
      let personajes = [];
      let request = "api/personajes";
      let url = Global.urlApiSeries + request;
      axios.get(url).then((response) => {
        personajes = response.data;
        resolve(personajes);
      });
    });
  }

  modificarPersonaje(idPersonaje, idSerie) {
    return new Promise(function (resolve) {
      let request = "api/personajes/" + idPersonaje + "/" + idSerie;
      let url = Global.urlApiSeries + request;
      axios.put(url).then((response) => {
        resolve(response);
      });
    });
  }

  deletePersonaje(id) {
    return new Promise(function (resolve) {
      var request = "api/personajes/" + id;
      var url = Global.urlApiSeries + request;
      axios.delete(url).then((response) => {
        resolve(response);
      });
    });
  }
}
