<template>
  <main>
    <section
      class="fixed top-0 flex w-full justify-between bg-neutral-900 px-32 py-4"
    >
      <h1 class="text-2xl font-semibold text-slate-50">NuxtJS Blog</h1>
      <ul class="flex items-center gap-12 text-slate-50">
        <li class="cursor-pointer transition-all hover:text-green-500">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="cursor-pointer transition-all hover:text-green-500">Blog</li>
        <li class="cursor-pointer transition-all hover:text-green-500">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>
