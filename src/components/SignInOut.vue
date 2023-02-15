<script>
  export default {
    emits: ['SignOut'],
    data() {
      return {};
    },
    props: {
      user: {
        type: String,
        required: true,
      },
    },
    methods: {
      onSignOut() {
        this.$emit('SignOut');
      },
    },
  };
</script>
<template>
  <p>Välkommen {{ user }}!</p>
  <button @click="onSignOut" class="btn btn-secondary p3">Sign out</button>
</template>
