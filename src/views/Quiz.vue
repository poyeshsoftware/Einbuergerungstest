<template>
  <div class="quiz-container">
    <h1>Einbürgerungstest</h1>
    <!-- Display the question component with current question -->
    <question :question="currentQuestion" @next-question="handleNextQuestion" />
    <div class="controls">
      <button @click="nextQuestion" :disabled="isLastQuestion">Next Question</button>
      <button @click="previousQuestion" :disabled="isFirstQuestion">Previous Question</button>
    </div>
    <div class="score">
      Current Score: {{ score }}
    </div>
  </div>
</template>

<script>
import Question from '../components/Question.vue'
import { useQuizStore } from '@/stores/quizStore'

export default {
  components: {
    Question
  },
  computed: {
    currentQuestion() {
      const store = useQuizStore();
      return store.questions[store.currentQuestionIndex];
    },
    score() {
      const store = useQuizStore();
      return store.score;
    },
    isFirstQuestion() {
      const store = useQuizStore();
      return store.currentQuestionIndex === 0;
    },
    isLastQuestion() {
      const store = useQuizStore();
      return store.currentQuestionIndex === store.questions.length - 1;
    }
  },
  methods: {
    nextQuestion() {
      const store = useQuizStore();
      if (!this.isLastQuestion) {
        store.currentQuestionIndex++;
      }
    },
    previousQuestion() {
      const store = useQuizStore();
      if (!this.isFirstQuestion) {
        store.currentQuestionIndex--;
      }
    },
    handleNextQuestion() {
      this.nextQuestion();
    }
  }
}
</script>

<style scoped>
.quiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.controls button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.controls button:hover {
  background-color: #bbb;
}

.controls button:disabled {
  background-color: #eee;
  cursor: not-allowed;
}
</style>