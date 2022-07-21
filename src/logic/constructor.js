import axios from "axios";

const API = "http://ergast.com/api/f1/current/constructorStandings";

export default {
  get() {
    return axios.get(API);
  },
};
