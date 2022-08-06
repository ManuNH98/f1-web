<template>
    <div class="p-10">
      <div class="border-t-8 border-l-8 border-r-8 rounded-md p-5">
        <h1 class="pb-5 text-center text-6xl">F1 Drivers 2022 Standings</h1>
        <p class="">Check out this season's official F1 line-up. Full breakdown of drivers, points and current positions. Follow your favourite F1 drivers on and off the track.</p>
      </div>
      <div class="p-5">
        <div class="grid grid-cols-3 gap-10">
            <div v-for="driver in drivers" :key="driver.position" class="pt-10 pr-7 pl-7  text-center border-t-2 border-r-2 border-l-2 rounded-t-md border-dark hover:scale-105 duration-300" :class="getTeamColorHover(driver.Constructors[0].constructorId)">
              <div class="flex justify-around pb-3 gap-36 border-b border-dark">
                <h5 class="text-5xl">{{'P' + driver.position }}</h5>
                <div>
                  <p class="text-3xl">{{ driver.wins }}</p>
                  <p class="text-xl">Wins</p>
                </div> 
                <div>
                  <p class="text-3xl">{{ driver.points }}</p>
                  <p class="text-xl">Pts</p>
                </div>
              </div>
              <div class="flex justify-around items-center pb-3 pt-3 gap-11 border-b border-dark">
                <p :class="getTeamColor(driver.Constructors[0].constructorId)" class="border-l-4 px-2 text-3xl" >{{ driver.Driver.givenName }} {{ driver.Driver.familyName }}</p>
                <img :src="getDriverNumber(driver.Driver.driverId)" class="w-16 h-10">
                <img :src="getDriverFlag(driver.Driver.nationality)" class="w-12 h-9">
              </div>
              <div class="pb-3 pl-3 mt-4 border-r-2 border-b-2 rounded-br-md">
                <p class="text-2xl text-left">{{ driver.Constructors[0].name }}</p>
              </div>
              <div :class="getTeamColorBg(driver.Constructors[0].constructorId)" class="flex justify-center items-center mt-4 rounded-md" >
                <img :src="getDriverUrl(driver.Driver.driverId)" class="w-64 h-auto">
              </div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import API from '../logic/drivers'
import { getTeamColor, getTeamColorBg, getTeamColorHover } from '../logic/teamColor'

export default{
  nam: 'DriverStandings',
  data(){
    return {
      drivers:null,
    }
  },
  mounted(){
    this.getDrivers()
  },
  methods: {
    getDrivers(){
      API.get().then(res => {
        this.drivers = res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      })
    },
    getDriverUrl(url){
      return ('src/assets/images/drivers/'+url+'.png')
    },
    getDriverFlag(url){
      return ('src/assets/images/flags/'+url+'.jpg')
    },
    getDriverNumber(url){
      return ('src/assets/images/numbers/'+url+'.png')
    },
    getTeamColor,
    getTeamColorBg,
    getTeamColorHover,
  }
}
</script>