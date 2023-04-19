<template>
  <div class="flex flex-col">
    <NuxtImg
      alt=""
      src="clouds.jpg"
      class="rounded-xl object-cover transition w-full md:h-96"
    />

    <div class="mt-2 space-y-2">
      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          class="flex items-center justify-between px-4 py-2 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <h2 class="font-medium text-gray-900">
            Scritti
          </h2>

          <svg
            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <div class="px-6 p-4 leading-relaxed text-gray-700">
          <p class="mb-4">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </p>
          <NuxtLink to="/scritti">
            <button class="flex justify-center items-center gap-x-1 w-40 py-3 text-sm font-medium text-white transition bg-gray-900 rounded-xl hover:bg-violet-300 hover:shadow-lg">
              Scritti
              <Icon name="material-symbols:arrow-forward" size="18" />
            </button>
          </NuxtLink>
        </div>
      </details>

      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          class="flex items-center justify-between px-4 py-2 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <h2 class="font-medium text-gray-900">
            Frammenti
          </h2>

          <svg
            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <div class="px-6 p-4 leading-relaxed text-gray-700">
          <p class="mb-4">
            Un personale schedario di frammenti selezionati da letture che nel bene — e nel male — hanno fornito un contributo netto a lacerare le nubi nere di tempesta che oscurano il mio vedere e vivere il mondo. La raccolta è destinata a espandere gli orizzonti delle questioni trattate, riflettendo mano a mano le nicchie di interesse in cui mi ritrovo ad indagare, e componendo un'immagine cruda del mio occhio culturale, mantenendo sempre la volontà di promuovere tutto ciò che è vita, verità e bellezza, declinate non solo in saggi filosofici e articoli politici, ma anche in poesia, arte e lirica. Unico obiettivo è un pensare sempre più raffinato — noncurante di piccole prospettive, di meschini guadagni e di una morale da schiavo. Diverse sono le personalità che fanno da numi tutelari, ma ciò che anima l'intima scelta dei testi si estende oltre il singolo individuo e va in territori fertili, dove non esistono oppressioni e debolezze, ma la fiamma della vita sfida e conquista tutte le corrosioni dello spirito moderno.
          </p>
          <NuxtLink to="/frammenti">
            <button class="flex justify-center items-center gap-x-1 w-40 py-3 text-sm font-medium text-white transition bg-gray-900 rounded-xl hover:bg-violet-300 hover:shadow-lg">
              Frammenti
              <Icon name="material-symbols:arrow-forward" size="18" />
            </button>
          </NuxtLink>
        </div>
      </details>

      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          class="flex items-center justify-between px-4 py-2 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <h2 class="font-medium text-gray-900">
            Recensioni
          </h2>

          <svg
            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <div class="px-6 p-4 leading-relaxed text-gray-700">
          <p class="mb-4">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
          <NuxtLink to="/recensioni">
            <button class="flex justify-center items-center gap-x-1 w-40 py-3 text-sm font-medium text-white transition bg-gray-900 rounded-xl hover:bg-violet-300 hover:shadow-lg">
              Recensioni
              <Icon name="material-symbols:arrow-forward" size="18" />
            </button>
          </NuxtLink>
        </div>
      </details>

      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          class="flex items-center justify-between px-4 py-2 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <h2 class="font-medium text-gray-900">
            Progetti
          </h2>

          <svg
            class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <div class="px-6 p-4 leading-relaxed text-gray-700">
          <p class="mb-4">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </p>
          <NuxtLink to="/progetti">
            <button class="flex justify-center items-center gap-x-1 w-40 py-3 text-sm font-medium text-white transition bg-gray-900 rounded-xl hover:bg-violet-300 hover:shadow-lg">
              Progetti
              <Icon name="material-symbols:arrow-forward" size="18" />
            </button>
          </NuxtLink>
        </div>
      </details>
    </div>

  </div>
</template>
