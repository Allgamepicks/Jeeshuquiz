const countries = [
    {
        name: 'United States',
        capital: 'Washington, D.C.',
        lat: 38.8977,
        lon: -77.0365,
        flag: 'https://flagcdn.com/w320/us.png',
        fact: 'Home to the Grand Canyon.'
    },
    {
        name: 'India',
        capital: 'New Delhi',
        lat: 28.6139,
        lon: 77.2090,
        flag: 'https://flagcdn.com/w320/in.png',
        fact: 'Birthplace of yoga.'
    },
    {
        name: 'France',
        capital: 'Paris',
        lat: 48.8566,
        lon: 2.3522,
        flag: 'https://flagcdn.com/w320/fr.png',
        fact: 'Famous for the Eiffel Tower.'
    },
    {
        name: 'Brazil',
        capital: 'Brasilia',
        lat: -15.8267,
        lon: -47.9218,
        flag: 'https://flagcdn.com/w320/br.png',
        fact: 'Hosts the Amazon Rainforest.'
    },
    {
        name: 'Japan',
        capital: 'Tokyo',
        lat: 35.6895,
        lon: 139.6917,
        flag: 'https://flagcdn.com/w320/jp.png',
        fact: 'Land of the rising sun.'
    }
];

const map = L.map('map').setView([20,0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

countries.forEach(c => {
    const marker = L.marker([c.lat, c.lon]).addTo(map);
    marker.on('click', () => {
        document.getElementById('country-info').innerHTML = `
            <h3>${c.name}</h3>
            <img src="${c.flag}" alt="flag" width="100">
            <p>Capital: ${c.capital}</p>
            <p>${c.fact}</p>
        `;
    });
});

// Quiz Section
let quizIndex = 0;
let score = 0;
let questions = [];

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function startQuiz() {
    quizIndex = 0;
    score = 0;
    questions = [];

    for (let i = 0; i < 10; i++) {
        questions.push({
            type: 'flag',
            country: countries[i % countries.length]
        });
        questions.push({
            type: 'capital',
            country: countries[i % countries.length]
        });
    }
    shuffle(questions);
    document.getElementById('quiz-section').classList.remove('hidden');
    showQuestion();
}

document.getElementById('start-quiz').addEventListener('click', startQuiz);

function showQuestion() {
    if (quizIndex >= questions.length) {
        document.getElementById('quiz-question').innerHTML = `Quiz complete! Your score: ${score}/${questions.length}`;
        document.getElementById('quiz-options').innerHTML = '';
        return;
    }
    const q = questions[quizIndex];
    if (q.type === 'flag') {
        document.getElementById('quiz-question').innerHTML = `Which country has this flag?<br><img src="${q.country.flag}" width="100">`;
        const opts = shuffle([...countries].map(c => c.name)).slice(0,3);
        if (!opts.includes(q.country.name)) opts[0] = q.country.name;
        createOptions(opts, q.country.name);
    } else {
        document.getElementById('quiz-question').textContent = `What is the capital of ${q.country.name}?`;
        const opts = shuffle([...countries].map(c => c.capital)).slice(0,3);
        if (!opts.includes(q.country.capital)) opts[0] = q.country.capital;
        createOptions(opts, q.country.capital);
    }
    document.getElementById('quiz-progress').textContent = `Question ${quizIndex+1} of ${questions.length}`;
}

function createOptions(opts, correct) {
    const container = document.getElementById('quiz-options');
    container.innerHTML = '';
    opts.forEach(o => {
        const btn = document.createElement('button');
        btn.textContent = o;
        btn.className = 'btn';
        btn.onclick = () => {
            if (o === correct) score++;
            quizIndex++;
            showQuestion();
        };
        container.appendChild(btn);
    });
}
