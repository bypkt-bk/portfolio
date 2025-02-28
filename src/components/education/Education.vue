<template>
  <div v-for="edu in education" :key="edu.year" class="education-card">
    <p class="year">{{ edu.year }}</p>
    <p class="school">{{ edu.school }}</p>
    <p class="content">{{ edu.content }}</p>
  </div>
</template>

<script setup>
const education = [
  {
    year: '2022 - Present',
    school: 'Chulalongkorn University',
    content: 'Information Technology (IT), Science Student Committee',
  },
]
</script>

<style scoped>
.education-card {
  padding: 12px;
  margin-bottom: 12px;
  background: white;
  border-radius: 18px;
  border: 4px solid var(--redink);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: fit-content;
}

.year {
  font-size: 16px;
  font-weight: bold;
  color: var(--redink);
}

.school {
  font-size: 18px;
  font-weight: 600;
  color: var(--redink);
}

.content {
  font-size: 14px;
  margin-top: 4px;
  color: var(--redink);
}
</style>
