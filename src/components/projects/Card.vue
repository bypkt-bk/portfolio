<template>
  <a class="project-item" :href="`/project/${project.title}`">
    <img :src="project.src" :alt="project.title" />
  </a>
</template>

<script setup>
defineProps({ project: Object })
</script>

<style scoped>
.project-item {
  width: 100%;
  max-width: 370px;
  min-width: 320px;
  height: 440px;
  color: black;
  border-radius: 18px;
  cursor: pointer;
  background-color: white;
  transition:
    border-radius 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  overflow: hidden;
  box-shadow: 4px 4px 10px 4px rgba(0, 0, 0, 0.1);
}

.project-item:hover {
  border-radius: 100px;
  transform: scale(1.2);
  z-index: 5;
}

@media (max-width: 768px) {
  .project-item:hover {
    border-radius: 18px; /* Reset to default */
    transform: none;
    z-index: 1;
  }
}

.project-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
