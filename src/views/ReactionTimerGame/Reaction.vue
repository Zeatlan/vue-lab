<template>
  <div class="reaction">
    <h1>Reaction Timer Game</h1>
    <button @click="start" :disabled="isPlaying">Play</button>

    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    <Results v-if="showResult" :score="score" />
  </div>
</template>

<script>
import Block from "../../components/ReactionTimerGame/Block.vue";
import Results from "../../components/ReactionTimerGame/Results.vue";

export default {
  components: {
    Block,
    Results,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResult = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResult = true;
    },
  },
};
</script>

<style>
button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>