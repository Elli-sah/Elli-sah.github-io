<template>
  <HeaderN />
  <main>
    <RouterView />
  </main>
  <FooterN />
</template>

<script>
  import FooterN from './components/FooterN.vue';
  import HeaderN from './components/HeaderN.vue';
  export default {
    components: {
      HeaderN,
      FooterN,
    },
  };
</script>
