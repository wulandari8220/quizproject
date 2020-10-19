const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const score = document.querySelector('#score');
const progressBar_question = document.querySelector('#progressBar_question');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
	{
		question: 'Hasil dari 20 + 4 x 6 : 8 = ...',
		choice1: "12",
		choice2: "16",
		choice3: "18",
		choice4: "23",
		choice5: "25",
		answer: 4
		
	},
	{
		question: 'PPKI yang dibentuk pada tanggal 7 Agustus 1945 diketuai oleh ...',
		choice1: "Mr. Muhammad Yamin",
		choice2: "Ir. Sukarno",
		choice3: "Sutan Syahrir",
		choice4: "Rajiman Wedyodiningrat",
		choice5: "Drs.Mohammad Hatta",
		answer: 2
		
	},
	{
		question: 'Hubungan Internasional merupakan studi tentang keadaan relevan yang mengelilingi interaksi, pengertian ini disampaikan oleh ...',
		choice1: "Charles A",
		choice2: "Warsito S",
		choice3: "Tygve Nathiessen",
		choice4: "Renstra",
		choice5: "Greyson",
		answer: 1
		
	},
	{
		question: 'Kejuaraan sepak bola Piala Dunia diselenggarakan setiap..',
		choice1: "1 tahun",
		choice2: "2 tahun",
		choice3: "3 tahun",
		choice4: "4 tahun",
		choice5: "5 tahun",
		answer: 4
		
	},
	{
		question: 'Apa cabang ilmu matematika yang mempelajari sudut, segitiga, serta fungsi seperti sin, cos, dan tan?',
		choice1: "Topologi",
		choice2: "Trigonometri",
		choice3: "Geometri",
		choice4: "Pythagoras",
		choice5: "Mathematical Chemistry",
		answer: 2
		
	}
]

const score_point = 20;
const max_questions = 5;

startGame = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions];
	getNewQuestion();
}

getNewQuestion = () => {
	if(availablequestions.length === 0 || questionCounter > max_question) {
		localStorage.setItem('mostRecentScore', score)
		
		return window.location.assign('/end.html')
	}
	
	questiomCounter++;
	progressText.innerText=`Question ${questionCounter} of ${max_questions}`;
	progressBar_question.style.width = `${(questionCounter/max_questions)*100}%`;
	
	const questionIndex = Math.floor(Math.random() * availableQuestion.length);
	currentQuestion = availableQuestions[questionsIndex];
	question.innerText = currentQuestion.question;
	
	choices.forEach(choice => {
		const number = choice.dataset['number'];
		choice.innerText = currentQuestion['choice'+number];
	});
	
	availableQuestions.splice(questionIndex, 1);
	
	acceptingAnswers = true;
	
}
