const activitySection = document.getElementById('activity');
let current = 0;
let score = 0;
let questions = [];
let wrong = [];

function startActivity(type) {
    current = 0;
    score = 0;
    questions = [];
    activitySection.classList.remove('hidden');
    activitySection.innerHTML = '';
    if (type === 'add') {
        for (let i = 0; i < 10; i++) {
            const a = Math.floor(Math.random()*900)+100;
            const b = Math.floor(Math.random()*900)+100;
            if (Math.random() > 0.5) {
                questions.push({q:`${a} + ${b} = ?`, a: a+b});
            } else {
                questions.push({q:`${a} - ${b} = ?`, a:a-b});
            }
        }
    } else if (type === 'mul') {
        for (let i=0; i<5; i++) {
            const a = Math.floor(Math.random()*9)+1;
            const b = Math.floor(Math.random()*5)+1;
            questions.push({q:`${a} x ${b} = ?`, a:a*b});
        }
    } else if (type === 'place') {
        for (let i=0; i<5; i++) {
            const a = Math.floor(Math.random()*900)+100;
            questions.push({q:`What is the hundreds place in ${a}?`, a:Math.floor(a/100)});
        }
    } else if (type === 'clock') {
        for (let i=0; i<5; i++) {
            const h = Math.floor(Math.random()*12);
            const m = [0,15,30,45][Math.floor(Math.random()*4)];
            questions.push({q:`What time is shown: ${h}:${m.toString().padStart(2,'0')}?`, a:`${h}:${m.toString().padStart(2,'0')}`});
        }
    } else if (type === 'word') {
        for (let i=0; i<5; i++) {
            const n = Math.floor(Math.random()*5)+1;
            const m = Math.floor(Math.random()*5)+1;
            questions.push({q:`If you have ${n} apples and get ${m} more, how many apples do you have?`, a:n+m});
        }
    }
    showQuestion();
}

function showQuestion() {
    if (current >= questions.length) {
        let res = `<p>You scored ${score}/${questions.length}</p>`;
        if (wrong.length) {
            res += '<ul>' + wrong.map(w => `<li>${w.q} Answer: ${w.correct}</li>`).join('') + '</ul>';
        }
        activitySection.innerHTML = res;
        return;
    }
    const q = questions[current];
    activitySection.innerHTML = `
        <p>${q.q}</p>
        <input type="text" id="answer" />
        <button class="btn" onclick="checkAnswer()">Submit</button>
        <p id="progress">Question ${current+1} of ${questions.length}</p>
    `;
}

function checkAnswer() {
    const user = document.getElementById('answer').value.trim();
    if (user == questions[current].a) {
        score++;
    } else {
        wrong.push({q: questions[current].q, correct: questions[current].a});
    }
    current++;
    showQuestion();
}
