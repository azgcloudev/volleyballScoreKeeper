let teamA = document.querySelector('#teamA');
let teamB = document.querySelector('#teamB');
let selectValue = document.querySelector('#selectRules');
let btnA = document.querySelector('#btnA');
let btnB = document.querySelector('#btnB');
let btnReset = document.querySelector('#btnReset');

let numA = 0;
let numB = 0;
let maxNum = parseInt(selectValue.value);


function resetGame() {
    teamA.innerText = '0';
    teamB.innerText = '0';
    numA = 0;
    numB = 0;
    teamA.style.color = '#000';
    teamB.style.color = '#000';
    btnA.removeAttribute('disabled');
    btnB.removeAttribute('disabled');
}

function winner() {
    if (numA === maxNum) {
        teamA.style.color = 'green';
        teamB.style.color = 'red';
    } else if (numB === maxNum) {
        teamB.style.color = 'green';
        teamA.style.color = 'red';
    }
    btnA.setAttribute('disabled', '');
    btnB.setAttribute('disabled', '');
}

//reset the marker
btnReset.addEventListener('click', resetGame);


function checkIfWinner(team) {
    if (team === maxNum) {
        winner();
    }
}

function plusA() {
    if (numA === maxNum || numB === maxNum) {
    } else {
        numA++;
        teamA.innerText = numA.toString();
        checkIfWinner(numA);
    }
}

function plusB() {
    if (numA === maxNum || numB === maxNum) {
    } else {
        numB++;
        teamB.innerText = numB.toString();
        checkIfWinner(numB);
    }
}

// ***** BUTTONS ACTIONS *****
//reset the marker
btnReset.addEventListener('click', resetGame);

// add 1 to teamA
btnA.addEventListener('click', plusA);

// add 1 to teamB
btnB.addEventListener('click', plusB);



// ***get changes when max score is changed and assigned to the variable
selectValue.addEventListener('change', function () {
    maxNum = parseInt(selectValue.value);
});