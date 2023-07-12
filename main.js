

const quiz = [
  {
    question: "What is your name?",
    optionA: "Java",
    optionB: "C",
    optionC: "Python",
    optionD: "Javascript",
    answer: "optionD",
  },
  {
    question: "What is your best food?",
    optionA: "Central Style Sheets",
    optionB: "Cascading Style Sheets",
    optionC: "Cascading Simple Sheets",
    optionD: "Cars SUVs Sailboats",
    answer: "optionB",
  },
  {
    question: "What is your best color?",
    optionA: "Hypertext Markup Language",
    optionB: " Hypertext Markdown Language",
    optionC: " Hyperloop Machine Language",
    optionD: " Helicopters Terminals Motor lamb ",
    answer: "optionA",
  },
  {
    question: "How old are you?",
    optionA: 1996,
    optionB: 1995,
    optionC: 1994,
    optionD: "none of the above ",
    answer: "optionB",
  },
];

const btn = document.querySelector(".btn");
const input = document.querySelector('input[name="option"]:checked');
const option1 = document.querySelector(".a");
const option2 = document.querySelector(".b");
const option3 = document.querySelector(".c");
const option4 = document.querySelector(".d");
const h2 = document.querySelector(".h2");

let countIndex = 0;
let radioCount = 0;

const showQuestion = () => {

    h2.innerText = quiz[countIndex].question;
    option1.innerText = quiz[countIndex].optionA;
    option2.innerText = quiz[countIndex].optionB;
    option3.innerText = quiz[countIndex].optionC;
    option4.innerText = quiz[countIndex].optionD;
    console.log(quiz);
};

const nextQuestion = () => {
  countIndex++;
  if(countIndex < quiz.length){
    showQuestion();
console.log(countIndex);


  }else{
    alert("Nothing to display")
  }

resultChec()
};


btn.addEventListener("click", nextQuestion);
showQuestion();


const resultChec=()=>{
    if(input){
      let selectedAnswer = input.values;
      if(selectedAnswer === quiz[countIndex - 1].answer){
       alert("all correct")
      }
   
   }


  }


