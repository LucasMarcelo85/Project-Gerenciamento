function submitQuiz() {
    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'b',
        q4: 'c',
        q5: 'b',
        q6: 'b',
        q7: 'b',
        q8: 'b',
        q9: 'b',
        q10: 'c'
    };

    let score = 0;
    let wrongAnswers = [];
    const form = document.getElementById('quizForm');

    for (const [question, correctAnswer] of Object.entries(answers)) {
        const userAnswer = form.elements[question].value;
        if (userAnswer === correctAnswer) {
            score++;
        } else {
            wrongAnswers.push(question);
        }
    }

    let resultText = `Você acertou ${score} de ${Object.keys(answers).length} questões.<br>`;
    if (wrongAnswers.length > 0) {
        resultText += `Questões incorretas: ${wrongAnswers.map(q => q.slice(1)).join(', ')}.`;
    } else {
        resultText += "Parabéns! Você acertou todas as questões!";
    }

    document.getElementById('result').innerHTML = resultText;
}
