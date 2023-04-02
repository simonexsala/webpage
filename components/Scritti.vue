<template>
  <article class="group">
    <div class="grid bg-gray-100 rounded-xl place-content-center shadow-md">
      <NuxtImg
        alt=""
        src="scritti.jpg"
        loading="lazy"
        class="h-56 w-full rounded-xl object-cover shadow-xl transition"
      />

      <div class="p-6">
        <div class="flex flex-wrap justify-center mt-8">
          <NuxtLink to="/scritti">
            <button class="inline-block px-12 py-3 text-sm font-medium text-white transition bg-gray-900 rounded-xl hover:bg-violet-300 hover:shadow-lg">
              Scritti 
              <Icon name="material-symbols:arrow-forward" size="18" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>
