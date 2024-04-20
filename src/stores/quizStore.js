import {defineStore} from 'pinia';

export const useQuizStore = defineStore('quiz', {
    state: () => ({
        questions: [
            {
                id: 1,
                text: "in Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil...",
                text_en: "In Germany, people are allowed to openly say something against the government because...",
                "options": [
                    "hier Religionsfreiheit gilt.",
                    "die Menschen Steuern zahlen.",
                    "die Menschen das Wahlrecht haben.",
                    "hier Meinungsfreiheit gilt."
                ],
                options_en: [
                    "because religious freedom applies here.",
                    "because people pay taxes.",
                    "because people have the right to vote.",
                    "because freedom of speech applies here."
                ],
                correctOption: "hier Meinungsfreiheit gilt.",
                correctNumber: 4,
                image: null
            },
            {
                id: 2,
                text: "in Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am...",
                text_en: "In Germany, parents can decide until their child is 14 years old whether it will participate in...",
                "options": [
                    "Geschichtsunterricht teilnimmt.",
                    "Religionsunterricht teilnimmt.",
                    "Politikunterricht teilnimmt.",
                    "Sprachunterricht teilnimmt."
                ],
                options_en: [
                    "history class.",
                    "religious education.",
                    "political education.",
                    "language class."
                ],
                correctOption: "Religionsunterricht teilnimmt.",
                correctNumber: 2,
                image: null
            },
            {
                id: 3,
                text: "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
                text_en: "Germany is a constitutional state. What does that mean?",
                "options": [
                    "Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.",
                    "Der Staat muss sich nicht an die Gesetze halten.",
                    "Nur Deutsche müssen die Gesetze befolgen.",
                    "Die Gerichte machen die Gesetze."
                ],
                options_en: [
                    "All residents and the state must abide by the laws.",
                    "The state does not have to abide by the laws.",
                    "Only Germans have to follow the laws.",
                    "The courts make the laws."
                ],
                correctOption: "Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.",
                correctNumber: 1,
                image: null
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
                correctNumber: 3,
                image: null,
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
                correctNumber: 3,
                image: null
            },
            {
                id: 6,
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
                correctNumber: 4,
                image: null,
            },
            {
                id: 7,
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
                correctNumber: 3,
                image: null,
            },
            {
                id: 8,
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
                correctNumber: 1,
                image: null
            },
            {
                id: 9,
                text: "Was steht nicht im Grundgesetz von Deutschland?",
                text_en: "What is not in the Basic Law of Germany?",
                "options": [
                    "Die Würde des Menschen ist unantastbar.",
                    "Alle sollen gleich viel Geld haben.",
                    "Jeder Mensch darf seine Meinung sagen.",
                    "Alle sind vor dem Gesetz gleich."
                ],
                options_en: [
                    "Human dignity is inviolable.",
                    "Everyone should have the same amount of money.",
                    "Everyone is allowed to express their opinion.",
                    "All are equal before the law."
                ],
                correctOption: "Alle sollen gleich viel Geld haben.",
                correctNumber: 2,
                image: null
            },
            {
                id: 10,
                text: "Welches Grundrecht gehört zu den so genannten Bürgerrechten?",
                text_en: "Which basic right belongs to the so-called civil rights?",
                options: [
                    "Meinungsfreiheit",
                    "Asylrecht",
                    "Gleichberechtigung von Mann und Frau",
                    "Schutz der Familie"
                ],
                options_en: [
                    "Freedom of speech",
                    "Right of asylum",
                    "Equal rights for men and women",
                    "Protection of the family"
                ],
                correctOption: "Meinungsfreiheit",
                correctNumber: 1,
                image: null
            },
            {
                id: 11,
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
                correctNumber: 4,
                image: null,
            },
            {
                id: 12,
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
                correctNumber: 1,
                image: null
            },
            {
                id: 13,
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
                correctNumber: 3,
                image: null
            },
            {
                id: 14,
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
                correctNumber: 4,
                image: null
            },
            {
                id: 15,
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
                correctNumber: 2,
                image: null,
            },
            {
                id: 16,
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
                correctNumber: 2,
                image: null
            },
            {
                id: 17,
                text: "Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?",
                text_en: "When is freedom of speech restricted in Germany?",
                options: [
                    "persönlichen Verbreitung falscher Behauptungen über einzelne Personen",
                    "bei Meinungsäußerungen über die Bundesregierung",
                    "bei Diskussionen über Religionen",
                    "bei Kritik am Staat"
                ],
                options_en: [
                    "personal dissemination of false claims about individuals",
                    "when expressing opinions about the federal government",
                    "when discussing religions",
                    "when criticizing the state"
                ],
                correctOption: "persönlichen Verbreitung falscher Behauptungen über einzelne Personen",
                correctNumber: 1,
                image: null,
            },
            {
                id: 18,
                text: "Die deutschen Gesetze verbieten ...",
                text_en: "German laws prohibit...",
                options: [
                    "Meinungsfreiheit der Einwohner und Einwohnerinnen.",
                    "Petitionen der Bürger und Bürgerinnen.",
                    "Versammlungsfreiheit der Einwohner und Einwohnerinnen.",
                    "Ungleichbehandlung der Bürger und Bürgerinnen durch den Staat."
                ],
                options_en: [
                    "Freedom of speech of the residents.",
                    "Petitions of the citizens.",
                    "Freedom of assembly of the residents.",
                    "Discrimination against citizens by the state."
                ],
                correctOption: "Ungleichbehandlung der Bürger und Bürgerinnen durch den Staat.",
                correctNumber: 4,
                image: null,
            },
            {
                id: 19,
                text: "Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?",
                text_en: "Which basic right is guaranteed in Article 1 of the Basic Law of the Federal Republic of Germany?",
                options: [
                    "die Unantastbarkeit der Menschenwürde",
                    "das Recht auf Leben",
                    "Religionsfreiheit",
                    "Meinungsfreiheit"
                ],
                options_en: [
                    "the inviolability of human dignity",
                    "the right to life",
                    "freedom of religion",
                    "freedom of speech"
                ],
                correctOption: "die Unantastbarkeit der Menschenwürde",
                correctNumber: 1,
                image: null,
            },
            {
                id: 20,
                text: "Was versteht man unter dem Recht der „Freizügigkeit\" in Deutschland?",
                text_en: "What is meant by the right to „freedom of movement\" in Germany?",
                options: [
                    "Man darf sich seinen Wohnort selbst aussuchen.",
                    "Man kann seinen Beruf wechseln.",
                    "Man darf sich für eine andere Religion entscheiden.",
                    "Man darf sich in der Öffentlichkeit nur leicht bekleidet zeigen."
                ],
                options_en: [
                    "You can choose your place of residence yourself.",
                    "You can change your profession.",
                    "You can choose a different religion.",
                    "You can only show yourself lightly dressed in public."
                ],
                correctOption: "Man darf sich seinen Wohnort selbst aussuchen.",
                correctNumber: 1,
                image: null
            },
            {
                id: 21,
                text: "Eine Partei in Deutschland verfolgt das Ziel, eine Diktatur zu errichten. Sie ist dann ...",
                text_en: "A party in Germany aims to establish a dictatorship. It is then...",
                options: [
                    "tolerant.",
                    "rechtsstaatlich orientiert.",
                    "gesetzestreu.",
                    "verfassungswidrig."
                ],
                options_en: [
                    "tolerant.",
                    "oriented towards the rule of law.",
                    "law-abiding.",
                    "unconstitutional."
                ],
                correctOption: "verfassungswidrig.",
                correctNumber: 4,
                image: null
            },
            {
                id: 22,
                text: "Welches ist das Wappen der Bundesrepublik Deutschland?",
                text_en: "What is the coat of arms of the Federal Republic of Germany?",
                options: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                options_en: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                correctOption: "1",
                correctNumber: 1,
                image: "images/22.png"
            },
            {
                id: 23,
                text: "Was für eine Staatsform hat Deutschland?",
                text_en: "What form of government does Germany have?",
                options: [
                    "Monarchie",
                    "Diktatur",
                    "Republik",
                    "Fürstentum"
                ],
                options_en: [
                    "Monarchy",
                    "Dictatorship",
                    "Republic",
                    "Principality"
                ],
                correctOption: "Republik",
                correctNumber: 3,
                image: null
            },
            {
                id: 24,
                text: "In Deutschland sind die meisten Erwerbstätigen ...",
                text_en: "In Germany, most of the employed ...",
                options: [
                    "in kleinen Familienunternehmen beschäftigt.",
                    "ehrenamtlich für ein Bundesland tätig.",
                    "selbständig mit einer eigenen Firma tätig.",
                    "bei einer Firma oder Behörde beschäftigt."
                ],
                options_en: [
                    "employed in small family businesses.",
                    "volunteering for a federal state.",
                    "self-employed with their own company.",
                    "employed by a company or authority."
                ],
                correctOption: "bei einer Firma oder Behörde beschäftigt.",
                correctNumber: 4,
                image: null
            },
            {
                id: 25,
                text: "Wie viele Bundesländer hat die Bundesrepublik Deutschland?",
                text_en: "How many federal states does the Federal Republic of Germany have?",
                options: [
                    "14",
                    "15",
                    "16",
                    "17"
                ],
                options_en: [
                    "14",
                    "15",
                    "16",
                    "17"
                ],
                correctOption: "16",
                correctNumber: 3,
                image: null
            },
            {
                id: 26,
                text: "Was ist kein Bundesland der Bundesrepublik Deutschland?",
                text_en: "What is not a federal state of the Federal Republic of Germany?",
                options: [
                    "Elsass-Lothringen",
                    "Nordrhein-Westfalen",
                    "Mecklenburg-Vorpommern",
                    "Sachsen-Anhalt"
                ],
                options_en: [
                    "Elsass-Lothringen",
                    "North Rhine-Westphalia",
                    "Mecklenburg-Western Pomerania",
                    "Saxony-Anhalt"
                ],
                correctOption: "Elsass-Lothringen",
                correctNumber: 1,
                image: null
            },
            {
                id: 27,
                text: "Deutschland ist...",
                text_en: "Germany is...",
                options: [
                    "eine kommunistische Republik.",
                    "ein demokratischer und sozialer Bundesstaat.",
                    "eine kapitalistische und soziale Monarchie.",
                    "ein sozialer und sozialistischer Bundesstaat."
                ],
                options_en: [
                    "a communist republic.",
                    "a democratic and social federal state.",
                    "a capitalist and social monarchy.",
                    "a social and socialist federal state."
                ],
                correctOption: "ein demokratischer und sozialer Bundesstaat.",
                correctNumber: 2,
                image: null
            },
            {
                id: 28,
                text: "Deutschland ist...",
                text_en: "Germany is...",
                options: [
                    "ein sozialistischer Staat.",
                    "ein Bundesstaat.",
                    "eine Diktatur.",
                    "eine Monarchie."
                ],
                options_en: [
                    "a socialist state.",
                    "a federal state.",
                    "a dictatorship.",
                    "a monarchy."
                ],
                correctOption: "ein Bundesstaat.",
                correctNumber: 2,
                image: null
            },
            {
                id: 29,
                text: "Wer wählt in Deutschland die Abgeordneten zum Bundestag?",
                text_en: "Who elects the members of the Bundestag in Germany?",
                options: [
                    "das Militär",
                    "die Wirtschaft",
                    "das wahlberechtigte Volk",
                    "die Verwaltung"
                ],
                options_en: [
                    "the military",
                    "the economy",
                    "the eligible voters",
                    "the administration"
                ],
                correctOption: "das wahlberechtigte Volk",
                correctNumber: 3,
                image: null
            },
            {
                id: 30,
                text: "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?",
                text_en: "Which animal is the heraldic animal of the Federal Republic of Germany?",
                options: [
                    "Löwe",
                    "Adler",
                    "Bär",
                    "Pferd"
                ],
                options_en: [
                    "Lion",
                    "Eagle",
                    "Bear",
                    "Horse"
                ],
                correctOption: "Adler",
                correctNumber: 2,
                image: null
            },
            {
                id: 31,
                text: "Was ist kein Merkmal unserer Demokratie?",
                text_en: "What is not a characteristic of our democracy?",
                options: [
                    "regelmäßige Wahlen",
                    "Pressezensur",
                    "Meinungsfreiheit",
                    "verschiedene Parteien"
                ],
                options_en: [
                    "regular elections",
                    "press censorship",
                    "freedom of speech",
                    "different parties"
                ],
                correctOption: "Pressezensur",
                correctNumber: 2,
                image: null
            },
            {
                id: 32,
                text: "Die Zusammenarbeit von Parteien zur Bildung einer Regierung nennt man in Deutschland ...",
                text_en: "The cooperation of parties to form a government is called ...",
                options: [
                    "Einheit.",
                    "Koalition.",
                    "Ministerium.",
                    "Fraktion."
                ],
                options_en: [
                    "Unity.",
                    "Coalition.",
                    "Ministry.",
                    "Faction."
                ],
                correctOption: "Koalition.",
                correctNumber: 2,
                image: null
            },
            {
                id: 33,
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
                correctNumber: 3,
                image: null
            },
            {
                id: 34,
                text: "Welche Aussage ist richtig? In Deutschland ...",
                text_en: "Which statement is correct? In Germany ...",
                options: [
                    "sind Staat und Religionsgemeinschaften voneinander getrennt.",
                    "bilden die Religionsgemeinschaften den Staat.",
                    "ist der Staat abhängig von den Religionsgemeinschaften.",
                    "bilden Staat und Religionsgemeinschaften eine Einheit."
                ],
                options_en: [
                    "State and religious communities are separate from each other.",
                    "the religious communities form the state.",
                    "the state is dependent on the religious communities.",
                    "state and religious communities form a unit."
                ],
                correctOption: "sind Staat und Religionsgemeinschaften voneinander getrennt.",
                correctNumber: 1,
                image: null
            },
            {
                id: 35,
                text: "Was ist Deutschland nicht?",
                text_en: "What is Germany not?",
                options: [
                    "eine Demokratie",
                    "eine Monarchie",
                    "ein Rechtsstaat",
                    "ein Sozialstaat"
                ],
                options_en: [
                    "a democracy",
                    "a monarchy",
                    "a constitutional state",
                    "a welfare state"
                ],
                correctOption: "eine Monarchie",
                correctNumber: 2,
                image: null
            },
            {
                id: 36,
                text: "Womit finanziert der deutsche Staat die Sozialversicherung?",
                text_en: "How does the German state finance social security?",
                options: [
                    "Kirchensteuern",
                    "Sozialabgaben",
                    "Spendengeldern",
                    "Vereinsbeiträgen"
                ],
                options_en: [
                    "Church taxes",
                    "Social security contributions",
                    "Donations",
                    "Club contributions"
                ],
                correctOption: "Sozialabgaben",
                correctNumber: 2,
                image: null
            },
            {
                id: 37,
                text: "Welche Maßnahme schafft in Deutschland soziale Sicherheit?",
                text_en: "Which measure creates social security in Germany?",
                options: [
                    "die Autoversicherung",
                    "die Gebäudeversicherung",
                    "die Haftpflichtversicherung",
                    "die Krankenversicherung"
                ],
                options_en: [
                    "car insurance",
                    "building insurance",
                    "liability insurance",
                    "health insurance"
                ],
                correctOption: "die Krankenversicherung",
                correctNumber: 4,
                image: null
            },
            {
                id: 38,
                text: "Wie werden die Regierungschefs / Regierungschefinnen der meisten Bundesländer in Deutschland genannt?",
                text_en: "What are the heads of government of most federal states in Germany called?",
                options: [
                    "Erster Minister/ Erste Ministerin",
                    "Premierminister/ Premierministerin",
                    "Senator/ Senatorin",
                    "Ministerpräsident/Ministerpräsidentin"
                ],
                options_en: [
                    "First Minister",
                    "Prime Minister",
                    "Senator",
                    "Prime Minister"
                ],
                correctOption: "Ministerpräsident/Ministerpräsidentin",
                correctNumber: 4,
                image: null
            },
            {
                id: 39,
                text: "Die Bundesrepublik Deutschland ist ein demokratischer und sozialer ...",
                text_en: "The Federal Republic of Germany is a democratic and social ...",
                options: [
                    "Staatenverbund.",
                    "Bundesstaat.",
                    "Staatenbund.",
                    "Zentralstaat."
                ],
                options_en: [
                    "Confederation of states.",
                    "Federal state.",
                    "Confederation of states.",
                    "Central state."
                ],
                correctOption: "Bundesstaat.",
                correctNumber: 2,
                image: null
            },
            {
                id: 40,
                text: "Was hat jedes deutsche Bundesland?",
                text_en: "What does every German federal state have?",
                options: [
                    "einen eigenen Außenminister / eine eigene Außenministerin",
                    "eine eigene Währung",
                    "eine eigene Armee",
                    "eine eigene Regierung"
                ],
                options_en: [
                    "a foreign minister",
                    "its own currency",
                    "its own army",
                    "its own government"
                ],
                correctOption: "eine eigene Regierung",
                correctNumber: 4,
                image: null
            },
            /*
     Next question:
     */
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
