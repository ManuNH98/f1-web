<template>
    <div class="dark:bg-dark dark:text-white p-10">
      <div class="border-t-8 border-l-8 border-r-8 rounded-md p-5">
        <h1 class="pb-5 text-center text-6xl">F1 2022 - Schedule</h1>
        <p class="">2022 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR</p>
      </div>
      <div class="p-5">
        <div class="grid grid-cols-4 gap-10">
            <div v-for="(race, id) in races" :key="id" class="pt-10 pr-7 pl-7 text-center border-t-2 border-r-2 border-l-2 rounded-t-md dark:border-white hover:border-primary hover:scale-105 duration-300">
              <router-link :to="{name: 'Race-Details', params: {id: race.Circuit.circuitId}}">
                <div class="flex justify-between pb-3 px-2 border-b dark:border-b-white border-dark">
                  <h5 class="text-2xl">{{ 'ROUND ' + race.round }}</h5>
                  <img :src="getCountryUrl(race.Circuit.Location.country)" class="border rounded-md w-12 h-8">
                </div>
                <div class="flex items-center px-2 pb-3 pt-3 gap-11 border-b dark:border-white ">
                  <p class="text-2xl" >{{ race.raceName }}</p>
                </div>
                <div class="flex justify-between px-2 pb-3 pl-3 mt-4 border-r-2 border-b-2 rounded-br-md">
                  <p class="text-2xl">{{ race.date }}</p>
                  <p class="text-2xl">{{ race.Circuit.Location.locality }}</p>
                </div>
                <div class="flex justify-center items-center mt-4 rounded-md" >
                  <img :src="getCircuitUrl(race.Circuit.circuitId)" class="w-64 h-auto">
                </div>
              </router-link>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import API from '../logic/calendar'

export default{
  name: 'Calendar',
  data(){
    return {
      races:null,
    }
  },
  beforeMount(){
    this.getCalendar()
  },
  methods: {
    getCalendar(){
      API.get().then(res => {
        this.races = res.data.MRData.RaceTable.Races
      })
    },
    getCircuitUrl(url){
      return ('src/assets/images/circuits/'+url+'.png')
    },
    getCountryUrl(url){
      return ('src/assets/images/countries/'+url+'.png')
    },
  }
}
</script>