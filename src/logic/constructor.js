import axios from "axios";

const API = "http://ergast.com/api/f1/current/constructorStandings.json";
const API_CONSTRUCTOR = "http://ergast.com/api/f1/constructors/";

export default {
  get() {
    return axios.get(API);
  },
  getConstructor(constructorId) {
    return axios.get(API_CONSTRUCTOR + constructorId + ".json");
  },
};
