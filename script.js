let startBtn = document.querySelector(".start-btn");
let exitBtn = document.querySelector(".exit-btn");
let popup = document.querySelector(".popup-info");
let main = document.querySelector(".main");
let continueBtn = document.querySelector(".continue-btn");
let exit = document.querySelector(".exit");
let quizSec = document.querySelector(".quiz-sec");

startBtn.onclick = function (){
    popup.classList.add("active");
    main.classList.add("active");
}

exitBtn.onclick = function (){
    popup.classList.remove("active");  
    main.classList.remove("active");  
}

let questionCount = 0;
let questionNum = 1;
let userScore = 0;

continueBtn.onclick = function (){
    quizSec.classList.add("active");
    popup.classList.remove("active");  
    main.classList.remove("active");
    showQuestions(0);
    questionCount = 0; 
    questions(1);
    questionNum = 1;
    score();
}

exit.onclick = function (){
    quizSec.classList.remove("active");
    popup.classList.add("active");  
    main.classList.add("active");
    showQuestions(0);
    questionCount = 0;   
    questions(1);
    questionNum = 1; 
    userScore = 0;
}


let nextBtn = document.querySelector(".next-btn");

    nextBtn.onclick = function (){
        if(questionCount < Questions.length -1){
            questionCount++; 
            showQuestions(questionCount);

            questionNum++; 
            questions(questionNum);
        }
    }   

    let options = document.querySelector(".options");

// Show Questions Function
function showQuestions(index) {
    let questionText = document.querySelector(".question");
    questionText.innerHTML = `${Questions[index].numb} . ${Questions[index].question}`;
    
    options.innerHTML = `
                    <span class="option">${Questions[index].options[0]}</span>
                    <span class="option">${Questions[index].options[1]}</span>
                    <span class="option">${Questions[index].options[2]}</span>
                    <span class="option">${Questions[index].options[3]}</span>
    `

    let option = document.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function(){
            optionSelected(this);
        } 
    }
}

function questions(index) {
    let questionTotal = document.querySelector(".question-count");
    questionTotal.textContent = `questions: ${index}/${Questions.length}`
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = Questions[questionCount].answer;
    
    if(userAnswer === correctAnswer){
        answer.classList.add("correct");
        userScore++;
        score();
    }
    else {
        answer.classList.add("incorrect");
        for (let i = 0; i <  options.children.length ; i++){
            if (options.children[i].textContent === correctAnswer) {
                options.children[i].classList.add("correct")
            }
        }
    }

    for (let i = 0; i < options.children.length; i++) {
        options.children[i].classList.add("disabled");
    }
}

function score() {
    let scoreText = document.querySelector(".score");
    scoreText.textContent = `score: ${userScore}/${Questions.length} `
}