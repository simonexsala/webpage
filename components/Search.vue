<template>
  <Popover class="relative">
    <div class="h-10">
      <PopoverButton class="rounded-xl p-2 bg-violet-300">
        <Icon name="mdi:search" size="25" color="white"/>
      </PopoverButton>
    </div>

    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
    <PopoverPanel
        class="absolute left-1/2 z-10 max-w-max -translate-x-3/4 md:-translate-x-full transform mt-4 rounded-xl shadow-xl"
      >
        <div
          class="overflow-hidden rounded-xl shadow-lg"
        >
          <div class="bg-gray-50 p-2">
            <label for="search" class="sr-only">Search</label>
            <div class="flex justify-center">
              <div class="flex items-center">
                <Icon name="mdi:search" size="25" color="black"/>
              </div>
              <input class="ml-2 w-48 px-4 py-2 text-sm text-gray-900 rounded-xl" placeholder="Cerca...">
              <button class="text-white px-4 py-2 ml-2 text-sm font-medium transition bg-gray-900 rounded-xl hover:bg-violet-300 hover:shadow-lg">Search</button>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>
