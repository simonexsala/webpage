<template>
  <header aria-label="Site Header" class="shadow-sm">
    <div class="mx-auto max-w-screen-xl px-4 py-2">
      <div class="flex items-center justify-between gap-4 lg:gap-8">
        <div class="flex">
          <NuxtLink to="/">
            <span class="sr-only">Logo</span>
            <span class="select-none font-bold bg-gradient-to-l from-violet-300 to-pink-300 px-3 py-2 rounded-xl hover:bg-violet-300 text-white">Simone Sala</span>
          </NuxtLink>
        </div>

        <nav
          aria-label="Site Nav"
          class="hidden md:flex gap-4 lg:gap-8 justify-centertext-gray-900 text-sm font-medium"
        >
          <NuxtLink to="/scritti" class="text-gray-900 hover:underline decoration-2 decoration-violet-300">
            Scritti
          </NuxtLink>
          <NuxtLink to="/frammenti" class="text-gray-900 hover:underline decoration-2 decoration-violet-300">
            Frammenti
          </NuxtLink>
          <NuxtLink to="/progetti" class="text-gray-900 hover:underline decoration-2 decoration-violet-300">
            Progetti
          </NuxtLink>
        </nav>
        
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
            <Search v-show="hasSearch" />
          </transition>
          <div>
            <HeaderMenu class="md:invisible"/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    hasSearch() {
      return /^\/(scritti|frammenti)(\/|$)/.test(this.$route.path)
    }
  }
}
</script>
