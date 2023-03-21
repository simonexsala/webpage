<template>
  <div class="grid h-screen px-6 bg-white py-24">
    <div class="text-center">
      <h1 class="font-black text-gray-200 text-9xl">404</h1>

      <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Uh-oh!
      </p>

      <p class="mt-4 text-gray-500">La pagina che stai cercando non esiste.</p>

      <div class="flex flex-wrap justify-center">
        <NuxtLink to="/">
          <button class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 rounded-xl hover:bg-violet-300 hover:shadow-lg">
            Home 
            <Icon name="charm:arrow-right" />
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
