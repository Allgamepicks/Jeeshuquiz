// Hindi learning data - Complete Devanagari Alphabet
const hindiAlphabet = [
    // Vowels (स्वर)
    { devanagari: 'अ', roman: 'a', type: 'vowel', word: 'अनार', meaning: 'pomegranate', pronunciation: 'anaar' },
    { devanagari: 'आ', roman: 'aa', type: 'vowel', word: 'आम', meaning: 'mango', pronunciation: 'aam' },
    { devanagari: 'इ', roman: 'i', type: 'vowel', word: 'इमली', meaning: 'tamarind', pronunciation: 'imli' },
    { devanagari: 'ई', roman: 'ee', type: 'vowel', word: 'ईख', meaning: 'sugarcane', pronunciation: 'eekh' },
    { devanagari: 'उ', roman: 'u', type: 'vowel', word: 'उल्लू', meaning: 'owl', pronunciation: 'ullu' },
    { devanagari: 'ऊ', roman: 'oo', type: 'vowel', word: 'ऊन', meaning: 'wool', pronunciation: 'oon' },
    { devanagari: 'ए', roman: 'e', type: 'vowel', word: 'एक', meaning: 'one', pronunciation: 'ek' },
    { devanagari: 'ऐ', roman: 'ai', type: 'vowel', word: 'ऐनक', meaning: 'glasses', pronunciation: 'ainak' },
    { devanagari: 'ओ', roman: 'o', type: 'vowel', word: 'ओखली', meaning: 'mortar', pronunciation: 'okhli' },
    { devanagari: 'औ', roman: 'au', type: 'vowel', word: 'औरत', meaning: 'woman', pronunciation: 'aurat' },
    
    // Consonants (व्यंजन)
    { devanagari: 'क', roman: 'ka', type: 'consonant', word: 'कमल', meaning: 'lotus', pronunciation: 'kamal' },
    { devanagari: 'ख', roman: 'kha', type: 'consonant', word: 'खरगोश', meaning: 'rabbit', pronunciation: 'khargosh' },
    { devanagari: 'ग', roman: 'ga', type: 'consonant', word: 'गाय', meaning: 'cow', pronunciation: 'gaay' },
    { devanagari: 'घ', roman: 'gha', type: 'consonant', word: 'घर', meaning: 'house', pronunciation: 'ghar' },
    { devanagari: 'च', roman: 'cha', type: 'consonant', word: 'चाँद', meaning: 'moon', pronunciation: 'chaand' },
    { devanagari: 'छ', roman: 'chha', type: 'consonant', word: 'छत', meaning: 'roof', pronunciation: 'chhat' },
    { devanagari: 'ज', roman: 'ja', type: 'consonant', word: 'जल', meaning: 'water', pronunciation: 'jal' },
    { devanagari: 'झ', roman: 'jha', type: 'consonant', word: 'झंडा', meaning: 'flag', pronunciation: 'jhanda' },
    { devanagari: 'ट', roman: 'ta', type: 'consonant', word: 'टमाटर', meaning: 'tomato', pronunciation: 'tamatar' },
    { devanagari: 'ठ', roman: 'tha', type: 'consonant', word: 'ठंडा', meaning: 'cold', pronunciation: 'thanda' },
    { devanagari: 'ड', roman: 'da', type: 'consonant', word: 'डमरू', meaning: 'drum', pronunciation: 'damru' },
    { devanagari: 'ढ', roman: 'dha', type: 'consonant', word: 'ढोल', meaning: 'drum', pronunciation: 'dhol' },
    { devanagari: 'त', roman: 'ta', type: 'consonant', word: 'तारा', meaning: 'star', pronunciation: 'tara' },
    { devanagari: 'थ', roman: 'tha', type: 'consonant', word: 'थैला', meaning: 'bag', pronunciation: 'thaila' },
    { devanagari: 'द', roman: 'da', type: 'consonant', word: 'दवा', meaning: 'medicine', pronunciation: 'dawa' },
    { devanagari: 'ध', roman: 'dha', type: 'consonant', word: 'धन', meaning: 'wealth', pronunciation: 'dhan' },
    { devanagari: 'न', roman: 'na', type: 'consonant', word: 'नाक', meaning: 'nose', pronunciation: 'naak' },
    { devanagari: 'प', roman: 'pa', type: 'consonant', word: 'पानी', meaning: 'water', pronunciation: 'paani' },
    { devanagari: 'फ', roman: 'pha', type: 'consonant', word: 'फल', meaning: 'fruit', pronunciation: 'phal' },
    { devanagari: 'ब', roman: 'ba', type: 'consonant', word: 'बच्चा', meaning: 'child', pronunciation: 'bachcha' },
    { devanagari: 'भ', roman: 'bha', type: 'consonant', word: 'भालू', meaning: 'bear', pronunciation: 'bhalu' },
    { devanagari: 'म', roman: 'ma', type: 'consonant', word: 'माता', meaning: 'mother', pronunciation: 'mata' },
    { devanagari: 'य', roman: 'ya', type: 'consonant', word: 'यज्ञ', meaning: 'sacrifice', pronunciation: 'yagya' },
    { devanagari: 'र', roman: 'ra', type: 'consonant', word: 'राजा', meaning: 'king', pronunciation: 'raja' },
    { devanagari: 'ल', roman: 'la', type: 'consonant', word: 'लड़का', meaning: 'boy', pronunciation: 'ladka' },
    { devanagari: 'व', roman: 'va', type: 'consonant', word: 'वन', meaning: 'forest', pronunciation: 'van' },
    { devanagari: 'श', roman: 'sha', type: 'consonant', word: 'शेर', meaning: 'lion', pronunciation: 'sher' },
    { devanagari: 'ष', roman: 'sha', type: 'consonant', word: 'षट्', meaning: 'six', pronunciation: 'shat' },
    { devanagari: 'स', roman: 'sa', type: 'consonant', word: 'सूरज', meaning: 'sun', pronunciation: 'suraj' },
    { devanagari: 'ह', roman: 'ha', type: 'consonant', word: 'हाथी', meaning: 'elephant', pronunciation: 'haathi' }
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
let currentAlphabetMode = 'all'; // 'all', 'vowels', 'consonants'
let alphabetQuizScore = 0;
let alphabetQuizIndex = 0;
let alphabetQuizQuestions = [];

// Text-to-speech function
function speakHindi(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'hi-IN';
        utterance.rate = 0.7;
        utterance.pitch = 1.1;
        speechSynthesis.speak(utterance);
    }
}

// Initialize Hindi alphabet display
function initializeAlphabet() {
    const lettersContainer = document.getElementById('letters');
    lettersContainer.innerHTML = `
        <h3>🔤 Hindi Alphabet (देवनागरी वर्णमाला)</h3>
        <div style="text-align: center; margin: 20px 0;">
            <button class="btn" onclick="setAlphabetMode('all')" style="margin: 5px;">All Letters</button>
            <button class="btn" onclick="setAlphabetMode('vowels')" style="margin: 5px;">Vowels (स्वर)</button>
            <button class="btn" onclick="setAlphabetMode('consonants')" style="margin: 5px;">Consonants (व्यंजन)</button>
        </div>
        <div id="current-letter"></div>
        <div style="text-align: center; margin: 20px 0;">
            <button class="btn" onclick="previousLetter()">⬅️ Previous</button>
            <button class="btn" onclick="nextLetter()">Next ➡️</button>
            <button class="btn" onclick="startAlphabetQuiz()">🧠 Alphabet Quiz</button>
        </div>
        <div id="alphabet-grid" style="margin-top: 30px;"></div>
    `;
    showCurrentLetter();
    showAlphabetGrid();
}

function setAlphabetMode(mode) {
    currentAlphabetMode = mode;
    currentLetterIndex = 0;
    showCurrentLetter();
    showAlphabetGrid();
}

function getFilteredAlphabet() {
    switch(currentAlphabetMode) {
        case 'vowels':
            return hindiAlphabet.filter(letter => letter.type === 'vowel');
        case 'consonants':
            return hindiAlphabet.filter(letter => letter.type === 'consonant');
        default:
            return hindiAlphabet;
    }
}

function showCurrentLetter() {
    const filteredAlphabet = getFilteredAlphabet();
    const letter = filteredAlphabet[currentLetterIndex];
    const letterDiv = document.getElementById('current-letter');
    
    if (!letter) return;
    
    letterDiv.innerHTML = `
        <div class="letter-display fade-in">
            <h2 style="font-size: 4em; margin-bottom: 10px; color: white;">${letter.devanagari}</h2>
            <p style="font-size: 1.8em; margin: 10px 0; color: #e1f5fe;">
                Sounds like: "${letter.roman}"
            </p>
            <div style="margin: 20px 0;">
                <p style="color: white; font-size: 1.2em;"><strong>Example word:</strong></p>
                <div style="font-size: 1.5em; margin: 15px 0;">
                    <span class="hword" onclick="speakHindi('${letter.word}')">${letter.word}</span>
                    <br>
                    <small style="color: #e1f5fe; opacity: 0.9;">
                        (${letter.pronunciation}) = ${letter.meaning}
                    </small>
                </div>
            </div>
            <div style="margin: 20px 0;">
                <button class="btn" onclick="speakHindi('${letter.devanagari}')" style="margin: 5px;">
                    🔊 Hear Letter
                </button>
                <button class="btn" onclick="speakHindi('${letter.word}')" style="margin: 5px;">
                    🔊 Hear Word
                </button>
                <button class="btn" onclick="practiceWriting('${letter.devanagari}')" style="margin: 5px;">
                    ✏️ Practice Writing
                </button>
            </div>
        </div>
    `;
}

function showAlphabetGrid() {
    const filteredAlphabet = getFilteredAlphabet();
    const gridDiv = document.getElementById('alphabet-grid');
    
    let gridHTML = `
        <h4 style="text-align: center; color: #4a4a4a; margin-bottom: 20px;">
            ${currentAlphabetMode === 'vowels' ? 'Vowels (स्वर)' : 
              currentAlphabetMode === 'consonants' ? 'Consonants (व्यंजन)' : 
              'Complete Alphabet'} - Click any letter to hear it!
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 10px;">
    `;
    
    filteredAlphabet.forEach((letter, index) => {
        const isActive = index === currentLetterIndex ? 'background: #ff6b6b; transform: scale(1.1);' : '';
        gridHTML += `
            <div onclick="selectLetter(${index})" 
                 style="background: linear-gradient(45deg, #4ecdc4, #44a08d); 
                        color: white; padding: 15px; border-radius: 10px; 
                        text-align: center; cursor: pointer; font-size: 1.5em; 
                        font-weight: bold; transition: all 0.3s ease; ${isActive}"
                 onmouseover="this.style.transform='scale(1.05)'"
                 onmouseout="this.style.transform='scale(1)'">
                ${letter.devanagari}
            </div>
        `;
    });
    
    gridHTML += '</div>';
    gridDiv.innerHTML = gridHTML;
}

function selectLetter(index) {
    currentLetterIndex = index;
    showCurrentLetter();
    showAlphabetGrid();
    
    const filteredAlphabet = getFilteredAlphabet();
    speakHindi(filteredAlphabet[index].devanagari);
}

function nextLetter() {
    const filteredAlphabet = getFilteredAlphabet();
    currentLetterIndex = (currentLetterIndex + 1) % filteredAlphabet.length;
    showCurrentLetter();
    showAlphabetGrid();
}

function previousLetter() {
    const filteredAlphabet = getFilteredAlphabet();
    currentLetterIndex = currentLetterIndex === 0 ? filteredAlphabet.length - 1 : currentLetterIndex - 1;
    showCurrentLetter();
    showAlphabetGrid();
}

function practiceWriting(letter) {
    const practiceDiv = document.createElement('div');
    practiceDiv.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: rgba(0,0,0,0.8); z-index: 1000; display: flex; 
                    align-items: center; justify-content: center;" onclick="closePractice()">
            <div style="background: white; padding: 40px; border-radius: 20px; 
                        text-align: center; max-width: 500px;" onclick="event.stopPropagation()">
                <h3 style="color: #4a4a4a; margin-bottom: 20px;">Practice Writing: ${letter}</h3>
                <div style="font-size: 8em; color: #ddd; margin: 20px 0; 
                            border: 3px dashed #ccc; padding: 20px; border-radius: 10px;">
                    ${letter}
                </div>
                <p style="color: #666; margin: 20px 0;">
                    Trace over the letter above with your finger or a stylus!
                </p>
                <button class="btn" onclick="speakHindi('${letter}')" style="margin: 10px;">
                    🔊 Hear Again
                </button>
                <button class="btn" onclick="closePractice()" style="margin: 10px;">
                    ✅ Done
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(practiceDiv);
}

function closePractice() {
    const practiceDiv = document.querySelector('div[style*="position: fixed"]');
    if (practiceDiv) {
        document.body.removeChild(practiceDiv);
    }
}

// Alphabet Quiz
function startAlphabetQuiz() {
    alphabetQuizIndex = 0;
    alphabetQuizScore = 0;
    alphabetQuizQuestions = [];
    
    const filteredAlphabet = getFilteredAlphabet();
    
    // Generate 10 random questions
    for (let i = 0; i < Math.min(10, filteredAlphabet.length); i++) {
        const randomLetter = filteredAlphabet[Math.floor(Math.random() * filteredAlphabet.length)];
        alphabetQuizQuestions.push(randomLetter);
    }
    
    const letterDiv = document.getElementById('current-letter');
    letterDiv.innerHTML = '<div class="fade-in">Starting Alphabet Quiz...</div>';
    
    setTimeout(showAlphabetQuizQuestion, 500);
}

function showAlphabetQuizQuestion() {
    if (alphabetQuizIndex >= alphabetQuizQuestions.length) {
        showAlphabetQuizResults();
        return;
    }
    
    const question = alphabetQuizQuestions[alphabetQuizIndex];
    const filteredAlphabet = getFilteredAlphabet();
    const letterDiv = document.getElementById('current-letter');
    
    // Create wrong options
    const wrongOptions = filteredAlphabet
        .filter(l => l.devanagari !== question.devanagari)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(l => l.roman);
    
    const allOptions = [question.roman, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    letterDiv.innerHTML = `
        <div class="quiz-container fade-in">
            <h4 style="color: white;">What sound does this letter make?</h4>
            <div style="margin: 20px 0;">
                <div style="font-size: 4em; cursor: pointer; color: white;" onclick="speakHindi('${question.devanagari}')">
                    ${question.devanagari}
                </div>
                <p style="color: #e1f5fe;">(Click to hear the letter)</p>
            </div>
            <div class="quiz-options">
                ${allOptions.map(option => 
                    `<button class="quiz-option" onclick="selectAlphabetAnswer('${option}', '${question.roman}')">
                        ${option}
                    </button>`
                ).join('')}
            </div>
            <div id="alphabet-quiz-feedback"></div>
            <p style="color: white; margin-top: 20px;">
                Question ${alphabetQuizIndex + 1} of ${alphabetQuizQuestions.length}
            </p>
        </div>
    `;
}

function selectAlphabetAnswer(selected, correct) {
    const buttons = document.querySelectorAll('#current-letter .quiz-option');
    const feedbackDiv = document.getElementById('alphabet-quiz-feedback');
    
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent.trim() === correct) {
            button.classList.add('correct');
        } else if (button.textContent.trim() === selected && selected !== correct) {
            button.classList.add('incorrect');
        }
    });
    
    if (selected === correct) {
        alphabetQuizScore++;
        feedbackDiv.innerHTML = `
            <div style="color: #4caf50; font-size: 1.3em; font-weight: bold;" class="bounce">
                ✅ बहुत अच्छा! (Bahut accha!) Excellent!
            </div>
        `;
    } else {
        feedbackDiv.innerHTML = `
            <div style="color: #ffcdd2; font-size: 1.3em; font-weight: bold;">
                ❌ Good try! The correct sound is "${correct}"
            </div>
        `;
    }
    
    setTimeout(() => {
        alphabetQuizIndex++;
        showAlphabetQuizQuestion();
    }, 2500);
}

function showAlphabetQuizResults() {
    const percentage = Math.round((alphabetQuizScore / alphabetQuizQuestions.length) * 100);
    let message = '';
    
    if (percentage >= 80) {
        message = 'शानदार! (Shaandaar!) Outstanding! 🌟';
    } else if (percentage >= 60) {
        message = 'बहुत अच्छा! (Bahut accha!) Very good! 👏';
    } else {
        message = 'अभ्यास करते रहें! (Abhyas karte rahein!) Keep practicing! 💪';
    }
    
    const letterDiv = document.getElementById('current-letter');
    letterDiv.innerHTML = `
        <div class="score-display fade-in">
            <h3>Alphabet Quiz Complete!</h3>
            <p>You got ${alphabetQuizScore} out of ${alphabetQuizQuestions.length} correct!</p>
            <p>That's ${percentage}%</p>
            <p>${message}</p>
            <div style="margin-top: 20px;">
                <button class="btn" onclick="startAlphabetQuiz()">Try Again</button>
                <button class="btn" onclick="showCurrentLetter()">Back to Learning</button>
            </div>
        </div>
    `;
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
    initializeAlphabet();
    initializeVocabulary();
    initializePhrases();
    
    // Add learning tips
    const tipsSection = document.createElement('section');
    tipsSection.innerHTML = `
        <h3>🎯 Hindi Learning Tips</h3>
        <div class="activity-grid">
            <div class="activity-card">
                <h4>🔊 Listen Carefully</h4>
                <p>Click the 🔊 buttons to hear correct pronunciation!</p>
            </div>
            <div class="activity-card">
                <h4>📝 Practice Writing</h4>
                <p>Use the practice writing feature for each letter!</p>
            </div>
            <div class="activity-card">
                <h4>🔄 Daily Practice</h4>
                <p>Spend a few minutes each day learning new letters!</p>
            </div>
            <div class="activity-card">
                <h4>🎯 Take Quizzes</h4>
                <p>Test your knowledge with alphabet and vocabulary quizzes!</p>
            </div>
            <div class="activity-card">
                <h4>🌟 Start Simple</h4>
                <p>Begin with vowels, then move to consonants!</p>
            </div>
            <div class="activity-card">
                <h4>🤝 Telugu Connection</h4>
                <p>Many Hindi words are similar to Telugu words!</p>
            </div>
        </div>
    `;
    document.body.appendChild(tipsSection);
});