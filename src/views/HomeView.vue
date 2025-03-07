<template>
  <div>
    <section class="Hero">
      <section class="navigation" v-if="isNavbarVisible">
        <NavBar />
        <MenuDropdown />
      </section>
      <HeroBanner />
    </section>

    <section class="section">
      <template v-if="isLargeScreen">
        <ProjectMarqueeBottom class="Marquee0" />
        <ProjectMarqueeTop class="Marquee1" />
        <ProjectMarqueeBottom class="Marquee2" />
        <ProjectMarqueeTop class="Marquee3" />
        <ProjectMarqueeBottom class="Marquee4" />
      </template>
      <div class="project-list">
        <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </section>
  </div>
</template>

<script setup>
import NavBar from '@/components/header/NavBar.vue'
import HeroBanner from '@/components/hero/HeroBanner.vue'
import ProjectItem from '@/components/projects/ProjectItem.vue'
import MenuDropdown from '@/components/header/MenuDropdown.vue'
import ProjectMarqueeTop from '@/components/projects/ProjectMarqueeTop.vue'
import ProjectMarqueeBottom from '@/components/projects/ProjectMarqueeBottom.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const projects = [
  { id: 1, title: 'TaskMangement Website', description: 'A tool for analyzing UX data.' },
  { id: 2, title: 'MajorMatch Web Application', description: 'A platform for online courses.' },
  { id: 3, title: 'Tax Calculator Web Application', description: 'A platform for online courses.' },
  { id: 4, title: 'Bill Hub Website', description: 'A platform for online courses.' },
  { id: 5, title: 'Parcel Management', description: 'A platform for online courses.' },
]

const isLargeScreen = ref(window.matchMedia('(min-width: 1121px)').matches)
const isNavbarVisible = ref(window.matchMedia('(min-width: 755px)').matches)

const updateScreenSize = () => {
  isLargeScreen.value = window.matchMedia('(min-width: 1121px)').matches
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
div {
  position: relative;
}

.section {
  padding: 2rem;
  position: relative;
  overflow-x: hidden;
}

.project-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex-wrap: wrap;
  margin-top: 100px;
}

.skills-container {
  display: flex;
  gap: 2rem;
}

.navigation {
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
}

.Hero {
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  margin: 0 auto;
}

.Marquee0 {
  top: 20px;
}
.Marquee1 {
  top: 180px;
}
.Marquee2 {
  top: 340px;
}
.Marquee3 {
  top: 520px;
}
.Marquee4 {
  top: 700px;
}

.Marquee0:hover,
.Marquee1:hover,
.Marquee2:hover,
.Marquee3:hover,
.Marquee4:hover {
  background-color: black;
}
</style>
