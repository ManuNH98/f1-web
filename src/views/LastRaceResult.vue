<template>
    <div class="p-10">
      <div class="border-t-8 border-l-8 border-r-8 rounded-md p-5">
        <h1 class="pb-5 text-center text-6xl">F1 2022 - Last Race Result</h1>
        <p class="">Check out the last race results.</p>
      </div>
      <div class="mt-5 px-28 border-4 rounded-md">
        <div class="flex justify-between p-10 pb-2 border-b-2 border-dark">
          <div class="flex justify-center items-center gap-10">
            <img src="../assets/f1_logo.svg" alt="logo" class="w-32 h-auto">
            <h5 class="text-2xl">Race Results</h5>
            <h5 class="text-2xl">{{'Round ' + lastRaces.round }}</h5>
          </div>
          <div class="flex justify-center items-center gap-10">
            <h5 class="text-2xl">{{lastRaces.raceName}}</h5>
            <img :src="getFlagCircuit(lastRaces.Circuit.Location.country)" alt="Flag Circuit" class="w-16 h-10">
            <h5 class="text-2xl">{{'#F1' + lastRaces.Circuit.circuitName}}</h5>
          </div>
        </div>  
        <div class="flex justify-center items-center p-5">
            <table class="text-3xl">
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th class="uppercase columns-2 text-left">fast lap</th>
                <th></th>
              </tr>
              <tr v-for="lastResult in lastResults" :key="lastResult">
                <td class="columns-1 bg-white text-center pr-1 py-0.5">
                  <p class="border rounded-br-md">{{ lastResult.position }}</p>
                </td>
                <td class="columns-2 pl-1">
                  <p :class="getTeamColor(lastResult.Constructor.constructorId)" class="uppercase border-l-8 pl-1">{{ lastResult.Driver.familyName }}</p>
                </td>
                <td class="columns-2">{{ lastResult.Constructor.name }}</td>
                <td class="columns-2 text-center">{{ lastResult.FastestLap.Time.time }}</td>
                <td class="columns-1" v-if="lastResult.Time">{{ lastResult.Time.time }}</td>
                <td class="columns-1" v-else>{{ lastResult.status }}</td>
              </tr>
            </table>
        </div>
      </div>
    </div>
</template>
<script>
import API from '../logic/lastRace'
import { getTeamColor } from '../logic/teamColor'

export default{
  name: 'LastRaceResult',
  data(){
    return {
      lastRaces:null,
      lastResults:null
    }
  },
  beforeMount() {
    this.getLastRace(),
    this.getLastResult()
  },
  methods: {
    getLastRace(){
      API.get().then(res => {
        this.lastRaces = res.data.MRData.RaceTable.Races[0]
      })
    },
    getLastResult(){
      API.get().then(res => {
        this.lastResults = res.data.MRData.RaceTable.Races[0].Results
      })
    },
    getFlagCircuit(url){
      return ('src/assets/images/flags/'+url+'.jpg')
    },
    getTeamColor
  }
}
</script>