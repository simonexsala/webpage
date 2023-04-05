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

        <TabPanels class="">
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
        text: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
        link: '/scritti',
        name: 'Scritti'
      },
    ],
    Frammenti: [
      {
        id: 2,
        text: 'Un personale schedario di frammenti selezionati dalle letture che nel bene — e nel male — hanno impressionato e fornito un contributo netto al mio vedere e vivere il mondo. La raccolta comprende capitoli, saggi e brevi sezioni che trattano una moltitudine di questioni culturali, con un occhio di riguardo per tutto ciò che promuove la vita e la bellezza, la poesia e la lirica, e un pensare sempre più raffinato — noncurante delle piccole prospettive, dei meschini guadagni e della morale dello schiavo. Diverse sono le personalità che fanno da numi tutelari, ma ciò che anima la scelta dei testi si estende oltre il singolo individuo e va al di là di qualsiasi oppressura, sfidando tutte le corrosioni dello spirito.',
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
