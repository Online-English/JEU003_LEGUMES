// --- BASE DE DONNÉES CONSOLIDÉE (60 Légumes sur 3 Niveaux) ---
const fruitsData = [ // On garde le nom "fruitsData" pour que relay.js fonctionne sans modification
    // NIVEAU 1 (20 légumes de base - Accessible immédiatement)
    { en: "Carrot", fr: "Carotte", emoji: "🥕", level: 1 },
    { en: "Tomato", fr: "Tomate", emoji: "🍅", level: 1 },
    { en: "Potato", fr: "Pomme de terre", emoji: "🥔", level: 1 },
    { en: "Cucumber", fr: "Concombre", emoji: "🥒", level: 1 },
    { en: "Lettuce", fr: "Laitue", emoji: "🥬", level: 1 },
    { en: "Onion", fr: "Oignon", emoji: "🧅", level: 1 },
    { en: "Garlic", fr: "Ail", emoji: "🧄", level: 1 },
    { en: "Broccoli", fr: "Brocoli", emoji: "🥦", level: 1 },
    { en: "Corn", fr: "Maïs", emoji: "🌽", level: 1 },
    { en: "Peas", fr: "Petits pois", emoji: "🫛", level: 1 },
    { en: "Bell pepper", fr: "Poivron", emoji: "🫑", level: 1 },
    { en: "Mushroom", fr: "Champignon", emoji: "🍄", level: 1 },
    { en: "Eggplant", fr: "Aubergine", emoji: "🍆", level: 1 },
    { en: "Zucchini", fr: "Courgette", emoji: "🥒", level: 1 },
    { en: "Pumpkin", fr: "Citrouille", emoji: "🎃", level: 1 },
    { en: "Leek", fr: "Poireau", emoji: "🥬", level: 1 },
    { en: "Radish", fr: "Radis", emoji: "🔴", level: 1 },
    { en: "Spinach", fr: "Épinard", emoji: "🌿", level: 1 },
    { en: "Asparagus", fr: "Asperge", emoji: "🌿", level: 1 },
    { en: "Celery", fr: "Céleri", emoji: "🌿", level: 1 },

    // NIVEAU 2 (20 légumes intermédiaires - Débloqué au Niveau joueur 5)
    { en: "Cauliflower", fr: "Chou-fleur", emoji: "🥦", level: 2 },
    { en: "Ginger", fr: "Gingembre", emoji: "🫚", level: 2 },
    { en: "Chili pepper", fr: "Piment", emoji: "🌶️", level: 2 },
    { en: "Beetroot", fr: "Betterave", emoji: "🔴", level: 2 },
    { en: "Turnip", fr: "Navet", emoji: "🍠", level: 2 },
    { en: "Artichoke", fr: "Artichaut", emoji: "🟢", level: 2 },
    { en: "Green bean", fr: "Haricot vert", emoji: "🫛", level: 2 },
    { en: "Sweet potato", fr: "Patate douce", emoji: "🍠", level: 2 },
    { en: "Shallot", fr: "Échalote", emoji: "🧅", level: 2 },
    { en: "Fennel", fr: "Fenouil", emoji: "🌿", level: 2 },
    { en: "Cabbage", fr: "Chou", emoji: "🥬", level: 2 },
    { en: "Brussels sprout", fr: "Chou de Bruxelles", emoji: "🟢", level: 2 },
    { en: "Endive", fr: "Endive", emoji: "🥬", level: 2 },
    { en: "Butternut squash", fr: "Courge butternut", emoji: "🎃", level: 2 },
    { en: "Watercress", fr: "Cresson", emoji: "🌿", level: 2 },
    { en: "Kale", fr: "Chou frisé", emoji: "🥬", level: 2 },
    { en: "Parsnip", fr: "Panais",emoji:  "🥕", level: 2 },
    { en: "Radicchio", fr: "Chicorée italienne", emoji: "🟣", level: 2 },
    { en: "Chickpea", fr: "Pois chiche", emoji: "🟤", level: 2 },
    { en: "Lentil", fr: "Lentille", emoji: "🟤", level: 2 },

    // NIVEAU 3 (20 légumes avancés/exotiques - Débloqué au Niveau joueur 10)
    { en: "Bamboo shoot", fr: "Pousse de bambou", emoji: "🎍", level: 3 },
    { en: "Yam", fr: "Igname", emoji: "🍠", level: 3 },
    { en: "Taro", fr: "Taro", emoji: "🟤", level: 3 },
    { en: "Cassava", fr: "Manioc", emoji: "🟤", level: 3 },
    { en: "Bok choy", fr: "Chou chinois", emoji: "🥬", level: 3 },
    { en: "Kohlrabi", fr: "Chou-rave", emoji: "🟢", level: 3 },
    { en: "Horseradish", fr: "Raifort", emoji: "🥕", level: 3 },
    { en: "Rutabaga", fr: "Rutabaga", emoji: "🍠", level: 3 },
    { en: "Swiss chard", fr: "Blette", emoji: "🥬", level: 3 },
    { en: "Jerusalem artichoke", fr: "Topinambour", emoji: "🟤", level: 3 },
    { en: "Lotus root", fr: "Racine de lotus", emoji: "🟤", level: 3 },
    { en: "Capers", fr: "Câpres", emoji: "🟢", level: 3 },
    { en: "Gherkin", fr: "Cornichon", emoji: "🥒", level: 3 },
    { en: "Sorrel", fr: "Oseille", emoji: "🌿", level: 3 },
    { en: "Truffle", fr: "Truffe", emoji: "🟤", level: 3 },
    { en: "Arugula", fr: "Roquette", emoji: "🌿", level: 3 },
    { en: "Okra", fr: "Gombo", emoji: "🟢", level: 3 },
    { en: "Bean sprout", fr: "Pousse de soja", emoji: "🌱", level: 3 },
    { en: "Spaghetti squash", fr: "Courge spaghetti", emoji: "🎃", level: 3 },
    { en: "Water chestnut", fr: "Châtaigne d'eau", emoji: "🟤", level: 3 }
];

// --- ÉTATS GÉNÉRAUX & STATISTIQUES ---
let currentStreak = 0, maxStreak = 0, totalPoints = 0;
let highScores = { quiz: 0, speak: 0, timeattack: 0 };
let favoriteFruits = [];
let errorHistory = []; 
let unlockedBadges = []; 
let audioSpeed = 1.0;
let filterOnlyFavs = false;
let searchDirection = 'EN_FR'; 
let selectedVocabularyLevel = 1; 

// --- CONFIGURATION DES BADGES ---
const badgesDatabase = [
    { id: "first_perfect", title: "Sans Faute !", desc: "Faire un 10/10 en QCM ou Writing", icon: "🏅", color: "bg-yellow-500" },
    { id: "streak_15", title: "Inarrêtable", desc: "Atteindre une série de 15 bonnes réponses", icon: "🔥", color: "bg-orange-500" },
    { id: "time_20", title: "Chasseur de Chrono", desc: "Marquer 20 points en Time Attack", icon: "⚡", color: "bg-cyan-500" },
    { id: "polyglotte", title: "Potager Étendu", desc: "Débloquer le niveau 2 des légumes", icon: "🥦", color: "bg-purple-500" }
];

// --- ALGORITHME DE RÉPÉTITION ESPACÉE ---
function getNextExerciseWord() {
    const currentLevelWords = fruitsData.filter(f => f.level === parseInt(selectedVocabularyLevel));
    const currentLevelErrors = errorHistory.filter(err => err.level === parseInt(selectedVocabularyLevel));

    if (currentLevelErrors.length > 0 && Math.random() < 0.35) {
        return currentLevelErrors[Math.floor(Math.random() * currentLevelErrors.length)];
    }
    return currentLevelWords[Math.floor(Math.random() * currentLevelWords.length)];
}

// --- LOGIQUE DES BADGES ---
function checkAndUnlockBadge(badgeId) {
    if (!unlockedBadges.includes(badgeId)) {
        unlockedBadges.push(badgeId);
        localStorage.setItem('oel_unlocked_badges', JSON.stringify(unlockedBadges));
        triggerConfetti();
        if(typeof renderBadgesUI === 'function') renderBadgesUI();
    }
}

// --- MODULE AUDIO ---
function playAudio(text) {
    const encodedText = encodeURIComponent(text.toLowerCase());
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encodedText}`;
    const audio = new Audio(audioUrl);
    audio.playbackRate = audioSpeed;
    audio.play().catch(() => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = audioSpeed;
            window.speechSynthesis.speak(utterance);
        }
    });
}

function playSoundEffect(type) {
    if (!window.AudioContext && !window.webkitAudioContext) return;
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'success') {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start(); osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'fail') {
        osc.frequency.setValueAtTime(196.00, ctx.currentTime);
        osc.frequency.setValueAtTime(146.83, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc.start(); osc.stop(ctx.currentTime + 0.4);
    }
}

function triggerConfetti() {
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = ['#F58634', '#52B788', '#1C3D5A', '#FFD166'][Math.floor(Math.random() * 4)];
        confetti.style.transform = `scale(${Math.random() * 0.8 + 0.5})`;
        confetti.style.animationDelay = Math.random() * 1.2 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}

// --- CARNET DE RÉVISIONS ---
function registerError(fruitObj) {
    if (!errorHistory.some(f => f.en === fruitObj.en)) {
        errorHistory.push(fruitObj);
        localStorage.setItem('oel_error_history', JSON.stringify(errorHistory));
    }
}

function removeError(englishName) {
    errorHistory = errorHistory.filter(f => f.en !== englishName);
    localStorage.setItem('oel_error_history', JSON.stringify(errorHistory));
}

// --- GESTION DE LA PROGRESSION ---
function getUserPlayerLevel() {
    return Math.floor(totalPoints / 150) + 1;
}

function updateLevelAndTitle() {
    const pLevel = getUserPlayerLevel();
    document.getElementById('user-level').innerText = pLevel;

    let title = "Novice des Légumes";
    if (pLevel >= 2) title = "Apprenti Jardinier";
    if (pLevel >= 3) title = "Maraîcher Connaisseur";
    if (pLevel >= 5) {
        title = "Expert en Botanique";
        checkAndUnlockBadge("polyglotte");
    }
    if (pLevel >= 10) title = "Maître Potager";

    document.getElementById('user-title').innerText = title;
    if(typeof updateLevelLockUI === 'function') updateLevelLockUI();
}

// --- PERSISTENCE (Clés oel_ spécifiques aux Légumes) ---
function saveStats() {
    localStorage.setItem('oel_total_points', totalPoints);
    localStorage.setItem('oel_high_quiz', highScores.quiz);
    localStorage.setItem('oel_high_speak', highScores.speak);
    localStorage.setItem('oel_high_timeattack', highScores.timeattack);
    localStorage.setItem('oel_max_streak', maxStreak);
}

function loadStats() {
    totalPoints = parseInt(localStorage.getItem('oel_total_points')) || 0;
    highScores.quiz = parseInt(localStorage.getItem('oel_high_quiz')) || 0;
    highScores.speak = parseInt(localStorage.getItem('oel_high_speak')) || 0;
    highScores.timeattack = parseInt(localStorage.getItem('oel_high_timeattack')) || 0;
    maxStreak = parseInt(localStorage.getItem('oel_max_streak')) || 0;
    favoriteFruits = JSON.parse(localStorage.getItem('oel_fav_fruits')) || [];
    errorHistory = JSON.parse(localStorage.getItem('oel_error_history')) || [];
    unlockedBadges = JSON.parse(localStorage.getItem('oel_unlocked_badges')) || [];
    
    if (localStorage.getItem('oel_dark_mode') === 'true') {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-icon').className = "fa-solid fa-sun text-yellow-300";
    }

    document.getElementById('total-points').innerText = totalPoints;
    updateLevelAndTitle();
}