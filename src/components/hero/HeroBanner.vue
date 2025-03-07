<template>
  <div>
    <svg
      v-if="isLargeScreen"
      xmlns="http://www.w3.org/2000/svg"
      width="1281"
      height="736"
      viewBox="0 0 1281 736"
      fill="none"
    >
      <path
        d="M1262.07 733.141H18.0712C9.23464 733.141 2.07117 725.978 2.07117 717.141V18.5029C2.07117 9.66638 9.23461 2.50293 18.0712 2.50293H571.389C580.226 2.50293 587.389 9.66637 587.389 18.5029V65.0219C587.389 76.0676 596.344 85.0219 607.389 85.0219H1262.07C1270.91 85.0219 1278.07 92.1853 1278.07 101.022V717.141C1278.07 725.978 1270.91 733.141 1262.07 733.141Z"
        fill="#C46961"
        stroke="#AB4B43"
        stroke-width="4"
      />
    </svg>

    <div v-if="isLargeScreen" class="overlay">
      <div class="info">
        <h1>Banyaphon Kongtham</h1>
        <div class="Tag">
          <Tag class="Tag" label="UX/UI" />
          <Tag class="Tag" label="Front end" />
          <Tag class="Tag" label="Web Developer" />
        </div>
      </div>
      <section ref="educationRef" class="education" v-motion>
        <Education />
      </section>
    </div>

    <div v-else class="hero">
      <div class="info">
        <h1>Banyaphon Kongtham</h1>
        <div class="Tag">
          <Tag class="Tag" label="UX/UI" />
          <Tag class="Tag" label="Front end" />
          <Tag class="Tag" label="Web Developer" />
        </div>
      </div>
      <section ref="educationRef" class="education" v-motion>
        <Education />
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import Tag from '../global/Tag.vue'
import Education from '../education/Education.vue'

const isLargeScreen = ref(window.matchMedia('(min-width: 1280px)').matches)

const updateScreenSize = () => {
  isLargeScreen.value = window.matchMedia('(min-width: 1280px)').matches
}

onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})

const educationRef = ref(null)

onMounted(() => {
  useMotion(educationRef, {
    initial: { x: 10, y: 0, rotate: 20, opacity: 1 },
    enter: {
      y: 50,
      rotate: -15,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  })
})
</script>

<style scoped>
.hero {
  display: flex;
  background-color: #c46961;
  margin-top: 18px;
  height: 600px;
  width: calc(100vw - 64px); /* Subtract 40px left and 40px right margin */
  border-radius: 18px;
  border: 4px solid var(--redink);
  justify-content: center;
  align-items: end;
  padding-bottom: 48px;
}

svg {
  position: absolute;
  z-index: -1;
  top: -68px;
}

.overlay {
  display: flex;
  flex-direction: column;
  height: 667px;
  width: 1281px;
  border-radius: 10px;
  position: relative;
  z-index: 5;
  justify-content: center;
  align-items: center;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
}

h1 {
  color: var(--white, #fff);
  text-align: center;
  font-size: 48px;
  font-weight: 800;
  line-height: 48px;
  letter-spacing: -0.576px;
}

.Tag {
  display: flex;
  gap: 4px;
}

.education {
  position: absolute;
  right: 0px;
  top: 200px;
  z-index: 50;
}
</style>
