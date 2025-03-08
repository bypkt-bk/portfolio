<template>
  <div>
    <img src="@/assets/leaf/leaf1.png" alt="balloon" :width="200" class="leaf1" />
    <img src="@/assets/leaf/leaf2.png" alt="balloon" :width="150" class="leaf2" />
    <img src="@/assets/leaf/leaf3.png" alt="balloon" :width="150" class="leaf3" />
    <img src="@/assets/leaf/leaf4.png" alt="balloon" :width="80" class="leaf4" />
    <img src="@/assets/leaf/leaf5.png" alt="balloon" :width="200" class="leaf5" />
    <img src="@/assets/leaf/leaf6.png" alt="balloon" :width="80" class="leaf6" />
    <section class="Hero">
      <section class="navigation" v-if="isNavbarVisible">
        <NavBar />
        <MenuDropdown />
      </section>
      <HeroBanner />
    </section>
    <section class="project">
      <!-- <ProjectMarqueeBottom class="Marquee0" /> -->
      <template v-if="isMarqueeVisible">
        <MarqueeTop class="Marquee1" />
        <MarqueeBottom class="Marquee2" />
        <MarqueeTop class="Marquee3" />
        <MarqueeBottom class="Marquee4" />
        <MarqueeTop class="Marquee5" />
        <MarqueeBottom class="Marquee6" />
      </template>
      <!-- <ProjectMain/> -->
      <p class="portfolio-title"><Briefcase stroke-width="3px" /> PORTFOLIO</p>
      <div class="project-list">
        <Card v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </section>
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import NavBar from '@/components/header/NavBar.vue'
import HeroBanner from '@/components/hero/HeroBanner.vue'
import Card from '@/components/projects/Card.vue'
import MenuDropdown from '@/components/header/MenuDropdown.vue'
import MarqueeTop from '@/components/projects/Marquee/MarqueeTop.vue'
import MarqueeBottom from '@/components/projects/Marquee/MarqueeBottom.vue'
import ProjectMain from '@/components/projects/ProjectMain.vue'
import Footer from '@/components/footer/footer.vue'
import { Briefcase } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'

const projects = [
  {
    id: 1,
    title: 'MajorMatch Web Application',
    description: 'A platform for online courses.',
    src: new URL('@/assets/project/cusw/cusw.png', import.meta.url).href,
  },
  {
    id: 2,
    title: 'Tax Calculator Web Application',
    description: 'A platform for online courses.',
    src: new URL('@/assets/project/cusw/cusw.png', import.meta.url).href,
  },
  {
    id: 3,
    title: 'Bill Hub Website',
    description: 'A platform for online courses.',
    src: new URL('@/assets/project/cusw/cusw.png', import.meta.url).href,
  },
  {
    id: 4,
    title: 'Parcel Management',
    description: 'A platform for online courses.',
    src: new URL('@/assets/project/cusw/cusw.png', import.meta.url).href,
  },
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
  margin-top: 18px;
}

.Marquee1 {
  top: 140px;
}
.Marquee2 {
  top: 300px;
}
.Marquee3 {
  top: 460px;
}
.Marquee4 {
  top: 620px;
}
.Marquee5 {
  top: 780px;
}
.Marquee6 {
  top: 940px;
}

.balloon {
  position: absolute;
  top: 0;
}
@keyframes moveLeaf1 {
  0% {
    bottom: 0;
    left: 4rem;
    rotate: -5deg;
  }
  50% {
    bottom: -1rem;
    left: 4.5rem;
    rotate: 2deg;
  }
  100% {
    bottom: 0;
    left: 4rem;
  }
}

@keyframes moveLeaf2 {
  0% {
    bottom: 0rem;
    left: -1rem;
    rotate: -4deg;
  }
  50% {
    bottom: -1rem;
    left: -1rem;
    rotate: 3deg;
  }
  100% {
    left: -1rem;
    bottom: 0;
  }
}

@keyframes moveLeaf3 {
  0% {
    bottom: 16rem;
    left: -1rem;
    rotate: 4deg;
  }
  50% {
    bottom: 15rem;
    left: -1rem;
    rotate: -4deg;
  }
  100% {
    bottom: 16rem;
    left: -1rem;
  }
}

@keyframes moveLeaf4 {
  0% {
    bottom: 16rem;
    right: 0;
    rotate: -4deg;
  }
  50% {
    bottom: 15.5rem;
    right: -1rem;
    rotate: -2deg;
  }
  100% {
    bottom: 16rem;
    right: -5px;
    rotate: 2deg;
  }
}

@keyframes moveLeaf5 {
  0% {
    bottom: 5rem;
    right: 0;
    rotate: -3deg;
  }
  50% {
    bottom: 4.5rem;
    right: -0.5rem;
    rotate: 3deg;
  }
  100% {
    bottom: 5rem;
    right: 0;
    rotate: -3deg;
  }
}

@keyframes moveLeaf6 {
  0% {
    bottom: 27rem;
    right: -1rem;
    rotate: -1deg;
  }
  50% {
    bottom: 27.5rem;
    right: -1.5rem;
    rotate: 2deg;
  }
  100% {
    bottom: 27rem;
    right: -1rem;
    rotate: -1deg;
  }
}

.leaf1 {
  position: fixed;
  bottom: 0;
  left: 4rem;
  z-index: 1;
  animation: moveLeaf1 5s infinite alternate ease-in-out;
}

.leaf2 {
  position: fixed;
  bottom: 0;
  z-index: 1;
  animation: moveLeaf2 4s infinite alternate ease-in-out;
}

.leaf3 {
  position: fixed;
  bottom: 16rem;
  z-index: 1;
  animation: moveLeaf3 6s infinite alternate ease-in-out;
}

.leaf4 {
  position: fixed;
  bottom: 16rem;
  right: 0;
  z-index: 1;
  animation: moveLeaf4 6s infinite alternate ease-in-out;
}

.leaf5 {
  position: fixed;
  bottom: 5rem;
  right: 0;
  z-index: 1;
  animation: moveLeaf5 5s infinite alternate ease-in-out;
}

.leaf6 {
  position: fixed;
  bottom: 27rem;
  right: 1rem;
  z-index: 0;
  animation: moveLeaf6 7s infinite alternate ease-in-out;
}
</style>
