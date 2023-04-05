<script setup>
const { data: scritti } = await useAsyncData('frammenti', () =>
  queryContent('/frammenti').sort({ addedDate: -1 }).find()
)

const title = ref('Frammenti / Simone Sala')
const description = ref('Collezione di frammenti')
useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description
    },
  ]
})
</script>

<template>
  <div class="container flex-1 max-w-3xl mt-2 px-6 mx-auto space-y-12 xl:max-w-5xl">
    <main>
      <div>
        <h2 class="underline decoration-2 decoration-violet-300 text-3xl font-extrabold">Frammenti</h2>
      </div>

      <div class="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 mt-6">
        <div v-for="scritto in scritti" :key="scritto._id">
          <div class="max-w-sm rounded-xl mx-auto group hover:shadow-md">
            <NuxtLink :to="scritto._path">
              <NuxtImg :src="`${scritto.coverImage}`" preset="frammento" loading="lazy" class="object-cover object-center w-full rounded-xl h-72"
              />
              <div class="flex flex-col p-6 pt-2">
                <div class="space-y-1">
                  <div class="flex items-center gap-x-2 text-xs">
                    <time datetime="{{ scritto.year }}" class="relative z-10 rounded-full bg-gray-100 py-1.5 px-3 font-medium text-gray-600">
                      {{ scritto.year }}
                    </time>
                    <span v-if="scritto.book.length < 29" class="rounded-full bg-violet-300/80 py-1.5 px-3 font-medium text-white">
                      {{ scritto.book }}
                    </span>
                    <span v-else class="rounded-full bg-violet-300/80 py-1.5 px-3 font-medium text-white">
                      {{ scritto.book.substring(0,26) + "..." }}
                    </span>
                    <span class="hidden 2xl:flex rounded-full bg-rose-300/80 py-1.5 px-3 font-medium text-white">
                      {{ scritto.readingTime }}
                    </span>
                  </div>

                  <h2 class="text-lg font-medium text-gray-900">
                    {{ scritto.title }}
                  </h2>
                  <h3 class="italic text-gray-900">
                    {{ scritto.author }}
                  </h3>
                  <p class="text-sm leading-relaxed text-gray-500 line-clamp-3">
                    {{ scritto.description }}
                  </p>
                  <span class="italic 2xl:hidden text-xs bg-gray-100 rounded-xl px-2 py-0.5 text-gray-500 justify-center">
                    Lettura di {{ scritto.readingTime }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>



