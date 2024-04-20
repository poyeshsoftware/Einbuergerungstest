<template>
  <div class="flex flex-col mb-4">
    <h2 class="text-lg text-gray-800 mb-2">{{ question.text }}</h2>
    <answers
        :options="question.options"
        :correctOption="question.correctOption"
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
