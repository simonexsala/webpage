<template>
  <main class="container flex-1 max-w-3xl px-6 mx-auto space-y-6 xl:max-w-5xl">
    <Overview />
  </main>
</template>

<script setup>
const title = ref('Home / Simone Sala')
const description = ref('Simone Sala')
useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description
    },
  ]
})
</script>
