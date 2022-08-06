<template>
    <div class="p-5">
      <h1 class="text-center text-4xl">Driver Standings</h1>
      <div class="grid grid-cols-3 gap-5">
          <div v-for="driver in drivers" :key="driver.position" class="p-5 text-white text-center bg-dark">
            <h5 class="card-title">{{ driver.Driver.givenName }} {{driver.Driver.familyName}}</h5>
            <p class="card-text">{{ driver.points }}</p>
            <p class="card-text">{{ driver.wins }}</p>
            <p class="card-text">{{ driver.Constructors[0].name }}</p>
          </div>
      </div>
    </div>
</template>
<script>
import API from '../logic/drivers'

export default{
  el: '#app',
  data(){
    return {
      drivers:null,
    }
  },
  beforeMount(){
    this.getDrivers()
  },
  methods: {
    getDrivers(){
      API.get().then(res => {
        this.drivers = res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      })
    }
  }
}
</script>