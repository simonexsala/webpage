<template>
    <Menu as="div" class="inline-block">
      <MenuButton
        class="rounded-xl bg-gray-900 p-2 hover:bg-pink-300" 
      >
        <Icon name="mdi:menu" size="25" color="white" />
      </MenuButton>

      <transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-4 mr-4 w-44 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-2 py-1">
            <MenuItem v-slot="{ close }">
              <NuxtLink to="/" @mouseup="close" class="select-none active:bg-gray-100 group flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100">
                Home
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ close }">
              <NuxtLink to="/scritti" @mouseup="close" class="select-none active:bg-gray-100 group flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100">
                Scritti
                <span class="shrink-0 rounded-full bg-gray-100 py-0.5 px-3 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                  {{ numeroScritti }}
                </span>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ close }">
              <NuxtLink to="/frammenti" @mouseup="close" class="select-none active:bg-gray-100 group flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100">
                Frammenti
                <span class="shrink-0 rounded-full bg-gray-100 py-0.5 px-3 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                  {{ numeroFrammenti }}
                </span>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ close }">
              <NuxtLink to="/recensioni" @mouseup="close" class="select-none active:bg-gray-100 group flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100">
                Recensioni
                <span class="shrink-0 rounded-full bg-gray-100 py-0.5 px-3 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                  {{ numeroRecensioni }}
                </span>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ close }">
              <NuxtLink to="/progetti" @mouseup="close" class="select-none active:bg-gray-100 group flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100">
                Progetti
                <span class="shrink-0 rounded-full bg-gray-100 py-0.5 px-3 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                  {{ numeroProgetti }}
                </span>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ close }">
              <NuxtLink to="/biografia" @mouseup="close" class="select-none active:bg-gray-100 group flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100">
                Biografia
              </NuxtLink>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const { data: scrittiData } = await useAsyncData('scritti', () => queryContent('/scritti').find())
const { data: frammentiData } = await useAsyncData('frammenti', () => queryContent('/frammenti').find())
const { data: recensioniData } = await useAsyncData('recensioni', () => queryContent('/recensioni').find())
const { data: progettiData } = await useAsyncData('progetti', () => queryContent('/progetti').find())

const numeroScritti = scrittiData._rawValue.length
const numeroFrammenti = frammentiData._rawValue.length
const numeroRecensioni = recensioniData._rawValue.length
const numeroProgetti = progettiData._rawValue.length
</script>
