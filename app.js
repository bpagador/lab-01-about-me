import isYes from './isYes.js';


const quizButton = document.getElementById('quizButton');
const result = document.getElementById('quizResult');

function launchQuiz() {
    let correctAnswers = 0; 
    
    alert('Ready for a quiz all about me?');

  
    const confirmed = confirm('Are you sure about that?');
    if (confirmed === false) {
        return; 
    }

    const firstName = prompt('Where is Briseida\'s name from?');

    const citiesLived = prompt('How many cities has she lived in?');

    const dinersMalls = prompt('Does she love diners and malls (Yes/No)?');

  
    if (isYes(dinersMalls) === true) {
        correctAnswers++;
    }

    let response = 'Briseida\'s name is from ' + firstName + ',' + ' she has lived in ' + citiesLived + ' cities,';

    if (correctAnswers >= 1) {
        response += ' and she loves diners and malls!';
    } else {
        response += ' and you know nothing else about her!';
    }

    result.textContent = response;
}

quizButton.addEventListener('click', launchQuiz);