<template>
  <p>Your score : {{ score }} ms</p>

  <p class="result">{{ rank }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: "",
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Holy shit, you're fast";
    } else if (this.score < 400) {
      this.rank = "That's pretty good !";
    } else {
      this.rank = "Snail";
    }
  },
};
</script>

<style>
.result {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>