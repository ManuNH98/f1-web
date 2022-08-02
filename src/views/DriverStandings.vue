<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Driver Standings</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Driver</th>
                            <th>Points</th>
                            <th>Wins</th>
                            <th>Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="driver in drivers" :key="driver.position">
                            <td>{{ driver.Driver.givenName }} {{driver.Driver.familyName}}</td>
                            <td>{{ driver.points }}</td>
                            <td>{{ driver.wins }}</td>
                            <td>{{ driver.Constructors[0].name }}</td>
                        </tr>
                    </tbody>
                </table>
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