import { ref } from 'vue'
import type { Thing } from '../types/thing'

export function useThings() {
  const MAX_SELECTED_COUNT = 6

  const selectedUserThings = ref<Thing[]>([])
  const userThings = ref<Thing[]>([
    { id: 1, name: 'Shoes 1' },
    { id: 2, name: 'Shoes 2' },
    { id: 3, name: 'Shoes 3' },
    { id: 4, name: 'Shoes 4' },
    { id: 5, name: 'T-shirt 1' },
    { id: 6, name: 'T-shirt 2' },
    { id: 7, name: 'T-shirt 3' },
    { id: 8, name: 'T-shirt 4' },
  ])

  const selectedAvailableThing = ref<Thing | null>(null)
  const availableThings = ref<Thing[]>([
    { id: 11, name: 'Jacket 1' },
    { id: 12, name: 'Jacket 2' },
    { id: 13, name: 'Jacket 3' },
    { id: 14, name: 'Jacket 4' },
    { id: 15, name: 'Hoodie 1' },
    { id: 16, name: 'Hoodie 2' },
    { id: 17, name: 'Hoodie 3' },
    { id: 18, name: 'Hoodie 4' },
  ])

  const isUserThingActive = (id: number): boolean => {
    return selectedUserThings.value.some((item) => item.id === id)
  }

  const toggleAvailableThing = (thing: Thing) => {
    selectedAvailableThing.value = selectedAvailableThing.value?.id === thing.id ? null : thing
  }

  const toggleUserThing = (thing: Thing) => {
    const existIndex = selectedUserThings.value.findIndex((item) => item.id === thing.id)

    if (existIndex !== -1) {
      selectedUserThings.value.splice(existIndex, 1)
    } else if (selectedUserThings.value.length < MAX_SELECTED_COUNT) {
      selectedUserThings.value.push(thing)
    }
  }

  return {
    userThings,
    availableThings,
    toggleUserThing,
    isUserThingActive,
    MAX_SELECTED_COUNT,
    selectedUserThings,
    toggleAvailableThing,
    selectedAvailableThing,
  }
}
