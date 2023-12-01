<template>
  <main class="bg-neutral-900 pt-16">
    <section class="mx-fluid-x">
      <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 2000 }"
      >
        <SwiperSlide v-for="blog in blogs.slice(3, 8)" :key="blog.id">
          <NuxtLink :to="`/blogs/${blog.id}`">
            <bigCard
              :imageUrl="blog.media.url"
              :author="blog.author"
              :title="blog.title"
              :description="blog.content"
              :publishDate="formatDate(blog.date)"
            />
          </NuxtLink>
        </SwiperSlide>
      </Swiper>

      <div class="flex flex-col gap-5 pb-fluid-gap-section">
        <div class="flex flex-row items-center justify-between">
          <h1
            class="font-roboto text-fluid-landingPage-header font-semibold leading-none text-neutral-200"
          >
            Latest Article
          </h1>
          <redirectModal />
        </div>

        <div
          class="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        >
          <NuxtLink :to="`/blogs/${blog.id}`" v-for="blog in blogs.slice(4, 8)"
            ><smallCard
              :imageUrl="blog.media.url"
              :key="blog.id"
              :author="blog.author"
              :title="blog.title"
              :description="blog.content"
              :publishDate="formatDate(blog.date)"
          /></NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import axios from "axios";
import { format } from "date-fns";

const { data } = await useAsyncData(async () => {
  const res = await axios.get("http://localhost:8000/api/blogs");
  return res.data;
});

if (!data.value) {
  throw createError({
    statusCode: 400,
    statusMessage: "Error while data fetching!",
  });
}

const blogs = data._rawValue.docs;

const formatDate = (date) => {
  return format(new Date(date), "MMM dd, yyyy");
};
</script>
