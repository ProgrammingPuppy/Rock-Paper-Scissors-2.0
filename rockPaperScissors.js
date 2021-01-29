const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'yarn') {
  return userInput
  } else {
    console.log('Error! Select rock, paper, or scissors.');
 }
}

console.log(getUserChoice('Rock'));
console.log(getUserChoice('paper'));
console.log(getUserChoice('gummy'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  
  switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2: 
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice ===  computerChoice) {
    return 'Tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'Computer wins!';
    } else {
      return 'Congrats, you won the game!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!'
    } else {
      return 'Congrats, you won the game!';
    }
  }

if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'Computer wins!';
  } else {
    return 'Congrats, you won the game!'
  }
 }

 if (userChoice === 'yarn') {
    return 'You won! Yarn always wins!';
  }
 }

console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('rock', 'rock'));

const playGame = () => {
  const userChoice = getUserChoice('yarn');
  const computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice}`)
  console.log(`Computer chose ${computerChoice}`);

console.log(determineWinner(userChoice, computerChoice));
};

playGame()





