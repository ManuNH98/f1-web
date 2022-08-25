import axios from "axios";

const API = "http://ergast.com/api/f1/current.json";

export default {
  get() {
    return axios.get(API);
  },
};
