<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-white">
    <nav class="hidden md:flex space-x-10 p-4">
      <router-link :to="{ name: 'Home'}" class="text-base font-medium text-gray-500 hover:text-gray-900">
        Home
      </router-link>
      <router-link :to="{ name: 'CocktailList' }" class="text-base font-medium text-gray-500 hover:text-gray-900">
        Cocktails
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>
