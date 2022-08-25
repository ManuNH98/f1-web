<template>
    <div class="text-center">
        <p>{{ driverDetail.driverId }}</p>
        <p>{{ driverDetail.givenName}}</p>
        <p>{{ driverDetail.familyName}}</p>
        <p>{{ driverDetail.code}}</p>
        <p>{{ driverDetail.permanentNumber}}</p>
    </div>
</template>

<script>
import API_DRIVER from '../logic/drivers'

export default{
    name: 'DriverDetails',
    props: ['id'],
    data(){
        return {
            driverDetail:{},
            driver: this.id,
        }
    },
    
    beforeMount(){
        this.getDriverDetail()
    },
    methods: {
        getDriverDetail(){
            API_DRIVER.getDriver(this.driver)
            .then(res => {
                this.driverDetail = res.data.MRData.DriverTable.Drivers[0]
                console.log(this.driverDetail)
            })
        },
    }
}
</script>