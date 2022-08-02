<template>
    <footer class="text-white">
        <div class="flex justify-around py-16 items-center bg-primary">
            <div class="menu">
                <ul class="text-xl">
                    <li class="py-2">
                        <router-link to="/">Driver Standings</router-link>
                    </li>
                    <li class="py-2">
                        <router-link to="/constructor-standings">Constructor Standings</router-link>
                    </li>
                    <li class="py-2">
                        <router-link to="/last-results">Last Result</router-link>
                    </li>
                </ul>
            </div>
            <div class="logo">
                <p class="text-4xl ">F1 STATS</p>
            </div>
            <div class="form">
                <p class="pb-2">Join a Newsletter</p>
                <form action="">
                    <div class="flex justify-between">
                        <input type="text" class="w-full p-2" placeholder="Input your email">
                        <button type="submit" class="bg-dark text-white p-2">Send</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="p-3 flex justify-center items-center bg-dark text-center">
            <span>© 2022 F1 STATS - All rigths reserved - Powered by <a href="https://ergast.com/mrd/" target="_blank" class="underline hover:text-primary">Ergast API.</a></span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            
        }
    },
}
</script>
