import {defineStore} from 'pinia';

export const useQuizStore = defineStore('quiz', {
    state: () => ({
        questions: [
            {
                "id": 1,
                "text": "in Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil...",
                "options": [
                    "hier Religionsfreiheit gilt.",
                    "die Menschen Steuern zahlen.",
                    "die Menschen das Wahlrecht haben.",
                    "hier Meinungsfreiheit gilt."
                ],
                "correctOption": "hier Meinungsfreiheit gilt.",
                "correctNumber": 4
            },
            {
                "id": 2,
                "text": "in Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am...",
                "options": [
                    "Geschichtsunterricht teilnimmt.",
                    "Religionsunterricht teilnimmt.",
                    "Politikunterricht teilnimmt.",
                    "Sprachunterricht teilnimmt."
                ],
                "correctOption": "Religionsunterricht teilnimmt.",
                "correctNumber": 2
            },
            {
                "id": 3,
                "text": "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
                "options": [
                    "Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.",
                    "Der Staat muss sich nicht an die Gesetze halten.",
                    "Nur Deutsche müssen die Gesetze befolgen.",
                    "Die Gerichte machen die Gesetze."
                ],
                "correctOption": "Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.",
                "correctNumber": 1
            },
            {
                id: 4,
                text: "Welches Recht gehört zu den Grundrechten in Deutschland?",
                options: [
                    "Waffenbesitz",
                    "Faustrecht",
                    "Meinungsfreiheit",
                    "Selbstjustiz"
                ],
                correctOption: "Meinungsfreiheit",
                correctNumber: 3
            },
            {}
        ],
        currentQuestionIndex: 0,
        userAnswers: [],  // Array of user responses
        score: 0
    }),
    actions: {
        loadQuestions(questions) {
            this.questions = questions;
            this.questions.forEach(question => {
                question.shownCount = 0;  // Initialize a property to track how often a question is shown
            });
        },
        answerQuestion(answer, isCorrect) {
            const question = this.questions[this.currentQuestionIndex];
            question.shownCount++;
            this.userAnswers[this.currentQuestionIndex] = answer;
            if (isCorrect) {
                this.score += 1;
            } else {
                this.score -= 1;
            }
            this.reorderQuestions();
        },
        reorderQuestions() {
            this.questions.sort((a, b) => b.shownCount - a.shownCount);
        },
        nextQuestion() {
            this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.questions.length;
        }
    }
});
