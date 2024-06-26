const question = document.querySelector('#question');
let answer = document.querySelector('#answer');
const submitBtn = document.querySelector('#submitBtn');

const answers = [
  "Yes",
  "No",
  "Maybe",
  "Ask again later",
  "Definitely",
  "I don't think so",
  "Absolutely",
  "I'm not sure",
  "Without a doubt",
  "Very doubtful"
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