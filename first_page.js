const countdownElement = document.getElementById('countdown');

let count = 10;

const intervalId = setInterval(() => {
  countdownElement.textContent = count;
  count--;

  if (count < 0) {
    countdownElement.textContent = "Ready !";
    clearInterval(intervalId);
  }
}, 1000); // counts every 1 second



// Define correct answers
const correctAnswers = {
    q1: "background-color",
    q2: "span is for inline div is for blocks",
    q3: "To define a division or section",
    q4: "#id",
    q5: "To provide meaning to the structure of webpage",
    q6: "font-size",
    q7: "img is for images, figure is for images with captions",
    q8: ".class",
    q9: "To define a navigation menu",
    q10: "marginG",
    // Add more questions and answers
  };
  
  // Function to check answers
  function checkAnswer(questionId) {
    const radios = document.getElementsByName(questionId);
    let userAnswer;
    radios.forEach((radio) => {
      if (radio.checked) {
        userAnswer = radio.value;
      }
    });
  
    const correctAnswer = correctAnswers[questionId];
    const resultSpan = document.getElementById(`${questionId}-result`);
  
    if (userAnswer === correctAnswer) {
      resultSpan.textContent = "Correct!";
      resultSpan.style.color = "green";
    } else {
      resultSpan.textContent = `Wrong! The correct answer is ${correctAnswer}.`;
      resultSpan.style.color = "red";
    }
  }
  
  // Add event listeners to radio buttons
  document.addEventListener("change", (event) => {
    if (event.target.type === "radio") {
      const questionId = event.target.name;
      checkAnswer(questionId);
    }
  });
  
  
