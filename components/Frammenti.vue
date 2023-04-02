<template>
  <article class="group">
    <div class="grid bg-gray-100 rounded-xl place-content-center shadow-md">
      <NuxtImg
        alt=""
        src="frammenti.jpg"
        class="object-bottom h-56 w-full rounded-xl object-cover shadow-xl transition"
      />

      <div class="p-6">
        <h2 class="underline decoration-2 decoration-violet-300 text-lg font-medium text-gray-900">
          Frammenti
        </h2>

        <p class="mt-2 text-sm leading-relaxed text-gray-500">
          Un personale schedario di frammenti selezionati dalle letture che nel bene 
          &mdash; e nel male &mdash; hanno impressionato e fornito un contributo netto al mio vedere e vivere il mondo.
          La raccolta comprende capitoli, saggi e brevi sezioni che trattano una moltitudine di questioni culturali,
          con un occhio di riguardo per tutto ciò che promuove la vita e la bellezza, la poesia e la lirica, 
          e un pensare sempre più raffinato &mdash; noncurante delle piccole prospettive, dei meschini guadagni e della morale dello schiavo. 
          Diverse sono le personalità che fanno da numi tutelari, ma ciò che anima la scelta dei testi si 
          estende oltre il singolo individuo e va al di là di qualsiasi oppressura, sfidando tutte le corrosioni dello spirito.
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
