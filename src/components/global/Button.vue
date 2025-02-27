<template>
  <button class="btn" :class="variant" @click="onClick">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
})
const emit = defineEmits(['click'])
const onClick = () => emit('click')
</script>

<style scoped>
.btn {
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}
.primary {
  background: #6200ea;
  color: white;
}
.secondary {
  background: #f0f0f0;
  color: black;
}
</style>
