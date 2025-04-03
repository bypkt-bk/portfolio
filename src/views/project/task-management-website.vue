<template>
  <section class="navigation" v-if="isNavbarVisible">
    <NavBar />
    <MenuDropdown />
  </section>
</template>

<script setup>
import NavBar from '@/components/header/NavBar.vue'
import MenuDropdown from '@/components/header/MenuDropdown.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const isNavbarVisible = ref(window.matchMedia('(min-width: 755px)').matches)

const updateScreenSize = () => {
  isNavbarVisible.value = window.matchMedia('(min-width: 755px)').matches
}

onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>

<style scoped>
h1 {
  font-size: 48px;
  color: black;
}
.navigation {
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: center;
}
</style>
