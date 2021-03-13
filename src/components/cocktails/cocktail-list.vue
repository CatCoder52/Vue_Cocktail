<template>
  <t-table
    :headers="['Name', 'Category', 'Ingredients', 'Actions']"
    :data="cocktails"
  >
    <template slot="row" slot-scope="props">
      <tr :class="[props.trClass, props.rowIndex % 2 === 0 ? 'bg-gray-100' : '']">
        <td :class="props.tdClass" class="text-blue-400">
          {{ props.row.strDrink }}
        </td>
        <td :class="props.tdClass" class="text-blue-400">
          {{ props.row.strCategory }}
        </td>
        <td :class="props.tdClass" class="text-blue-400">
          {{ props.row.strIngredient1 }}, {{ props.row.strIngredient2 }}
        </td>
        <td class="flex justify-left p-3">
          <t-button variant="secondary" @click="changeUrl(props.row.idDrink)">
            View
          </t-button>
        </td>
      </tr>
    </template>
  </t-table>
</template>
<script>
export default {
  name: 'CocktailListTable',
  props: {
    cocktails: {
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
