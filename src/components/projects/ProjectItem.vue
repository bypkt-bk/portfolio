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
  border: 1px solid #ccc;
  padding: 1rem;
  width: 320px;
  height: 380px;
  min-width: none;
  max-width: none;
  color: black;
  border-radius: 18px;
  border: 4px solid var(--redink, #ab4b43);
  background: #fff;
  cursor: pointer;
}
</style>
