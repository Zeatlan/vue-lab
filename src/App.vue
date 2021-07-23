<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Reaction' }">Reaction Timer Game</router-link>
    <router-link :to="{ name: 'Form' }">Formulaire</router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
    <router-link :to="{ name: 'Blog' }">Blog</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go Forward</button>

  <router-view />
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  width: 860px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-left: 15px;
  padding: 15px;
  background: rgb(240, 239, 239);
  border-radius: 5px;
}

#nav a.router-link-exact-active {
  color: #fff;
  background-color: #ab42b9;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
