<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Constructor Standings</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Constructor</th>
                            <th>Nationality</th>
                            <th>Points</th>
                            <th>Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="constructor in constructors" :key="constructor.position">
                            <td>{{ constructor.position }}</td>
                            <td>{{ constructor.Constructor.name }}</td>
                            <td>{{ constructor.Constructor.nationality }}</td>
                            <td>{{ constructor.points }}</td>
                            <td>{{ constructor.wins }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import API from '../logic/constructor'

export default{
  el: '#app',
  data(){
    return {
      constructors:null
    }
  },
  mounted() {
    this.getConstructors()
  },

  methods: {
    getConstructors(){
      API.get().then(res => {
        this.constructors = res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      })
    }
  }
}
</script>