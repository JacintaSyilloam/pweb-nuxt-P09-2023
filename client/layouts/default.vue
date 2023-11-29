<template>
  <main>
    <nav
      class="fixed z-50 w-full items-center justify-center border-b border-neutral-700 bg-neutral-900"
    >
      <div class="mx-fluid-nav flex flex-wrap items-center justify-between p-2">
        <h1
          class="font-lora text-fluid-nav-logo font-semibold leading-normal text-green-500"
        >
          NuxtJS Blog
        </h1>

        <span @click="showNav()" class="cursor-pointer md:hidden">
          <font-awesome-icon
            class="text-xl text-neutral-50"
            :icon="['fas', openNav ? 'bars' : 'xmark']"
          />
        </span>

        <ul
          class="top-19 absolute w-full bg-neutral-900 font-roboto text-neutral-50 md:static md:flex md:w-auto md:items-center md:gap-12"
          :class="[
            openNav
              ? 'hidden'
              : 'left-0 top-14 border-b border-neutral-700 px-fluid-x md:border-0 md:px-0',
          ]"
        >
          <li
            class="my-6 cursor-pointer duration-500 hover:text-green-500 md:my-0"
            v-for="link in navigation"
          >
            <NuxtLink :to="link.route" @click="closeNav()">{{
              link.name
            }}</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </main>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  setup() {
    let openNav = ref(false);
    let navigation = [
      { name: "Home", route: "/" },
      { name: "Blog", route: "/blog" },
      { name: "About", route: "/about" },
    ];

    function showNav() {
      openNav.value = !openNav.value;
    }

    function closeNav() {
      openNav.value = false;
    }

    return {
      navigation,
      openNav,
      showNav,
      closeNav,
    };
  },
};
</script>
