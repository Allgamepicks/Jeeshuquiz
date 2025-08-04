const activitySection = document.getElementById('activity');
let currentQuestion = 0;
let score = 0;
let questions = [];
let wrongAnswers = [];
let currentActivity = '';

function startActivity(type) {
    currentQuestion = 0;
    score = 0;
    questions = [];
    wrongAnswers = [];
    currentActivity = type;
    
    activitySection.classList.remove('hidden');
    activitySection.innerHTML = '<div class="fade-in">Loading questions...</div>';
    
    generateQuestions(type);
    setTimeout(() => showQuestion(), 500);
}

function generateQuestions(type) {
    questions = [];
    
    switch(type) {
        case 'add':
            for (let i = 0; i < 10; i++) {
                const a = Math.floor(Math.random() * 50) + 10;
                const b = Math.floor(Math.random() * 50) + 10;
                if (Math.random() > 0.5) {
                    questions.push({
                        question: `${a} + ${b} = ?`,
                        answer: a + b,
                        type: 'addition'
                    });
                } else {
                    const larger = Math.max(a, b);
                    const smaller = Math.min(a, b);
                    questions.push({
                        question: `${larger} - ${smaller} = ?`,
                        answer: larger - smaller,
                        type: 'subtraction'
                    });
                }
            }
            break;
            
        case 'mul':
            for (let i = 0; i < 8; i++) {
                const a = Math.floor(Math.random() * 9) + 1;
                const b = Math.floor(Math.random() * 9) + 1;
                questions.push({
                    question: `${a} × ${b} = ?`,
                    answer: a * b,
                    type: 'multiplication'
                });
            }
            break;
            
        case 'place':
            for (let i = 0; i < 8; i++) {
                const num = Math.floor(Math.random() * 900) + 100;
                const places = ['hundreds', 'tens', 'ones'];
                const place = places[Math.floor(Math.random() * places.length)];
                let answer;
                
                switch(place) {
                    case 'hundreds':
                        answer = Math.floor(num / 100);
                        break;
                    case 'tens':
                        answer = Math.floor((num % 100) / 10);
                        break;
                    case 'ones':
                        answer = num % 10;
                        break;
                }
                
                questions.push({
                    question: `What digit is in the ${place} place in ${num}?`,
                    answer: answer,
                    type: 'place value'
                });
            }
            break;
            
        case 'word':
            const wordProblems = [
                {
                    question: "Sarah has 15 stickers. She gives 7 to her friend. How many stickers does she have left?",
                    answer: 8
                },
                {
                    question: "There are 12 birds in a tree. 5 more birds join them. How many birds are there now?",
                    answer: 17
                },
                {
                    question: "Tom has 3 boxes of crayons. Each box has 8 crayons. How many crayons does he have in total?",
                    answer: 24
                },
                {
                    question: "A basket has 20 apples. If 6 apples are eaten, how many apples are left?",
                    answer: 14
                },
                {
                    question: "Lisa buys 4 packs of pencils. Each pack has 6 pencils. How many pencils did she buy?",
                    answer: 24
                },
                {
                    question: "There are 25 students in a class. 8 students are absent today. How many students are present?",
                    answer: 17
                }
            ];
            
            questions = wordProblems.slice(0, 6).map(problem => ({
                ...problem,
                type: 'word problem'
            }));
            break;
            
        case 'shape':
            const shapeQuestions = [
                {
                    question: "How many sides does a triangle have?",
                    answer: "3",
                    type: 'shapes'
                },
                {
                    question: "How many sides does a square have?",
                    answer: "4",
                    type: 'shapes'
                },
                {
                    question: "How many sides does a circle have?",
                    answer: "0",
                    type: 'shapes'
                },
                {
                    question: "How many corners does a rectangle have?",
                    answer: "4",
                    type: 'shapes'
                },
                {
                    question: "What shape has 5 sides?",
                    answer: "pentagon",
                    type: 'shapes'
                },
                {
                    question: "What shape has 6 sides?",
                    answer: "hexagon",
                    type: 'shapes'
                }
            ];
            questions = shapeQuestions;
            break;
            
        case 'pattern':
            const patternQuestions = [
                {
                    question: "What comes next? 2, 4, 6, 8, __",
                    answer: "10",
                    type: 'patterns'
                },
                {
                    question: "What comes next? 5, 10, 15, 20, __",
                    answer: "25",
                    type: 'patterns'
                },
                {
                    question: "What comes next? 1, 3, 5, 7, __",
                    answer: "9",
                    type: 'patterns'
                },
                {
                    question: "What comes next? 10, 20, 30, 40, __",
                    answer: "50",
                    type: 'patterns'
                },
                {
                    question: "What comes next? 3, 6, 9, 12, __",
                    answer: "15",
                    type: 'patterns'
                }
            ];
            questions = patternQuestions;
            break;
    }
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showResults();
        return;
    }
    
    const q = questions[currentQuestion];
    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
    
    activitySection.innerHTML = `
        <div class="fade-in">
            <div class="progress-container">
                <div class="progress-bar" style="width: ${progressPercent}%">
                    Question ${currentQuestion + 1} of ${questions.length}
                </div>
            </div>
            
            <div class="math-problem">
                ${q.question}
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
                <input type="text" id="answer" placeholder="Enter your answer" 
                       style="font-size: 1.5em; padding: 15px; text-align: center; width: 200px;">
                <br><br>
                <button class="btn" onclick="checkAnswer()" style="font-size: 1.2em;">
                    Submit Answer
                </button>
            </div>
            
            <div id="feedback" style="margin-top: 20px; text-align: center;"></div>
        </div>
    `;
    
    // Focus on input and allow Enter key
    setTimeout(() => {
        const input = document.getElementById('answer');
        input.focus();
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkAnswer();
            }
        });
    }, 100);
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestion].answer.toString().toLowerCase();
    const feedbackDiv = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer) {
        score++;
        feedbackDiv.innerHTML = `
            <div style="color: #4caf50; font-size: 1.3em; font-weight: bold;" class="bounce">
                ✅ Correct! Great job!
            </div>
        `;
    } else {
        wrongAnswers.push({
            question: questions[currentQuestion].question,
            userAnswer: userAnswer,
            correctAnswer: questions[currentQuestion].answer,
            type: questions[currentQuestion].type
        });
        
        feedbackDiv.innerHTML = `
            <div style="color: #f44336; font-size: 1.3em; font-weight: bold;">
                ❌ Not quite right. The correct answer is ${questions[currentQuestion].answer}
            </div>
        `;
    }
    
    // Disable input and button
    document.getElementById('answer').disabled = true;
    document.querySelector('button').disabled = true;
    
    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 2500);
}

function showResults() {
    const percentage = Math.round((score / questions.length) * 100);
    let grade = '';
    let message = '';
    let emoji = '';
    
    if (percentage >= 90) {
        grade = 'Excellent!';
        message = 'You are a math superstar! 🌟';
        emoji = '🎉';
    } else if (percentage >= 70) {
        grade = 'Great Job!';
        message = 'You have strong math skills! 👏';
        emoji = '😊';
    } else if (percentage >= 50) {
        grade = 'Good Try!';
        message = 'Keep practicing and you\'ll get better! 👍';
        emoji = '😌';
    } else {
        grade = 'Keep Practicing!';
        message = 'Math takes practice - you can do it! 💪';
        emoji = '📚';
    }
    
    let resultHTML = `
        <div class="score-display fade-in">
            <h2>${emoji} ${grade}</h2>
            <p>You scored ${score} out of ${questions.length} questions correctly!</p>
            <p>That's ${percentage}%</p>
            <p>${message}</p>
        </div>
    `;
    
    if (wrongAnswers.length > 0) {
        resultHTML += `
            <div class="quiz-container">
                <h3>📝 Let's Review Your Mistakes:</h3>
                <div style="text-align: left;">
        `;
        
        wrongAnswers.forEach((wrong, index) => {
            resultHTML += `
                <div style="margin: 15px 0; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 8px;">
                    <strong>Question ${index + 1}:</strong><br>
                    ${wrong.question}<br>
                    <span style="color: #ffcdd2;">Your answer: ${wrong.userAnswer || 'No answer'}</span><br>
                    <span style="color: #c8e6c9;">Correct answer: ${wrong.correctAnswer}</span>
                </div>
            `;
        });
        
        resultHTML += `
                </div>
            </div>
        `;
    }
    
    resultHTML += `
        <div style="text-align: center; margin-top: 30px;">
            <button class="btn" onclick="restartActivity()" style="margin: 10px;">
                Try Again
            </button>
            <button class="btn" onclick="goHome()" style="margin: 10px;">
                Choose Different Activity
            </button>
        </div>
    `;
    
    activitySection.innerHTML = resultHTML;
}

function restartActivity() {
    startActivity(currentActivity);
}

function goHome() {
    activitySection.classList.add('hidden');
    activitySection.innerHTML = '';
}

// Add some math tips
document.addEventListener('DOMContentLoaded', function() {
    const mathTips = document.createElement('section');
    mathTips.innerHTML = `
        <h3>🧮 Math Tips for Success</h3>
        <div class="activity-grid">
            <div class="activity-card">
                <h4>Take Your Time</h4>
                <p>Read each question carefully before answering!</p>
            </div>
            <div class="activity-card">
                <h4>Use Your Fingers</h4>
                <p>It's okay to count on your fingers for help!</p>
            </div>
            <div class="activity-card">
                <h4>Practice Daily</h4>
                <p>A little practice each day makes you stronger!</p>
            </div>
            <div class="activity-card">
                <h4>Don't Give Up</h4>
                <p>Every mistake helps you learn something new!</p>
            </div>
        </div>
    `;
    document.body.appendChild(mathTips);
});