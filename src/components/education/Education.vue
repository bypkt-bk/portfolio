<template>
  <section>
    <h2 class="text-xl font-bold">Education</h2>
    <ul>
      <li v-for="edu in education" :key="edu.year">
        <strong>{{ edu.year }}</strong> <br />
        {{ edu.school }}<br />{{ edu.content }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const education = [
  {
    year: '2022 - Present',
    school: 'Chulalongkorn university',
    content: ' Information technology (IT), Science Student Committee',
  },
]
</script>

<style scoped>
section {
  padding: 1rem;
  color: black;
}
</style>
