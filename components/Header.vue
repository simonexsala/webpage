<template>
  <header aria-label="Site Header" class="shadow-sm">
    <div class="mx-auto max-w-screen-xl px-4 py-2">
      <div class="flex items-center justify-between gap-4 lg:gap-8">
        <NuxtLink to="/" >
          <div class="w-32 text-center h-10 select-none font-bold bg-gradient-to-l from-violet-300 to-pink-300 px-3 py-2 rounded-xl hover:bg-violet-300 text-white">
            Simone Sala
          </div>
        </NuxtLink>

        <div class="h-10">
          <nav
            aria-label="Site Nav"
            class="hidden md:flex gap-2 justify-centertext-gray-900 text-sm font-medium h-10 items-center"
          >
            <NuxtLink to="/scritti" class="text-gray-900 hover:bg-pink-300 hover:text-white rounded-xl px-2.5 py-1.5">
              Scritti
            </NuxtLink>
            <NuxtLink to="/frammenti" class="text-gray-900 hover:bg-pink-300 hover:text-white rounded-xl px-2.5 py-1.5">
              Frammenti
            </NuxtLink>
            <NuxtLink to="/recensioni" class="text-gray-900 hover:bg-pink-300 hover:text-white rounded-xl px-2.5 py-1.5">
              Recensioni
            </NuxtLink>
            <NuxtLink to="/progetti" class="text-gray-900 hover:bg-pink-300 hover:text-white rounded-xl px-2.5 py-1.5">
              Progetti
            </NuxtLink>
          </nav>
        </div>
        
        <div class="flex-1" />

        <div class="items-center justify-end gap-4 flex md:gap-0">
          <transition            
            enter-active-class="transition ease-in duration-500"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition ease-in-out duration-500"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-show="hasSearch" class="h-10 w-10">
              <button class="rounded-xl p-2 hover:bg-pink-300" :class="searchbarOpen ? 'bg-pink-600' : 'bg-violet-300'" @click="toggleSearchbar">
                <Icon v-show="!searchbarOpen" name="mdi:search" size="25" color="white"/>
                <Icon v-show="searchbarOpen" name="mdi:close" size="25" color="white"/>
              </button>
            </div>
          </transition>
          <div>
            <HeaderMenu class="md:hidden"/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchbarOpen: false,
    }
  },
  methods: {
    toggleSearchbar() {
      this.searchbarOpen = !this.searchbarOpen
      this.$emit('showSearchbar')
    }
  },
  computed: {
    hasSearch() {
      if(/^\/(scritti|frammenti|recensioni|progetti)(\/|$)/.test(this.$route.path)) {
        return true
      } else {
        this.$emit('hideSearchbar')
        this.searchbarOpen = false 
        return false
      }
    }
  },
}
</script>

<style>
.router-link-active { border-radius: 0.75rem; background-color: #C4B5FD; color: white; }
</style>
