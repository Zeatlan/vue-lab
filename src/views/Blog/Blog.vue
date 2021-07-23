<template>
  <h1>Blog Home</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <Post-list :posts="posts" />
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import PostList from "../../components/Blog/PostList.vue";
import getPosts from "../../composables/getPosts";

export default {
  components: {
    PostList,
  },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style>
</style>