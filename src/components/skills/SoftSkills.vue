<template>
  <div class="skills">
    <h2>Soft Skills</h2>
    <div v-for="skill in skills" :key="skill" class="skill-box">
      {{ skill }}
    </div>
  </div>
</template>

<script setup>
const skills = ['Communication', 'Problem-solving', 'Teamwork']
</script>

<style scoped>
.skill-box {
  padding: 10px;
  background: lightgray;
  margin: 5px;
  border-radius: 5px;
}
</style>
