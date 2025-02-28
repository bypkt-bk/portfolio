<template>
  <div class="tag">{{ label }}</div>
</template>

<script setup>
defineProps({ label: String })
</script>

<style>
.tag {
  background: var(--creamy);
  padding: 4px 8px;
  border-radius: 360px;
  border: 2px solid white;
  font-size: 14px;
  color: white;
  width: fit-content;
}
</style>
