<template>
  <div class="tag">{{ label }}</div>
</template>

<script setup>
defineProps({ label: String })
</script>

<style>
.tag {
  background: #e0b0ff;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 14px;
}
</style>
