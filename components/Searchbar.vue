<template>
  <div class="mx-auto max-w-screen-xl px-4 mt-2">
    <form>
      <div class="flex w-full h-10">
        <div class="relative text-left">
          <Listbox v-model="selectedOption" name="option">
            <ListboxButton class="inline-flex w-24 md:w-32 gap-x-1 items-center rounded-xl h-10 px-4 py-2 text-sm bg-black text-white font-semibold text-gray-900 hover:bg-violet-300">
              {{ selectedOption.option }}
              <Icon name="heroicons:arrows-up-down-20-solid" size="20" color="white" class="mr-2 absolute right-0" />
            </ListboxButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <ListboxOptions class="absolute left-0 mt-4 mr-4 w-24 md:w-32 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="px-2 py-1">
                  <ListboxOption
                    v-for="option in options"
                    :key="option.id"
                    :value="option"
                    class="select-none active:bg-gray-100 group flex items-center justify-between rounded-lg px-2 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100"
                  >
                    {{ option.option }}
                  </ListboxOption>
                </div>
              </ListboxOptions>
            </transition>
          </Listbox>
        </div>
        <input v-model="query" autocomplete="off" type="search" class="w-full bg-gray-50 border-black border-2 px-4 mx-2 md:mx-4 rounded-xl text-sm text-gray-900 rounded-xl" placeholder="Cerca...">
        <button @click.prevent="search" class="items-center rounded-xl h-10 p-2 bg-violet-300 hover:bg-pink-300">
          <Icon name="material-symbols:arrow-forward" size="25" color="white"/>
        </button>
      </div>
    </form>

    <ul v-if="articles.length">
      <li v-for="article in articles">
        <nuxt-link>
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
    <p v-else>Nessun risultato trovato</p>

  </div>
</template>

<script setup>
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'

  const options = [
    { id: 0, option: 'Tutto' },
    { id: 1, option: 'Autore' },
    { id: 2, option: 'Testo' },
  ]
  const selectedOption = ref(options[0])

  const query = ref('')
  const articles = ref([])

  async function search() {
    if (!query.value) {
      articles.value = []
      return
    }

    if (selectedOption.value.id == 1) {
      articles.value = await queryContent('/frammenti').where({ 'author': { $contains: query.value } }).find()
    } else if (selectedOption.value.id == 2) {
      articles.value = await queryContent('/frammenti').where({ 'title': { $contains: query.value } }).find()
    } else {
      articles.value = await queryContent('/frammenti').where({ 'title': { $contains: query.value } }).find()
    }

    console.log(JSON.stringify(articles.value))
  }
</script>
