<template>
    <div class="p-10">
      <div class="border-t-8 border-l-8 border-r-8 rounded-md p-5">
        <h1 class="pb-5 text-center text-6xl">F1 Teams 2022 Standings</h1>
        <p class="">Discover everything you need to know about this year's Formula 1 teams - drivers, podium finishes, points earned and championship titles.</p>
      </div>
      <div class="p-5">
        <div class="grid grid-cols-2 p-10 gap-20">
            <div v-for="constructor in constructors" :key="constructor.position" class="p-10 text-center border-t-2 border-r-2 border-l-2 rounded-t-md border-dark hover:scale-105 duration-300" :class="getTeamColorHover(constructor.Constructor.constructorId)">
              <div class="flex justify-around pb-3 gap-48 border-b border-dark">
                <h5 class=" text-5xl">{{ "P" + constructor.position }}</h5>
                <div>
                  <p class="text-3xl">{{ constructor.wins }}</p>
                  <p class="text-xl">Wins</p>
                </div>  
                <div>
                  <p class="text-3xl">{{ constructor.points }}</p>
                  <p class="text-xl">Pts</p>
                </div>
              </div>
              <div class="flex justify-between px-7 pt-5 pb-5 border-b border-dark">
                <p :class="getTeamColor(constructor.Constructor.constructorId)" class="border-l-4 px-2 text-5xl" >{{ constructor.Constructor.name }}</p>
                <img :src="getTeamLogo(constructor.Constructor.constructorId)" class="w-12 h-12">
              </div>
              <div class="flex justify-around gap-48 mt-6 pt-5 pb-5 border-b border-r border-l border-dark rounded-bl-md rounded-br-md">
                <p v-html="getTeamDriver(constructor.Constructor.constructorId, 1)" class="text-2xl"></p>
                <p v-html="getTeamDriver(constructor.Constructor.constructorId, 2)" class="text-2xl"></p>
              </div>
              <div>
                <img :src="getTeamUrl(constructor.Constructor.constructorId)" class="w-full h-auto">
              </div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import API from '../logic/constructor'
import { getTeamColor, getTeamColorHover } from '../logic/teamColor'
import { getTeamDriver } from '../logic/teamDriver'

export default{
  name: 'ConstructorStandings',
  data(){
    return {
      constructors:null,
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
    },
    getTeamUrl(url){
      return ('src/assets/images/teams/'+url+'.png')
    },
    getTeamLogo(logo){
      return ('src/assets/images/logos/'+logo+'.svg')
    },
    getTeamColor,
    getTeamColorHover,
    getTeamDriver,
  }
}
</script>