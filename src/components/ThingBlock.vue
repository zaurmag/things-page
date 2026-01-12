<template>
  <div class="thing-block" :class="{ 'thing-block--grid': !noGrid }">
    <slot />

    <p v-if="info" class="thing-block__info">
      {{ info }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { noGrid = false } = defineProps<{
  info?: string
  noGrid?: boolean
}>()
</script>

<style scoped lang="scss">
.thing-block {
  border: 4px solid $color-dark;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  display: grid;
  align-items: start;

  &--grid {
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    align-content: start;
  }

  &__info {
    font-size: 16px;
    grid-column: 1 / -1;
    align-self: center;
  }
}
</style>
