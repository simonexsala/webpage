<script setup>
const route = useRoute()

const { data: scritti } = await useAsyncData('frammenti', () =>
  queryContent('/frammenti').find()
)

</script>

<template>

  <div class="container flex-1 max-w-3xl mt-2 px-6 mx-auto space-y-12 xl:max-w-5xl">
    <main>
      <div>
        <h2 class="underline decoration-2 decoration-violet-300 text-3xl font-extrabold">Frammenti</h2>
      </div>

      <div class="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 mt-6 ">
        <div v-for="scritto in scritti" :key="scritto._id">
          <div class="max-w-sm rounded-xl mx-auto group hover:shadow-xl focus:no-underline">
            <NuxtLink :to="scritto._path">
              <nuxt-img :src="`../public/scritti/${scritto.coverImage}`" alt="" class="object-cover object-center w-full rounded-xl h-72"
              />
              <div class="flex flex-col justify-between p-6 pt-2 space-y-8">
                <div class="space-y-2">
                  <div class="flex items-center gap-x-4 text-xs">
                    <time datetime="" class="text-gray-500">
                      {{ scritto.year }}
                    </time>
                    <span class="relative z-10 rounded-full bg-gray-100 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">
                      {{ scritto.book }}
                    </span>
                  </div>

                  <h2 class="text-lg font-medium text-gray-900">
                    {{ scritto.author }}
                  </h2>
                  <p class="text-sm leading-relaxed text-gray-500 line-clamp-2">
                    {{ scritto.title }}
                  </p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>



