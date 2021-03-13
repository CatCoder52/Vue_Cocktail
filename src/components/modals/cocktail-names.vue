<template>
  <div class="container overflow-y-auto">
    <div v-for="cocktail in names" :key="cocktail.strDrink" class="flex justify-between items-center p-2 border-b border-gray-600 my-2">
      <p class="font-semibold text-blue-800">
        {{ cocktail.strDrink }}
      </p>
      <img :src="cocktail.strDrinkThumb" alt="" height="50" width="70" class="cursor-pointer rounded shadow-md" @click.prevent="changeUrl(cocktail.idDrink)">
    </div>
  </div>
</template>
<script>
export default {
  name: 'CocktailNamesModal',
  props: {
    names: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeUrl(drinkId) {
      this.$router.push({ name: 'CocktailDetail', params: { id: drinkId } });
    },
  },
};
</script>
<style scoped>
.container {
  max-height: 500px;
}
</style>
