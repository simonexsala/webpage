<template>
  <main>
    <div class="container flex-1 max-w-3xl mt-4 px-6 mx-auto space-y-2 xl:max-w-8xl prose prose-img:rounded-xl prose-h1:text-center prose-h1:mb-4 prose-h1:mt-4">
      <ContentDoc v-slot="{ doc }">
        <NuxtImg :src="`${doc.coverImage}`" class="mb-0" />
        <div class="flex items-center px-6 gap-x-4 text-sm">
          <time datetime="{{ doc.date }}" class="rounded-full bg-gray-100 py-1.5 px-3 font-medium text-gray-600">
            {{ doc.year }}
          </time>
          <span class="rounded-full bg-violet-300 py-1.5 px-3 font-medium text-white">
            {{ doc.book }}
          </span>
        </div>
        <ContentRenderer :value="doc" />
        <hr class="w-48 h-0.5 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10">
        <p class="text-sm leading-relaxed text-gray-500">
          {{ doc.author }}, {{ doc.book}}, <i>{{ doc.section }}</i>.
        </p>

      </ContentDoc>
    </div>
  </main>
</template>
