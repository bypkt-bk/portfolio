<template>
  <div class="marquee">
    <div class="marquee-content">
      <span v-for="(word, index) in words" :key="index">{{ word }}</span>
      <span v-for="(word, index) in words" :key="'dup-' + index">{{ word }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const words = ref(Array(15).fill('Project')) // เพิ่มจำนวนให้มากขึ้น
</script>

<style scoped>
.marquee {
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  transform: rotate(-1deg);
  padding: 18px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  left: -200px;
  background: var(--redink, #ab4b43);
  opacity: 60%;
}

.marquee-content {
  display: flex;
  color: var(--creama, #f3e9df);
  font-size: 48px;
  font-style: italic;
  font-weight: 900;
  line-height: 48px;
  gap: 60px;
  animation: marquee 80s linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
