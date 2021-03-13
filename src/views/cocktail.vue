<template>
  <div class="container p-2">
    <p class="text-center text-indigo-400 font-semibold my-3 text-lg">
      Search your favorite cocktails by name, filter them by category, they're alcoholic or non-alcoholic and what glass is used to
      serve it.
    </p>
    <div class="flex w-3/4 mx-auto my-2">
      <t-input-group class="w-3/4">
        <t-input v-model="search" placeholder="Search Cocktail By Name here" type="text" name="search" class="w-100" />
      </t-input-group>
      <t-button class="ml-3 w-1/4" @click.prevent="getCocktails">
        Search Cocktail By Name
      </t-button>
    </div>
    <div class="flex w-3/4 mx-auto my-3">
      <t-input-group class="w-3/4">
        <t-select v-model="selectedCategory"
                  :options="categories"
                  value-attribute="strCategory"
                  text-attribute="strCategory"
                  class="w-100"
        />
      </t-input-group>
      <t-button class="ml-3 w-1/4" @click.prevent="filterByCategory">
        Search Cocktail By Category
      </t-button>
    </div>
    <div class="flex w-3/4 mx-auto my-3">
      <t-input-group class="w-3/4">
        <t-select v-model="selectedGlass"
                  :options="glasses"
                  value-attribute="strGlass"
                  text-attribute="strGlass"
                  class="w-100"
        />
      </t-input-group>
      <t-button class="ml-3 w-1/4" @click.prevent="filterByGlass">
        Search Cocktail By Glass
      </t-button>
    </div>
    <div class="flex w-3/4 mx-auto my-3">
      <t-input-group class="w-3/4">
        <t-select v-model="selectedIngredient"
                  :options="ingredients"
                  value-attribute="strIngredient1"
                  text-attribute="strIngredient1"
                  class="w-100"
        />
      </t-input-group>
      <t-button class="ml-3 w-1/4" @click.prevent="filterByIngredient">
        Search Cocktail By Ingredients
      </t-button>
    </div>
    <div v-if="cocktails" class="w-3/4 mx-auto my-3">
      <t-button class="mx-auto my-3" @click="clearSearchResults">
        Clear Search Results
      </t-button>
      <cocktail-list-table :cocktails="cocktails" />
    </div>
    <p v-if="!cocktails && isDataLoaded" class="text-red-400 text-lg my-3 text-center font-semibold">
      No cocktails found.
    </p>
    <t-modal v-if="filteredResults" ref="namesModal" v-model="isCockTailNamesModalOpened">
      <cocktail-names-modal :names="filteredResults" />
      <template slot="header">
        <h2 class="text-center">
          Cocktail Names
        </h2>
      </template>
      <template slot="footer">
        <div class="flex justify-around">
          <t-button variant="error" type="button" @click="$refs.namesModal.hide()">
            Cancel
          </t-button>
        </div>
      </template>
    </t-modal>
  </div>
</template>

<script>
import CocktailListTable from '../components/cocktails/cocktail-list.vue';
import CocktailNamesModal from '../components/modals/cocktail-names.vue';

export default {
  name: 'CocktailList',
  components: {
    CocktailListTable,
    CocktailNamesModal,
  },
  data() {
    return {
      search: '',
      isDataLoaded: false,
      cocktails: null,
      categories: null,
      glasses: null,
      ingredients: null,
      filteredResults: null,
      selectedGlass: null,
      selectedIngredient: null,
      selectedCategory: null,
      isCockTailListModalOpened: false,
      isCockTailNamesModalOpened: false,
    };
  },
  mounted() {
    this.getCategories();
    this.getGlasses();
    this.getIngredients();
  },
  methods: {
    async getCocktails() {
      this.isCockTailListModalOpened = true;
      const cocktailData = await this.$http.get(`json/v1/1/search.php?s=${this.search}`);
      if (cocktailData) {
        this.isDataLoaded = true;
        this.cocktails = cocktailData.drinks;
      }
    },
    async filterByCategory() {
      const filteredData = await this.$http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.selectedCategory}`);
      this.isCockTailNamesModalOpened = true;
      this.filteredResults = filteredData.drinks;
    },
    async filterByGlass() {
      const filteredData = await this.$http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${this.selectedGlass}`);
      this.isCockTailNamesModalOpened = true;
      this.filteredResults = filteredData.drinks;
    },
    async filterByIngredient() {
      const filteredData = await this.$http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.selectedIngredient}`);
      this.isCockTailNamesModalOpened = true;
      this.filteredResults = filteredData.drinks;
    },
    async getCategories() {
      const categoryData = await this.$http.get('json/v1/1/list.php?c=list');
      if (categoryData) {
        this.categories = categoryData.drinks;
      }
    },
    async getGlasses() {
      const glassData = await this.$http.get('json/v1/1/list.php?g=list');
      if (glassData) {
        this.glasses = glassData.drinks;
      }
    },
    async getIngredients() {
      const ingredientData = await this.$http.get('json/v1/1/list.php?i=list');
      if (ingredientData) {
        this.ingredients = ingredientData.drinks;
      }
    },
    clearSearchResults() {
      this.isDataLoaded = false;
      this.cocktails = null;
      this.search = '';
    },
  },
};
</script>
