const words = [
    {word:'apple', img:'https://via.placeholder.com/100?text=apple'},
    {word:'book', img:'https://via.placeholder.com/100?text=book'},
    {word:'cat', img:'https://via.placeholder.com/100?text=cat'}
];
const sightWords = ['what','where','because','here','there'];
let sightIndex = 0;
const fillData = [
    {sent:'I have __ apples.', answer:'two'},
    {sent:'We go to __ school.', answer:'the'},
    {sent:'__ are you?', answer:'How'}
];
let fillIndex = 0;

let matchIndex = 0;
let correct = 0;
function startMatch() {
    matchIndex = 0;
    correct = 0;
    document.getElementById('match-game').innerHTML = '';
    showMatch();
}
function showMatch() {
    if (matchIndex >= words.length) {
        document.getElementById('match-game').innerHTML = `<p>Score ${correct}/${words.length}</p>`;
        return;
    }
    const w = words[matchIndex];
    document.getElementById('match-game').innerHTML = `
        <img src="${w.img}" alt=""/><br>
        <input id="word-input" type="text" placeholder="Type the word"/>
        <button class="btn" onclick="checkWord('${w.word}')">Submit</button>
    `;
}
function checkWord(answer) {
    const val = document.getElementById('word-input').value.trim().toLowerCase();
    if (val === answer) correct++;
    matchIndex++;
    showMatch();
}

function nextSight() {
    const p = document.getElementById('sight-words');
    p.textContent = sightWords[sightIndex];
    sightIndex = (sightIndex + 1) % sightWords.length;
}

function startFill() {
    fillIndex = 0;
    showFill();
}

function showFill() {
    if (fillIndex >= fillData.length) {
        document.getElementById('fill-container').innerHTML = '<p>Great job!</p>';
        return;
    }
    const f = fillData[fillIndex];
    document.getElementById('fill-container').innerHTML = `
        <p>${f.sent}</p>
        <input id="fill-input" type="text" />
        <button class="btn" onclick="checkFill('${f.answer}')">Submit</button>
    `;
}

function checkFill(ans) {
    const val = document.getElementById('fill-input').value.trim();
    fillIndex++;
    showFill();
}
=======
