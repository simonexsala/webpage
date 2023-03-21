<template>
  <header aria-label="Site Header" class="shadow-sm">
    <div class="mx-auto max-w-screen-xl px-4 py-2">
      <div class="flex items-center justify-between gap-4 lg:gap-10">
        <div class="flex-1">
          <NuxtLink to="/">
            <span class="sr-only">Logo</span>
            <span class="font-bold bg-gray-200 px-3 py-2 rounded-xl hover:bg-violet-300 hover:text-white">Simone Sala</span>
          </NuxtLink>
        </div>

        <nav
          aria-label="Site Nav"
          class="hidden gap-8 text-gray-900 text-sm font-medium md:flex"
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

        <div class="items-center justify-end gap-4 flex">
          <div class="">
            <button class="rounded-xl bg-violet-300 h-10 p-2" type="button">
              <span class="sr-only">Search</span>
              <Icon name="mdi:search" size="25" color="white"/>
            </button>
          </div>

          <div class="md:hidden">
            <HeaderMenu />
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
