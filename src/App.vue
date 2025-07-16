<template>
  <div class="page">
    <div class="container">
      <header class="header-blocks">
        <!-- User things selected -->
        <div class="block block--grid user-things-selected">
          <div
            v-for="thing in selectedUserThings"
            :key="`selected-user-${thing.id}`"
            class="block item"
          >
            {{ thing.name }}
          </div>

          <p class="block__info">
            {{ `Selected: ${selectedUserThings.length} / ${MAX_SELECTED_COUNT}` }}
          </p>
        </div>

        <!-- Things available selected -->
        <div class="block available-things-selected">
          <div v-if="selectedAvailableThing" class="block item">
            {{ selectedAvailableThing.name }}
          </div>

          <p v-else class="block__info">Nothing is selected</p>
        </div>
      </header>

      <main class="main-blocks">
        <!-- User things -->
        <div class="block block--grid">
          <div
            v-for="thing in userThings"
            :key="`user-${thing.id}`"
            :class="['block', 'item', { 'block--active': checkActive(thing.id) }]"
            @click="selectUserThing(thing)"
          >
            {{ thing.name }}
          </div>
        </div>

        <!-- Available things -->
        <div class="block block--grid">
          <div
            v-for="thing in availableThings"
            :key="`available-${thing.id}`"
            :class="['block', 'item', { 'block--active': selectedAvailableThing?.id === thing.id }]"
            @click="selectAvailableThing(thing)"
          >
            {{ thing.name }}
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Types
type Thing = {
  id: number
  name: string
}

// Local const's
const MAX_SELECTED_COUNT = 6

// Define refs
const selectedUserThings = ref<Thing[]>([])
const userThings = ref<Thing[]>([
  {
    id: 1,
    name: 'Shoes 1',
  },
  {
    id: 2,
    name: 'Shoes 2',
  },
  {
    id: 3,
    name: 'Shoes 3',
  },
  {
    id: 4,
    name: 'Shoes 4',
  },
  {
    id: 5,
    name: 'T-shirt 1',
  },
  {
    id: 6,
    name: 'T-shirt 2',
  },
  {
    id: 7,
    name: 'T-shirt 3',
  },
  {
    id: 8,
    name: 'T-shirt 4',
  },
])

const selectedAvailableThing = ref<Thing | null>(null)
const availableThings = ref<Thing[]>([
  {
    id: 11,
    name: 'Jacket 1',
  },
  {
    id: 12,
    name: 'Jacket 2',
  },
  {
    id: 13,
    name: 'Jacket 3',
  },
  {
    id: 14,
    name: 'Jacket 4',
  },
  {
    id: 15,
    name: 'Hoodie 1',
  },
  {
    id: 16,
    name: 'Hoodie 2',
  },
  {
    id: 17,
    name: 'Hoodie 3',
  },
  {
    id: 18,
    name: 'Hoodie 4',
  },
])

// Methods
const checkActive = (id: number): boolean => {
  return selectedUserThings.value.some((item) => item.id === id)
}

const selectAvailableThing = (thing: Thing) => {
  selectedAvailableThing.value = selectedAvailableThing.value?.id === thing.id ? null : thing
}

const selectUserThing = (thing: Thing) => {
  const existThing = selectedUserThings.value.some((item) => item.id === thing.id)

  if (existThing) {
    selectedUserThings.value = selectedUserThings.value.filter((item) => item.id !== thing.id)
  } else if (selectedUserThings.value.length !== MAX_SELECTED_COUNT) {
    selectedUserThings.value.push(thing)
  }
}
</script>

<style scoped lang="scss">
$active-color: #8e62b8;

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
  justify-content: space-between;
}

.user-things-selected {
  grid-column: 1 / span 2;

  &.block--grid {
    align-content: end;
  }
}

.available-things-selected {
  display: grid;
  align-items: start;
  grid-column: 5 / span 2;
}

.block {
  border: 4px solid #222;
  padding: 10px;
  text-align: center;
  font-size: 14px;

  &__info {
    font-size: 18px;
    grid-column: 1 / -1;
    align-self: end;
  }

  &--grid {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    align-content: start;
  }

  &--active {
    border-color: $active-color;
    color: $active-color;
  }
}

.item {
  cursor: pointer;
}

.main-blocks {
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}
</style>
