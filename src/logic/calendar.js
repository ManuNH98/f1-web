import axios from "axios";

const API = "http://ergast.com/api/f1/current.json";
const API_RACE = "http://ergast.com/api/f1/circuits/";

export default {
  get() {
    return axios.get(API);
  },
  getRace(raceId) {
    return axios.get(API_RACE + raceId + ".json");
  },
};
