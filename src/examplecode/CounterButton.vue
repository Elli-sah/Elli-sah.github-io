<template>
  <input @click="onClick" type="button" :value="counter" />
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter++;
    },
  },
};
</script>
