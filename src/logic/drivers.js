import axios from "axios";

const API = "http://ergast.com/api/f1/current/driverStandings.json";
const API_DRIVER = "http://ergast.com/api/f1/drivers/";

export default {
  get() {
    return axios.get(API);
  },
  getDriver(driverId) {
    return axios.get(API_DRIVER + driverId + ".json");
  },
};
