// Main JavaScript file for shared functionality

// Add welcome animation
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to main elements
    const elements = document.querySelectorAll('header, main, section');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Add click sound effect (optional)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a subtle click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Add motivational messages
    const motivationalMessages = [
        "🌟 Great job exploring!",
        "🎯 You're doing amazing!",
        "🚀 Keep up the excellent work!",
        "💪 Learning makes you stronger!",
        "🧠 Your brain is growing!",
        "⭐ Every question makes you smarter!"
    ];

    // Function to show random motivational message
    window.showMotivation = function() {
        const message = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        
        // Create temporary message element
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #4caf50, #8bc34a);
            color: white;
            padding: 15px 20px;
            border-radius: 25px;
            font-weight: bold;
            z-index: 1000;
            animation: slideIn 0.5s ease-out;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        `;
        
        document.body.appendChild(messageDiv);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            messageDiv.style.animation = 'slideOut 0.5s ease-in';
            setTimeout(() => {
                document.body.removeChild(messageDiv);
            }, 500);
        }, 3000);
    };

    // Add CSS animations for motivational messages
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Utility functions for all pages
window.playSuccessSound = function() {
    // Create a simple success sound using Web Audio API
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
};

// Function to save progress (could be extended to use localStorage)
window.saveProgress = function(subject, score, total) {
    const progress = {
        subject: subject,
        score: score,
        total: total,
        percentage: Math.round((score / total) * 100),
        date: new Date().toLocaleDateString()
    };
    
    // Save to localStorage
    let allProgress = JSON.parse(localStorage.getItem('kidLearningProgress') || '[]');
    allProgress.push(progress);
    
    // Keep only last 50 entries
    if (allProgress.length > 50) {
        allProgress = allProgress.slice(-50);
    }
    
    localStorage.setItem('kidLearningProgress', JSON.stringify(allProgress));
};

// Function to get progress summary
window.getProgressSummary = function() {
    const progress = JSON.parse(localStorage.getItem('kidLearningProgress') || '[]');
    const summary = {
        totalQuizzes: progress.length,
        averageScore: 0,
        bestSubject: '',
        recentActivity: progress.slice(-5)
    };
    
    if (progress.length > 0) {
        const totalPercentage = progress.reduce((sum, p) => sum + p.percentage, 0);
        summary.averageScore = Math.round(totalPercentage / progress.length);
        
        // Find best subject
        const subjectScores = {};
        progress.forEach(p => {
            if (!subjectScores[p.subject]) {
                subjectScores[p.subject] = [];
            }
            subjectScores[p.subject].push(p.percentage);
        });
        
        let bestAverage = 0;
        Object.keys(subjectScores).forEach(subject => {
            const average = subjectScores[subject].reduce((a, b) => a + b, 0) / subjectScores[subject].length;
            if (average > bestAverage) {
                bestAverage = average;
                summary.bestSubject = subject;
            }
        });
    }
    
    return summary;
};

console.log('🌟 Kid\'s Learning Hub loaded successfully! Have fun learning! 🎉');