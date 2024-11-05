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
}