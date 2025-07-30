const letters = [
    {ch:'अ', img:'https://via.placeholder.com/100?text=%E0%A4%85', audio:'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav'},
    {ch:'आ', img:'https://via.placeholder.com/100?text=%E0%A4%86', audio:'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars3.wav'},
    {ch:'इ', img:'https://via.placeholder.com/100?text=%E0%A4%87', audio:'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav'}
];
const container = document.getElementById('letters');
letters.forEach(l => {
    const div = document.createElement('div');
    div.innerHTML = `
        <h3>${l.ch}</h3>
        <img src="${l.img}" alt="" />
        <audio controls src="${l.audio}"></audio>
    `;
    container.appendChild(div);
});

const vocab = [
    {word:'किताब', meaning:'book', audio:'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars3.wav'},
    {word:'सेब', meaning:'apple', audio:'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav'},
    {word:'घर', meaning:'house', audio:'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav'}
];
const vocabDiv = document.getElementById('vocab');
vocab.forEach(v => {
    const d = document.createElement('div');
    d.innerHTML = `
        <span class="hword" onclick="this.querySelector('audio').play()">${v.word}</span> - ${v.meaning}
        <audio src="${v.audio}"></audio>
    `;
    vocabDiv.appendChild(d);
});

let vocabIndex = 0;
let vocabScore = 0;
function startVocabQuiz() {
    vocabIndex = 0;
    vocabScore = 0;
    document.getElementById('vocab-quiz').innerHTML = '';
    showVocabQuestion();
}

function showVocabQuestion() {
    if (vocabIndex >= vocab.length) {
        document.getElementById('vocab-quiz').innerHTML = `Score ${vocabScore}/${vocab.length}`;
        return;
    }
    const v = vocab[vocabIndex];
    document.getElementById('vocab-quiz').innerHTML = `
        <p>What is the meaning of <strong>${v.word}</strong>?</p>
        <input id="vocab-answer" type="text" />
        <button class="btn" onclick="checkVocab('${v.meaning}')">Submit</button>
    `;
}

function checkVocab(ans) {
    const val = document.getElementById('vocab-answer').value.trim().toLowerCase();
    if (val === ans.toLowerCase()) vocabScore++;
    vocabIndex++;
    showVocabQuestion();
}
