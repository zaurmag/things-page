<template>
  <div class="page">
    <div class="container">
      <header class="header-blocks">
        <!-- User things selected -->
        <ThingGrid
          class="user-things-selected"
          :info="`Selected: ${selectedUserThings.length} / ${MAX_SELECTED_COUNT}`"
        >
          <ThingItem
            v-for="thing in selectedUserThings"
            :key="`selected-user-${thing.id}`"
            :name="thing.name"
          />
        </ThingGrid>

        <!-- Things available selected -->
        <ThingGrid
          class="available-things-selected"
          :info="!selectedAvailableThing ? 'Nothing is selected' : ''"
        >
          <ThingItem v-if="selectedAvailableThing" :name="selectedAvailableThing.name" />
        </ThingGrid>
      </header>

      <main class="main-blocks">
        <!-- User things -->
        <ThingGrid>
          <ThingItem
            v-for="thing in userThings"
            :key="`user-${thing.id}`"
            :name="thing.name"
            :is-active="isUserThingActive(thing.id)"
            @click="toggleUserThing(thing)"
          />
        </ThingGrid>

        <!-- Available things -->
        <ThingGrid>
          <ThingItem
            v-for="thing in availableThings"
            :key="`available-${thing.id}`"
            :name="thing.name"
            :is-active="selectedAvailableThing?.id === thing.id"
            @click="toggleAvailableThing(thing)"
          />
        </ThingGrid>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import ThingItem from './components/ThingItem.vue'
import ThingGrid from './components/ThingGrid.vue'
import { useThings } from '@/use/useThings'

const {
  userThings,
  availableThings,
  toggleUserThing,
  isUserThingActive,
  MAX_SELECTED_COUNT,
  selectedUserThings,
  toggleAvailableThing,
  selectedAvailableThing,
} = useThings()
</script>

<style scoped lang="scss">
.page {
  display: grid;
  justify-items: center;
  height: 100%;
}

.container {
  display: grid;
  grid-gap: 20px;
  grid-template-rows: auto 1fr;
  max-width: 1024px;
  width: 100%;
  padding: 15px;
}

.header-blocks {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(6, 1fr);
}

.user-things-selected {
  grid-column: 1 / 3;
}

.available-things-selected {
  grid-column: 5 / 7;
}

.main-blocks {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}
</style>
