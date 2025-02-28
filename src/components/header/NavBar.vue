<template>
  <nav class="navbar">
    <a href="mailto:contact@banyaphon-kongtham.com"> <Mail /> contact@banyaphon-kongtham.com </a>
    <a
      href="https://www.linkedin.com/in/banyaphon-kongtham/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Linkedin /> Banyaphon (boom) Kongtham
    </a>
    <a href="https://github.com/bypkt-bk" target="_blank" rel="noopener noreferrer">
      <Github /> bypkt-bk
    </a>
  </nav>
</template>
<script setup>
import { Linkedin, Mail, Github } from 'lucide-vue-next'
</script>
<style scoped>
.navbar {
  display: flex;
  padding: 18px;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
  border-radius: 18px;
  border: 4px solid var(--redink);
  background: var(--white, #fff);
  width: fit-content;
  min-width: 601px;
  z-index: 10;
}
.navbar a {
  gap: 8px;
  color: var(--redbrick);
  text-decoration: none;
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
