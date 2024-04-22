<template>
  <div class="flex flex-col mb-4">
    <h2 class="text-lg text-gray-800 mb-2">{{ questionText }}</h2>
    <answers
        :options="question.options"
        :options_en="question.options_en"
        :correctOption="question.correctOption"
        :correctNumber="question.correctNumber"
        @answer="handleAnswer"
    />
  </div>
</template>

<script>
import {useQuizStore} from '@/stores/quizStore';
import Answers from './Answers.vue';

export default {
  components: {
    Answers
  },
  props: ['question'],
  computed: {
    displayedQuestion() {
      const store = useQuizStore();
      return store.currentLanguage === 'de' ? this.question.text : this.question.text_en;
    },
    displayedOptions() {
      const store = useQuizStore();
      return store.currentLanguage === 'de' ? this.question.options : this.question.options_en;
    },
    questionText() {
      const store = useQuizStore();
      return store.currentLanguage === 'de' ? this.question.text : this.question.text_en;
    }
  },
  methods: {
    handleAnswer(option) {
      const isCorrect = option === this.question.correctOption;
      const store = useQuizStore();
      if (isCorrect) {
        store.answerQuestion(option, isCorrect);
        setTimeout(() => {
          store.nextQuestion();
        }, 1000);  // Wait 1 second then move to the next question if the answer is correct
      } // Do not automatically advance if the answer is incorrect
    }
  }
}
</script>
