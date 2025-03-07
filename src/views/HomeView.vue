<template>
  <div>
    <section class="Hero">
      <section class="navigation" v-if="isNavbarVisible">
        <NavBar />
        <MenuDropdown />
      </section>
      <HeroBanner />
    </section>

    <section class="project">
      <!-- <ProjectMain/> -->
      <p class="portfolio-title"><Briefcase stroke-width="3px" /> PORTFOLIO</p>
      <div class="project-list">
        <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
      </div>
      <!-- <ProjectMarqueeBottom class="Marquee0" /> -->
      <template v-if="isMarqueeVisible">
        <ProjectMarqueeTop class="Marquee1" />
        <ProjectMarqueeBottom class="Marquee2" />
        <ProjectMarqueeTop class="Marquee3" />
        <ProjectMarqueeBottom class="Marquee4" />
        <ProjectMarqueeTop class="Marquee5" />
        <ProjectMarqueeBottom class="Marquee6" />
      </template>
    </section>
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import NavBar from '@/components/header/NavBar.vue'
import HeroBanner from '@/components/hero/HeroBanner.vue'
import ProjectItem from '@/components/projects/ProjectItem.vue'
import MenuDropdown from '@/components/header/MenuDropdown.vue'
import ProjectMarqueeTop from '@/components/projects/ProjectMarqueeTop.vue'
import ProjectMarqueeBottom from '@/components/projects/ProjectMarqueeBottom.vue'
import ProjectMain from '@/components/projects/ProjectMain.vue'
import Footer from '@/components/footer/footer.vue'
import { Briefcase } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'

const projects = [
  { id: 1, title: 'MajorMatch Web Application', description: 'A platform for online courses.' },
  { id: 2, title: 'Tax Calculator Web Application', description: 'A platform for online courses.' },
  { id: 3, title: 'Bill Hub Website', description: 'A platform for online courses.' },
  { id: 4, title: 'Parcel Management', description: 'A platform for online courses.' },
]

const isMarqueeVisible = ref(window.matchMedia('(min-width: 852px)').matches)
const isNavbarVisible = ref(window.matchMedia('(min-width: 755px)').matches)

const updateScreenSize = () => {
  isMarqueeVisible.value = window.matchMedia('(min-width: 852px)').matches
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

.project {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 2rem;
  padding-bottom: 5rem;
  align-items: center;
  position: relative;
  overflow-x: hidden;
}

.portfolio-header {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.portfolio-title {
  display: flex;
  color: white;
  background-color: var(--redbrick);
  text-align: center;
  font-family: monospace;
  font-weight: 600;
  font-size: 24px;
  line-height: 48px;
  letter-spacing: -0.576px;
  width: fit-content;
  border-radius: 15px 50px;
  border: 3px solid var(--redink);
  padding: 4px;
  padding-left: 80px;
  padding-right: 80px;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.project-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex-wrap: wrap;
}

.Marquee0 {
  top: -20px;
  z-index: -1;
}
.Marquee1 {
  top: 140px;
  z-index: -1;
}
.Marquee2 {
  top: 300px;
  z-index: -1;
}
.Marquee3 {
  top: 460px;
  z-index: -1;
}
.Marquee4 {
  top: 620px;
  z-index: -1;
}
.Marquee5 {
  top: 780px;
  z-index: -1;
}
.Marquee6 {
  top: 940px;
  z-index: -1;
}

.Marquee0:hover,
.Marquee1:hover,
.Marquee2:hover,
.Marquee3:hover,
.Marquee4:hover {
  background-color: black;
}
</style>
