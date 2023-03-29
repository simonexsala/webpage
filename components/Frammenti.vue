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
          Un personale schedario di frammenti selezionati dalle letture che nel bene 
          &mdash; e nel male &mdash; hanno impressionato e fornito un contributo netto al mio vedere e vivere il mondo.
          La raccolta comprende capitoli, saggi e brevi sezioni che trattano questioni filosofiche, politiche, 
          religiose e culturali, con un occhio di riguardo anche per la poesia, la lirica, 
          e qualsiasi altro pensiero degno di nota. 
          Potrei anche non essere in accordo con il contenuto, ma ogni passaggio che risulti
          significativo troverà sempre posto.
          Con lo spirito greco di Eraclito e Omero e il ritorno ai valori dell'antichità di Schopenhauer e Nietzsche a far da numi tutelari.
        </p>

        <div class="flex flex-wrap justify-center mt-8">
          <NuxtLink to="/frammenti">
            <button class="inline-block px-12 py-3 text-sm font-medium text-white transition bg-gray-900 rounded-xl hover:bg-violet-300 hover:shadow-lg">
              Frammenti 
              <Icon name="material-symbols:arrow-forward" size="18" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>
