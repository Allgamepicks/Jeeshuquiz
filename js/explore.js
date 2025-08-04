const countries = [
    {
        name: 'United States',
        capital: 'Washington, D.C.',
        continent: 'North America',
        lat: 38.8977,
        lon: -77.0365,
        flag: 'https://flagcdn.com/w320/us.png',
        fact: 'Home to the Grand Canyon and Statue of Liberty.',
        population: '331 million',
        language: 'English'
    },
    {
        name: 'India',
        capital: 'New Delhi',
        continent: 'Asia',
        lat: 28.6139,
        lon: 77.2090,
        flag: 'https://flagcdn.com/w320/in.png',
        fact: 'Birthplace of yoga and has the Taj Mahal.',
        population: '1.4 billion',
        language: 'Hindi, English'
    },
    {
        name: 'France',
        capital: 'Paris',
        continent: 'Europe',
        lat: 48.8566,
        lon: 2.3522,
        flag: 'https://flagcdn.com/w320/fr.png',
        fact: 'Famous for the Eiffel Tower and delicious pastries.',
        population: '67 million',
        language: 'French'
    },
    {
        name: 'Brazil',
        capital: 'Brasilia',
        continent: 'South America',
        lat: -15.8267,
        lon: -47.9218,
        flag: 'https://flagcdn.com/w320/br.png',
        fact: 'Hosts the Amazon Rainforest and Carnival festival.',
        population: '215 million',
        language: 'Portuguese'
    },
    {
        name: 'Japan',
        capital: 'Tokyo',
        continent: 'Asia',
        lat: 35.6895,
        lon: 139.6917,
        flag: 'https://flagcdn.com/w320/jp.png',
        fact: 'Land of the rising sun and cherry blossoms.',
        population: '125 million',
        language: 'Japanese'
    },
    {
        name: 'Australia',
        capital: 'Canberra',
        continent: 'Australia',
        lat: -35.2809,
        lon: 149.1300,
        flag: 'https://flagcdn.com/w320/au.png',
        fact: 'Home to kangaroos and the Great Barrier Reef.',
        population: '26 million',
        language: 'English'
    },
    {
        name: 'Egypt',
        capital: 'Cairo',
        continent: 'Africa',
        lat: 30.0444,
        lon: 31.2357,
        flag: 'https://flagcdn.com/w320/eg.png',
        fact: 'Famous for pyramids and ancient pharaohs.',
        population: '104 million',
        language: 'Arabic'
    },
    {
        name: 'Canada',
        capital: 'Ottawa',
        continent: 'North America',
        lat: 45.4215,
        lon: -75.6972,
        flag: 'https://flagcdn.com/w320/ca.png',
        fact: 'Known for maple syrup and beautiful nature.',
        population: '38 million',
        language: 'English, French'
    }
];

// Initialize map
const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add markers for each country
countries.forEach(country => {
    const marker = L.marker([country.lat, country.lon]).addTo(map);
    
    marker.bindTooltip(`
        <div style="text-align: center;">
            <img src="${country.flag}" width="40" style="border-radius: 4px;"><br>
            <strong>${country.name}</strong><br>
            <small>${country.continent}</small>
        </div>
    `);
    
    marker.on('click', () => {
        showCountryInfo(country);
    });
});

function showCountryInfo(country) {
    const infoDiv = document.getElementById('country-info');
    infoDiv.innerHTML = `
        <div class="country-info fade-in">
            <h3>${country.name}</h3>
            <img src="${country.flag}" alt="${country.name} flag" width="120" class="country-flag">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
                <div><strong>Capital:</strong> ${country.capital}</div>
                <div><strong>Continent:</strong> ${country.continent}</div>
                <div><strong>Population:</strong> ${country.population}</div>
                <div><strong>Language:</strong> ${country.language}</div>
            </div>
            <p style="margin-top: 15px; font-style: italic;">${country.fact}</p>
        </div>
    `;
}

// Quiz functionality
let quizIndex = 0;
let score = 0;
let questions = [];
let wrongAnswers = [];
let currentQuestion = null;

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function generateQuestions() {
    questions = [];
    const questionTypes = ['flag', 'capital', 'continent', 'fact'];
    
    // Generate 15 questions
    for (let i = 0; i < 15; i++) {
        const country = countries[Math.floor(Math.random() * countries.length)];
        const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
        questions.push({ type, country });
    }
}

function startQuiz() {
    quizIndex = 0;
    score = 0;
    wrongAnswers = [];
    generateQuestions();
    
    document.getElementById('quiz-section').classList.remove('hidden');
    document.getElementById('start-quiz').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    if (quizIndex >= questions.length) {
        showResults();
        return;
    }
    
    currentQuestion = questions[quizIndex];
    const questionDiv = document.getElementById('quiz-question');
    const optionsDiv = document.getElementById('quiz-options');
    const progressDiv = document.getElementById('quiz-progress');
    
    // Update progress
    const progressPercent = ((quizIndex + 1) / questions.length) * 100;
    progressDiv.innerHTML = `
        <div class="progress-container">
            <div class="progress-bar" style="width: ${progressPercent}%">
                Question ${quizIndex + 1} of ${questions.length}
            </div>
        </div>
    `;
    
    let questionText = '';
    let options = [];
    let correctAnswer = '';
    
    switch (currentQuestion.type) {
        case 'flag':
            questionText = `Which country has this flag?<br><img src="${currentQuestion.country.flag}" width="100" style="border-radius: 8px; margin: 10px;">`;
            options = shuffle([...countries]).slice(0, 4).map(c => c.name);
            correctAnswer = currentQuestion.country.name;
            break;
            
        case 'capital':
            questionText = `What is the capital of ${currentQuestion.country.name}?`;
            options = shuffle([...countries]).slice(0, 4).map(c => c.capital);
            correctAnswer = currentQuestion.country.capital;
            break;
            
        case 'continent':
            questionText = `Which continent is ${currentQuestion.country.name} located in?`;
            const continents = [...new Set(countries.map(c => c.continent))];
            options = shuffle(continents).slice(0, Math.min(4, continents.length));
            correctAnswer = currentQuestion.country.continent;
            break;
            
        case 'fact':
            questionText = `Which country is known for: "${currentQuestion.country.fact.split('.')[0]}"?`;
            options = shuffle([...countries]).slice(0, 4).map(c => c.name);
            correctAnswer = currentQuestion.country.name;
            break;
    }
    
    // Ensure correct answer is in options
    if (!options.includes(correctAnswer)) {
        options[0] = correctAnswer;
    }
    options = shuffle(options);
    
    questionDiv.innerHTML = `<div class="quiz-question fade-in">${questionText}</div>`;
    
    optionsDiv.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option;
        button.onclick = () => selectAnswer(option, correctAnswer);
        optionsDiv.appendChild(button);
    });
}

function selectAnswer(selected, correct) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => {
        option.disabled = true;
        if (option.textContent === correct) {
            option.classList.add('correct');
        } else if (option.textContent === selected && selected !== correct) {
            option.classList.add('incorrect');
        }
    });
    
    if (selected === correct) {
        score++;
    } else {
        wrongAnswers.push({
            question: document.querySelector('.quiz-question').textContent,
            correct: correct,
            selected: selected
        });
    }
    
    setTimeout(() => {
        quizIndex++;
        showQuestion();
    }, 2000);
}

function showResults() {
    const questionDiv = document.getElementById('quiz-question');
    const optionsDiv = document.getElementById('quiz-options');
    const progressDiv = document.getElementById('quiz-progress');
    
    const percentage = Math.round((score / questions.length) * 100);
    let grade = '';
    let message = '';
    
    if (percentage >= 90) {
        grade = 'Excellent! 🌟';
        message = 'You are a geography superstar!';
    } else if (percentage >= 70) {
        grade = 'Great Job! 👏';
        message = 'You know a lot about the world!';
    } else if (percentage >= 50) {
        grade = 'Good Try! 👍';
        message = 'Keep learning about our amazing world!';
    } else {
        grade = 'Keep Practicing! 📚';
        message = 'Every expert was once a beginner!';
    }
    
    let resultHTML = `
        <div class="score-display fade-in">
            <h2>${grade}</h2>
            <p>You scored ${score} out of ${questions.length} (${percentage}%)</p>
            <p>${message}</p>
        </div>
    `;
    
    if (wrongAnswers.length > 0) {
        resultHTML += `
            <div class="quiz-container">
                <h3>Let's Review:</h3>
                <div style="text-align: left;">
        `;
        
        wrongAnswers.forEach((wrong, index) => {
            resultHTML += `
                <div style="margin: 15px 0; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 8px;">
                    <strong>Q${index + 1}:</strong> ${wrong.question}<br>
                    <span style="color: #ffcdd2;">Your answer: ${wrong.selected}</span><br>
                    <span style="color: #c8e6c9;">Correct answer: ${wrong.correct}</span>
                </div>
            `;
        });
        
        resultHTML += `
                </div>
            </div>
        `;
    }
    
    resultHTML += `
        <button class="btn" onclick="restartQuiz()" style="margin-top: 20px;">
            Take Quiz Again
        </button>
    `;
    
    questionDiv.innerHTML = resultHTML;
    optionsDiv.innerHTML = '';
    progressDiv.innerHTML = '';
}

function restartQuiz() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('start-quiz').style.display = 'inline-block';
    document.getElementById('country-info').innerHTML = '';
}

// Event listener for start quiz button
document.getElementById('start-quiz').addEventListener('click', startQuiz);

// Add some educational tips
document.addEventListener('DOMContentLoaded', function() {
    const tipDiv = document.createElement('div');
    tipDiv.innerHTML = `
        <section>
            <h3>🌍 Explore Tips</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                <div class="activity-card">
                    <h4>Click on Countries</h4>
                    <p>Click on any marker to learn about that country!</p>
                </div>
                <div class="activity-card">
                    <h4>Take the Quiz</h4>
                    <p>Test your knowledge with fun questions!</p>
                </div>
                <div class="activity-card">
                    <h4>Learn Facts</h4>
                    <p>Discover amazing facts about each country!</p>
                </div>
            </div>
        </section>
    `;
    document.body.appendChild(tipDiv);
});