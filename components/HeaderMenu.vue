<template>
    <Menu as="div" class="inline-block">
      <div>
        <MenuButton
          class="rounded-xl bg-gray-100 p-2 hover:bg-violet-400"
        >
          <Icon name="mdi:menu" size="25" color="black" />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-4 mr-4 w-52 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-2 py-1">
            <MenuItem v-slot="{ active }">
              <NuxtLink to="/scritti" class="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100">
                Scritti
                <span
                  class="shrink-0 rounded-full bg-gray-100 py-0.5 px-3 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700"
                >
                  11
                </span>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <NuxtLink to="/frammenti" class="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100">
                Frammenti
                <span
                  class="shrink-0 rounded-full bg-gray-100 py-0.5 px-3 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700"
                >
                  3
                </span>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <NuxtLink to="/progetti" class="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100">
                Progetti
                <span
                  class="shrink-0 rounded-full bg-gray-100 py-0.5 px-3 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700"
                >
                  5
                </span>
              </NuxtLink>

            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>
