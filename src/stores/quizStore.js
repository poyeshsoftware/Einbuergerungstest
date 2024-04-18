import {defineStore} from 'pinia';

export const useQuizStore = defineStore('quiz', {
    state: () => ({
        questions: [
            {
                "id": 1,
                "text": "in Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil...",
                "text_en": "In Germany, people are allowed to openly say something against the government because...",
                "options": [
                    "hier Religionsfreiheit gilt.",
                    "die Menschen Steuern zahlen.",
                    "die Menschen das Wahlrecht haben.",
                    "hier Meinungsfreiheit gilt."
                ],
                "options_en": [
                    "because religious freedom applies here.",
                    "because people pay taxes.",
                    "because people have the right to vote.",
                    "because freedom of speech applies here."
                ],
                "correctOption": "hier Meinungsfreiheit gilt.",
                "correctNumber": 4
            },
            {
                "id": 2,
                "text": "in Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am...",
                "text_en": "In Germany, parents can decide until their child is 14 years old whether it will participate in...",
                "options": [
                    "Geschichtsunterricht teilnimmt.",
                    "Religionsunterricht teilnimmt.",
                    "Politikunterricht teilnimmt.",
                    "Sprachunterricht teilnimmt."
                ],
                "options_en": [
                    "history class.",
                    "religious education.",
                    "political education.",
                    "language class."
                ],
                "correctOption": "Religionsunterricht teilnimmt.",
                "correctNumber": 2
            },
            {
                "id": 3,
                "text": "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
                "text_en": "Germany is a constitutional state. What does that mean?",
                "options": [
                    "Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.",
                    "Der Staat muss sich nicht an die Gesetze halten.",
                    "Nur Deutsche müssen die Gesetze befolgen.",
                    "Die Gerichte machen die Gesetze."
                ],
                "options_en": [
                    "All residents and the state must abide by the laws.",
                    "The state does not have to abide by the laws.",
                    "Only Germans have to follow the laws.",
                    "The courts make the laws."
                ],
                "correctOption": "Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.",
                "correctNumber": 1
            },
            {
                id: 4,
                text: "Welches Recht gehört zu den Grundrechten in Deutschland?",
                text_en: "Which right belongs to the basic rights in Germany?",
                options: [
                    "Waffenbesitz",
                    "Faustrecht",
                    "Meinungsfreiheit",
                    "Selbstjustiz"
                ],
                options_en: [
                    "Right to bear arms",
                    "Might is right",
                    "Freedom of speech",
                    "Vigilantism"
                ],
                correctOption: "Meinungsfreiheit",
                correctNumber: 3
            },
            {
                id: 5,
                text: "Wahlen in Deutschland sind frei. Was bedeutet das?",
                text_en: "Elections in Germany are free. What does that mean?",
                options: [
                    "Man darf Geld annehmen, wenn man dafür einen bestimmten Kandidaten / eine bestimmte Kandidatin wählt.",
                    "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.",
                    "Der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.",
                    "Alle wahlberechtigten Personen müssen wählen."
                ],
                options_en: [
                    "You may accept money if you vote for a particular candidate.",
                    "Only people who have never been to prison are allowed to vote.",
                    "The voter must not be influenced or forced to vote in a certain way during the election and must not suffer any disadvantages from the election.",
                    "All eligible voters must vote."
                ],
                correctOption: "Der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.",
                correctNumber: 3
            },
            {
                id: 6,
                text: "Was bedeutet \"Volkssouveränität\"?",
                text_en: "What does \"popular sovereignty\" mean?",
                options: [
                    "Alle Staatsgewalt geht vom Volke aus.",
                    "Der Bundespräsident / die Bundespräsidentin regiert allein.",
                    "Das Volk steht über dem Gesetz.",
                    "Die Regierung entscheidet über die Rechte des Volkes."
                ],
                options_en: [
                    "All state power comes from the people.",
                    "The Federal President governs alone.",
                    "The people are above the law.",
                    "The government decides on the rights of the people."
                ],
                correctOption: "Alle Staatsgewalt geht vom Volke aus.",
                correctNumber: 1
            },
            {
                id: 7,
                text: "Was ist keine staatliche Gewalt in Deutschland?",
                text_en: "What is not a state power in Germany?",
                options: [
                    "Gesetzgebung",
                    "Regierung",
                    "Presse",
                    "Rechtsprechung"
                ],
                options_en: [
                    "Legislation",
                    "Government",
                    "Press",
                    "Judiciary"
                ],
                correctOption: "Presse",
                correctNumber: 3
            },
            {
                id: 8,
                text: "Was bedeutet die Gewaltenteilung im deutschen Staat?",
                text_en: "What does the separation of powers mean in the German state?",
                options: [
                    "Die Staatsgewalt wird in Deutschland von einem Gewerkschaftsbund vertreten.",
                    "Die Bundesländer sind für die Gesetzgebung zuständig.",
                    "Es gibt drei Staatsgewalten: die Legislative, die Exekutive und die Judikative.",
                    "Die Regierung entscheidet über alle wichtigen Fragen in Deutschland."
                ],
                options_en: [
                    "State power in Germany is represented by a trade union federation.",
                    "The federal states are responsible for legislation.",
                    "There are three state powers: the legislative, the executive, and the judiciary.",
                    "The government decides on all important issues in Germany."
                ],
                correctOption: "Es gibt drei Staatsgewalten: die Legislative, die Exekutive und die Judikative.",
                correctNumber: 3
            },
            {
                id: 9,
                text: "Was ist ein Bundesstaat in Deutschland?",
                text_en: "What is a federal state in Germany?",
                options: [
                    "ein Staat mit vielen Bundesländern",
                    "ein Staat mit nur einem Landkreis",
                    "ein Zusammenschluss vieler Länder zu einem Staat",
                    "ein Staat mit nur einer Stadt"
                ],
                options_en: [
                    "a state with many federal states",
                    "a state with only one district",
                    "a union of many countries into one state",
                    "a state with only one city"
                ],
                correctOption: "ein Zusammenschluss vieler Länder zu einem Staat",
                correctNumber: 3
            },
            {
                id: 10,
                text: "Wie heißt die deutsche Verfassung?",
                text_en: "What is the name of the German constitution?",
                options: [
                    "Volksgesetz",
                    "Bundesgesetz",
                    "Deutsches Gesetz",
                    "Grundgesetz"
                ],
                options_en: [
                    "People's Law",
                    "Federal Law",
                    "German Law",
                    "Basic Law"
                ],
                correctOption: "Grundgesetz",
                correctNumber: 4
            },
            {
                id: 11,
                text: "Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf ...",
                text_en: "Which right belongs to the basic rights guaranteed by the German constitution? The right to...",
                options: [
                    "Glaubens- und Gewissensfreiheit.",
                    "Unterhaltung.",
                    "Arbeit.",
                    "Wohnung."
                ],
                options_en: [
                    "Freedom of belief and conscience.",
                    "Entertainment.",
                    "Work.",
                    "Apartment."
                ],
                correctOption: "Glaubens- und Gewissensfreiheit.",
                correctNumber: 1
            },
            {
                id: 12,
                "text": "Was steht nicht im Grundgesetz von Deutschland?",
                "text_en": "What is not in the Basic Law of Germany?",
                "options": [
                    "Die Würde des Menschen ist unantastbar.",
                    "Alle sollen gleich viel Geld haben.",
                    "Jeder Mensch darf seine Meinung sagen.",
                    "Alle sind vor dem Gesetz gleich."
                ],
                "options_en": [
                    "Human dignity is inviolable.",
                    "Everyone should have the same amount of money.",
                    "Everyone is allowed to express their opinion.",
                    "All are equal before the law."
                ],
                "correctOption": "Alle sollen gleich viel Geld haben.",
                "correctNumber": 2
            },
            {
                id: 13,
                "text": "Welches Grundrecht gehört zu den so genannten Bürgerrechten?",
                "text_en": "Which basic right belongs to the so-called civil rights?",
                "options": [
                    "Meinungsfreiheit",
                    "Asylrecht",
                    "Gleichberechtigung von Mann und Frau",
                    "Schutz der Familie"
                ],
                "options_en": [
                    "Freedom of speech",
                    "Right of asylum",
                    "Equal rights for men and women",
                    "Protection of the family"
                ],
                "correctOption": "Meinungsfreiheit",
                "correctNumber": 1
            },
            {
                id: 14,
                "text": "Welches Grundrecht gilt in Deutschland nur für Ausländer Ausländerinnen? Das Grundrecht auf",
                "text_en": "Which basic right applies in Germany only to foreigners? The basic right to",
                "options": [
                    "Schutz der Familie",
                    "Menschenwürde",
                    "Asyl",
                    "Meinungsfreiheit"
                ],
                "options_en": [
                    "Protection of the family",
                    "Human dignity",
                    "Asylum",
                    "Freedom of speech"
                ],
                "correctOption": "Asyl",
                "correctNumber": 3
            },
            {
                id: 15,
                text: "In Deutschland dürfen Ehepaare sich scheiden lassen. Was ist damit gemeint?",
                text_en: "In Germany, married couples are allowed to divorce. What does that mean?",
                options: [
                    "Die Ehe ist unwiderruflich.",
                    "Die Ehe kann vor Gericht aufgelöst werden.",
                    "Die Ehe kann nur durch den Tod eines Partners / einer Partnerin beendet werden.",
                    "Die Ehe ist nur gültig, wenn Kinder da sind."
                ],
                options_en: [
                    "The marriage is irrevocable.",
                    "The marriage can be dissolved in court.",
                    "The marriage can only be terminated by the death of a partner.",
                    "The marriage is only valid if there are children."
                ],
                correctOption: "Die Ehe kann vor Gericht aufgelöst werden.",
                correctNumber: 2
            },
            {
                id: 16,
                text: "Was ist mit dem deutschen Grundgesetz vereinbar?",
                text_en: "What is compatible with the German Basic Law?",
                options: [
                    "die Prügelstrafe",
                    "die Folter",
                    "die Todesstrafe",
                    "die Geldstrafe"
                ],
                options_en: [
                    "corporal punishment",
                    "torture",
                    "the death penalty",
                    "the fine"
                ],
                correctOption: "die Geldstrafe",
                correctNumber: 4
            },
            {
                id: 17,
                text: "Wie wird die Verfassung der Bundesrepublik Deutschland genannt?",
                text_en: "What is the constitution of the Federal Republic of Germany called?",
                options: [
                    "Grundgesetz",
                    "Bundesverfassung",
                    "Gesetzbuch",
                    "Verfassungsvertrag"
                ],
                options_en: [
                    "Basic Law",
                    "Federal Constitution",
                    "Code of Law",
                    "Constitutional Treaty"
                ],
                correctOption: "Grundgesetz",
                correctNumber: 1
            },
            {
                id: 18,
                text: "Welches Recht gehört zu den Grundrechten, die in Deutschland garantiert werden?",
                text_en: "Which right belongs to the basic rights guaranteed in Germany?",
                options: [
                    "Waffenbesitz",
                    "Demonstrationsfreiheit",
                    "Unterhaltszahlung",
                    "Meisterpflicht"
                ],
                options_en: [
                    "Right to bear arms",
                    "Freedom of assembly",
                    "Maintenance payment",
                    "Master obligation"
                ],
                correctOption: "Demonstrationsfreiheit",
                correctNumber: 2
            },
            {
                id: 19,
                text: "Was verbietet das deutsche Grundgesetz?",
                text_en: "What does the German Basic Law prohibit?",
                options: [
                    "Militärdienst",
                    "Zwangsarbeit",
                    "Berufswahl",
                    "Arbeit"
                ],
                options_en: [
                    "Military service",
                    "Forced labor",
                    "Career choice",
                    "Work"
                ],
                correctOption: "Zwangsarbeit",
                correctNumber: 2
            },
            {
                id: 20,
                text: "In Deutschland können Eltern bis zum 14. Lebensjahr des Kindes entscheiden, ob es ...",
                text_en: "In Germany, parents can decide until their child is 14 years old whether it...",
                options: [
                    "eine Arbeit annimmt.",
                    "ins Kino geht.",
                    "eine Ausbildung macht.",
                    "eine Religionsgemeinschaft besucht."
                ],
                options_en: [
                    "takes a job.",
                    "goes to the movies.",
                    "does an apprenticeship.",
                    "visits a religious community."
                ],
                correctOption: "eine Religionsgemeinschaft besucht.",
                correctNumber: 4
            },
            {
                id: 21,
                text: "Was ist in Deutschland vor allem eine Aufgabe des Staates?",
                text_en: "What is primarily a task of the state in Germany?",
                options: [
                    "die Schule",
                    "die Kirche",
                    "der Supermarkt",
                    "die Bank"
                ],
                options_en: [
                    "the school",
                    "the church",
                    "the supermarket",
                    "the bank"
                ],
                correctOption: "die Schule",
                correctNumber: 1
            },
            {
                id: 22,
                text: "Wer baute die Mauer in Berlin?",
                options: [
                    "die Bundeswehr",
                    "die DDR-Regierung",
                    "die BRD-Regierung",
                    "die USA"
                ],
                correctOption: "die DDR-Regierung",
                correctNumber: 2
            },
            {
                id: 23,
                text: "In welchem Jahr wurde die Mauer in Berlin gebaut?",
                text_en: "In which year was the Berlin Wall built?",
                options: [
                    "1961",
                    "1953",
                    "1945",
                    "1938"
                ],
                options_en: [
                    "1961",
                    "1953",
                    "1945",
                    "1938"
                ],
                correctOption: "1961",
                correctNumber: 1
            },
            {
                id: 24,
                text: "Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. ist das möglich?",
                text_en: "A party in the German Bundestag wants to abolish freedom of the press. is that possible?",
                options: [
                    "Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.",
                    "Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.",
                    "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.",
                    "Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen."
                ],
                options_en: [
                    "Yes, if more than half of the members of the Bundestag are in favor.",
                    "Yes, but two-thirds of the members of the Bundestag must be in favor.",
                    "No, because freedom of the press is a basic right. It cannot be abolished.",
                    "No, because only the Bundesrat can abolish freedom of the press."
                ],
                correctOption: "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.",
                correctNumber: 3
            },
            {
                id: 25,
                text: "Im Parlament steht der Begriff „Opposition\" für ...",
                text_en: "In parliament, the term „opposition\" stands for...",
                options: [
                    "die regierenden Parteien.",
                    "die Fraktion mit den meisten Abgeordneten.",
                    "alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten.",
                    "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören."
                ],
                options_en: [
                    "the ruling parties.",
                    "the faction with the most members of parliament.",
                    "all parties that were able to reach the 5% threshold in the last election.",
                    "all members of parliament who do not belong to the government party/parties."
                ],
                correctOption: "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören.",
                correctNumber: 4
            },
            {
                id: 26,
                text: "Meinungsfreiheit in Deutschland heißt, dass ich ...",
                text_en: "Freedom of speech in Germany means that I...",
                options: [
                    "Passanten auf der Straße beschimpfen darf.",
                    "meine Meinung in Leserbriefen äußern kann.",
                    "Nazi-Symbole tragen darf.",
                    "meine Meinung sagen darf, solange ich der Regierung nicht widerspreche."
                ],
                options_en: [
                    "can insult passers-by on the street.",
                    "can express my opinion in letters to the editor.",
                    "the right to wear nazi symbols.",
                    "can express my opinion as long as I do not contradict the government."
                ],
                correctOption: "meine Meinung in Leserbriefen äußern kann.",
                correctNumber: 2
            },
            {
                id: 27,

            }

        ],
        currentQuestionIndex: 0,
        userAnswers: [],  // Array of user responses
        score: 0
    }),
    actions: {
        loadQuestions(questions) {
            this.questions = questions;
            this.questions.forEach(question => {
                question.shownCount = 1;  // Initialize a property to track how often a question is shown
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
