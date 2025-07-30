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
