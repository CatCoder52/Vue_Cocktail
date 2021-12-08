<template>
  <div v-if="cocktail" class="max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg my-20">
    <div class="flex justify-center md:justify-end -mt-16">
      <img
        class="w-48 h-48 object-cover rounded-full border-2 border-indigo-500"
        :src="cocktail.strDrinkThumb"
      >
    </div>
    <div class="my-3">
      <h3 class="text-gray-800 text-3xl font-semibold">
        {{ cocktail.strDrink }} ( {{ cocktail.strAlcoholic }} )
      </h3>
      <p class="mt-2 text-gray-600">
        Category :- {{ cocktail.strCategory }} Glass :- {{ cocktail.strGlass }}
      </p>
    </div>
    <div class="flex justify-end mt-4">
      <a href="#" class="text-xl font-medium text-indigo-500">Ingredients are {{ cocktail.strIngredient1 }}, {{ cocktail.strIngredient2 }}</a>
    </div>
  </div>
  <p v-else class="text-center my-3 text-red-400">
    Loading...
  </p>
</template>

<script>
export default {
  name: 'CocktailDetail',
  data() {
    return {
      cocktail: null,
    };
  },
  mounted() {
    this.getCocktail();
  },
  methods: {
    async getCocktail() {
      const { id } = this.$route.params;
      const cocktailData = await this.$http.get(
        `/json/v1/1/lookup.php?i=${id}`,
      );
      const { drinks } = cocktailData;
      this.cocktail = drinks[0];
    },
  },
};
</script>
