<template>
  <header aria-label="Site Header" class="shadow-sm">
    <div class="mx-auto max-w-screen-xl px-4 py-2">
      <div class="flex items-center justify-between gap-4 lg:gap-10">
        <div class="flex-1">
          <NuxtLink to="/">
            <span class="sr-only">Logo</span>
            <span class="font-bold bg-gray-200 px-3 py-2 rounded-xl hover:bg-violet-400 hover:text-white">Simone Sala</span>
          </NuxtLink>
          <span class="font-bold bg-gray-200 ml-4 px-3 py-2 rounded-xl hover:bg-violet-400 hover:text-white">👋</span>
        </div>

        <nav
          aria-label="Site Nav"
          class="hidden gap-8 text-gray-900 text-sm  md:flex"
        >
          <NuxtLink to="/scritti" class="text-gray-500">
            Scritti
          </NuxtLink>
          <NuxtLink to="/frammenti" class="text-gray-500">
            Frammenti
          </NuxtLink>
          <NuxtLink to="/progetti" class="text-gray-500">
            Progetti
          </NuxtLink>
        </nav>

        <div class="items-center justify-end gap-4 flex">
          <div class="">
            <button class="rounded-xl bg-blue-100 h-10 p-2" type="button">
              <span class="sr-only">Change theme</span>
              <Icon name="tabler:moon-stars" size="25" color="black" />
            </button>
          </div>

          <div class="lg:hidden">
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
