<template>
  <div class="min-h-screen flex flex-col justify-between bg-gray-300">
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '../components/common/header.vue';
import FooterComponent from '../components/common/footer.vue';

export default {
  name: 'Empty',
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
