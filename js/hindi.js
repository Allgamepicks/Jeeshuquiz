// Hindi learning data
const hindiLetters = [
    { 
        devanagari: 'अ', 
        roman: 'a', 
        word: 'अम्मा', 
        meaning: 'mother',
        pronunciation: 'amma'
    },
    { 
        devanagari: 'आ', 
        roman: 'aa', 
        word: 'आम', 
        meaning: 'mango',
        pronunciation: 'aam'
    },
    { 
        devanagari: 'इ', 
        roman: 'i', 
        word: 'इमली', 
        meaning: 'tamarind',
        pronunciation: 'imli'
    },
    { 
        devanagari: 'ई', 
        roman: 'ee', 
        word: 'ईख', 
        meaning: 'sugarcane',
        pronunciation: 'eekh'
    },
    { 
        devanagari: 'उ', 
        roman: 'u', 
        word: 'उल्लू', 
        meaning: 'owl',
        pronunciation: 'ullu'
    },
    { 
        devanagari: 'ऊ', 
        roman: 'oo', 
        word: 'ऊन', 
        meaning: 'wool',
        pronunciation: 'oon'
    }
];

const hindiVocabulary = [
    { hindi: 'किताब', english: 'book', telugu: 'పుస్తకం', pronunciation: 'kitaab' },
    { hindi: 'पानी', english: 'water', telugu: 'నీరు', pronunciation: 'paani' },
    { hindi: 'घर', english: 'house', telugu: 'ఇల్లు', pronunciation: 'ghar' },
    { hindi: 'माता', english: 'mother', telugu: 'అమ్మ', pronunciation: 'mata' },
    { hindi: 'पिता', english: 'father', telugu: 'నాన్న', pronunciation: 'pita' },
    { hindi: 'बच्चा', english: 'child', telugu: 'పిల్లవాడు', pronunciation: 'bachcha' },
    { hindi: 'स्कूल', english: 'school', telugu: 'పాఠశాల', pronunciation: 'school' },
    { hindi: 'दोस्त', english: 'friend', telugu: 'స్నేహితుడు', pronunciation: 'dost' },
    { hindi: 'खाना', english: 'food', telugu: 'భోజనం', pronunciation: 'khaana' },
    { hindi: 'खेल', english: 'game/play', telugu: 'ఆట', pronunciation: 'khel' }
];

const basicPhrases = [
    { hindi: 'नमस्ते', english: 'Hello/Goodbye', telugu: 'నమస్తే', pronunciation: 'namaste' },
    { hindi: 'धन्यवाद', english: 'Thank you', telugu: 'ధన్యవాదాలు', pronunciation: 'dhanyawad' },
    { hindi: 'माफ करें', english: 'Sorry/Excuse me', telugu: 'క్షమించండి', pronunciation: 'maaf karen' },
    { hindi: 'आप कैसे हैं?', english: 'How are you?', telugu: 'మీరు ఎలా ఉన్నారు?', pronunciation: 'aap kaise hain?' },
    { hindi: 'मैं ठीक हूँ', english: 'I am fine', telugu: 'నేను బాగున్నాను', pronunciation: 'main theek hun' },
    { hindi: 'आपका नाम क्या है?', english: 'What is your name?', telugu: 'మీ పేరు ఏమిటి?', pronunciation: 'aapka naam kya hai?' }
];

let currentLetterIndex = 0;
let currentVocabIndex = 0;
let currentPhraseIndex = 0;

// Text-to-speech function
function speakHindi(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'hi-IN';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

// Initialize Hindi letters display
function initializeLetters() {
    const lettersContainer = document.getElementById('letters');
    lettersContainer.innerHTML = `
        <h3>🔤 Hindi Letters (Devanagari)</h3>
        <div id="current-letter"></div>
        <div style="text-align: center; margin: 20px 0;">
            <button class="btn" onclick="previousLetter()">⬅️ Previous</button>
            <button class="btn" onclick="nextLetter()">Next ➡️</button>
        </div>
    `;
    showCurrentLetter();
}

function showCurrentLetter() {
    const letter = hindiLetters[currentLetterIndex];
    const letterDiv = document.getElementById('current-letter');
    
    letterDiv.innerHTML = `
        <div class="letter-display fade-in">
            <h3>${letter.devanagari}</h3>
            <p style="font-size: 1.5em; margin: 10px 0;">
                Sounds like: "${letter.roman}"
            </p>
            <div style="margin: 20px 0;">
                <p><strong>Example word:</strong></p>
                <div style="font-size: 1.3em; margin: 15px 0;">
                    <span class="hword" onclick="speakHindi('${letter.word}')">${letter.word}</span>
                    <br>
                    <small style="color: white; opacity: 0.9;">
                        (${letter.pronunciation}) = ${letter.meaning}
                    </small>
                </div>
            </div>
            <button class="btn" onclick="speakHindi('${letter.devanagari}')" style="margin: 10px;">
                🔊 Hear Letter
            </button>
            <button class="btn" onclick="speakHindi('${letter.word}')" style="margin: 10px;">
                🔊 Hear Word
            </button>
        </div>
    `;
}

function nextLetter() {
    currentLetterIndex = (currentLetterIndex + 1) % hindiLetters.length;
    showCurrentLetter();
}

function previousLetter() {
    currentLetterIndex = currentLetterIndex === 0 ? hindiLetters.length - 1 : currentLetterIndex - 1;
    showCurrentLetter();
}

// Initialize vocabulary section
function initializeVocabulary() {
    const vocabContainer = document.getElementById('vocab');
    vocabContainer.innerHTML = `
        <h3>📚 Hindi Vocabulary</h3>
        <p style="text-align: center; margin-bottom: 20px;">
            Learn common Hindi words with Telugu and English translations!
        </p>
        <div id="vocab-cards"></div>
        <div style="text-align: center; margin: 20px 0;">
            <button class="btn" onclick="showAllVocab()">Show All Words</button>
            <button class="btn" onclick="startVocabQuiz()">Take Vocabulary Quiz</button>
        </div>
    `;
    showVocabCard();
}

function showVocabCard() {
    const vocab = hindiVocabulary[currentVocabIndex];
    const vocabDiv = document.getElementById('vocab-cards');
    
    vocabDiv.innerHTML = `
        <div class="vocab-card fade-in">
            <div>
                <div class="vocab-word" onclick="speakHindi('${vocab.hindi}')">
                    ${vocab.hindi}
                </div>
                <div style="font-size: 1em; opacity: 0.9; margin: 5px 0;">
                    (${vocab.pronunciation})
                </div>
            </div>
            <div>
                <div class="vocab-meaning">
                    English: ${vocab.english}
                </div>
                <div class="vocab-meaning">
                    Telugu: ${vocab.telugu}
                </div>
            </div>
        </div>
        <div style="text-align: center; margin: 20px 0;">
            <button class="btn" onclick="previousVocab()">⬅️ Previous</button>
            <button class="btn" onclick="nextVocab()">Next ➡️</button>
            <button class="btn" onclick="speakHindi('${vocab.hindi}')">🔊 Listen</button>
        </div>
    `;
}

function nextVocab() {
    currentVocabIndex = (currentVocabIndex + 1) % hindiVocabulary.length;
    showVocabCard();
}

function previousVocab() {
    currentVocabIndex = currentVocabIndex === 0 ? hindiVocabulary.length - 1 : currentVocabIndex - 1;
    showVocabCard();
}

function showAllVocab() {
    const vocabDiv = document.getElementById('vocab-cards');
    let allVocabHTML = '<div class="activity-grid">';
    
    hindiVocabulary.forEach((vocab, index) => {
        allVocabHTML += `
            <div class="activity-card" onclick="speakHindi('${vocab.hindi}')">
                <h4 style="color: #e91e63; font-size: 1.5em;">${vocab.hindi}</h4>
                <p><strong>English:</strong> ${vocab.english}</p>
                <p><strong>Telugu:</strong> ${vocab.telugu}</p>
                <p><em>(${vocab.pronunciation})</em></p>
            </div>
        `;
    });
    
    allVocabHTML += '</div>';
    vocabDiv.innerHTML = allVocabHTML;
}

// Vocabulary Quiz
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;

function startVocabQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    quizQuestions = [...hindiVocabulary].sort(() => Math.random() - 0.5).slice(0, 5);
    
    const vocabDiv = document.getElementById('vocab-cards');
    vocabDiv.innerHTML = '<div class="fade-in">Starting quiz...</div>';
    
    setTimeout(showQuizQuestion, 500);
}

function showQuizQuestion() {
    if (currentQuizIndex >= quizQuestions.length) {
        showQuizResults();
        return;
    }
    
    const question = quizQuestions[currentQuizIndex];
    const vocabDiv = document.getElementById('vocab-cards');
    
    // Create wrong options
    const wrongOptions = hindiVocabulary
        .filter(v => v.english !== question.english)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)
        .map(v => v.english);
    
    const allOptions = [question.english, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    vocabDiv.innerHTML = `
        <div class="quiz-container fade-in">
            <h4 style="color: white;">What does this Hindi word mean?</h4>
            <div style="margin: 20px 0;">
                <div class="vocab-word" onclick="speakHindi('${question.hindi}')" style="font-size: 2.5em; cursor: pointer;">
                    ${question.hindi}
                </div>
                <p style="color: #e1f5fe;">(Click to hear pronunciation)</p>
            </div>
            <div class="quiz-options">
                ${allOptions.map(option => 
                    `<button class="quiz-option" onclick="selectQuizAnswer('${option}', '${question.english}')">
                        ${option}
                    </button>`
                ).join('')}
            </div>
            <div id="quiz-feedback"></div>
            <p style="color: white; margin-top: 20px;">
                Question ${currentQuizIndex + 1} of ${quizQuestions.length}
            </p>
        </div>
    `;
}

function selectQuizAnswer(selected, correct) {
    const buttons = document.querySelectorAll('.quiz-option');
    const feedbackDiv = document.getElementById('quiz-feedback');
    
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent.trim() === correct) {
            button.classList.add('correct');
        } else if (button.textContent.trim() === selected && selected !== correct) {
            button.classList.add('incorrect');
        }
    });
    
    if (selected === correct) {
        quizScore++;
        feedbackDiv.innerHTML = `
            <div style="color: #4caf50; font-size: 1.3em; font-weight: bold;" class="bounce">
                ✅ शाबाश! (Shabash!) Excellent!
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
        currentQuizIndex++;
        showQuizQuestion();
    }, 2500);
}

function showQuizResults() {
    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    let message = '';
    
    if (percentage >= 80) {
        message = 'बहुत अच्छा! (Bahut accha!) Very good! 🌟';
    } else if (percentage >= 60) {
        message = 'अच्छा! (Accha!) Good job! 👏';
    } else {
        message = 'अभ्यास करें! (Abhyas karen!) Keep practicing! 💪';
    }
    
    const vocabDiv = document.getElementById('vocab-cards');
    vocabDiv.innerHTML = `
        <div class="score-display fade-in">
            <h3>Hindi Quiz Complete!</h3>
            <p>You got ${quizScore} out of ${quizQuestions.length} correct!</p>
            <p>That's ${percentage}%</p>
            <p>${message}</p>
            <div style="margin-top: 20px;">
                <button class="btn" onclick="startVocabQuiz()">Try Again</button>
                <button class="btn" onclick="initializeVocabulary()">Back to Vocabulary</button>
            </div>
        </div>
    `;
}

// Initialize phrases section
function initializePhrases() {
    const phrasesSection = document.createElement('section');
    phrasesSection.innerHTML = `
        <h3>💬 Common Hindi Phrases</h3>
        <div id="phrases-container"></div>
        <div style="text-align: center; margin: 20px 0;">
            <button class="btn" onclick="showAllPhrases()">Show All Phrases</button>
        </div>
    `;
    document.body.appendChild(phrasesSection);
    showCurrentPhrase();
}

function showCurrentPhrase() {
    const phrase = basicPhrases[currentPhraseIndex];
    const phrasesDiv = document.getElementById('phrases-container');
    
    phrasesDiv.innerHTML = `
        <div class="vocab-card fade-in">
            <div>
                <div class="vocab-word" onclick="speakHindi('${phrase.hindi}')">
                    ${phrase.hindi}
                </div>
                <div style="font-size: 1em; opacity: 0.9; margin: 5px 0;">
                    (${phrase.pronunciation})
                </div>
            </div>
            <div>
                <div class="vocab-meaning">
                    English: ${phrase.english}
                </div>
                <div class="vocab-meaning">
                    Telugu: ${phrase.telugu}
                </div>
            </div>
        </div>
        <div style="text-align: center; margin: 20px 0;">
            <button class="btn" onclick="previousPhrase()">⬅️ Previous</button>
            <button class="btn" onclick="nextPhrase()">Next ➡️</button>
            <button class="btn" onclick="speakHindi('${phrase.hindi}')">🔊 Listen</button>
        </div>
    `;
}

function nextPhrase() {
    currentPhraseIndex = (currentPhraseIndex + 1) % basicPhrases.length;
    showCurrentPhrase();
}

function previousPhrase() {
    currentPhraseIndex = currentPhraseIndex === 0 ? basicPhrases.length - 1 : currentPhraseIndex - 1;
    showCurrentPhrase();
}

function showAllPhrases() {
    const phrasesDiv = document.getElementById('phrases-container');
    let allPhrasesHTML = '<div class="activity-grid">';
    
    basicPhrases.forEach((phrase, index) => {
        allPhrasesHTML += `
            <div class="activity-card" onclick="speakHindi('${phrase.hindi}')">
                <h4 style="color: #e91e63; font-size: 1.3em;">${phrase.hindi}</h4>
                <p><strong>English:</strong> ${phrase.english}</p>
                <p><strong>Telugu:</strong> ${phrase.telugu}</p>
                <p><em>(${phrase.pronunciation})</em></p>
            </div>
        `;
    });
    
    allPhrasesHTML += '</div>';
    phrasesDiv.innerHTML = allPhrasesHTML;
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeLetters();
    initializeVocabulary();
    initializePhrases();
    
    // Add learning tips
    const tipsSection = document.createElement('section');
    tipsSection.innerHTML = `
        <h3>🎯 Hindi Learning Tips</h3>
        <div class="activity-grid">
            <div class="activity-card">
                <h4>Listen Carefully</h4>
                <p>Click the 🔊 buttons to hear correct pronunciation!</p>
            </div>
            <div class="activity-card">
                <h4>Practice Daily</h4>
                <p>Spend a few minutes each day learning new words!</p>
            </div>
            <div class="activity-card">
                <h4>Use Telugu Connection</h4>
                <p>Many Hindi words are similar to Telugu words!</p>
            </div>
            <div class="activity-card">
                <h4>Start Simple</h4>
                <p>Begin with basic greetings and common words!</p>
            </div>
        </div>
    `;
    document.body.appendChild(tipsSection);
});