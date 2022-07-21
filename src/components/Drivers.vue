<template>
  <p>{{driver.givenName}}</p>
</template>

<script>
import API from '../logic/drivers'

export default{
  data(){
    return {
      driver:null
    }
  },
  beforeMount() {
    this.getDriver()
  },
  methods: {
    getDriver(){
      API.get()
      .then(res => (this.driver = res.data.MRData.DriverTable.Drivers[0]))
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
