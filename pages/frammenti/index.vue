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
          <div class="max-w-sm rounded-3xl mx-auto group bg-gray-50 hover:shadow-xl">
            <NuxtLink :to="scritto._path">
              <NuxtImg :src="`${scritto.coverImage}`" preset="frammento" loading="lazy" class="object-cover object-center w-full rounded-3xl h-72"
              />
              <div class="flex flex-col p-6 pt-2">
                <div class="space-y-1">
                  <div class="flex items-center gap-x-2 text-xs">
                    <time datetime="{{ scritto.year }}" 
                      class="rounded-full bg-gray-200 py-0.5 px-2 font-medium text-gray-700 relative z-10">
                      {{ scritto.year }}
                    </time>
                    <span v-if="scritto.book.length < 42" 
                      class="rounded-full bg-gray-200 py-0.5 px-2 font-medium text-gray-700">
                      {{ scritto.book }}
                    </span>
                    <span v-else 
                      class="rounded-full bg-gray-200 py-0.5 px-2 font-medium text-gray-700">
                      {{ scritto.book.substring(0,40) + "..." }}
                    </span>
                  </div>

                  <h2 class="text-lg font-medium text-gray-900">
                    {{ scritto.title }}
                  </h2>
                  <h3 class="italic text-gray-900">
                    {{ scritto.author }}
                  </h3>
                  <p class="text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {{ scritto.description }}
                  </p>
                  <span 
                    class="text-xs rounded-full bg-gray-200 py-0.5 px-2 font-medium text-gray-700 italic">
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



