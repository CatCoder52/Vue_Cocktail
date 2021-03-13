<template>
  <div class="container">
    <div v-for="cocktail in names" :key="cocktail.strDrink" class="flex justify-between p-2">
      <p>
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
