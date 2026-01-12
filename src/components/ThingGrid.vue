<template>
  <div class="thing-grid">
    <slot />

    <p v-if="info" class="thing-grid__info">
      {{ info }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  info?: string
}>()
</script>

<style scoped lang="scss">
.thing-grid {
  border: 4px solid $color-dark;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  align-content: start;

  &__info {
    font-size: 16px;
    grid-column: 1 / -1;
  }
}
</style>
