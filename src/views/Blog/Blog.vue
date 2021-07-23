<template>
  <h1>Blog Home</h1>
  <input type="text" v-model="search" />
  <p>Search term - {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  <button @click="handleClick">Stop watching</button>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
export default {
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);

    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect function ran", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return { names, search, matchingNames, handleClick };
  },
};
</script>

<style>
input {
  width: auto;
  margin: auto;
}
</style>