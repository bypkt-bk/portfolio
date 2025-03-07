<template>
  <div class="project-item">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
  </div>
</template>

<script setup>
defineProps({ project: Object })
</script>

<style scoped>
.project-item {
  padding: 1rem;
  width: 370px;
  height: 440px;
  color: black;
  border-radius: 18px;
  border: 3px solid var(--redink, #ab4b43);
  background: #fff;
  cursor: pointer;
}
</style>
