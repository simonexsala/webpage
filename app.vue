<template>
	<div class="antialiased selection:bg-violet-300/[.4]">
    <Header @showSearchbar="showSearchbar = !showSearchbar" @hideSearchbar="showSearchbar = false" />
    <transition
      enter-active-class="transition ease-out duration-1000"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-400 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-90 opacity-0"
    >
      <Searchbar v-if="showSearchbar" />
    </transition>
      <div class="mb-2 flex flex-col min-h-screen space-y-6">
        <NuxtLoadingIndicator color="#d8b4fe" :throttle="0" />
        <NuxtPage />
      </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSearchbar: false
    }
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all .5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
