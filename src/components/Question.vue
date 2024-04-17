<template>
  <div>
    <h2>{{ question.text }}</h2>
    <answers :options="question.options" @answer="handleAnswer"/>
  </div>
</template>

<script>
import {useQuizStore} from '@/stores/quizStore';
import Answers from './Answers.vue';

export default {
  components: {Answers},
  props: ['question'],
  methods: {
    handleAnswer(option) {
      const isCorrect = option === this.question.correctOption;
      const store = useQuizStore();
      store.answerQuestion(option, isCorrect);
      store.nextQuestion();
    }
  }
}
</script>
