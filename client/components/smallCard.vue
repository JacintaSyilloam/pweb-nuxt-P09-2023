<template>
  <div class="flex flex-col gap-4">
    <img :src="imageUrl" alt="image" class="h-72 rounded-xl object-cover" />

    <!-- Header Text -->
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <div class="flex flex-row items-center gap-2">
          <h2 class="font-roboto text-base font-medium text-neutral-400">
            {{ author }}
          </h2>
          <font-awesome-icon
            icon="fa-solid fa-circle"
            class="text-mini text-neutral-400"
          />
          <h2 class="font-roboto text-base font-medium text-neutral-400">
            {{ publishDate }}
          </h2>
        </div>

        <h1
          class="pb-clamp font-lora line-clamp-4 text-3xl font-semibold text-green-500"
        >
          {{ title }}
        </h1>
      </div>

      <p class="font-roboto line-clamp-4 text-sm/[22px] text-neutral-300">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    author: String,
    publishDate: String,
    title: String,
    description: String,
  },
};
</script>
