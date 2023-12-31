<template>
  <div>
    <button
      v-if="iconPosition === 'left'"
      type="button"
      @click="openModal"
      class="text-fluid-header-title cursor-pointer items-center rounded-lg px-4 py-3 font-roboto font-semibold leading-tight text-green-500 duration-500 hover:bg-neutral-800"
    >
      <font-awesome-icon
        :icon="iconModel"
        class="text-fluid-header-title pr-2 font-semibold leading-tight text-green-500"
      />
      {{ name }}
    </button>
    <button
      v-if="iconPosition === 'right'"
      type="button"
      @click="openModal"
      class="text-fluid-header-title cursor-pointer items-center rounded-lg px-4 py-3 font-roboto font-semibold leading-tight text-green-500 duration-500 hover:bg-neutral-800"
    >
      {{ name }}
      <font-awesome-icon
        :icon="iconModel"
        class="text-fluid-header-title pl-2 font-semibold leading-tight text-green-500"
      />
    </button>
  </div>

  <ClientOnly>
    <HeadlessTransitionRoot appear :show="modalStore.isOpen" as="template">
      <HeadlessDialog as="div" @close="closeModal" class="relative z-10">
        <HeadlessTransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/50" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <HeadlessTransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <HeadlessDialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-neutral-800 p-6 text-left align-middle shadow-xl transition-all"
              >
                <HeadlessDialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-neutral-50"
                >
                  {{ title }}
                </HeadlessDialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-neutral-400">{{ desc }}</p>
                </div>

                <div class="mt-4 flex gap-2">
                  <NuxtLink :to="route">
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 duration-500 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >
                      {{ move }}
                    </button>
                  </NuxtLink>
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 duration-500 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    {{ stay }}
                  </button>
                </div>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </ClientOnly>
</template>

<script setup>
const modalStore = useModalStore();

onMounted(() => {
  modalStore.$reset();
});

const closeModal = modalStore.closeModal;
const openModal = modalStore.openModal;

let props = defineProps({
  name: String,
  title: String,
  desc: String,
  route: String,
  move: String,
  stay: String,
  iconPosition: String,
  iconModel: String,
});
</script>
