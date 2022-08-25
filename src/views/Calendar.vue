<template>
    <div class="dark:bg-dark dark:text-white p-10">
      <div class="border-t-8 border-l-8 border-r-8 rounded-md p-5">
        <h1 class="pb-5 text-center text-6xl">F1 2022 - Schedules</h1>
        <p class="">Check out the schedules of races for the current season.</p>
      </div>
      <div class="p-5">
        <div class="grid grid-cols-4 gap-10">
            <div v-for="race in races" :key="race" class="pt-10 pr-7 pl-7 text-center border-t-2 border-r-2 border-l-2 rounded-t-md dark:border-white hover:scale-105 duration-300">
                <div class="flex justify-between pb-3 gap-36 border-b dark:border-b-white border-dark">
                  <h5 class="text-5xl">{{ 'R' + race.round }}</h5>
                  <p class="text-2xl">{{ race.season }}</p>
                </div>
                <div class="flex justify-center items-center pb-3 pt-3 gap-11 border-b dark:border-white ">
                  <p class="text-2xl" >{{ race.raceName }}</p>
                </div>
                <div class="pb-3 pl-3 mt-4 border-r-2 border-b-2 rounded-br-md">
                  <p class="text-2xl text-left">{{ race.date }}</p>
                </div>
                <div class="flex justify-center items-center mt-4 rounded-md" >
                  <img src="https://cdn-icons-png.flaticon.com/512/1022/1022905.png" class="w-64 h-auto">
                </div>
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
  }
}
</script>