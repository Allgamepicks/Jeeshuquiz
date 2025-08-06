// Aarna's special learning content for toddlers - Enhanced Version
const colors = [
    { name: 'Red', color: '#ff4444', hindi: 'लाल', telugu: 'ఎరుపు', sound: 'red', emoji: '🍎', example: 'Apple' },
    { name: 'Blue', color: '#4444ff', hindi: 'नीला', telugu: 'నీలం', sound: 'blue', emoji: '🌊', example: 'Ocean' },
    { name: 'Yellow', color: '#ffdd44', hindi: 'पीला', telugu: 'పసుపు', sound: 'yellow', emoji: '🌞', example: 'Sun' },
    { name: 'Green', color: '#44ff44', hindi: 'हरा', telugu: 'ఆకుపచ్చ', sound: 'green', emoji: '🌳', example: 'Tree' },
    { name: 'Orange', color: '#ff8844', hindi: 'नारंगी', telugu: 'నారింజ', sound: 'orange', emoji: '🍊', example: 'Orange' },
    { name: 'Purple', color: '#8844ff', hindi: 'बैंगनी', telugu: 'ఊదా', sound: 'purple', emoji: '🍇', example: 'Grapes' },
    { name: 'Pink', color: '#ff44aa', hindi: 'गुलाबी', telugu: 'గులాబీ', sound: 'pink', emoji: '🌸', example: 'Flower' },
    { name: 'Brown', color: '#8b4513', hindi: 'भूरा', telugu: 'గోధుమ', sound: 'brown', emoji: '🐻', example: 'Bear' }
];

const bodyParts = [
    { name: 'Eyes', emoji: '👀', hindi: 'आँखें', telugu: 'కళ్ళు', sound: 'eyes', action: 'blink', fun: 'I can see you!' },
    { name: 'Nose', emoji: '👃', hindi: 'नाक', telugu: 'ముక్కు', sound: 'nose', action: 'smell', fun: 'Sniff sniff!' },
    { name: 'Mouth', emoji: '👄', hindi: 'मुंह', telugu: 'నోరు', sound: 'mouth', action: 'smile', fun: 'Say cheese!' },
    { name: 'Ears', emoji: '👂', hindi: 'कान', telugu: 'చెవులు', sound: 'ears', action: 'listen', fun: 'I can hear music!' },
    { name: 'Hands', emoji: '👐', hindi: 'हाथ', telugu: 'చేతులు', sound: 'hands', action: 'clap', fun: 'Clap clap clap!' },
    { name: 'Feet', emoji: '🦶', hindi: 'पैर', telugu: 'కాళ్ళు', sound: 'feet', action: 'dance', fun: 'Dance dance!' },
    { name: 'Head', emoji: '🗣️', hindi: 'सिर', telugu: 'తల', sound: 'head', action: 'nod', fun: 'Nod yes!' },
    { name: 'Hair', emoji: '💇‍♀️', hindi: 'बाल', telugu: 'జుట్టు', sound: 'hair', action: 'brush', fun: 'Brush brush!' }
];

const animals = [
    { name: 'Cat', emoji: '🐱', sound: 'meow meow', hindi: 'बिल्ली', telugu: 'పిల్లి', fun: 'Cats love milk!', action: 'purr' },
    { name: 'Dog', emoji: '🐶', sound: 'woof woof', hindi: 'कुत्ता', telugu: 'కుక్క', fun: 'Dogs wag their tails!', action: 'bark' },
    { name: 'Cow', emoji: '🐄', sound: 'moo moo', hindi: 'गाय', telugu: 'ఆవు', fun: 'Cows give us milk!', action: 'moo' },
    { name: 'Bird', emoji: '🐦', sound: 'tweet tweet', hindi: 'पक्षी', telugu: 'పక్షి', fun: 'Birds can fly high!', action: 'fly' },
    { name: 'Fish', emoji: '🐠', sound: 'blub blub', hindi: 'मछली', telugu: 'చేప', fun: 'Fish swim in water!', action: 'swim' },
    { name: 'Elephant', emoji: '🐘', sound: 'trumpet', hindi: 'हाथी', telugu: 'ఏనుగు', fun: 'Elephants are huge!', action: 'stomp' },
    { name: 'Lion', emoji: '🦁', sound: 'roar', hindi: 'शेर', telugu: 'సింహం', fun: 'Lions are brave!', action: 'roar' },
    { name: 'Monkey', emoji: '🐵', sound: 'ooh ooh', hindi: 'बंदर', telugu: 'కోతి', fun: 'Monkeys love bananas!', action: 'jump' }
];

const numbers = [
    { number: 1, hindi: 'एक', telugu: 'ఒకటి', emoji: '1️⃣', items: '🍎', name: 'One' },
    { number: 2, hindi: 'दो', telugu: 'రెండు', emoji: '2️⃣', items: '🍎🍎', name: 'Two' },
    { number: 3, hindi: 'तीन', telugu: 'మూడు', emoji: '3️⃣', items: '🍎🍎🍎', name: 'Three' },
    { number: 4, hindi: 'चार', telugu: 'నాలుగు', emoji: '4️⃣', items: '🍎🍎🍎🍎', name: 'Four' },
    { number: 5, hindi: 'पांच', telugu: 'అయిదు', emoji: '5️⃣', items: '🍎🍎🍎🍎🍎', name: 'Five' }
];

const shapes = [
    { name: 'Circle', emoji: '⭕', hindi: 'गोला', telugu: 'వృత్తం', example: '🌕 Moon', fun: 'Round and round!' },
    { name: 'Square', emoji: '⬜', hindi: 'वर्ग', telugu: 'చతురస్రం', example: '📦 Box', fun: 'Four equal sides!' },
    { name: 'Triangle', emoji: '🔺', hindi: 'त्रिकोण', telugu: 'త్రిభుజం', example: '🏔️ Mountain', fun: 'Three pointy corners!' },
    { name: 'Heart', emoji: '❤️', hindi: 'दिल', telugu: 'హృదయం', example: '💖 Love', fun: 'Full of love!' },
    { name: 'Star', emoji: '⭐', hindi: 'तारा', telugu: 'నక్షత్రం', example: '🌟 Twinkle', fun: 'Twinkle twinkle!' }
];

let currentMode = '';
let celebrationCount = 0;
let currentGameData = [];
let gameScore = 0;

// Enhanced text-to-speech for toddlers
function speakToddler(text, lang = 'en') {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.5; // Even slower for toddlers
        utterance.pitch = 1.4; // Higher pitch for kids
        utterance.volume = 0.9;
        
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

// Enhanced celebration with more variety
function celebrate() {
    celebrationCount++;
    
    // Visual celebration with sparkles
    createSparkles();
    
    // Audio celebration
    playSuccessSound();
    
    // Encouraging messages with more variety
    const messages = [
        "Wow Aarna! You're amazing! 🌟",
        "Super duper job! 🎉",
        "You're so smart, little star! ⭐",
        "Fantastic work, Aarna! 👏",
        "You make me so proud! 💖",
        "Brilliant, absolutely brilliant! 🎈",
        "You're learning so fast! 🚀",
        "What a clever girl! 🧠",
        "Outstanding, Aarna! 🏆",
        "You're the best learner ever! 🌈"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showEncouragement(randomMessage);
    
    // Special mega celebration every 7 clicks
    if (celebrationCount % 7 === 0) {
        showMegaCelebration();
    }
}

function createSparkles() {
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = ['✨', '🌟', '⭐', '💫', '🎉'][Math.floor(Math.random() * 5)];
        sparkle.style.cssText = `
            position: fixed;
            font-size: 2em;
            pointer-events: none;
            z-index: 1000;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            animation: sparkleFloat 2s ease-out forwards;
        `;
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
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
        background: linear-gradient(45deg, #ff69b4, #ff1493, #ff69b4);
        color: white;
        padding: 25px 35px;
        border-radius: 25px;
        font-size: 1.6em;
        font-weight: bold;
        z-index: 1000;
        animation: popInBig 0.6s ease-out;
        box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        text-align: center;
        border: 3px solid white;
    `;
    
    document.body.appendChild(encouragement);
    
    setTimeout(() => {
        encouragement.style.animation = 'popOutBig 0.6s ease-in';
        setTimeout(() => {
            if (encouragement.parentNode) {
                document.body.removeChild(encouragement);
            }
        }, 600);
    }, 2500);
}

function showMegaCelebration() {
    const celebration = document.createElement('div');
    celebration.innerHTML = `
        <div style="font-size: 4em; margin-bottom: 20px; animation: bounce 1s infinite;">🎉🎈🌟🎊🎉</div>
        <div style="font-size: 2.2em; margin: 15px 0; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
            AARNA IS A SUPERSTAR!
        </div>
        <div style="font-size: 1.5em; margin: 15px 0;">
            You've learned SO MUCH! 💖
        </div>
        <div style="font-size: 1.2em;">
            Keep being amazing, little genius! 🧠✨
        </div>
    `;
    celebration.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #ff69b4, #ff1493, #9c27b0, #673ab7);
        background-size: 400% 400%;
        animation: gradientShift 2s ease-in-out infinite;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        text-align: center;
    `;
    
    document.body.appendChild(celebration);
    
    // Create floating hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.cssText = `
                position: absolute;
                font-size: 2em;
                left: ${Math.random() * 100}%;
                animation: floatUp 3s ease-out forwards;
                pointer-events: none;
            `;
            celebration.appendChild(heart);
        }, i * 100);
    }
    
    // Speak mega encouragement
    setTimeout(() => speakToddler("Amazing job Aarna! You are the smartest, most wonderful little learner in the whole world!"), 500);
    
    setTimeout(() => {
        if (celebration.parentNode) {
            document.body.removeChild(celebration);
        }
    }, 4000);
}

// Enhanced color learning
function showColors() {
    currentMode = 'colors';
    const learningArea = document.getElementById('learning-area');
    
    let colorsHTML = `
        <div class="toddler-section">
            <h2 style="text-align: center; color: #333; margin-bottom: 30px; animation: bounce 2s infinite;">
                🌈 Magical Colors! 🌈
            </h2>
            <p style="text-align: center; font-size: 1.4em; color: #555; margin-bottom: 30px;">
                Click on each color to discover its magic! ✨
            </p>
            <div style="text-align: center;">
    `;
    
    colors.forEach(color => {
        colorsHTML += `
            <div class="color-circle" 
                 style="background: ${color.color}; position: relative; overflow: hidden;" 
                 onclick="learnColor('${color.name}', '${color.hindi}', '${color.telugu}', '${color.color}', '${color.emoji}', '${color.example}')">
                <div style="font-size: 1.5em; margin-bottom: 5px;">${color.emoji}</div>
                <div style="font-size: 1.1em; font-weight: bold;">${color.name}</div>
                <div style="font-size: 0.9em; opacity: 0.9;">${color.example}</div>
            </div>
        `;
    });
    
    colorsHTML += `
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <button class="big-button" onclick="colorMemoryGame()" style="background: linear-gradient(45deg, #ff6b6b, #ee5a52);">
                    🧠 Color Memory Game
                </button>
                <button class="big-button" onclick="colorMixingGame()" style="background: linear-gradient(45deg, #4ecdc4, #44a08d);">
                    🎨 Color Mixing Fun
                </button>
            </div>
        </div>
    `;
    
    learningArea.innerHTML = colorsHTML;
    
    // Welcome message with more enthusiasm
    setTimeout(() => {
        speakToddler("Welcome to the magical world of colors, Aarna! Let's explore together!");
    }, 500);
}

function learnColor(name, hindi, telugu, colorCode, emoji, example) {
    celebrate();
    
    // Create an enhanced color display with animations
    const colorDisplay = document.createElement('div');
    colorDisplay.innerHTML = `
        <div style="background: ${colorCode}; color: white; padding: 35px; border-radius: 25px; text-align: center; margin: 20px auto; max-width: 450px; box-shadow: 0 15px 40px rgba(0,0,0,0.4); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 10px; right: 10px; font-size: 2em; animation: bounce 1s infinite;">${emoji}</div>
            <h3 style="font-size: 3em; margin-bottom: 15px; text-shadow: 3px 3px 6px rgba(0,0,0,0.6); animation: pulse 2s infinite;">${name}</h3>
            <p style="font-size: 1.6em; margin: 15px 0;">Like a ${example}!</p>
            <p style="font-size: 1.3em; margin: 10px 0;">Hindi: ${hindi}</p>
            <p style="font-size: 1.3em; margin: 10px 0;">Telugu: ${telugu}</p>
            <div style="margin-top: 20px;">
                <button onclick="speakToddler('${name} like ${example}')" style="background: rgba(255,255,255,0.3); color: white; border: 2px solid white; padding: 12px 20px; border-radius: 15px; font-size: 1.1em; margin: 8px; cursor: pointer; font-weight: bold;">
                    🔊 Say Again
                </button>
                <button onclick="findColorGame('${name}', '${colorCode}')" style="background: rgba(255,255,255,0.3); color: white; border: 2px solid white; padding: 12px 20px; border-radius: 15px; font-size: 1.1em; margin: 8px; cursor: pointer; font-weight: bold;">
                    🎯 Find This Color
                </button>
            </div>
        </div>
    `;
    
    const learningArea = document.getElementById('learning-area');
    const existingDisplay = learningArea.querySelector('.color-display');
    if (existingDisplay) {
        existingDisplay.remove();
    }
    
    colorDisplay.className = 'color-display fade-in';
    learningArea.appendChild(colorDisplay);
    
    // Speak with more detail
    speakToddler(`${name}! Like a beautiful ${example}! In Hindi we say ${hindi}!`);
    
    // Remove after 5 seconds
    setTimeout(() => {
        if (colorDisplay.parentNode) {
            colorDisplay.remove();
        }
    }, 5000);
}

// Enhanced body parts learning
function showBodyParts() {
    currentMode = 'bodyparts';
    const learningArea = document.getElementById('learning-area');
    
    let bodyHTML = `
        <div class="toddler-section">
            <h2 style="text-align: center; color: #333; margin-bottom: 30px; animation: wiggle 2s infinite;">
                👶 Amazing Body Parts! 👶
            </h2>
            <p style="text-align: center; font-size: 1.4em; color: #555; margin-bottom: 30px;">
                Touch each body part and learn what it does! 🎯
            </p>
            <div class="toddler-grid">
    `;
    
    bodyParts.forEach(part => {
        bodyHTML += `
            <div class="body-part" onclick="learnBodyPart('${part.name}', '${part.emoji}', '${part.hindi}', '${part.telugu}', '${part.action}', '${part.fun}')" style="position: relative; overflow: hidden;">
                <div style="font-size: 2.5em; margin-bottom: 10px; animation: bounce 2s infinite;">${part.emoji}</div>
                <div style="font-size: 1.2em; font-weight: bold;">${part.name}</div>
                <div style="font-size: 0.9em; opacity: 0.8; margin-top: 5px;">${part.action}</div>
            </div>
        `;
    });
    
    bodyHTML += `
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <button class="big-button" onclick="bodyPartsSimonSays()" style="background: linear-gradient(45deg, #4caf50, #8bc34a);">
                    🎮 Simon Says Game
                </button>
                <button class="big-button" onclick="bodyPartsSong()" style="background: linear-gradient(45deg, #ff9800, #ffc107);">
                    🎵 Body Parts Song
                </button>
            </div>
        </div>
    `;
    
    learningArea.innerHTML = bodyHTML;
    
    // Welcome message
    setTimeout(() => {
        speakToddler("Let's explore your amazing body, Aarna! Each part is special!");
    }, 500);
}

function learnBodyPart(name, emoji, hindi, telugu, action, fun) {
    celebrate();
    
    // Create interactive body part display with action
    const partDisplay = document.createElement('div');
    partDisplay.innerHTML = `
        <div style="background: linear-gradient(45deg, #ffeb3b, #ffc107, #ff9800); color: #333; padding: 35px; border-radius: 25px; text-align: center; margin: 20px auto; max-width: 450px; box-shadow: 0 15px 40px rgba(0,0,0,0.4); position: relative;">
            <div style="font-size: 5em; margin-bottom: 15px; animation: ${action === 'blink' ? 'blink' : action === 'bounce' ? 'bounce' : 'pulse'} 1s infinite;">${emoji}</div>
            <h3 style="font-size: 2.5em; margin-bottom: 15px; animation: wiggle 2s infinite;">${name}</h3>
            <p style="font-size: 1.4em; margin: 15px 0; color: #d84315; font-weight: bold;">${fun}</p>
            <p style="font-size: 1.2em; margin: 10px 0;">Hindi: ${hindi}</p>
            <p style="font-size: 1.2em; margin: 10px 0;">Telugu: ${telugu}</p>
            <div style="margin-top: 20px;">
                <button onclick="speakToddler('${name}! ${fun}')" style="background: #4caf50; color: white; border: none; padding: 12px 20px; border-radius: 15px; font-size: 1.1em; margin: 8px; cursor: pointer; font-weight: bold;">
                    🔊 Say Again
                </button>
                <button onclick="doBodyAction('${action}', '${name}')" style="background: #2196f3; color: white; border: none; padding: 12px 20px; border-radius: 15px; font-size: 1.1em; margin: 8px; cursor: pointer; font-weight: bold;">
                    ✨ Do Action
                </button>
            </div>
        </div>
    `;
    
    const learningArea = document.getElementById('learning-area');
    const existingDisplay = learningArea.querySelector('.part-display');
    if (existingDisplay) {
        existingDisplay.remove();
    }
    
    partDisplay.className = 'part-display fade-in';
    learningArea.appendChild(partDisplay);
    
    // Speak with action
    speakToddler(`${name}! ${fun} Can you ${action} with your ${name}?`);
    
    // Remove after 6 seconds
    setTimeout(() => {
        if (partDisplay.parentNode) {
            partDisplay.remove();
        }
    }, 6000);
}

function doBodyAction(action, bodyPart) {
    const actions = {
        'blink': 'Blink your eyes like this! Blink blink!',
        'clap': 'Clap your hands! Clap clap clap!',
        'dance': 'Dance with your feet! Dance dance!',
        'nod': 'Nod your head yes! Nod nod!',
        'smile': 'Give me a big smile!',
        'smell': 'Sniff with your nose! Sniff sniff!',
        'listen': 'Listen with your ears! Can you hear?',
        'brush': 'Brush your hair! Brush brush!'
    };
    
    speakToddler(actions[action] || `Use your ${bodyPart}!`);
    celebrate();
}

// Enhanced animals section
function showAnimals() {
    currentMode = 'animals';
    const learningArea = document.getElementById('learning-area');
    
    let animalsHTML = `
        <div class="toddler-section">
            <h2 style="text-align: center; color: #333; margin-bottom: 30px; animation: bounce 2s infinite;">
                🐶 Amazing Animal Friends! 🐱
            </h2>
            <p style="text-align: center; font-size: 1.4em; color: #555; margin-bottom: 30px;">
                Meet your animal friends and learn their sounds! 🎵
            </p>
            <div class="toddler-grid">
    `;
    
    animals.forEach(animal => {
        animalsHTML += `
            <div class="body-part" onclick="learnAnimal('${animal.name}', '${animal.emoji}', '${animal.sound}', '${animal.hindi}', '${animal.telugu}', '${animal.fun}', '${animal.action}')" style="background: linear-gradient(45deg, #81c784, #a5d6a7); position: relative; overflow: hidden;">
                <div style="font-size: 3em; margin-bottom: 10px; animation: bounce 2s infinite;">${animal.emoji}</div>
                <div style="font-size: 1.2em; font-weight: bold;">${animal.name}</div>
                <div style="font-size: 0.9em; opacity: 0.9; margin-top: 5px;">${animal.sound}</div>
            </div>
        `;
    });
    
    animalsHTML += `
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <button class="big-button" onclick="animalSoundGame()" style="background: linear-gradient(45deg, #e91e63, #f06292);">
                    🔊 Animal Sound Quiz
                </button>
                <button class="big-button" onclick="animalDanceParty()" style="background: linear-gradient(45deg, #9c27b0, #ba68c8);">
                    💃 Animal Dance Party
                </button>
            </div>
        </div>
    `;
    
    learningArea.innerHTML = animalsHTML;
    
    // Welcome message
    setTimeout(() => {
        speakToddler("Welcome to the amazing animal kingdom, Aarna! Let's meet all your animal friends!");
    }, 500);
}

function learnAnimal(name, emoji, sound, hindi, telugu, fun, action) {
    celebrate();
    
    const animalDisplay = document.createElement('div');
    animalDisplay.innerHTML = `
        <div style="background: linear-gradient(45deg, #81c784, #a5d6a7, #4caf50); color: white; padding: 35px; border-radius: 25px; text-align: center; margin: 20px auto; max-width: 450px; box-shadow: 0 15px 40px rgba(0,0,0,0.4); position: relative;">
            <div style="font-size: 5em; margin-bottom: 15px; animation: ${action} 2s infinite;">${emoji}</div>
            <h3 style="font-size: 2.5em; margin-bottom: 15px; animation: pulse 2s infinite;">${name}</h3>
            <p style="font-size: 1.6em; margin: 15px 0; font-weight: bold;">${name} says "${sound}!"</p>
            <p style="font-size: 1.3em; margin: 10px 0; color: #e8f5e8;">${fun}</p>
            <p style="font-size: 1.1em; margin: 8px 0;">Hindi: ${hindi}</p>
            <p style="font-size: 1.1em; margin: 8px 0;">Telugu: ${telugu}</p>
            <div style="margin-top: 20px;">
                <button onclick="speakToddler('${name} says ${sound}')" style="background: #4caf50; color: white; border: none; padding: 12px 18px; border-radius: 12px; margin: 6px; cursor: pointer; font-weight: bold;">
                    🔊 Animal Sound
                </button>
                <button onclick="speakToddler('${fun}')" style="background: #ff9800; color: white; border: none; padding: 12px 18px; border-radius: 12px; margin: 6px; cursor: pointer; font-weight: bold;">
                    💡 Fun Fact
                </button>
                <button onclick="imitateAnimal('${name}', '${sound}', '${action}')" style="background: #e91e63; color: white; border: none; padding: 12px 18px; border-radius: 12px; margin: 6px; cursor: pointer; font-weight: bold;">
                    🎭 Imitate Me
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
    
    // Speak with more detail
    speakToddler(`Meet the ${name}! ${name} says ${sound}! ${fun}`);
    
    setTimeout(() => {
        if (animalDisplay.parentNode) {
            animalDisplay.remove();
        }
    }, 6000);
}

function imitateAnimal(name, sound, action) {
    const instructions = {
        'purr': `Can you purr like a cat? Say ${sound} and pretend to clean your paws!`,
        'bark': `Can you bark like a dog? Say ${sound} and wag your tail!`,
        'moo': `Can you moo like a cow? Say ${sound} and pretend to eat grass!`,
        'fly': `Can you fly like a bird? Say ${sound} and flap your wings!`,
        'swim': `Can you swim like a fish? Say ${sound} and move your arms like swimming!`,
        'stomp': `Can you stomp like an elephant? Say ${sound} and stomp your feet!`,
        'roar': `Can you roar like a lion? Say ${sound} and be brave!`,
        'jump': `Can you jump like a monkey? Say ${sound} and jump around!`
    };
    
    speakToddler(instructions[action] || `Can you be like a ${name}? Say ${sound}!`);
    celebrate();
}

// New interactive games
function colorMemoryGame() {
    const gameColors = colors.slice(0, 4);
    let sequence = [];
    let playerSequence = [];
    let level = 1;
    
    const learningArea = document.getElementById('learning-area');
    learningArea.innerHTML = `
        <div class="toddler-section">
            <h2 style="text-align: center; color: #333; margin-bottom: 20px;">
                🧠 Color Memory Game - Level ${level}
            </h2>
            <p style="text-align: center; font-size: 1.3em; color: #555; margin-bottom: 20px;">
                Watch the colors light up, then repeat the pattern!
            </p>
            <div id="memory-colors" style="text-align: center; margin: 30px 0;">
                ${gameColors.map((color, index) => `
                    <div class="color-circle" id="memory-${index}"
                         style="background: ${color.color}; margin: 10px; cursor: pointer;"
                         onclick="playerColorClick(${index})">
                        ${color.emoji}<br>${color.name}
                    </div>
                `).join('')}
            </div>
            <div style="text-align: center;">
                <button class="big-button" onclick="startMemorySequence()">
                    ▶️ Start Game
                </button>
                <button class="big-button" onclick="showColors()">
                    🔙 Back to Colors
                </button>
            </div>
            <div id="memory-feedback" style="text-align: center; margin-top: 20px; font-size: 1.3em; font-weight: bold;"></div>
        </div>
    `;
    
    window.startMemorySequence = function() {
        sequence = [Math.floor(Math.random() * 4)];
        playerSequence = [];
        playSequence();
    };
    
    window.playSequence = function() {
        let i = 0;
        const interval = setInterval(() => {
            if (i < sequence.length) {
                flashColor(sequence[i]);
                i++;
            } else {
                clearInterval(interval);
                document.getElementById('memory-feedback').innerHTML = 'Now repeat the pattern!';
                speakToddler('Now you try! Click the colors in the same order!');
            }
        }, 800);
    };
    
    window.flashColor = function(colorIndex) {
        const colorElement = document.getElementById(`memory-${colorIndex}`);
        colorElement.style.transform = 'scale(1.2)';
        colorElement.style.boxShadow = '0 0 30px rgba(255,255,255,0.8)';
        speakToddler(gameColors[colorIndex].name);
        
        setTimeout(() => {
            colorElement.style.transform = 'scale(1)';
            colorElement.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
        }, 400);
    };
    
    window.playerColorClick = function(colorIndex) {
        if (playerSequence.length >= sequence.length) return;
        
        playerSequence.push(colorIndex);
        flashColor(colorIndex);
        
        if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
            document.getElementById('memory-feedback').innerHTML = '❌ Oops! Try again!';
            speakToddler('Oops! Let\'s try again, Aarna!');
            setTimeout(() => {
                playerSequence = [];
                playSequence();
            }, 1500);
        } else if (playerSequence.length === sequence.length) {
            celebrate();
            document.getElementById('memory-feedback').innerHTML = '🎉 Perfect! You did it!';
            speakToddler('Perfect! You have an amazing memory, Aarna!');
            setTimeout(() => {
                level++;
                sequence.push(Math.floor(Math.random() * 4));
                playerSequence = [];
                document.querySelector('h2').innerHTML = `🧠 Color Memory Game - Level ${level}`;
                playSequence();
            }, 2000);
        }
    };
    
    speakToddler('Welcome to the color memory game! Watch carefully and remember the pattern!');
}

function animalSoundGame() {
    const gameAnimals = animals.slice(0, 6);
    let currentAnimal = 0;
    gameScore = 0;
    
    const learningArea = document.getElementById('learning-area');
    
    function showSoundQuestion() {
        if (currentAnimal >= gameAnimals.length) {
            showSoundGameResults();
            return;
        }
        
        const animal = gameAnimals[currentAnimal];
        const wrongAnimals = gameAnimals.filter(a => a.name !== animal.name).slice(0, 2);
        const options = [animal, ...wrongAnimals].sort(() => Math.random() - 0.5);
        
        learningArea.innerHTML = `
            <div class="toddler-section">
                <h2 style="text-align: center; color: #333; margin-bottom: 20px;">
                    🔊 Animal Sound Quiz
                </h2>
                <p style="text-align: center; font-size: 1.4em; color: #555; margin-bottom: 20px;">
                    Which animal makes this sound?
                </p>
                <div style="text-align: center; margin: 30px 0;">
                    <div style="font-size: 4em; margin: 20px 0; animation: bounce 1s infinite;">${animal.emoji}</div>
                    <div style="font-size: 2em; margin: 20px 0; color: #4caf50; font-weight: bold;">"${animal.sound}"</div>
                    <button class="big-button" onclick="speakToddler('${animal.sound}')" style="background: linear-gradient(45deg, #2196f3, #64b5f6);">
                        🔊 Hear Again
                    </button>
                </div>
                <div class="toddler-grid" style="max-width: 600px; margin: 0 auto;">
                    ${options.map(option => `
                        <div class="body-part" onclick="checkSoundAnswer('${option.name}', '${animal.name}')" style="background: linear-gradient(45deg, #81c784, #a5d6a7);">
                            <div style="font-size: 2.5em; margin-bottom: 10px;">${option.emoji}</div>
                            <div style="font-size: 1.2em; font-weight: bold;">${option.name}</div>
                        </div>
                    `).join('')}
                </div>
                <div id="sound-feedback" style="text-align: center; margin-top: 20px; font-size: 1.3em; font-weight: bold;"></div>
                <p style="text-align: center; margin-top: 15px; color: #666;">
                    Question ${currentAnimal + 1} of ${gameAnimals.length}
                </p>
            </div>
        `;
        
        speakToddler(`Which animal says ${animal.sound}?`);
    }
    
    window.checkSoundAnswer = function(selected, correct) {
        const feedback = document.getElementById('sound-feedback');
        if (selected === correct) {
            gameScore++;
            feedback.innerHTML = '🎉 Correct! Well done!';
            celebrate();
            speakToddler(`Yes! ${correct} says that sound! Great job!`);
        } else {
            feedback.innerHTML = `❌ Good try! It was ${correct}!`;
            speakToddler(`Good try! The correct answer is ${correct}!`);
        }
        
        setTimeout(() => {
            currentAnimal++;
            showSoundQuestion();
        }, 2500);
    };
    
    function showSoundGameResults() {
        const percentage = Math.round((gameScore / gameAnimals.length) * 100);
        let message = '';
        
        if (percentage >= 80) {
            message = 'You know your animal sounds perfectly! 🌟';
        } else if (percentage >= 60) {
            message = 'Great job learning animal sounds! 👏';
        } else {
            message = 'Keep practicing - you\'re getting better! 💪';
        }
        
        learningArea.innerHTML = `
            <div class="toddler-section">
                <h2 style="text-align: center; color: #333; margin-bottom: 20px;">
                    🏆 Animal Sound Quiz Complete!
                </h2>
                <div style="text-align: center; font-size: 4em; margin: 20px 0; animation: bounce 1s infinite;">
                    🎉
                </div>
                <p style="text-align: center; font-size: 1.5em; margin: 15px 0;">
                    You got ${gameScore} out of ${gameAnimals.length} correct!
                </p>
                <p style="text-align: center; font-size: 1.3em; margin: 15px 0; color: #4caf50;">
                    ${message}
                </p>
                <div style="text-align: center; margin-top: 30px;">
                    <button class="big-button" onclick="animalSoundGame()">
                        🔄 Play Again
                    </button>
                    <button class="big-button" onclick="showAnimals()">
                        🔙 Back to Animals
                    </button>
                </div>
            </div>
        `;
        
        speakToddler(`Wonderful job, Aarna! You got ${gameScore} out of ${gameAnimals.length} animal sounds correct! ${message}`);
    }
    
    showSoundQuestion();
}

// Add new learning modes
function showNumbers() {
    currentMode = 'numbers';
    const learningArea = document.getElementById('learning-area');
    
    let numbersHTML = `
        <div class="toddler-section">
            <h2 style="text-align: center; color: #333; margin-bottom: 30px; animation: bounce 2s infinite;">
                🔢 Fun with Numbers! 🔢
            </h2>
            <p style="text-align: center; font-size: 1.4em; color: #555; margin-bottom: 30px;">
                Let's count together and learn numbers!
            </p>
            <div class="toddler-grid">
    `;
    
    numbers.forEach(num => {
        numbersHTML += `
            <div class="body-part" onclick="learnNumber(${num.number}, '${num.hindi}', '${num.telugu}', '${num.items}', '${num.name}')" style="background: linear-gradient(45deg, #ff9800, #ffc107);">
                <div style="font-size: 3em; margin-bottom: 10px; animation: pulse 2s infinite;">${num.emoji}</div>
                <div style="font-size: 1.5em; font-weight: bold;">${num.number}</div>
                <div style="font-size: 1em; margin-top: 5px;">${num.items}</div>
            </div>
        `;
    });
    
    numbersHTML += `
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <button class="big-button" onclick="countingGame()" style="background: linear-gradient(45deg, #9c27b0, #ba68c8);">
                    🎯 Counting Game
                </button>
            </div>
        </div>
    `;
    
    learningArea.innerHTML = numbersHTML;
    
    setTimeout(() => {
        speakToddler("Let's learn numbers together, Aarna! Numbers are everywhere!");
    }, 500);
}

function learnNumber(number, hindi, telugu, items, name) {
    celebrate();
    
    const numberDisplay = document.createElement('div');
    numberDisplay.innerHTML = `
        <div style="background: linear-gradient(45deg, #ff9800, #ffc107, #ffeb3b); color: #333; padding: 35px; border-radius: 25px; text-align: center; margin: 20px auto; max-width: 450px; box-shadow: 0 15px 40px rgba(0,0,0,0.4);">
            <h3 style="font-size: 4em; margin-bottom: 15px; animation: bounce 1s infinite;">${number}</h3>
            <p style="font-size: 2em; margin: 15px 0;">${name}</p>
            <p style="font-size: 1.8em; margin: 15px 0;">${items}</p>
            <p style="font-size: 1.2em; margin: 10px 0;">Hindi: ${hindi}</p>
            <p style="font-size: 1.2em; margin: 10px 0;">Telugu: ${telugu}</p>
            <div style="margin-top: 20px;">
                <button onclick="countWithMe(${number}, '${name}')" style="background: #4caf50; color: white; border: none; padding: 12px 20px; border-radius: 15px; font-size: 1.1em; margin: 8px; cursor: pointer; font-weight: bold;">
                    🔢 Count With Me
                </button>
            </div>
        </div>
    `;
    
    const learningArea = document.getElementById('learning-area');
    const existingDisplay = learningArea.querySelector('.number-display');
    if (existingDisplay) {
        existingDisplay.remove();
    }
    
    numberDisplay.className = 'number-display fade-in';
    learningArea.appendChild(numberDisplay);
    
    speakToddler(`${name}! That's ${number}! In Hindi we say ${hindi}!`);
    
    setTimeout(() => {
        if (numberDisplay.parentNode) {
            numberDisplay.remove();
        }
    }, 5000);
}

function countWithMe(targetNumber, name) {
    let count = 1;
    const countInterval = setInterval(() => {
        speakToddler(count.toString());
        if (count >= targetNumber) {
            clearInterval(countInterval);
            setTimeout(() => {
                speakToddler(`We counted to ${name}! Great job counting with me, Aarna!`);
                celebrate();
            }, 500);
        }
        count++;
    }, 800);
}

// Enhanced CSS animations
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes popInBig {
            from {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
            to {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
        }
        
        @keyframes popOutBig {
            from {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            to {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
        }
        
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes floatUp {
            0% {
                transform: translateY(100vh);
                opacity: 1;
            }
            100% {
                transform: translateY(-100px);
                opacity: 0;
            }
        }
        
        @keyframes wiggle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        @keyframes blink {
            0%, 90%, 100% { opacity: 1; }
            95% { opacity: 0.1; }
        }
        
        .color-circle:hover {
            transform: scale(1.15) !important;
            box-shadow: 0 15px 40px rgba(0,0,0,0.4) !important;
        }
        
        .body-part:hover {
            transform: scale(1.08) !important;
        }
        
        .big-button:hover {
            transform: translateY(-8px) scale(1.08) !important;
            box-shadow: 0 15px 40px rgba(0,0,0,0.4) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Enhanced welcome message when page loads
    setTimeout(() => {
        speakToddler("Welcome to Aarna's magical learning world! Get ready for amazing adventures!");
        showWelcomeAnimation();
    }, 1000);
});

function showWelcomeAnimation() {
    const welcome = document.createElement('div');
    welcome.innerHTML = `
        <div style="font-size: 3em; animation: bounce 1s infinite;">🎈✨🌟✨🎈</div>
        <div style="font-size: 1.8em; margin: 15px 0; color: white;">
            Ready to learn and have fun?
        </div>
    `;
    welcome.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(45deg, #ff69b4, #ff1493);
        color: white;
        padding: 20px 30px;
        border-radius: 20px;
        z-index: 1000;
        text-align: center;
        animation: slideDown 0.8s ease-out;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(welcome);
    
    setTimeout(() => {
        welcome.style.animation = 'slideUp 0.8s ease-in';
        setTimeout(() => {
            if (welcome.parentNode) {
                document.body.removeChild(welcome);
            }
        }, 800);
    }, 3000);
}

// Success sound function (enhanced)
function playSuccessSound() {
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
        const audioContext = new (AudioContext || webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Create a more pleasant melody
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
        oscillator.frequency.setValueAtTime(1046.50, audioContext.currentTime + 0.3); // C6
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    }
}

// Add slide animations
const slideStyle = document.createElement('style');
slideStyle.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100px);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(slideStyle);