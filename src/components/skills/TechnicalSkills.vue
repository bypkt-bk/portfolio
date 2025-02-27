<template>
  <div class="skills">
    <h2>Technical Skills</h2>
    <Tag v-for="skill in skills" :key="skill" :label="skill" />
  </div>
</template>

<script setup>
import Tag from '@/components/global/Tag.vue'
const skills = ['React', 'Vue', 'Next.js', 'Figma']
</script>

<style scoped>
.skills {
  display: flex;
  gap: 10px;
}
</style>
``
