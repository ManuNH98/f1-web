<template>
    <div class="text-center">
        <p>{{ raceDetail.circuitId }}</p>
        <p>{{ raceDetail.url}}</p>
        <p>{{ raceDetail.circuitName}}</p>
        <p>{{ raceDetail.Location.lat}}</p>
        <p>{{ raceDetail.Location.long}}</p>
        <p>{{ raceDetail.Location.locality}}</p>
        <p>{{ raceDetail.Location.country}}</p>
    </div>
</template>

<script>
import API_RACE from '../logic/calendar'

export default{
    name: 'RaceDetails',
    props: ['id'],
    data(){
        return {
            raceDetail:{},
            race: this.id,
        }
    },
    
    beforeMount(){
        this.getRaceDetail()
    },
    methods: {
        getRaceDetail(){
            API_RACE.getRace(this.race)
            .then(res => {
                this.raceDetail = res.data.MRData.CircuitTable.Circuits[0]
                console.log(this.raceDetail)
            })
        },
    }
}
</script>