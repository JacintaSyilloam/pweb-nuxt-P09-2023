<template>
  <main>
    <nav
      class="fixed top-0 z-50 w-full items-center justify-center border-b border-neutral-700 bg-neutral-900"
    >
      <div class="mx-fluid-nav flex flex-wrap items-center justify-between p-2">
        <h1
          class="font-lora text-fluid-nav-logo font-semibold leading-normal text-green-500"
        >
          NuxtJS Blog
        </h1>

        <ul class="font-roboto flex items-center gap-12 text-slate-50">
          <li class="cursor-pointer duration-500 hover:text-green-500">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="cursor-pointer duration-500 hover:text-green-500">
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
          <li class="cursor-pointer duration-500 hover:text-green-500">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </main>
</template>
