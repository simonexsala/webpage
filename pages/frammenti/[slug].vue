<template>
  <main>
    <div class="container flex-1 max-w-3xl mt-4 px-6 mx-auto space-y-2 xl:max-w-8xl prose prose-img:rounded-xl prose-h1:text-center prose-h1:mb-4 prose-h1:mt-4 prose-p:indent-4 prose-p:my-0 prose-quoteless">
      <ContentDoc>
        <template #default="{ doc }">
          <NuxtImg loading="lazy" :src="`${doc.coverImage}`" class="mb-0 mx-auto" />
          <div class="flex items-center px-6 gap-x-4 text-sm">
            <time datetime="{{ doc.date }}" class="rounded-full bg-gray-100 py-1.5 px-3 font-medium text-gray-600">
              {{ doc.year }}
            </time>
            <span v-if="doc.book.length < 24" class="rounded-full bg-violet-300 py-1.5 px-3 font-medium text-white">
              {{ doc.book }}
            </span>
            <span v-else class="rounded-full bg-violet-300 py-1.5 px-3 font-medium text-white">
              {{ doc.book.substring(0,24) + "..." }}
            </span>
          </div>
          <ContentRenderer :value="doc" />
          <hr class="w-48 h-0.5 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10">
          <p class="text-sm leading-relaxed text-gray-500">
            <span>
              {{ doc.author }}, 
            </span>
            <span>
              {{ doc.book }} 
            </span>
            <span class="italic">
              ({{ doc.year }}). 
            </span>
            <span class="italic">
              {{ doc.section }}.
            </span>
          </p>
        </template>
        <template #not-found>
          <NotFound404 />
        </template>
      </ContentDoc>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.doc.title,
      meta: [
        { hid: 'description', name: 'description', content: this.doc.description },
        { hid: 'og:title', property: 'og:title', content: this.doc.title },
        { hid: 'og:description', property: 'og:description', content: this.doc.description },
        { hid: 'twitter:title', name: 'twitter:title', content: this.doc.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.doc.description }
      ]
    }
  }
}
</script>
