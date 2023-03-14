<template>
  <div class="space-y-6">
    <div>
      <h2 class="underline decoration-primary text-3xl font-extrabold">Frammenti</h2>
    </div>

    <div class="flex flex-col justify-center">
      <div
        class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl p-3 mx-auto bg-white">
        <div class="w-full md:w-2/5 bg-white grid place-items-center">
          <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" class="rounded-xl" />
        </div>
          <div class="w-full md:w-3/5 bg-white flex flex-col space-y-2 p-3">
            <h2 class="font-extrabold text-gray-800 md:text-3xl text-xl">The and Wonderful </h2>
            <p class="md:text-lg text-gray-500 text-base">The best kept secret of The Bahamas is the country’s sheer
              size and diversity. With 16 major islands, The Bahamas is an unmatched destination
            </p>
              <div class="flex flex-wrap justify-center">
                <NuxtLink to="/frammenti">
                  <button class="shadow-md hover:shadow-lg group px-8 py-3 m-2 text-lg font-semibold rounded-xl dark:bg-accent dark:text-gray-900">
                    Frammenti 
                    <Icon name="charm:arrow-right" class="animate-[shake_2s_linear_infinite]" />
                  </button>
                </NuxtLink>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Frammenti'  
}
</script>
