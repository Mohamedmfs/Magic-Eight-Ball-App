const question = document.querySelector('#question');
let answer = document.querySelector('#answer');
let hasAnswered = false;
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
  if (question.value === '' && hasAnswered === false) {
    return answer.textContent = 'Please ask a question!';
  } else {
    if (!hasAnswered) {
      const randomNumber = Math.floor(Math.random() * answers.length);
      const randomAnswer = answers[randomNumber]
      answer.textContent = randomAnswer;
      hasAnswered = true;
    }
  }
  question.reset()
}

submitBtn.addEventListener('click', game);
