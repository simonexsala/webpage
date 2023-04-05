<template>
  <div class="flex flex-col">
    <NuxtImg
      alt=""
      src="clouds.jpg"
      class="rounded-xl object-cover transition w-full md:h-96"
    />
    <div class="shadow-md rounded-xl mt-2">
      <TabGroup>
        <TabList class="flex gap-2 sm:gap-8 rounded-xl bg-gray-100/90 p-1 sm:p-2">
          <Tab
            v-for="category in Object.keys(categories)"
            as="template"
            :key="category"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full select-none rounded-xl py-2 px-1 sm:px-4 text-xs sm:text-sm font-medium leading-5 text-gray-900 focus:outline-none',
                selected
                  ? 'bg-white shadow'
                  : 'hover:bg-white hover:shadow-md',
              ]"
            >
              {{ category }}
            </button>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel
            v-for="(posts, idx) in Object.values(categories)"
            :key="idx"
          >
            <ul>
              <li
                v-for="post in posts"
                :key="post.id"
                class="relative rounded-md px-6 py-4"
              >

              <div class="space-y-2">
                <h2 class="underline decoration-2 decoration-violet-300 text-lg font-medium text-gray-900">
                  {{ post.name }}
                </h2>
                <p class="text-sm leading-relaxed text-gray-500">
                  {{ post.text }}
                </p>
                <div>
                  <NuxtLink :to="`${post.link}`">
                    <button class="flex justify-center items-center gap-x-1 w-40 py-3 text-sm font-medium text-white transition bg-gray-900 rounded-xl hover:bg-violet-300 hover:shadow-lg">
                      {{ post.name }}
                      <Icon name="material-symbols:arrow-forward" size="18" />
                    </button>
                  </NuxtLink>
                </div>
              </div>
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script setup>
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  const categories = ref({
    Scritti: [
      {
        id: 1,
        text: "a",
        link: '/scritti',
        name: 'Scritti'
      },
    ],
    Frammenti: [
      {
        id: 2,
        text: "Un personale schedario di frammenti selezionati da letture che nel bene — e nel male — hanno fornito un contributo netto a lacerare le nubi nere di tempesta che oscurano il mio vedere e vivere il mondo. La raccolta è destinata a espandere gli orizzonti delle questioni trattate, riflettendo mano a mano le nicchie di interesse in cui mi ritrovo ad indagare, e componendo un'immagine cruda del mio occhio culturale, mantenendo sempre la volontà di promuovere tutto ciò che è vita, verità e bellezza, declinate non solo in saggi filosofici e articoli politici, ma anche in poesia, arte e lirica. Unico obiettivo è un pensare sempre più raffinato — noncurante di piccole prospettive, di meschini guadagni e di una morale da schiavo. Diverse sono le personalità che fanno da numi tutelari, ma ciò che anima l'intima scelta dei testi si estende oltre il singolo individuo e va in territori fertili, dove non esistono oppressioni e debolezze, ma la fiamma della vita sfida e conquista tutte le corrosioni dello spirito moderno.",
        link: '/frammenti',
        name: 'Frammenti'
      },
    ],
    Recensioni: [
      {
        id: 3,
        text: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        link: '/recensioni',
        name: 'Recensioni'
      },
    ],
    Progetti: [
      {
        id: 4,
        text: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        link: '/progetti',
        name: 'Progetti'
      },
    ],
  })
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
