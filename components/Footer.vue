<template>
  <div class="flex flex-col p-6 bg-accent dark:text-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-30">
    <nuxt-img src="../public/avatar.jpg" alt="" class="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" 
    />
    <div class="text-center">
      <div class="my-2 space-y-1">
        <h2 class="font-extrabold md:text-3xl text-2xl ">Simone Sala</h2>
      </div>
      <div class="flex justify-center pt-2 space-x-4 align-center">
        <a rel="noopener noreferrer" href="https://github.com/simonexsala" aria-label="GitHub" class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
          <Icon name="mdi:github" size="30" color="black" />
        </a>
        <a rel="noopener noreferrer" href="https://twitter.com/simonexsala" aria-label="Twitter" class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
          <Icon name="mdi:twitter" size="30" color="black" />
        </a>
        <a rel="noopener noreferrer" href="mailto:simonexsala@protonmail.com" aria-label="Email" class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
          <Icon name="mdi:email" size="30" color="black" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
