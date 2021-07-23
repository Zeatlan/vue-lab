<template>
  <h1>Job details Page</h1>
  <p>The job id is {{ id }}</p>

  <router-link :to="{ name: 'Jobs' }">About</router-link>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style>
</style>