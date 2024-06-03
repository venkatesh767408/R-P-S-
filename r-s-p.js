function loadplay(userChoice) {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    document.getElementById('userchoice').innerHTML = 'Player: ' + userChoice;
    document.getElementById('computerchoice').innerHTML = 'Computer: ' + computerChoice;
    
    let result = '';
    if (userChoice === computerChoice) {
        result = 'Game is Tie';
    } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissor') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissor' && computerChoice === 'Paper')
    ) {
        result = 'You Win!';
    } else {
        result = 'Computer Wins!';
    }

    const res1 = document.getElementById('Result');
    res1.textContent = result;

    // Remove existing classes before adding new ones
    

    
}