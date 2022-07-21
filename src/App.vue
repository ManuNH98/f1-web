<template>
  <Navbar/>
  <DriverStandings/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import DriverStandings from './views/DriverStandings.vue'

export default({
  name: 'App',
  components: {Navbar, DriverStandings}
})
</script>