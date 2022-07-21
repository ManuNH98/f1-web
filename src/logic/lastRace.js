import axios from "axios";

const API = "http://ergast.com/api/f1/current/last/results";

export default {
  get() {
    return axios.get(API);
  },
};
