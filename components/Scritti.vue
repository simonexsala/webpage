<template>
  <section>
    <div class="max-w-screen-xl py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
        <div class="grid p-6 bg-gray-100 rounded-xl place-content-center sm:p-8 shadow-md">
          <div class="max-w-md mx-auto lg:text-left group">
            <header>
              <h2 class="underline text-lg font-medium text-gray-900">
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
                <button class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 rounded-xl hover:bg-violet-400 hover:shadow-lg">
                  Scritti 
                  <Icon name="charm:arrow-right" />
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 lg:py-8">
          <ul class="grid grid-cols-2 gap-4">
            <li>
              <a href="#" class="block group">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                  alt=""
                  class="object-cover w-full rounded-xl aspect-square"
                />

                <div class="mt-3">
                  <h3
                    class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                  >
                    Simple Watch
                  </h3>

                  <p class="mt-1 text-sm text-gray-700">$150</p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="block group">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                  alt=""
                  class="object-cover w-full rounded-xl aspect-square"
                />

                <div class="mt-3">
                  <h3
                    class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                  >
                    Simple Watch
                  </h3>

                  <p class="mt-1 text-sm text-gray-700">$150</p>
                </div>
              </a>
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
