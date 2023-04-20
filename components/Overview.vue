<template>
  <div class="flex flex-col">
    <NuxtImg
      alt=""
      src="clouds.jpg"
      class="rounded-3xl object-cover transition w-full h-48 sm:h-72 md:h-96"
    />

    <div class="mt-2 space-y-2">
      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          class="flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
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
          class="flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
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
          <p>
            Un personale schedario di frammenti selezionati da letture che hanno lacerato progressivamente 
            le nubi nere di tempesta che oscuravano il mio vedere e vivere il mondo, rendendomi testimone 
            del potere creativo delle sorgenti solari che bagnano il nostro percorso. Gli orizzonti della raccolta 
            sono in perpetua espansione e riflettono mano a mano le nicchie di interesse che mi contagiano;
            insieme compongono un'immagine cruda del mio occhio culturale, sempre indirizzato verso l'unica 
            nobile volontà della vita: promuovere tutto ciò che è potenza, verità, bellezza e sensualità,
            senza che queste mai siano sottomesse dalle brutalità del mondo. L'obiettivo rimane un
            pensare sempre più raffinato — noncurante di piccole prospettive e meschini guadagni. 
          </p>
          <p class="mb-4">
            Diversi sono i numi tutelari, ma ciò che anima la scelta dei 
            testi si estende oltre il singolo e rappresenta l'anelito di conquista di nuovi territori fertili e nuovi
            scorci dove godere dell'irraggiamento divino, il motore più intimo di un grande impero:
            Iperborea dove non esiste oppressione e debolezza giacché la fiamma della vita ha lottato e vinto 
            tutte le corrosioni dello spirito e le bassezze umane. Il luogo dove la gratitudine per una vitalità traboccante
            e il suo vivace sognare domina su ogni altro sentimento.
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
          class="flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
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
          class="flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
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
