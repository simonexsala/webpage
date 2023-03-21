<template>
  <section>
    <div class="max-w-screen-xl mx-auto sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
        <div class="grid p-6 bg-gray-100 rounded-xl place-content-center sm:p-8 shadow-md">
          <div class="max-w-md mx-auto lg:text-left group">
            <header>
              <h2 class="underline decoration-2 decoration-violet-300 text-lg font-medium text-gray-900">
                Scritti
              </h2>

              <p class="mt-2 text-sm leading-relaxed text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                MIAO MIAO MIAO
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                rerum quam amet provident nulla error!
              </p>
            </header>

            <div class="flex flex-wrap justify-center">
              <NuxtLink to="/scritti">
                <button class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 rounded-xl hover:bg-violet-300 hover:shadow-lg">
                  Scritti 
                  <Icon name="charm:arrow-right" />
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 lg:py-4">
          <ul class="grid grid-cols-2 gap-4">
            <li class="grid bg-gray-100 rounded-xl place-content-center shadow-md">
              <NuxtLink to="/scritti/la-caduta-moderna" class="block group">
                <nuxt-img src="../public/scritti/la-caduta-moderna.jpg" alt="" class="object-cover w-full rounded-xl aspect-square" />
                <div class="p-2 py-3 md:p-4 lg:p-8">
                  <h3
                    class="text-center font-medium text-gray-600 group-hover:underline group-hover:underline-offset-4"
                  >
                    La caduta moderna 
                  </h3>
                </div>
              </NuxtLink>
            </li>
            <li class="grid bg-gray-100 rounded-xl place-content-center shadow-md">
              <NuxtLink to="/scritti/la-nuova-frontiera" class="block group">
                <nuxt-img src="../public/scritti/la-nuova-frontiera.jpg" alt="" class="object-cover w-full rounded-xl aspect-square" />
                <div class="p-2 py-3 md:p-4 lg:p-8">
                  <h3
                    class="text-center font-medium text-gray-600 group-hover:underline group-hover:underline-offset-4"
                  >
                    La nuova frontiera 
                  </h3>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Scritti'  
}
</script>
