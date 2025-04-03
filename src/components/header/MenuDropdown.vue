<template>
  <img src="@/assets/logo.svg" alt="logo" width="38" class="logo" @click="navigateToHome" />
</template>

<script setup>
const navigateToHome = () => {
  window.location.href = '/'
}
</script>

<style scoped>
.logo {
  align-self: center;
  border-radius: 100%;
  height: 38px;
  border: 3px solid var(--redink);
  cursor: pointer;
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
