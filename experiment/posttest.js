
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
      question: " Which of the following statement is correct?<br>1. For grade A aggregate 10 abrasive charges are used<br>2. For grade B aggregate 12 abrasive charges are used<br>3. For grade A aggregate 12 abrasive charges are used<br>4. For grade B aggregate 10 abrasive charges are used ",
      answers: {
        a: "1 is correct",
        b: "2 and 3 is correct",
        c: "3 and 4 is correct",
        d: "None of the above"
      },
      correctAnswer: "b"
    },

    {
      question: "Los Angeles Abrasion test gives information about which property of aggregate?",
      answers: {
        a: "Compressive strength",
        b: "Hardness",
        c: "Crushing",
        d: "Impact strength"
      },
      correctAnswer: "b"
    },

    {
      question: "Machine rotates at the speed of?",
      answers: {
        a: "20 to 30 revolution /min",
        b: "30 to 33 revolution /min",
        c: "20 to 35 revolution /min",
        d: "20 to 37 revolution /min"
      },
      correctAnswer: "b"
    },
    {
      question: "If W<sub>1</sub>= Total weight of sample, W<sub>2</sub>= final weight of sample, W<sub>3</sub>= Weight of sample passing in 1.7mm sieve, Then percentage wear is",
      answers: {
        a: "((W<sub>3</sub>-W<sub>1</sub>) /W<sub>2</sub>) * 100",
        b: "((W<sub>1</sub>-W<sub>2</sub>)/W<sub>2</sub>) * 100",
        c: "((W<sub>1</sub>-W<sub>2</sub>)/W<sub>1</sub>) * 100",
        d: "(W<sub>1</sub>/W<sub>2</sub>) * 100"
      },
      correctAnswer: "a"
    },
    {
      question: "Slag and limestone have low Los Angeles abrasion loss. (say True or False)",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
