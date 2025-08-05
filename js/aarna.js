// Aarna's special learning content for toddlers
const colors = [
    { name: 'Red', color: '#ff4444', hindi: 'लाल', telugu: 'ఎరుపు', sound: 'red' },
    { name: 'Blue', color: '#4444ff', hindi: 'नीला', telugu: 'నీలం', sound: 'blue' },
    { name: 'Yellow', color: '#ffdd44', hindi: 'पीला', telugu: 'పసుపు', sound: 'yellow' },
    { name: 'Green', color: '#44ff44', hindi: 'हरा', telugu: 'ఆకుపచ్చ', sound: 'green' },
    { name: 'Orange', color: '#ff8844', hindi: 'नारंगी', telugu: 'నారింజ', sound: 'orange' },
    { name: 'Purple', color: '#8844ff', hindi: 'बैंगनी', telugu: 'ఊదా', sound: 'purple' },
    { name: 'Pink', color: '#ff44aa', hindi: 'गुलाबी', telugu: 'గులాబీ', sound: 'pink' },
    { name: 'Brown', color: '#8b4513', hindi: 'भूरा', telugu: 'గోధుమ', sound: 'brown' }
];

const bodyParts = [
    { name: 'Eyes', emoji: '👀', hindi: 'आँखें', telugu: 'కళ్ళు', sound: 'eyes' },
    { name: 'Nose', emoji: '👃', hindi: 'नाक', telugu: 'ముక్కు', sound: 'nose' },
    { name: 'Mouth', emoji: '👄', hindi: 'मुंह', telugu: 'నోరు', sound: 'mouth' },
    { name: 'Ears', emoji: '👂', hindi: 'कान', telugu: 'చెవులు', sound: 'ears' },
    { name: 'Hands', emoji: '👐', hindi: 'हाथ', telugu: 'చేతులు', sound: 'hands' },
    { name: 'Feet', emoji: '🦶', hindi: 'पैर', telugu: 'కాళ్ళు', sound: 'feet' },
    { name: 'Head', emoji: '🗣️', hindi: 'सिर', telugu: 'తల', sound: 'head' },
    { name: 'Hair', emoji: '💇‍♀️', hindi: 'बाल', telugu: 'జుట్టు', sound: 'hair' }
];

const animals = [
    { name: 'Cat', emoji: '🐱', sound: 'meow', hindi: 'बिल्ली', telugu: 'పిల్లి' },
    { name: 'Dog', emoji: '🐶', sound: 'woof', hindi: 'कुत्ता', telugu: 'కుక్క' },
    { name: 'Cow', emoji: '🐄', sound: 'moo', hindi: 'गाय', telugu: 'ఆవు' },
    { name: 'Bird', emoji: '🐦', sound: 'tweet', hindi: 'पक्षी', telugu: 'పక్షి' },
    { name: 'Fish', emoji: '🐠', sound: 'blub', hindi: 'मछली', telugu: 'చేప' },
    { name: 'Elephant', emoji: '🐘', sound: 'trumpet', hindi: 'हाथी', telugu: 'ఏనుగు' }
];

let currentMode = '';
let celebrationCount = 0;

// Text-to-speech for toddlers (slower and clearer)
function speakToddler(text, lang = 'en') {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.6; // Slower for toddlers
        utterance.pitch = 1.3; // Higher pitch for kids
        utterance.volume = 0.8;
        
        if (lang === 'hi') {
            utterance.lang = 'hi-IN';
        } else if (lang === 'te') {
            utterance.lang = 'te-IN';
        } else {
            utterance.lang = 'en-US';
        }
        
        speechSynthesis.speak(utterance);
    }
}

// Play celebration sound and animation
function celebrate() {
    celebrationCount++;
    
    // Visual celebration
    const learningArea = document.getElementById('learning-area');
    learningArea.classList.add('celebration');
    
    setTimeout(() => {
        learningArea.classList.remove('celebration');
    }, 1000);
    
    // Audio celebration
    playSuccessSound();
    
    // Encouraging messages
    const messages = [
        "Great job, Aarna! 🌟",
        "You're so smart! 👏",
        "Wonderful learning! 🎉",
        "Keep going, superstar! ⭐",
        "Amazing work! 🎈",
        "You're the best! 💖"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showEncouragement(randomMessage);
    
    // Special celebration every 5 clicks
    if (celebrationCount % 5 === 0) {
        showBigCelebration();
    }
}

function showEncouragement(message) {
    const encouragement = document.createElement('div');
    encouragement.innerHTML = message;
    encouragement.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff69b4, #ff1493);
        color: white;
        padding: 20px 30px;
        border-radius: 20px;
        font-size: 1.5em;
        font-weight: bold;
        z-index: 1000;
        animation: popIn 0.5s ease-out;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(encouragement);
    
    setTimeout(() => {
        encouragement.style.animation = 'popOut 0.5s ease-in';
        setTimeout(() => {
            document.body.removeChild(encouragement);
        }, 500);
    }, 2000);
}

function showBigCelebration() {
    const celebration = document.createElement('div');
    celebration.innerHTML = `
        <div style="font-size: 3em;">🎉🎈🌟</div>
        <div style="font-size: 1.8em; margin: 10px 0;">Aarna is Amazing!</div>
        <div style="font-size: 1.2em;">You've learned so much! Keep going! 💖</div>
    `;
    celebration.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 105, 180, 0.9);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: bigCelebrate 3s ease-in-out;
        text-align: center;
    `;
    
    document.body.appendChild(celebration);
    
    // Speak encouragement
    setTimeout(() => speakToddler("Amazing job Aarna! You are so smart!"), 500);
    
    setTimeout(() => {
        document.body.removeChild(celebration);
    }, 3000);
}

// Show colors section
function showColors() {
    currentMode = 'colors';
    const learningArea = document.getElementById('learning-area');
    
    let colorsHTML = `
        <div class="toddler-section">
            <h2 style="text-align: center; color: #333; margin-bottom: 30px;">
                🌈 Beautiful Colors! 🌈
            </h2>
            <p style="text-align: center; font-size: 1.3em; color: #555; margin-bottom: 30px;">
                Click on each color to hear its name!
            </p>
            <div style="text-align: center;">
    `;
    
    colors.forEach(color => {
        colorsHTML += `
            <div class="color-circle" 
                 style="background: ${color.color};" 
                 onclick="learnColor('${color.name}', '${color.hindi}', '${color.telugu}', '${color.color}')">
                ${color.name}
            </div>
        `;
    });
    
    colorsHTML += `
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <button class="big-button" onclick="colorQuiz()" style="background: linear-gradient(45deg, #ff6b6b, #ee5a52);">
                    🎯 Color Game
                </button>
            </div>
        </div>
    `;
    
    learningArea.innerHTML = colorsHTML;
    
    // Welcome message
    setTimeout(() => {
        speakToddler("Let's learn beautiful colors, Aarna!");
    }, 500);
}

function learnColor(name, hindi, telugu, colorCode) {
    celebrate();
    
    // Create a big color display
    const colorDisplay = document.createElement('div');
    colorDisplay.innerHTML = `
        <div style="background: ${colorCode}; color: white; padding: 30px; border-radius: 20px; text-align: center; margin: 20px auto; max-width: 400px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
            <h3 style="font-size: 2.5em; margin-bottom: 15px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">${name}</h3>
            <p style="font-size: 1.4em; margin: 10px 0;">Hindi: ${hindi}</p>
            <p style="font-size: 1.4em; margin: 10px 0;">Telugu: ${telugu}</p>
        </div>
    `;
    
    // Insert after the main colors section
    const learningArea = document.getElementById('learning-area');
    const existingDisplay = learningArea.querySelector('.color-display');
    if (existingDisplay) {
        existingDisplay.remove();
    }
    
    colorDisplay.className = 'color-display fade-in';
    learningArea.appendChild(colorDisplay);
    
    // Speak the color name
    speakToddler(name);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (colorDisplay.parentNode) {
            colorDisplay.remove();
        }
    }, 3000);
}

// Show body parts section
function showBodyParts() {
    currentMode = 'bodyparts';
    const learningArea = document.getElementById('learning-area');
    
    let bodyHTML = `
        <div class="toddler-section">
            <h2 style="text-align: center; color: #333; margin-bottom: 30px;">
                👶 My Body Parts! 👶
            </h2>
            <p style="text-align: center; font-size: 1.3em; color: #555; margin-bottom: 30px;">
                Touch each body part to learn about it!
            </p>
            <div class="toddler-grid">
    `;
    
    bodyParts.forEach(part => {
        bodyHTML += `
            <div class="body-part" onclick="learnBodyPart('${part.name}', '${part.emoji}', '${part.hindi}', '${part.telugu}')">
                <div style="font-size: 2em; margin-bottom: 10px;">${part.emoji}</div>
                <div>${part.name}</div>
            </div>
        `;
    });
    
    bodyHTML += `
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <button class="big-button" onclick="bodyPartsGame()" style="background: linear-gradient(45deg, #4caf50, #8bc34a);">
                    🎮 Body Parts Game
                </button>
            </div>
        </div>
    `;
    
    learningArea.innerHTML = bodyHTML;
    
    // Welcome message
    setTimeout(() => {
        speakToddler("Let's learn about your body, Aarna!");
    }, 500);
}

function learnBodyPart(name, emoji, hindi, telugu) {
    celebrate();
    
    // Create interactive body part display
    const partDisplay = document.createElement('div');
    partDisplay.innerHTML = `
        <div style="background: linear-gradient(45deg, #ffeb3b, #ffc107); color: #333; padding: 30px; border-radius: 20px; text-align: center; margin: 20px auto; max-width: 400px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
            <div style="font-size: 4em; margin-bottom: 15px;">${emoji}</div>
            <h3 style="font-size: 2.2em; margin-bottom: 15px;">${name}</h3>
            <p style="font-size: 1.3em; margin: 10px 0;">Hindi: ${hindi}</p>
            <p style="font-size: 1.3em; margin: 10px 0;">Telugu: ${telugu}</p>
            <button onclick="speakToddler('${name}')" style="background: #4caf50; color: white; border: none; padding: 10px 20px; border-radius: 10px; font-size: 1.1em; margin-top: 10px; cursor: pointer;">
                🔊 Say Again
            </button>
        </div>
    `;
    
    const learningArea = document.getElementById('learning-area');
    const existingDisplay = learningArea.querySelector('.part-display');
    if (existingDisplay) {
        existingDisplay.remove();
    }
    
    partDisplay.className = 'part-display fade-in';
    learningArea.appendChild(partDisplay);
    
    // Speak the body part name
    speakToddler(name);
    
    // Remove after 4 seconds
    setTimeout(() => {
        if (partDisplay.parentNode) {
            partDisplay.remove();
        }
    }, 4000);
}

// Show animals section
function showAnimals() {
    currentMode = 'animals';
    const learningArea = document.getElementById('learning-area');
    
    let animalsHTML = `
        <div class="toddler-section">
            <h2 style="text-align: center; color: #333; margin-bottom: 30px;">
                🐶 Animal Friends! 🐱
            </h2>
            <p style="text-align: center; font-size: 1.3em; color: #555; margin-bottom: 30px;">
                Meet your animal friends and hear their sounds!
            </p>
            <div class="toddler-grid">
    `;
    
    animals.forEach(animal => {
        animalsHTML += `
            <div class="body-part" onclick="learnAnimal('${animal.name}', '${animal.emoji}', '${animal.sound}', '${animal.hindi}', '${animal.telugu}')" style="background: linear-gradient(45deg, #81c784, #a5d6a7);">
                <div style="font-size: 2.5em; margin-bottom: 10px;">${animal.emoji}</div>
                <div>${animal.name}</div>
                <div style="font-size: 0.9em; opacity: 0.8;">${animal.sound}!</div>
            </div>
        `;
    });
    
    animalsHTML += `
            </div>
        </div>
    `;
    
    learningArea.innerHTML = animalsHTML;
    
    // Welcome message
    setTimeout(() => {
        speakToddler("Let's meet your animal friends, Aarna!");
    }, 500);
}

function learnAnimal(name, emoji, sound, hindi, telugu) {
    celebrate();
    
    const animalDisplay = document.createElement('div');
    animalDisplay.innerHTML = `
        <div style="background: linear-gradient(45deg, #81c784, #a5d6a7); color: white; padding: 30px; border-radius: 20px; text-align: center; margin: 20px auto; max-width: 400px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
            <div style="font-size: 4em; margin-bottom: 15px;">${emoji}</div>
            <h3 style="font-size: 2.2em; margin-bottom: 15px;">${name}</h3>
            <p style="font-size: 1.5em; margin: 10px 0;">${name} says "${sound}!"</p>
            <p style="font-size: 1.2em; margin: 8px 0;">Hindi: ${hindi}</p>
            <p style="font-size: 1.2em; margin: 8px 0;">Telugu: ${telugu}</p>
            <div style="margin-top: 15px;">
                <button onclick="speakToddler('${name}')" style="background: #4caf50; color: white; border: none; padding: 10px 15px; border-radius: 8px; margin: 5px; cursor: pointer;">
                    🔊 Name
                </button>
                <button onclick="speakToddler('${sound}')" style="background: #ff9800; color: white; border: none; padding: 10px 15px; border-radius: 8px; margin: 5px; cursor: pointer;">
                    🔊 Sound
                </button>
            </div>
        </div>
    `;
    
    const learningArea = document.getElementById('learning-area');
    const existingDisplay = learningArea.querySelector('.animal-display');
    if (existingDisplay) {
        existingDisplay.remove();
    }
    
    animalDisplay.className = 'animal-display fade-in';
    learningArea.appendChild(animalDisplay);
    
    // Speak the animal name and sound
    speakToddler(`${name} says ${sound}`);
    
    setTimeout(() => {
        if (animalDisplay.parentNode) {
            animalDisplay.remove();
        }
    }, 4000);
}

// Simple color quiz for toddlers
function colorQuiz() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const learningArea = document.getElementById('learning-area');
    
    const quizHTML = `
        <div class="toddler-section">
            <h2 style="text-align: center; color: #333; margin-bottom: 30px;">
                🎯 Find the Color!
            </h2>
            <p style="text-align: center; font-size: 1.4em; color: #555; margin-bottom: 30px;">
                Can you find the <strong>${randomColor.name}</strong> color?
            </p>
            <div style="text-align: center;">
                ${colors.slice(0, 4).map(color => `
                    <div class="color-circle" 
                         style="background: ${color.color};" 
                         onclick="checkColorAnswer('${color.name}', '${randomColor.name}')">
                        ?
                    </div>
                `).join('')}
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <button class="big-button" onclick="showColors()">
                    🔙 Back to Colors
                </button>
            </div>
        </div>
    `;
    
    learningArea.innerHTML = quizHTML;
    
    // Speak the question
    setTimeout(() => {
        speakToddler(`Can you find the ${randomColor.name} color?`);
    }, 500);
}

function checkColorAnswer(selected, correct) {
    if (selected === correct) {
        celebrate();
        speakToddler(`Yes! That's ${correct}! Great job Aarna!`);
        setTimeout(() => {
            showColors();
        }, 2000);
    } else {
        speakToddler(`Try again! Look for ${correct}`);
    }
}

// Body parts game
function bodyPartsGame() {
    const randomPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
    const learningArea = document.getElementById('learning-area');
    
    const gameHTML = `
        <div class="toddler-section">
            <h2 style="text-align: center; color: #333; margin-bottom: 30px;">
                🎮 Touch Your ${randomPart.name}!
            </h2>
            <div style="text-align: center; font-size: 4em; margin: 30px 0;">
                ${randomPart.emoji}
            </div>
            <p style="text-align: center; font-size: 1.4em; color: #555; margin-bottom: 30px;">
                Can you touch your <strong>${randomPart.name}</strong>?
            </p>
            <div style="text-align: center;">
                <button class="big-button" onclick="celebrate(); speakToddler('Great job touching your ${randomPart.name}!'); setTimeout(() => bodyPartsGame(), 2000);">
                    ✋ I Touched It!
                </button>
                <button class="big-button" onclick="showBodyParts()">
                    🔙 Back to Body Parts
                </button>
            </div>
        </div>
    `;
    
    learningArea.innerHTML = gameHTML;
    
    // Speak the instruction
    setTimeout(() => {
        speakToddler(`Touch your ${randomPart.name}!`);
    }, 500);
}

// Add CSS animations
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes popIn {
            from {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
            to {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
        }
        
        @keyframes popOut {
            from {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            to {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
        }
        
        @keyframes bigCelebrate {
            0% {
                transform: scale(0);
                opacity: 0;
            }
            50% {
                transform: scale(1.1);
                opacity: 1;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Welcome message when page loads
    setTimeout(() => {
        speakToddler("Welcome to Aarna's special learning page!");
    }, 1000);
});

// Success sound function
function playSuccessSound() {
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
        const audioContext = new (AudioContext || webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    }
}