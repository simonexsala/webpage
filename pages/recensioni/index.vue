<script setup>
const { data: scritti } = await useAsyncData('recensioni', () =>
  queryContent('/recensioni').sort({ addedDate: -1 }).find()
)

const formatDate = (date) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(date).toLocaleDateString('it-IT', options);
}

const title = ref('Recensioni')
const description = ref('Collezione di recensioni')
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
        <h2 class="underline decoration-2 decoration-violet-300 text-3xl font-extrabold">Recensioni</h2>
      </div>
      <div class="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 mt-6 ">
        <div v-for="scritto in scritti" :key="scritto._id">
          <div class="max-w-sm rounded-xl mx-auto group hover:shadow-md focus:no-underline">
            <NuxtLink :to="scritto._path">
              <NuxtImg :src="`${scritto.coverImage}`" alt="" class="object-cover rounded-xl w-full"
              />
              <div class="flex flex-col p-6 pt-2">
                <div class="space-y-1">
                  <div class="flex items-center gap-x-2 text-xs">
                    <time datetime="{{ scritto.date }}" class="rounded-full bg-gray-100 py-1.5 px-3 font-medium text-gray-600">
                      {{ formatDate(scritto.addedDate) }}
                    </time>
                    <span class="rounded-full bg-violet-300/80 py-1.5 px-3 font-medium text-white">
                      {{ scritto.genre }}
                    </span>
                    <span class="rounded-full bg-rose-300/80 py-1.5 px-3 font-medium text-white">
                      {{ scritto.year }}
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
                  <span class="italic text-xs bg-gray-100 rounded-xl px-2 py-0.5 text-gray-500 justify-center">
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
