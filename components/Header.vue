<template>
  <header aria-label="Header" class="bg-primary">
    <div class="mx-auto max-w-screen-xl px-6 sm:px-6 lg:px-10">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <a class="block text-teal-600" href="/">
            <span class="sr-only">Home</span>
            <Icon name="mdi:cloud" size="32" color="white" />
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
            <div class="block md:hidden">
              <button
                class="text-white-600"
              >
                <Icon name="mdi:menu" size="32" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
