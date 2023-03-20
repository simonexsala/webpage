<template>
  <div class="flex flex-col p-6 mt-6 backdrop-filter backdrop-blur-lg bg-opacity-25">
    <nuxt-img src="../public/avatar.jpg" alt="" class="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" 
    />
    <div class="text-center">
      <div class="my-2 space-y-1">
        <h2 class="text-lg font-bold text-gray-900 ">Simone Sala</h2>
      </div>
      <div class="flex justify-center space-x-2 align-center">
        <a rel="noopener noreferrer" href="https://github.com/simonexsala" aria-label="GitHub" class="p-2">
          <Icon name="mdi:github" size="25" color="black" />
        </a>
        <a rel="noopener noreferrer" href="https://twitter.com/simonexsala" aria-label="Twitter" class="p-2">
          <Icon name="mdi:twitter" size="25" color="black" />
        </a>
        <a rel="noopener noreferrer" href="mailto:simonexsala@protonmail.com" aria-label="Email" class="p-2">
          <Icon name="mdi:email" size="25" color="black" />
        </a>
        <button class="p-2">
          <Icon name="mdi:bitcoin" size="25" color="black" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
    };
  },
  methods: {
  },
}
</script>
