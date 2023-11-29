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
        <smallCard
          v-for="blog in blogs"
          :key="blog.id"
          :author="blog.author"
          :title="blog.title"
          :description="blog.content"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "Blog",
  meta: [{ name: "description", content: "Blog Page" }],
});

// Static Side Generation (SSG) - still not fix

const blogs = await useAsyncData(async () => {
  return new Promise((resolve) => {
    fetch("http://localhost:8000/api/blogs")
      .then((response) => response.json())
      .then((data) => data.docs)
      .then((data) => resolve(data))
      .catch((error) => console.error("Error while fetching data: ", error));
  });
});

/*
.then((data) =>
        data.docs.forEach((category) => {
          console.log(category.title);
        }),
      )
*/
</script>
