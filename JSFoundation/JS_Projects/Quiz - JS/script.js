document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-btn");
  const nextButton = document.getElementById("next-btn");
  const restartButton = document.getElementById("restart-btn");

  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");

  const resultContainer = document.getElementById("result-container");
  const score = document.getElementById("score");
  let currentQuestion = 0;
  let calScore = 0;

  startButton.addEventListener("click", () => {
    // console.log("start clicked :-P");
    startButton.classList.add("hidden");
    renderQuestion();
  });

  choicesList.addEventListener("click", (event) => {
    // console.log("Some option is clicked");
    if (event.target.tagName === "LI") {
    //   console.log("It's LI");
      const response = event.target.innerText;
    //   console.log(response);
    //   console.log(questions[currentQuestion].answer);
      if (response === questions[currentQuestion].answer) {
        calScore++;
      }
    }
    // console.log(calScore);
  });

  nextButton.addEventListener("click", () => {
    // console.log("next button clicked");
    currentQuestion++;
    renderQuestion();
  });

  function renderQuestion() {
    // console.log("render method called");
    // console.log("currentQuestion", currentQuestion);
    if (currentQuestion < 10) {
    //   console.log("question number: ", currentQuestion);
      nextButton.classList.remove("hidden");
      resultContainer.classList.add("hidden");
      questionContainer.classList.remove("hidden");

      questionText.innerText = questions[currentQuestion].question;
      choicesList.innerHTML = "";
      questions[currentQuestion].choices.forEach((choice) => {
        const li = document.createElement("li");
        li.innerText = choice;
        choicesList.appendChild(li);
      });
    } else {
    //   console.log("I'm called hehehe");
      renderResult();
    }
    // console.log("nahi hua");
  }

  function renderResult() {
    nextButton.classList.add("hidden");
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    score.innerHTML = calScore;
  }

  restartButton.addEventListener("click", () => {
    // console.log("restart button clicked");
    currentQuestion = 0;
    calScore = 0;
    // console.log(currentQuestion, calScore);
    renderQuestion();
  });

  const questions = [
    {
      question: "Which language runs in a web browser?",
      choices: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      choices: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "What does HTML stand for?",
      choices: [
        "Hyper Trainer Marking Language",
        "Hyper Text Marketing Language",
        "Hyper Text Markup Language",
        "Hyper Text Markup Leveler",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "What year was JavaScript launched?",
      choices: ["1996", "1995", "1994", "None of the above"],
      answer: "1995",
    },
    {
      question: "Which company developed the React library?",
      choices: ["Google", "Facebook", "Microsoft", "Apple"],
      answer: "Facebook",
    },
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choices: ["<js>", "<scripting>", "<script>", "<javascript>"],
      answer: "<script>",
    },
    {
      question: "Which symbol is used for single line comments in JavaScript?",
      choices: ["//", "/*", "<!--", "**"],
      answer: "//",
    },
    {
      question: "Which HTML tag is used to link external CSS?",
      choices: ["<style>", "<css>", "<link>", "<script>"],
      answer: "<link>",
    },
    {
      question: "How do you write 'Hello World' in an alert box in JavaScript?",
      choices: [
        "alert('Hello World');",
        "msg('Hello World');",
        "prompt('Hello World');",
        "alertBox('Hello World');",
      ],
      answer: "alert('Hello World');",
    },
    {
      question: "Which of these is NOT a JavaScript data type?",
      choices: ["Number", "Boolean", "Float", "String"],
      answer: "Float",
    },
  ];
});
