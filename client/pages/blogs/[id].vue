<template>
  <main>
    <div class="h-auto max-h-full bg-neutral-900 pt-[72px]">
      <img
        :src="blog.media.url"
        alt="image"
        class="h-[480px] w-full object-cover"
      />

      <div class="flex w-full flex-col gap-8 px-fluid-nav pt-8">
        <div class="flex flex-col gap-2">
          <h1
            class="pb-clamp font-lora text-fluid-nav-logo font-semibold leading-tight text-green-500"
          >
            {{ blog.title }}
          </h1>

          <div class="flex flex-row items-center gap-3">
            <h2
              class="font-roboto text-fluid-headerCard-title font-medium leading-tight text-neutral-400"
            >
              {{ blog.author }}
            </h2>
            <font-awesome-icon
              icon="circle"
              class="text-fluid-headerCard-dot text-neutral-400"
            />
            <h2
              class="font-roboto text-fluid-headerCard-title font-medium leading-tight text-neutral-400"
            >
              {{ formatDate(blog.date) }}
            </h2>
          </div>
        </div>

        <p
          class="w-full pb-4 font-roboto text-fluid-headerCard-description leading-normal text-neutral-200"
        >
          {{ blog.content }}
        </p>
        <div class="flex items-center justify-center pb-16">
          <redirectModal
            name="Back to Blogs"
            title="You will redirect to Blogs page"
            desc="Are you sure?"
            route="/blogs"
            move="Letss go! 🚗"
            stay="Gajadi 🤓"
            iconPosition="left"
            iconModel="fa-solid fa-folder"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { format } from "date-fns";

const { id } = useRoute().params;

const { data: blog } = await useFetch(`http://localhost:8000/api/blogs/${id}`);

if (!blog.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const formatDate = (date) => {
  return format(new Date(date), "MMM dd, yyyy");
};
</script>
