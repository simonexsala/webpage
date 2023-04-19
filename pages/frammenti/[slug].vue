<template>
  <main>
    <div class="container flex-1 max-w-3xl mt-4 px-6 mx-auto space-y-2 xl:max-w-8xl prose prose-img:rounded-xl prose-h1:text-center prose-h1:mb-4 prose-h1:mt-4 prose-p:indent-4 prose-p:my-0 prose-quoteless">
      <ContentDoc>
        <template #default="{ doc }">
          <NuxtImg :src="`${doc.coverImage}`" preset="frammento" class="mb-0 mx-auto" />
          <div class="flex items-center gap-x-2 text-xs">
            <time datetime="{{ doc.date }}" class="rounded-full bg-gray-100 py-1.5 px-3 font-medium text-gray-600 select-none hover:shadow-lg">
              {{ doc.year }}
            </time>
            <span class="hidden sm:flex rounded-full bg-gray-900 py-1.5 px-3 font-medium text-white select-none hover:shadow-lg">
              {{ doc.book }}
            </span>
            <span v-if="doc.book.length < 26" class="sm:hidden rounded-full bg-gray-900 py-1.5 px-3 font-medium text-white select-none hover:shadow-lg">
              {{ doc.book }}
            </span>
            <span v-else class="sm:hidden rounded-full bg-gray-900 py-1.5 px-3 font-medium text-white select-none hover:shadow-lg">
              {{ doc.book.substring(0,23) + "..." }}
            </span>
            <span class="rounded-full bg-gray-100 py-1.5 px-3 font-medium text-gray-600 select-none hover:shadow-lg">
              {{ doc.readingTime }}
            </span>
          </div>
          <ContentRenderer :value="doc" />
          <hr class="w-48 h-0.5 mx-auto bg-gray-300 border-0 rounded">
          <div class="not-prose">
            <p class="text-sm text-gray-500">
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
          </div>
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
