<template>
  <div v-if="cocktail" class="container my-2 text-center font-semibold bg-green-300 text-gray-700 p-2">
    <h3>
      {{ cocktail.strDrink }} ( {{ cocktail.strAlcoholic }} )
    </h3>
    <p>
      Category :- {{ cocktail.strCategory }}
    </p>
    <p>
      Glass :- {{ cocktail.strGlass }}
    </p>
    <div class="flex justify-center my-3">
      <img :src="cocktail.strDrinkThumb" alt="Not available" height="400" width="450" className="rounded-md shadow">
    </div>

    <h4 class="my-2 text-lg">
      Ingredients
    </h4>
    <p class="text-center my-2 text-gray-500">
      {{ cocktail.strIngredient1 }}, {{ cocktail.strIngredient2 }}
    </p>
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
      const cocktailData = await this.$http.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { drinks } = cocktailData;
      this.cocktail = drinks[0];
    },
  },
};
</script>
