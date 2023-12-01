<template>
  <main class="h-full bg-neutral-900 pt-24">
    <section class="duartion-500 mx-fluid-x">
      <div class="pb-8">
        <h1
          class="font-roboto text-fluid-landingPage-header font-semibold leading-none text-neutral-200"
        >
          Latest Article
        </h1>
      </div>
      <div class="h-screen pt-4" v-if="blogs == null">
        <h1
          class="font-roboto text-fluid-landingPage-header font-semibold leading-none text-green-500"
        >
          Fetching data on client ...
        </h1>
      </div>
      <div
        class="grid grid-cols-1 gap-10 pb-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        <NuxtLink
          v-for="(blog, idx) in blogs"
          :key="idx"
          :to="`/blogs/${blog.id}`"
        >
          <smallCard
            :imageUrl="blog.media.url"
            :key="blog.id"
            :author="blog.author"
            :title="blog.title"
            :description="blog.content"
            :publishDate="blog.formattedDate"
          />
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { format } from "date-fns";

const blogs = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:8000/api/blogs?limit=30");
    const data = await response.json();
    blogs.value = data.docs.map((blog) => ({
      ...blog,
      formattedDate: format(new Date(blog.date), "MMM dd, yyyy"),
    }));
  } catch (error) {
    console.error("Error while fetching data: ", error);
  }
});
</script>
