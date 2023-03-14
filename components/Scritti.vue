<template>
  <div class="space-y-6 mt-6">
    <div>
      <h2 class="underline decoration-primary text-3xl font-extrabold">Scritti</h2>
    </div>

    <div class="container flex-1 max-w-3xl mx-auto space-y-6 xl:max-w-5xl">
      <section>
        <p class="md:text-lg text-base xl:max-w-3xl">
          La corrosione delle parole rivolte verso esse stesse! La vita ha precedenza.
        </p>
      </section>
    </div>

    <div class="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2">
      <div class="max-w-sm rounded-xl mx-auto group hover:no-underline focus:no-underline shadow-xl dark:bg-gray-900 dark:text-gray-100">
        <NuxtLink to="/scritti/a">
          <nuxt-img src="https://source.unsplash.com/random/300x300/?2" alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div class="flex flex-col justify-between p-6 space-y-8">
            <div class="space-y-2">
              <h2 class="font-extrabold text-gray-800 md:text-3xl text-xl group-hover:underline group-focus:underline">Maio zingumon lectus leo</h2>
              <p class="md:text-lg text-gray-500 text-base">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="max-w-sm rounded-xl mx-auto group hover:no-underline focus:no-underline shadow-xl dark:bg-gray-900 dark:text-gray-100">
        <NuxtLink to="/scritti/b">
          <nuxt-img src="https://source.unsplash.com/random/300x400/?2" alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" 
          />
          <div class="flex flex-col justify-between p-6 space-y-8">
            <div class="space-y-2">
              <h2 class="font-extrabold text-gray-800 md:text-3xl text-xl group-hover:underline group-focus:underline">Donec lectus leo</h2>
              <p class="md:text-lg text-gray-500 text-base">Curabitur luctus ermasidiadasdoa oiat nunc, sed ullamcorper erat vestibulum eget.</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-wrap justify-center">
      <NuxtLink to="/scritti">
        <button class="shadow-md hover:shadow-lg group px-8 py-3 m-2 text-lg font-semibold rounded-xl dark:bg-accent dark:text-gray-900">
          Scritti 
          <Icon name="charm:arrow-right" class="animate-[shake_2s_linear_infinite]" />
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scritti'  
}
</script>
