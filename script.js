const question = document.querySelector('#question');
let answer = document.querySelector('#answer');
const submitBtn = document.querySelector('#submitBtn');

const answers = [
  "Yes",
  "No",
  "Maybe",
  "The Spider",
  "Anderson Silva",
  "Ask again later",
  "Definitely",
  "Jiu Jitsu Rocks",
  "I don't think so",
  "Absolutely",
  "G. Rush St.Pierre",
  "I'm not sure",
  "Without a doubt",
  "Very doubtful",
  "Ask Dave Chappelle",
  "Am tired of the questions"
]

const game = () => {
  if (question.value === '') {
    return answer.textContent = 'Please ask a question!';
  } else {
    const randomNumber = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomNumber];
    answer.textContent = randomAnswer;
  }
  question.value = '';
}

submitBtn.addEventListener('click', game);