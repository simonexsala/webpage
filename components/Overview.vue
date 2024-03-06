<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <div class="flex-col">
    <NuxtImg
      alt=""
      src="horses.jpg"
      class="rounded-3xl object-cover"
    />

    <h1 class="py-2 sm:py-4 lg:py-8 text-3xl font-bold sm:text-4xl lg:text-5xl text-center select-none">
      Energia e Natura
    </h1>

    <div class="mx-auto w-full rounded-3xl bg-white py-2">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
        >
          <span>Scritti</span>
          <Icon name="mdi:chevron-down"
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-violet-300"
          />
        </DisclosureButton>

        <transition
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-50 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <DisclosurePanel class="px-4 py-2 text-sm font-medium text-gray-500">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            <br />
            <NuxtLink to="/scritti">
              <button 
                  class="mt-2 rounded-full bg-gray-100 py-1 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200">
                Scritti
                <Icon name="mdi-arrow-right"  class="h-5 w-5 " />
              </button>
            </NuxtLink>
          </DisclosurePanel>
        </transition>
      </Disclosure>

      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
        >
          <span>Frammenti</span>
          <Icon name="mdi:chevron-down"
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-violet-300"
          />
        </DisclosureButton>

        <transition
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-50 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <DisclosurePanel class="px-4 py-2 text-sm font-medium text-gray-500">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            <br />
            <NuxtLink to="/frammenti">
              <button 
                  class="mt-2 rounded-full bg-gray-100 py-1 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200">
                Frammenti
                <Icon name="mdi-arrow-right"  class="h-5 w-5 " />
              </button>
            </NuxtLink>
          </DisclosurePanel>
        </transition>
      </Disclosure>

     <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
        >
          <span>Recensioni</span>
          <Icon name="mdi:chevron-down"
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-violet-300"
          />
        </DisclosureButton>

        <transition
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-50 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <DisclosurePanel class="px-4 py-2 text-sm font-medium text-gray-500">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            <br />
            <NuxtLink to="/recensioni">
              <button 
                  class="mt-2 rounded-full bg-gray-100 py-1 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200">
                Recensioni
                <Icon name="mdi-arrow-right"  class="h-5 w-5 " />
              </button>
            </NuxtLink>
          </DisclosurePanel>
        </transition>
      </Disclosure>

      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
        >
          <span>Progetti</span>
          <Icon name="mdi:chevron-down"
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-violet-300"
          />
        </DisclosureButton>

        <transition
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-50 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <DisclosurePanel class="px-4 py-2 text-sm font-medium text-gray-500">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            <br />
            <NuxtLink to="/progetti">
              <button 
                  class="mt-2 rounded-full bg-gray-100 py-1 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200">
                Progetti
                <Icon name="mdi-arrow-right"  class="h-5 w-5 " />
              </button>
            </NuxtLink>
          </DisclosurePanel>
        </transition>
      </Disclosure>
    </div>
  </div>
</template>
