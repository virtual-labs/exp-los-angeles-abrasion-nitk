
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "What is size of sieve used in the experiment to obtain the final weight of retained sample?",
    answers: {
      a: "1.7 mm",
      b: "1.5 mm",
      c: "6.0 mm",
      d: "8.0 mm"
    },
    correctAnswer: "a"
  },

  {
    question: "What is the maximum permissible abrasion value for water bound macadam sub base course?",
    answers: {
      a: "60%",
      b: "50%",
      c: "30%",
      d: "20%"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the internal diameter and length of circular drum of Los - Angeles abrasion machine?",
    answers: {
      a: "700mm and 520mm",
      b: "600mm and 520mm",
      c: "700mm and 420mm",
      d: "500mm and 320mm"
    },
    correctAnswer: "a"
  },
  {
    question: "Number of spheres used in grade B aggregate?",
    answers: {
      a: "16",
      b: "15",
      c: "10",
      d: "12"
    },
    correctAnswer: "d"
  },
  {
    question: "Aggregates with poor resistance to abrasion can produce excessive dust. (say True or False)",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a"
  }
];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
