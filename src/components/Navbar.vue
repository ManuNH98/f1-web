<template>
    <nav class="text-white w-full fixed tracking-wider z-50">
        <div class="flex justify-between items-center p-5 bg-primary">
            <router-link to="/">
                <p class="text-3xl">F1 STATS</p>
            </router-link>
            <div class="flex justify-between gap-6">
                <div @click="isDarkMode = !isDarkMode" class="flex justify-center items-center">
                    <button @click="toggleDarkMode()">
                        <img v-if="isDarkMode" class="w-8 h-8" src="../assets/light-mode.svg">
                        <img v-else class="w-8 h-8" src="../assets/dark-mode.svg">
                    </button> 
                </div>
                
                <!-- Mobile Menu Button -->
                <div @click="isOpen = !isOpen" class="flex justify-center items-center">
                    <button>
                        <img v-if="isOpen" src="../assets/menu.svg">
                        <img v-else src="../assets/menu-close.svg">
                    </button>
                </div>
            </div>
        </div>
        <!-- Menu Options-->
        <div v-if="!isOpen" class="flex flex-col items-center p-10 h-screen justify-center bg-primary">
            <div v-for="option in options" :key="option" class="p-16">
                <router-link v-on:click="closeMenu" :to="option.url" class="flex">
                    <img :src="option.icon" :alt="option.alt" class="h-20 w-20">
                    <p class="text-7xl">{{option.title}}</p>
                </router-link>
            </div>
        </div> 
    </nav>
</template>

<script>
import { toggleDarkMode } from '../logic/toggleMode'
export default {
    name: 'Navbar',
    data() {
        return {
            isOpen: true,
            isDarkMode: false,
            options:[
                {
                    title: 'Driver Standings',
                    icon: 'src/assets/driver.png',
                    url: '/',
                    alt: 'Driver Standings'
                },
                {
                    title: 'Constructor Standings',
                    icon: 'src/assets/team.png',
                    url: '/constructor-standings',
                    alt: 'Constructor Standings'
                },
                {
                    title: 'Last Result',
                    icon: 'src/assets/result.png',
                    url: '/last-results',
                    alt: 'Last Result'
                }
            ]
        }
    },
    methods: {
        closeMenu() {
            this.isOpen = true;
        },
        toggleDarkMode,
    }
}
</script>
