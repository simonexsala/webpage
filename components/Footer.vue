<template>
  <div class="flex flex-col p-6">
    <NuxtImg src="avatar.jpg" alt="" class="w-32 h-32 mx-auto rounded-full bg-violet-300 bg-opacity-30" 
    />
    <div class="text-center">
      <div class="my-2 space-y-1">
        <h2 class="text-lg font-bold text-gray-900 ">Simone Sala</h2>
      </div>
      <div class="flex justify-center space-x-2 align-center">
        <a rel="noopener noreferrer" href="https://github.com/simonexsala" aria-label="GitHub" class="p-2 hover:bg-gray-100 rounded-full">
          <Icon name="mdi:github" size="25" color="black" />
        </a>
        <a rel="noopener noreferrer" href="https://twitter.com/simonexsala" aria-label="Twitter" class="p-2 hover:bg-gray-100 rounded-full">
          <Icon name="mdi:twitter" size="25" color="black" />
        </a>
        <a rel="noopener noreferrer" href="mailto:simonexsala@protonmail.com" aria-label="Email" class="p-2 hover:bg-gray-100 rounded-full">
          <Icon name="mdi:email" size="25" color="black" />
        </a>
        <button class="p-2 hover:bg-gray-100 rounded-full" @click="openModal">
          <Icon name="mdi:bitcoin" size="25" color="black" />
        </button>
      </div>
    </div>
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-6 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <div class="flex flex-col">
                <NuxtImg src="bitcoin.jpg" class="mx-auto"/>

                <p class="text-sm text-gray-500 mt-2 mx-auto">
                  bc1qmgccwpdhf324lzyh7d4n30zcnp269u4jv7cnd0
                </p>
              </div>

              <div class="mt-4">
                <button 
                  class="flex justify-center items-center w-40 py-3 text-sm font-medium text-white transition bg-gray-900 rounded-xl hover:bg-violet-300 hover:shadow-lg"
                  @click="closeModal"
                >
                  Indietro
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>
