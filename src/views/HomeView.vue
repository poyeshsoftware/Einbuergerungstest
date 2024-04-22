<template>
  <div class="from-gray-100 via-gray-400  to-gray-500 p-10 quiz-container">
    <div class="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md"
         style="border: 1px solid black;">
      <h1 class="text-3xl font-bold mb-6 text-green-400 text-center text-success">Einbürgerungstest</h1>
      <!-- Display the question component with current question -->
      <question :question="currentQuestion" @next-question="handleNextQuestion"/>
      <div class="flex justify-between mt-4 controls">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md" @click="previousQuestion"
                :disabled="isFirstQuestion">Previous Question
        </button>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md" @click="nextQuestion"
                :disabled="isLastQuestion">Next Question
        </button>
      </div>
      <div class="flex justify-between mt-4 controls">
        <button
            class="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md"
            @click="toggleLanguage">Language: {{ getCurrentLanguage }}</button>
        <!-- Existing template content -->
      </div>
      <div class="score">
        Current Score: {{ score }}
      </div>
    </div>
  </div>
</template>

<script>
import Question from '../components/Question.vue'
import {useQuizStore} from '@/stores/quizStore'

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
    },
    getCurrentLanguage() {
      const store = useQuizStore();
      return store.currentLanguage === 'de' ? 'Deutsch' : 'English';
    },
  },
  methods: {
    toggleLanguage() {
      const store = useQuizStore();
      store.toggleLanguage();
    },
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
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.controls button:disabled {
  background-color: #c2c1c1;
  cursor: not-allowed;
}
</style>