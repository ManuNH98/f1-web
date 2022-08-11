<template>
    <nav class="text-white w-full fixed tracking-wider z-50">
        <div class="flex justify-between items-center p-5 bg-primary">
            <router-link to="/">
                <p class="text-3xl">F1 STATS</p>
            </router-link>
            <div class="flex">
                <button @click="toggleDarkMode()">
                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="22" height="22" rx="5" ry="5"></rect><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4" y1="12" x2="5" y2="12"></line><line x1="19" y1="12" x2="20" y2="12"></line><line x1="9" y1="3" x2="15" y2="3"></line><line x1="9" y1="21" x2="15" y2="21"></line></svg>
                </button>
                <!-- Mobile Menu Button -->
                <div @click="isOpen = !isOpen">
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
