<template>
  <header aria-label="Header" class="fixed shadow-xl top-0 z-10 left-0 right-0 bg-light-text backdrop-filter backdrop-blur-lg bg-opacity-80">
    <div class="mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-10">
      <div class="flex h-12 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <a class="align-baseline width-50" href="/">
            <img src="@/public/tiger2.svg" width="50" />
            <span class="sr-only">Home</span>
          </a>
        </div>

        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Nav" class="hidden md:block">
            <ul class="flex items-center gap-6 text-md">
              <li>
                <NuxtLink to="/scritti"
                  class="text-gray-500 transition hover:text-gray-500/75"
                >
                  Scritti
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/frammenti"
                  class="text-gray-500 transition hover:text-gray-500/75"
                >
                  Frammenti
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/progetti"
                  class="text-gray-500 transition hover:text-gray-500/75"
                >
                  Progetti
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <div class="flex items-center gap-4">
            <div class="block">
              <button
                class="bg-primary rounded-md p-2 mr-2"
              >
                <Icon name="material-symbols:nights-stay-outline-rounded" size="22" color="white" />
              </button>
              <button
                class="bg-dark border-dark border-1 rounded-md p-2"
                @click="showMenu = !showMenu"
              >
                <Icon name="mdi:menu" size="22" color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div
    v-if="showMenu"
    class="fixed right-0 z-10 mr-2 w-40 rounded-xl bg-accent shadow-xl"
    role="menu"
  >
    <div class="p-2">
      <NuxtLink to="/scritti"
        class="block rounded-xl px-4 py-2 text-sm font-semibold hover:bg-accent"
        @click="showMenu = !showMenu"
      >
        Scritti
      </NuxtLink>

      <NuxtLink to="/frammenti"
        class="block rounded-xl px-4 py-2 text-sm font-semibold hover:bg-accent"
        @click="showMenu = !showMenu"
      >
        Frammenti
      </NuxtLink>

      <NuxtLink to="/progetti"
        class="block rounded-xl px-4 py-2 text-sm font-semibold hover:bg-accent"
        @click="showMenu = !showMenu"
      >
        Progetti
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showMenu: false,
    };
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    handleClickOutside(event) {
      const menu = this.$refs.menu;
      if (menu && !menu.contains(event.target)) {
        this.showMenu = false;
      }
    },
  },
}
</script>
