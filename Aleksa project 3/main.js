const pcChoice = document.querySelector('.computer-choice')
const playerChoice = document.querySelector('.player-choice')
const result = document.querySelector('.result')
const game = document.querySelector("#game")
const choices = ['✊🏻','🤚🏻','✌🏻']
const clicked = (e) => {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]
  const userChoice = e.target.innerHTML
  getResult(userChoice, computerChoice)
  pcChoice.innerHTML = computerChoice
  playerChoice.innerHTML = userChoice
}
choices.forEach(choice => {
  const button = document.createElement('button')
  button.innerHTML = choice
  button.addEventListener('click', clicked)
  game.appendChild(button)
})
const getResult = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case '✌🏻🤚🏻':
    case '✊🏻✌🏻':
    case '🤚🏻✊🏻':
      result.style.color = 'green';
      result.innerHTML = "You win!"
      break
    case '🤚🏻✌🏻':
    case '✌🏻✊🏻':
    case '✊🏻🤚🏻':
      result.style.color = 'crimson';
      result.innerHTML = "You lose!"
      break
    case '🤚🏻🤚🏻':
    case '✌🏻✌🏻':
    case '✊🏻✊🏻':
      result.style.color = 'black';
      result.innerHTML = "Its draw!"
      break
  }
}

