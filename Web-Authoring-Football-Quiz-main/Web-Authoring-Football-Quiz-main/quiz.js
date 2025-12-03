const questions = document.querySelectorAll('.question');
  let score = 0; 

  questions.forEach((question) => {
    
    const buttons = question.querySelectorAll('button');
    
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        
        const isCorrect = button.dataset.correct === "true";
        
        if (isCorrect) {
          button.style.backgroundColor = "green"; 
          score++; 
        } else {
          button.style.backgroundColor = "red"; 
        }

        
        buttons.forEach(btn => btn.disabled = true);
      });
    });
  });

  
  const showScoreButton = document.createElement('button');
  showScoreButton.textContent = "Ver Pontuação";
  showScoreButton.style.marginTop = "20px";
  document.body.appendChild(showScoreButton);

  showScoreButton.addEventListener('click', () => {
    alert(`Sua pontuação: ${score} de ${questions.length}`);
  });

