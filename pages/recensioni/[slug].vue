<script setup>
const formatDate = (date) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(date).toLocaleDateString('it-IT', options);
}
</script>

<template>
  <main>
    <div class="container flex-1 max-w-3xl mt-4 px-6 mx-auto space-y-2 xl:max-w-8xl prose prose-img:rounded-3xl prose-h1:text-center prose-h1:mb-4 prose-h1:mt-4 prose-p:indent-4 prose-p:my-0 prose-quoteless">
      <ContentDoc>
        <template #default="{ doc }">
          <NuxtImg :src="`${doc.coverImage}`" preset="frammento" class="mb-0 mx-auto" />
          <div class="flex items-center gap-x-2 text-xs ">
            <time datetime="{{ doc.date }}" class="rounded-full bg-gray-100 py-1.5 px-3 font-medium text-gray-600 select-none">
              {{ formatDate(doc.addedDate) }}
            </time>
            <span class="rounded-full bg-gray-900 py-1.5 px-3 font-medium text-white select-none">
              {{ doc.genre }}
            </span>
            <span class="rounded-full bg-gray-100 py-1.5 px-3 font-medium text-gray-600 select-none">
              {{ doc.year }}
            </span>
          </div>
          <ContentRenderer :value="doc" />
        </template>
        <template #not-found>
          <NotFound404 />
        </template>
      </ContentDoc>
    </div>
  </main>
</template>
