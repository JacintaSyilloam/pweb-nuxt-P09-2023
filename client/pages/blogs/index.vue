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
      <div
        class="grid grid-cols-1 gap-10 pb-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        <NuxtLink v-for="blog in blogs" :to="`/blogs/${blog.id}`">
          <smallCard
            :imageUrl="blog.media.url"
            :key="blog.id"
            :author="blog.author"
            :title="blog.title"
            :description="blog.content"
            :publishDate="formatDate(blog.date)"
          />
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { format } from "date-fns";

useHead({
  title: "Home",
  meta: [{ name: "description", content: "Home Page" }],
});

const formatDate = (date) => {
  return format(new Date(date), "MMM dd, yyyy");
};

const { data: response } = await useFetch(
  "http://localhost:8000/api/blogs?limit=30",
);

if (!response.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const blogs = response.value.docs.map((blog) => {
  return {
    ...blog,
    formattedDate: formatDate(blog.date),
  };
});
</script>
