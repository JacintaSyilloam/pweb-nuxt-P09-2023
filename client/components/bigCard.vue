<template>
  <!-- Header News -->
  <div
    class="flex flex-col items-center justify-between gap-6 pb-fluid-gap-section pt-fluid-headerCard transition-all xl:flex-row xl:gap-28"
  >
    <!-- Image -->
    <img
      :src="imageUrl"
      alt="image"
      class="h-80 w-full rounded-xl object-cover"
    />

    <!-- Text Content -->
    <div class="flex w-full flex-col gap-3">
      <div class="flex flex-col gap-2">
        <!-- Header Text -->
        <div class="flex flex-row items-center gap-3">
          <h2
            class="font-roboto text-fluid-headerCard-title font-medium leading-tight text-neutral-400"
          >
            {{ author }}
          </h2>
          <font-awesome-icon
            icon="circle"
            class="text-fluid-headerCard-dot text-neutral-400"
          />
          <h2
            class="font-roboto text-fluid-headerCard-title font-medium leading-tight text-neutral-400"
          >
            {{ publishDate }}
          </h2>
        </div>

        <h1
          class="pb-clamp line-clamp-3 font-lora text-fluid-nav-logo font-semibold leading-tight text-green-500"
        >
          {{ title }}
        </h1>
      </div>

      <p
        class="line-clamp-4 max-w-full font-roboto text-fluid-headerCard-description leading-normal text-neutral-300"
      >
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
