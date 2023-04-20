<template>
  <header aria-label="Site Header" class="shadow-sm">
    <div class="mx-auto max-w-3xl xl:max-w-5xl px-6 py-2">
      <div class="flex items-center justify-between gap-4 lg:gap-8">
        <NuxtLink to="/" class="hover:bg-violet-300/70 bg-gray-100 rounded-xl" exact-active-class="bg-violet-300/70">
          <div class="h-10 text-center select-none font-bold px-2 py-1 rounded-xl">
            <NuxtImg src="avatar.jpg" alt="" class="h-8 mx-auto rounded-full" 
            />
          </div>
        </NuxtLink>

        <div class="h-10">
          <nav
            aria-label="Site Nav"
            class="hidden md:flex gap-4 text-gray-900 text-sm font-bold h-10 items-center"
          >
            <NuxtLink to="/scritti" class="hover:bg-gray-100 rounded-xl px-4 py-2" exact-active-class="bg-gray-100">
              Scritti
            </NuxtLink>
            <NuxtLink to="/frammenti" class="hover:bg-gray-100 rounded-xl px-4 py-2" exact-active-class="bg-gray-100">
              Frammenti
            </NuxtLink>
            <NuxtLink to="/recensioni" class="hover:bg-gray-100 rounded-xl px-4 py-2" exact-active-class="bg-gray-100">
              Recensioni
            </NuxtLink>
            <NuxtLink to="/progetti" class="hover:bg-gray-100 rounded-xl px-4 py-2" exact-active-class="bg-gray-100">
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
            <div v-show="hasSearch">
              <button class="rounded-xl p-2 bg-gray-900 hover:bg-violet-300 h-10 w-10 flex items-center justify-center" @click="toggleSearchbar">
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
      this.$emit('hideSearchbar')
      this.searchbarOpen = false 

      if (/^\/(scritti|frammenti|recensioni|progetti)(\/)?$/.test(this.$route.path)) {
        return true
      } else {
        return false
      }
    }
  },
}
</script>
