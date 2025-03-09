<template>
  <img src="@/assets/logo.svg" alt="logo" width="38" class="logo" />
  <!-- <div class="dropdown">
    <button @click="isOpen = !isOpen"><AlignJustify /></button>
    <ul v-if="isOpen">
      <li><a href="/projects">Projects</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div> -->
</template>

<script setup>
import { ref } from 'vue'
import { AlignJustify } from 'lucide-vue-next'
const isOpen = ref(false)
</script>

<style scoped>
.logo {
  align-self: center;
  border-radius: 100%;
  height: 38px;
  border: 3px solid var(--redink);
}

.dropdown {
  position: relative;
  z-index: 10;
}
button {
  display: flex;
  padding: 18px;
  justify-content: flex-end;
  align-items: center;
  border-radius: 18px;
  border: 3px solid var(--redink);
  background: var(--white, #fff);
  color: var(--redbrick);
}
ul {
  position: absolute;
  background: white;
  padding: 18px;
  justify-content: flex-end;
  align-items: center;
  border-radius: 18px;
  border: 4px solid var(--redbrick, #c46961);
  right: 0;
  bottom: -100px;
}
</style>
