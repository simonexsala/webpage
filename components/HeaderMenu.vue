<template>
    <Menu as="div" class="inline-block">
      <div>
        <MenuButton
          class="rounded-xl bg-gray-100 p-2 hover:bg-violet-300"
        >
          <Icon name="mdi:menu" size="25" color="black" />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-4 mr-4 w-52 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-2 py-1">
            <MenuItem v-slot="{ close }">
              <NuxtLink to="/" @mouseup="close" class="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100">
                Home
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ close }">
              <NuxtLink to="/scritti" @mouseup="close" class="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100">
                Scritti
                <span class="shrink-0 rounded-full bg-gray-100 py-0.5 px-3 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                </span>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ close }">
              <NuxtLink to="/frammenti" @mouseup="close" class="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100">
                Frammenti
                <span class="shrink-0 rounded-full bg-gray-100 py-0.5 px-3 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                </span>
              </NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{ close }">
              <NuxtLink to="/progetti" @mouseup="close" class="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100">
                Progetti
                <span class="shrink-0 rounded-full bg-gray-100 py-0.5 px-3 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
{{ numFrammenti }}
                </span>
              </NuxtLink>

            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

export default {
  components: { Menu, MenuButton, MenuItems, MenuItem },
  data() {
    return {
      numScritti: null,
      numFrammenti: null,
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const numScritti = await this.$content('scritti').fetch().then((docs) => docs.length)
      const numFrammenti = await this.$content('frammenti').fetch().then((docs) => docs.length)
      console.log(numScritti)
      this.numScritti = numScritti
      this.numFrammenti = numFrammenti
    },
  },
}
</script>
