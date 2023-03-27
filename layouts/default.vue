<template>
  <div>
    <Header @showSearchbar="showSearchbar = !showSearchbar" />
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
    <slot />
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
