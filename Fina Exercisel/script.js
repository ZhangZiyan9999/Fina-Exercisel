function submitQuiz() {
    let score = 0;
    const totalQuestions = 5; // Change to your actual number of questions
  
    for (let i = 1; i <= totalQuestions; i++) {
      const answer = document.querySelector(`input[name="q${i}"]:checked`);
      if (answer) {
        score += parseInt(answer.value);
      }
    }
  
    const username = document.getElementById('username').value;
    alert(`Hello, ${username}! Your score is ${score * 20}`);
  }
  