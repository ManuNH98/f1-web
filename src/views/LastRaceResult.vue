<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Last Race Result</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Driver</th>
                            <th>Team</th>
                            <th>Position</th>
                            <th>Grid</th>
                            <th>Points</th>
                            <th>Laps</th>
                            <th>Fatest Lap</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="lastRace in lastRaces" :key="lastRace">
                            <td>{{ lastRace.Driver.givenName }} {{ lastRace.Driver.familyName }}</td>
                            <td>{{ lastRace.Constructor.name }}</td>
                            <td>{{ lastRace.position }}</td>
                            <td>{{ lastRace.grid }}</td>
                            <td>{{ lastRace.points }}</td>
                            <td>{{ lastRace.laps }}</td>
                            <td>{{ lastRace.FastestLap.Time.time }}</td>
                            <td>{{ lastRace.status }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import API from '../logic/lastRace'

export default{
  el: '#app',
  data(){
    return {
      lastRaces:null
    }
  },
  beforeMount() { 
    this.getLastRace()
  },
  methods: {
    getLastRace(){
      API.get().then(res => {
        this.lastRaces = res.data.MRData.RaceTable.Races[0].Results
      })
    }
  }
}
</script>