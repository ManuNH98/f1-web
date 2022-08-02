<template>
  <Navbar/>
  <router-view class="pt-28 p-10"></router-view>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default({
  name: 'App',
  components: {Navbar, Footer}
})
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
</style>