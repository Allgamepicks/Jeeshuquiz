// English learning data
const sightWords = [
    'the', 'and', 'to', 'a', 'I', 'you', 'it', 'in', 'said', 'for',
    'up', 'look', 'is', 'go', 'we', 'little', 'down', 'can', 'see', 'not',
    'one', 'my', 'me', 'big', 'come', 'blue', 'red', 'where', 'jump', 'away'
];

const vocabulary = [
    { word: 'apple', image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?w=200', sound: 'apple' },
    { word: 'book', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?w=200', sound: 'book' },
    { word: 'cat', image: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=200', sound: 'cat' },
    { word: 'dog', image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?w=200', sound: 'dog' },
    { word: 'house', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=200', sound: 'house' },
    { word: 'tree', image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?w=200', sound: 'tree' },
    { word: 'car', image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?w=200', sound: 'car' },
    { word: 'sun', image: 'https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?w=200', sound: 'sun' }
];

const sentences = [
    "How are you today?",
    "What is your name?",
    "Can I play with you?",
    "I like to read books.",
    "The sun is shining bright.",
    "My cat is very cute.",
    "Can you help me please?",
    "I love learning English!",
    "Where do you live?",
    "What color do you like?"
];

const fillInBlanks = [
    { sentence: "I have ___ apples in my bag.", answer: "two", options: ["two", "three", "one"] },
    { sentence: "The ___ is shining today.", answer: "sun", options: ["sun", "moon", "star"] },
    { sentence: "___ are you feeling?", answer: "How", options: ["How", "What", "Where"] },
    { sentence: "I can ___ a bird singing.", answer: "hear", options: ["hear", "see", "feel"] },
    { sentence: "My favorite ___ is blue.", answer: "color", options: ["color", "food", "game"] },
    { sentence: "We go to ___ every day.", answer: "school", options: ["school", "park", "store"] }
];

// Global variables
let currentSightWordIndex = 0;
let currentVocabIndex = 0;
let currentSentenceIndex = 0;
let currentFillIndex = 0;
let matchScore = 0;
let fillScore = 0;

// Initialize sight words
function initializeSightWords() {
    showNextSightWord();
}

function showNextSightWord() {
    const sightWordElement = document.getElementById('sight-words');
    if (sightWordElement) {
        sightWordElement.innerHTML = `
            <div class="english-activity fade-in">
                <h4 style="color: white; font-size: 2.5em; margin-bottom: 20px;">
                    ${sightWords[currentSightWordIndex]}
                </h4>
                <p style="font-size: 1.2em;">Practice reading this word!</p>
            </div>
        `;
    }
}

function nextSight() {
    currentSightWordIndex = (currentSightWordIndex + 1) % sightWords.length;
    showNextSightWord();
}

// Vocabulary matching game
function startMatch() {
    currentVocabIndex = 0;
    matchScore = 0;
    document.getElementById('match-game').innerHTML = '';
    showMatchQuestion();
}

function showMatchQuestion() {
    if (currentVocabIndex >= vocabulary.length) {
        showMatchResults();
        return;
    }
    
    const currentWord = vocabulary[currentVocabIndex];
    const gameDiv = document.getElementById('match-game');
    
    gameDiv.innerHTML = `
        <div class="english-activity fade-in">
            <h4 style="color: white; margin-bottom: 20px;">What word matches this picture?</h4>
            <img src="${currentWord.image}" alt="vocabulary image" 
                 style="width: 200px; height: 150px; object-fit: cover; border-radius: 10px; margin: 20px 0;">
            <br>
            <input type="text" id="word-input" placeholder="Type the word here..." 
                   style="font-size: 1.3em; padding: 15px; margin: 10px; text-align: center; width: 250px;">
            <br>
            <button class="btn" onclick="checkMatchAnswer()" style="margin-top: 15px;">
                Check Answer
            </button>
            <div id="match-feedback" style="margin-top: 15px;"></div>
        </div>
    `;
    
    // Focus on input and allow Enter key
    setTimeout(() => {
        const input = document.getElementById('word-input');
        input.focus();
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkMatchAnswer();
            }
        });
    }, 100);
}

function checkMatchAnswer() {
    const userInput = document.getElementById('word-input').value.trim().toLowerCase();
    const correctAnswer = vocabulary[currentVocabIndex].word.toLowerCase();
    const feedbackDiv = document.getElementById('match-feedback');
    
    if (userInput === correctAnswer) {
        matchScore++;
        feedbackDiv.innerHTML = `
            <div style="color: #4caf50; font-size: 1.3em; font-weight: bold;" class="bounce">
                ✅ Excellent! That's correct!
            </div>
        `;
    } else {
        feedbackDiv.innerHTML = `
            <div style="color: #ffcdd2; font-size: 1.3em; font-weight: bold;">
                ❌ Good try! The correct answer is "${vocabulary[currentVocabIndex].word}"
            </div>
        `;
    }
    
    document.getElementById('word-input').disabled = true;
    document.querySelector('#match-game button').disabled = true;
    
    setTimeout(() => {
        currentVocabIndex++;
        showMatchQuestion();
    }, 2500);
}

function showMatchResults() {
    const percentage = Math.round((matchScore / vocabulary.length) * 100);
    let message = '';
    
    if (percentage >= 80) {
        message = 'Amazing! You know your vocabulary very well! 🌟';
    } else if (percentage >= 60) {
        message = 'Great job! Keep practicing! 👏';
    } else {
        message = 'Good effort! Practice makes perfect! 💪';
    }
    
    document.getElementById('match-game').innerHTML = `
        <div class="score-display fade-in">
            <h3>Vocabulary Quiz Complete!</h3>
            <p>You got ${matchScore} out of ${vocabulary.length} correct!</p>
            <p>That's ${percentage}%</p>
            <p>${message}</p>
            <button class="btn" onclick="startMatch()" style="margin-top: 20px;">
                Play Again
            </button>
        </div>
    `;
}

// Fill in the blanks
function startFill() {
    currentFillIndex = 0;
    fillScore = 0;
    showFillQuestion();
}

function showFillQuestion() {
    if (currentFillIndex >= fillInBlanks.length) {
        showFillResults();
        return;
    }
    
    const currentFill = fillInBlanks[currentFillIndex];
    const container = document.getElementById('fill-container');
    
    container.innerHTML = `
        <div class="english-activity fade-in">
            <h4 style="color: white; margin-bottom: 20px;">Fill in the blank:</h4>
            <p style="font-size: 1.4em; margin: 20px 0; color: white;">
                ${currentFill.sentence}
            </p>
            <div style="margin: 20px 0;">
                ${currentFill.options.map(option => 
                    `<button class="quiz-option" onclick="selectFillAnswer('${option}')" style="margin: 5px;">
                        ${option}
                    </button>`
                ).join('')}
            </div>
            <div id="fill-feedback" style="margin-top: 20px;"></div>
        </div>
    `;
}

function selectFillAnswer(selected) {
    const correct = fillInBlanks[currentFillIndex].answer;
    const feedbackDiv = document.getElementById('fill-feedback');
    const buttons = document.querySelectorAll('#fill-container .quiz-option');
    
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent.trim() === correct) {
            button.classList.add('correct');
        } else if (button.textContent.trim() === selected && selected !== correct) {
            button.classList.add('incorrect');
        }
    });
    
    if (selected === correct) {
        fillScore++;
        feedbackDiv.innerHTML = `
            <div style="color: #4caf50; font-size: 1.3em; font-weight: bold;" class="bounce">
                ✅ Perfect! Well done!
            </div>
        `;
    } else {
        feedbackDiv.innerHTML = `
            <div style="color: #ffcdd2; font-size: 1.3em; font-weight: bold;">
                ❌ Good try! The correct answer is "${correct}"
            </div>
        `;
    }
    
    setTimeout(() => {
        currentFillIndex++;
        showFillQuestion();
    }, 2500);
}

function showFillResults() {
    const percentage = Math.round((fillScore / fillInBlanks.length) * 100);
    let message = '';
    
    if (percentage >= 80) {
        message = 'Fantastic! Your English is getting stronger! 🌟';
    } else if (percentage >= 60) {
        message = 'Well done! Keep up the good work! 👏';
    } else {
        message = 'Nice try! Reading more will help you improve! 📚';
    }
    
    document.getElementById('fill-container').innerHTML = `
        <div class="score-display fade-in">
            <h3>Fill in the Blanks Complete!</h3>
            <p>You got ${fillScore} out of ${fillInBlanks.length} correct!</p>
            <p>That's ${percentage}%</p>
            <p>${message}</p>
            <button class="btn" onclick="startFill()" style="margin-top: 20px;">
                Try Again
            </button>
        </div>
    `;
}

// Sentence practice
function showNextSentence() {
    const sentenceDiv = document.getElementById('sentence-practice');
    if (sentenceDiv) {
        sentenceDiv.innerHTML = `
            <div class="english-activity fade-in">
                <h4 style="color: white; margin-bottom: 20px;">Practice this sentence:</h4>
                <p style="font-size: 1.5em; color: white; margin: 20px 0;">
                    "${sentences[currentSentenceIndex]}"
                </p>
                <p style="color: #e1f5fe;">Read it out loud!</p>
            </div>
        `;
    }
}

function nextSentence() {
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    showNextSentence();
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeSightWords();
    showNextSentence();
    
    // Add English learning tips
    const tipsSection = document.createElement('section');
    tipsSection.innerHTML = `
        <h3>📚 English Learning Tips</h3>
        <div class="activity-grid">
            <div class="activity-card">
                <h4>Read Daily</h4>
                <p>Try to read a little bit every day!</p>
            </div>
            <div class="activity-card">
                <h4>Practice Speaking</h4>
                <p>Say the words out loud to practice pronunciation!</p>
            </div>
            <div class="activity-card">
                <h4>Ask Questions</h4>
                <p>If you don't understand a word, ask for help!</p>
            </div>
            <div class="activity-card">
                <h4>Have Fun</h4>
                <p>Learning English should be enjoyable!</p>
            </div>
        </div>
    `;
    document.body.appendChild(tipsSection);
});