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
        <!-- Header -->
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
import { format } from "date-fns";

useHead({
  title: "Home",
  meta: [{ name: "description", content: "Home Page" }],
});

const blogs = ref([]);
const dates = ref([]);

const formatDate = (date) => {
  return format(new Date(date), "MMM dd, yyyy");
};

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:8000/api/blogs");
    const data = await response.json();
    blogs.value = data.docs;
    dates.value = data.docs.map((blog) => formatDate(blog.date));
  } catch (error) {
    console.error("Error while fetching data: ", error);
  }
});
</script>
