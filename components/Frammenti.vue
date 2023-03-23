<template>
  <article class="group">
    <div class="grid bg-gray-100 rounded-xl place-content-center shadow-md">
      <NuxtImg
        alt=""
        src="frammenti.jpg"
        class="h-56 w-full rounded-xl object-cover shadow-xl transition"
      />

      <div class="p-6">
        <h2 class="underline decoration-2 decoration-violet-300 text-lg font-medium text-gray-900">
          Frammenti
        </h2>

        <p class="mt-2 text-sm leading-relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
          sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
          voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
          Molestias explicabo corporis voluptatem?
        </p>

        <div class="flex flex-wrap justify-center">
          <NuxtLink to="/frammenti">
            <button class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 rounded-xl hover:bg-violet-300 hover:shadow-lg">
              Frammenti 
              <Icon name="charm:arrow-right" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Frammenti'  
}
</script>
