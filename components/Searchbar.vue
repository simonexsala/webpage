<template>
  <div class="mx-auto max-w-3xl xl:max-w-5xl px-6 mt-2">
    <div>
      <form>
        <div class="flex">
          <div class="relative text-left">
            <Listbox v-model="selectedOption" name="option">
              <ListboxButton class="bg-gray-100 font-medium text-gray-700 inline-flex w-24 md:w-32 gap-x-1 items-center rounded-xl h-10 px-4 py-2 text-sm hover:bg-gray-200">
                {{ selectedOption.option }}
                <Icon name="mdi-swap-vertical" class="text-gray-700 mr-2 absolute right-0 h-5 w-5" />
              </ListboxButton>
              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <ListboxOptions class="absolute left-0 mt-4 mr-4 w-24 md:w-32 origin-top-right rounded-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
            <input v-focus v-model="query" autocomplete="off" type="search" 
              class="grow w-20 h-10 bg-gray-100 px-4 mx-2 md:mx-4 rounded-xl text-sm text-gray-700 focus:outline-none hover:bg-gray-200" placeholder="Cerca...">
          <transition            
            enter-active-class="transition ease-in duration-500"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition ease-in-out duration-500"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <button @click.prevent="search" class=" min-w-10 flex items-center justify-center rounded-xl h-10 w-10 p-2 hover:bg-gray-200 bg-gray-100">
              <Icon name="mdi-search" class="text-gray-700 h-5 w-5" />
            </button>
          </transition>
        </div>
      </form>

      <div class="space-y-2">
        <transition
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <ul v-if="articles.length" class="mt-2 rounded-lg">
            <li v-for="article in articles">
              <NuxtLink :to="`${article._path}`" class="ml-auto py-1">
                <div class="flex flex-row gap-x-1 text-sm text-gray-900 rounded-lg">
                  <div class="flex-1 flex-col hover:bg-gray-100 px-2 py-1 rounded-lg group">
                    <div>
                      <span class="italic">
                      {{ article.author.split(' ').slice(-1)[0] }},
                      </span>
                      <span>
                      {{ article.title }}
                      </span>
                    </div>
                    <div class="flex items-center gap-x-2 text-xs py-1">
                      <time datetime="`{{ article.year }}`" 
                        class="rounded-full bg-gray-200 py-0.5 px-2 font-medium text-gray-700 select-none">
                        {{ article.year }}
                      </time>
                      <span class="hidden sm:flex rounded-full bg-gray-200 py-0.5 px-2 font-medium text-gray-700 select-none">
                        {{ article.book }}
                      </span>
                      <span v-if="article.book.length < 29" class="sm:hidden rounded-full bg-gray-200 py-0.5 px-2 font-medium text-gray-700 select-none">
                        {{ article.book }}
                      </span>
                      <span v-else class="sm:hidden rounded-full bg-gray-200 py-0.5 px-2 font-medium text-gray-700 select-none">
                        {{ article.book.substring(0,26) + "..." }}
                      </span>
                    </div>
                  </div>

                    <transition            
                      enter-active-class="transition ease-in duration-500"
                      enter-from-class="opacity-0"
                      enter-to-class="opacity-100"
                      leave-active-class="transition ease-in-out duration-500"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                    >
                      <button @click="searching = true" v-show="!searching" class="ml-auto h-10 w-10 my-2 px-2 inline-block transition bg-gray-100 rounded-xl hover:bg-gray-200">
                        <Icon  name="mdi:chevron-right"
                          class="h-5 w-5 text-gray-700"
                        />
                      </button>
                    </transition>
                </div>
              </NuxtLink>
            </li>
          </ul>
          <div v-else-if="searched && !articles.length" class="items-center mt-2 flex flex-row gap-x-1 text-sm text-gray-900 rounded-lg">
            <p class="flex-1 px-2 py-2 rounded-lg">
              Nessun risultato trovato
            </p>
              <button @click="searched = false" class="ml-auto h-10 w-10 my-2 px-2 inline-block transition bg-gray-100 rounded-xl hover:bg-gray-200">
                <Icon name="mdi:close" 
                  class="h-5 w-5 text-gray-700"
                />
              </button>
          </div>
        </transition>
      </div>
    </div>
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
    { id: 2, option: 'Titolo' },
    { id: 3, option: 'Libro' },
    { id: 4, option: 'Anno' },
  ]
  const selectedOption = ref(options[0])
  const query = ref('')
  const articles = ref([])
  const searched = ref(false)
  const searching = ref(false)
  const route = useRoute()

  const vFocus = {
    mounted: (el) => el.focus()
  }

  async function search() {
    searching.value = true
    if (!query.value) {
      articles.value = '0'
      searching.value = false
      return
    }

    let path = '/frammenti'
    if (route.path === '/recensioni') {
      path = '/recensioni'
    } else if (route.path === '/scritti') {
      path = '/scritti'
    } else if (route.path === '/progetti') {
      path = '/progetti'
    }

    if (selectedOption.value.id == 0) {
      articles.value = await queryContent(path).where({
        'tags': {
          $regex: new RegExp(query.value, 'i') 
        }
      }).find();
    } else if (selectedOption.value.id == 1) {
      articles.value = await queryContent(path).where({ 
        'author': {
          $regex: new RegExp(query.value, 'i') 
        } 
      }).find();
    } else if (selectedOption.value.id == 2) {
      articles.value = await queryContent(path).where({ 
        'title': {
          $regex: new RegExp(query.value, 'i') 
        } 
      }).find();
    } else if (selectedOption.value.id == 3) {
      articles.value = await queryContent(path).where({ 
        'book': {
          $regex: new RegExp(query.value, 'i') 
        } 
      }).find();
    } else if (selectedOption.value.id == 4) {
      articles.value = await queryContent(path).where({ 
        'year': {
          $regex: new RegExp(query.value, 'i') 
        } 
      }).find();
    }

    searched.value = true
    searching.value = false
  }
</script>
