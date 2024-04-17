<template>
  <div class="answers">
    <ul>
      <li v-for="(option, index) in options" :key="index"
          :class="{
                   'correct': option === correctOption && selectedOption !== null,
                   'incorrect': option !== correctOption && selectedOption !== null,
                   'selected': selectedOption === option
      }">
        <button @click="selectOption(option)" :disabled="selectedOption">
          {{ option }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    correctOption: String
  },
  data() {
    return {
      selectedOption: null
    };
  },
  watch: {
    // Watch for changes in the options, which indicate a new question is being loaded
    options: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.resetSelection();
        }
      }
    },
    // Optionally, watch the correctOption if needed
    correctOption(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.resetSelection();
      }
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      let delay = option === this.correctOption ? 1000 : 3000; // Longer delay if incorrect
      setTimeout(() => {
        this.$emit('answer', option);
        if (option === this.correctOption) {
          this.$emit('correct-answer');
          this.resetSelection(); // Optional: reset immediately after handling if you want the button states to clear right after the delay.
        } else {
          this.$emit('incorrect-answer');
        }
      }, delay);
    },
    resetSelection() {
      this.selectedOption = null;
    }
  }
}
</script>

<style scoped>
.answers ul {
  list-style: none;
  padding: 0;
}

.answers li {
  margin: 0.5em 0;
}

.answers button {
  width: 100%;
  padding: 10px;
  background-color: #f4f4f4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, font-weight 0.3s ease;
}

.answers .correct button {
  background-color: #6dbb6d;
}

.answers .incorrect button {
  background-color: #ec8484;
}

.answers .selected {
  font-weight: bold;
}

.answers button:disabled {
  cursor: not-allowed;
}
</style>
