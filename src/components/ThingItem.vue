<template>
  <div :class="['thing-item', { 'is-active': isActive }]" @click="$emit('click')">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  isActive?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<style scoped lang="scss">
.thing-item {
  border: 4px solid $color-dark;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;

  &.is-active {
    border-color: $color-active;
    color: $color-active;
  }
}
</style>
