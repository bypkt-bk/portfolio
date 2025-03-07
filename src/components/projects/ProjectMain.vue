<template>
  <div class="frame">
    <h1>{{ project.title }}</h1>
    <p>{{ project.detail }}</p>
  </div>
</template>
<script setup>
const project = [{ title: 'TaskMangement Website', detail: 'hello' }]
</script>
<style scoped>
.frame {
  width: 1280px;
  margin: 0 auto;
  height: 580px;
  border-radius: 18px;
  border: 4px solid var(--redink, #ab4b43);
  background: #fff;
}
</style>
