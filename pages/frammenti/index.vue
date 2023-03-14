<script setup>
const route = useRoute()

const { data: scritti } = await useAsyncData('scritti', () =>
  queryContent('/frammenti').find()
)

</script>

<template>
  <div class="container flex-1 max-w-3xl px-6 mx-auto space-y-12 xl:max-w-5xl">
    <main>
      <div>
        <h2 class="underline decoration-primary text-3xl font-extrabold">Frammenti</h2>
      </div>

      <div class="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 mt-6">
        <div v-for="scritto in scritti" :key="scritto._id">
          <div class="max-w-sm rounded-xl mx-auto group hover:no-underline focus:no-underline shadow-xl dark:bg-gray-900 dark:text-gray-100">
            <NuxtLink :to="scritto._path">
              <nuxt-img :src="`../public/scritti/${scritto.coverImage}`" alt="" class="object-cover object-center w-full rounded-t-md h-72"
              />
              <div class="flex flex-col justify-between p-6 space-y-8">
                <div class="space-y-2">
                  <span class="flex">
                    <time class="text-xs">
                      {{ scritto.date }}
                    </time>
                    <span class="ml-2 text-xs font-medium tracking-widest uppercase text-primary">
                      {{ scritto.field }}
                    </span>
                  </span>
                  <h2 class="font-extrabold md:text-3xl text-xl group-hover:underline group-focus:underline">
                    {{ scritto.title }}
                  </h2>
                  <p class="md:text-lg">
                    {{ scritto.description }}
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



