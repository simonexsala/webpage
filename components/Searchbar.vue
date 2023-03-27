<template>
  <div class="mx-auto max-w-screen-xl px-4 mt-2">
    <form>
      <div class="flex w-full h-10">
        <div class="relative text-left">
          <Listbox v-model="selectedPerson" name="option">
            <ListboxButton class="inline-flex w-24 md:w-32 gap-x-1 items-center justify-center rounded-xl h-10 px-3 py-2 text-sm bg-black text-white font-semibold text-gray-900 hover:bg-violet-300">
              {{ selectedPerson.name }}
              <Icon name="heroicons:chevron-down-20-solid" size="20" color="white"/>
            </ListboxButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <ListboxOptions class="absolute left-0 mt-4 mr-4 w-24 md:w-32 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="px-2 py-1">
                  <ListboxOption
                    v-for="person in people"
                    :key="person.id"
                    :value="person"
                    class="select-none active:bg-gray-100 group flex items-center justify-between rounded-lg px-2 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100"
                  >
                    {{ person.name }}
                  </ListboxOption>
                </div>
              </ListboxOptions>
            </transition>
          </Listbox>
        </div>
        <input type="search" class="w-full bg-gray-50 border-black border-2 px-4 mx-2 md:mx-4 rounded-xl text-sm text-gray-900 rounded-xl" placeholder="Cerca...">
        <button class="rounded-xl p-2 bg-violet-300">
          <Icon name="mdi:search" size="25" color="white"/>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'

  const people = [
    { id: 1, name: 'Tutto' },
    { id: 1, name: 'Autore' },
    { id: 1, name: 'Testo' },
  ]
  const selectedPerson = ref(people[0])
</script>
