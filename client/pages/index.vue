<template>
  <main class="bg-neutral-900 pt-16">
    <section class="mx-fluid-x">
      <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 2000 }"
      >
        <SwiperSlide v-for="blog in blogs.slice(0, 4)" :key="blog.id">
          <bigCard
            :imageUrl="blog.media.url"
            :author="blog.author"
            :title="blog.title"
            :description="blog.content"
          />
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
          <smallCard
            v-for="blog in blogs.slice(5, 9)"
            :imageUrl="blog.media.url"
            :key="blog.id"
            :author="blog.author"
            :title="blog.title"
            :description="blog.content"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "Home",
  meta: [{ name: "description", content: "Home Page" }],
});

// Client Side Rendering (CSR)

const blogs = ref([]);

onMounted(async () => {
  const response = await fetch("http://localhost:8000/api/blogs");
  const data = await response.json();
  blogs.value = data.docs;
});
</script>
