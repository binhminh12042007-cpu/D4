// ====== Gene System & Scores ======
const geneSystem = {
  chronotype: { start: 5, high: "M", low: "N", gene: "PER2 / PER3 / CRY1" },
  cortisol: { start: 5, high: "R", low: "S", gene: "NR3C1 / HPA axis" },
  dopamine: { start: 5, high: "D", low: "B", gene: "DRD4" },
  learning: { start: 5, high: "I", low: "A", gene: "Neural integration" },
  eating: { start: 5, high: "R", low: "C", gene: "Cortisol–Ghrelin–Leptin" }
};

let scores = {
  chronotype: 5,
  cortisol: 5,
  dopamine: 5,
  learning: 5,
  eating: 5
};

// ====== Quiz Data ======
const quizData = [
  { category: "chronotype", question: "On a weekend, you unexpectedly have 4 hours free. How do you spend them?", options: [{ text: "Nap and leave tasks for later evening.", score: -1 }, { text: "Stay up late into the night working on hobbies.", score: -1 }, { text: "Exercise, read, or tackle personal projects in the morning.", score: 1 }, { text: "Do a mix of light tasks and relaxing activities.", score: 1 }] },
  { category: "learning", question: "During a lecture, you:", options: [{ text: "Focus on slides and visuals.", score: 1 }, { text: "Listen carefully and take notes.", score: -1 }, { text: "Try to act out concepts in your head.", score: 1 }, { text: "Glance at slides but mostly reflect silently.", score: -1 }] },
  { category: "eating", question: "You're working on a project under high pressure. You suddenly feel hungry. How do you respond?", options: [{ text: "Anything within reach—cookies, chips, fast food—is fair game.", score: 1 }, { text: "I choose yogurt or fruit.", score: -1 }, { text: "I ignore hunger until the project is done.", score: -1 }, { text: "I plan a proper meal later and keep busy for now.", score: -1 }] },
  { category: "cortisol", question: "During a traffic jam, your reaction is:", options: [{ text: "Relax", score: -1 }, { text: "Angry, honk or complain internally.", score: 1 }, { text: "Check watch constantly.", score: 1 }, { text: "Mild frustration", score: -1 }] },
  { category: "dopamine", question: "How do you respond to repetitive tasks at work/school?", options: [{ text: "Quickly bored, seek ways to make it exciting.", score: 1 }, { text: "Complete methodically, no rush.", score: -1 }, { text: "Try to multitask or switch between small tasks.", score: 1 }, { text: "Stick to instructions, keep calm.", score: -1 }] },
  { category: "chronotype", question: "It's Saturday morning. You wake up naturally. What do you do first?", options: [{ text: "Jump out of bed and start working.", score: 1 }, { text: "Make coffee and get moving.", score: 1 }, { text: "Hit snooze and wake up late.", score: -1 }, { text: "Stay in bed thinking until noon.", score: -1 }] },
  { category: "eating", question: "When preparing for exams or a big presentation, how does stress affect your meals?", options: [{ text: "I end up bingeing on comfort foods like pizza or ice cream.", score: 1 }, { text: "I stick to my normal meals without change.", score: -1 }, { text: "I tend to skip meals or eat very little.", score: -1 }, { text: "I snack occasionally but avoid unhealthy choices.", score: -1 }] },
  { category: "dopamine", question: "You're bored waiting in line. You:", options: [{ text: "Chat or seek stimulation.", score: 1 }, { text: "Feel restless.", score: 1 }, { text: "Wait patiently.", score: -1 }, { text:"Scroll calmly.", score:-1 }] },
  { category: "cortisol", question: "A friend cancels plans at the last minute. You feel:", options: [{ text: "Take it in stride, no stress.", score: -1 }, { text: "You ruminate on it for a while.", score: 1 }, { text: "Irritated and frustrated.", score: 1 }, { text: "Slightly annoyed, but adapt quickly.", score: -1 }] },
  { category: "learning", question: "For a new hobby, you prefer:", options: [{ text: "Learning visually from videos/pictures.", score: 1 }, { text: "Listening to podcasts or instructions.", score: -1 }, { text: "Practicing hands-on immediately.", score: 1 }, { text: "Reading a book, then trying.", score: -1 }] },
  { category: "chronotype", question: "Your friend invites you for an early morning hike at 6 a.m. How do you feel?", options: [{ text: "Excited! Love mornings.", score: 1 }, { text: "Groggy, but might drag myself.", score: -1 }, { text: "Will go, not a problem.", score: 1 }, { text: "Decline and suggest a later time.", score: -1 }] },
  { category: "dopamine", question: "When learning something new, you:", options: [{ text: "Dive in immediately, even if messy.", score: 1 }, { text: "Plan and prepare thoroughly first.", score: -1 }, { text: "Experiment and explore different approaches.", score: 1 }, { text: "Stick to the instructions and avoid risk.", score: -1 }] },
  { category: "eating", question: "You notice yourself thinking about food more than usual when anxious. How often does this happen?", options: [{ text: "Very often, and I give in most times.", score: 1 }, { text: "Sometimes", score: 1 }, { text: "Rarely, I focus on other coping methods.", score: -1 }, { text: "Almost never; stress doesn't affect my appetite.", score: -1 }] },
  { category: "cortisol", question: "You have a surprise presentation in class/work. Your first reaction:", options: [{ text: "Heart races, but you organize your thoughts and dive in.", score: 1 }, { text: "Slight nerves, but manageable after deep breaths.", score: -1 }, { text: "Feel stressed and procrastinate until last minute.", score: 1 }, { text: "Stay calm, barely notice the pressure.", score: -1 }] },
  { category: "learning", question: "You need to memorize a set of instructions. You:", options: [{ text: "Draw diagrams or charts.", score: 1 }, { text: "Read them aloud repeatedly.", score: -1 }, { text: "Perform the tasks physically to remember.", score: 1 }, { text: "Mix strategies depending on time.", score: -1 }] },
  { category: "chronotype", question: "You have a big project due tonight. When are you most productive?", options: [{ text: "Early morning.", score: 1 }, { text: "Late morning.", score: 1 }, { text: "Late evening.", score: -1 }, { text: "After midnight.", score: -1 }] },
  { category: "dopamine", question: "Your friends suggest a spontaneous night out. You:", options: [{ text: "Excited and go without hesitation.", score: 1 }, { text: "Consider it, then decide calmly.", score: -1 }, { text: "Prefer staying in, routine feels better.", score: -1 }, { text: "Go, but constantly plan ahead for safety.", score: 1 }] },
  { category: "cortisol", question: "A tight deadline approaches, and a teamate drops the ball.You:", options: [{ text: "Panic then scramble.", score: 1 }, { text: "Feel overwhelmed.", score: 1 }, { text: "Adjust plan calmly.", score: -1 }, { text: "Stay relaxed.", score: -1 }] },
  { category: "learning", question: "When studying for an exam:", options: [{ text: "Rewrite notes with colors and diagrams.", score: 1 }, { text: "Discuss with classmates or explain out loud.", score: -1 }, { text: "Use flashcards and hands-on practice.", score: 1 }, { text: "Read notes multiple times, quietly.", score: -1 }] },
  { category: "chronotype", question: "Your energy pattern during the day is:", options: [{ text: "Very low in the morning and afternoon, only awake late.", score: -1 }, { text: "Peaks in the morning, dips in the afternoon.", score: 1 }, { text: "Steady throughout the day.", score: 1 }, { text: "Low in the morning, peaks at night.", score: -1 }] },
  { category: "eating", question: "Under stress, your appetite:", options: [{ text: "Increases noticeably.", score: 1 }, { text: "Craves comfort food.", score: 1 }, { text: "Decreases.", score: -1 }, { text: "Stays controlled.", score: -1 }] },
  { category: "dopamine", question: "You encounter a spontaneous adventure opportunity. You:", options: [{ text: "Jump in, curious about everything.", score: 1 }, { text: "Hesitate, weigh pros and cons.", score: -1 }, { text: "Decline politely", score: -1 }, { text: "Accept cautiously, but enjoy the thrill.", score: 1 }] },
  { category: "cortisol", question: "You get unexpected criticism. Your reaction?", options: [{ text: "Heart races but push through.", score: 1 }, { text: "Stress builds for hours.", score: 1 }, { text: "Consider calmly and move on.", score: -1 }, { text: "Brush it off easily.", score: -1 }] },
  { category: "learning", question: "You learn best when:", options: [{ text: "Watching examples or demos.", score: 1 }, { text: "Listening to explanations.", score: -1 }, { text: "Doing the task yourself.", score: 1 }, { text: "Observing first, then trying later.", score: -1 }] },
  { category: "eating", question: "High-pressure situation makes you:", options: [{ text: "Snack mindlessly.", score: 1 }, { text: "Binge occasionally.", score: 1 }, { text: "Skip meals.", score: -1 }, { text: "Plan meals carefully.", score: -1 }] },
  { category: "dopamine", question:"Spontaneous adventure opportunity?", options:[{text:"Jump in immediately.",score:+1},{text:"Accept for the thrill.",score:+1},{text:"Hesitate carefully.",score:-1},{text:"Decline politely",score:-1}]}
];

// ====== DOM Elements ======
let current = 0;
const qText = document.getElementById("qText");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const doneBtn = document.getElementById("doneBtn");
const resultCard = document.getElementById("resultCard");
const finalType = document.getElementById("finalType");

// ====== Selection State ======
const selections = {}; // Track selected option index for each question

// ====== Load Question ======
function loadQuestion() {
    const q = quizData[current];
    qText.textContent = q.question;
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = opt.text;
        
        // Highlight if this option was previously selected
        if (selections[current] === index) {
            btn.classList.add("selected");
        }
        
        btn.onclick = () => {
            // Play click sound on option selection
            playClickSound();
            
            scores[q.category] += opt.score;
            selections[current] = index; // Store selection
            
            // Highlight the selected option
            const allOptions = optionsDiv.querySelectorAll(".option");
            allOptions.forEach(o => o.classList.remove("selected"));
            btn.classList.add("selected");
            
            // Only advance if NOT on the last question
            if (current < quizData.length - 1) {
                current++;
                loadQuestion();
            }
        };
        
        // Add DNA animation on hover and click
        addDNAAnimation(btn);
        
        optionsDiv.appendChild(btn);
    });

    setUniformOptionHeight();
    updateButtons();
}

// ====== Next / Prev ======
function nextQuestion() {
    if (current < quizData.length - 1) {
        current++;
        loadQuestion();
    }
    // Note: No auto-showResult() on last question anymore
}

function prevQuestion() {
    if (current > 0) {
        current--;
        loadQuestion();
    }
}

// ====== Show Result ======
function showResult() {
    document.querySelector('.quiz-card').style.display = 'none';
    resultCard.style.display = 'block';

    const types = {};
    for (let cat in scores) {
        types[cat] = scores[cat] > geneSystem[cat].start ? geneSystem[cat].high : geneSystem[cat].low;
    }

    // Store results in sessionStorage for persistence across pages
    sessionStorage.setItem('dnaQuizResults', JSON.stringify(types));
    sessionStorage.setItem('dnaQuizComplete', 'true');

    // Create clickable links for each DNA type
    const typeLinks = {
        chronotype: createTypeLink(types.chronotype, 'chronotype'),
        cortisol: createTypeLink(types.cortisol, 'cortisol'),
        dopamine: createTypeLink(types.dopamine, 'dopamine'),
        learning: createTypeLink(types.learning, 'learning'),
        eating: createTypeLink(types.eating, 'eating')
    };

    finalType.innerHTML = `Your DNA Type: 
        ${typeLinks.chronotype} 
        ${typeLinks.cortisol} 
        ${typeLinks.dopamine} 
        ${typeLinks.learning} 
        ${typeLinks.eating}`;
}

// Create a clickable link for a DNA type
function createTypeLink(typeLetter, typeName) {
    // Special case for chronotype to link to appropriate detail page
    if (typeName === 'chronotype') {
        if (typeLetter === 'M') {
            return `<a href="chronotype-M.html" target="_blank" class="dna-type-link" data-type="${typeName}">${typeLetter}</a>`;
        } else if (typeLetter === 'N') {
            return `<a href="chronotype-N.html" target="_blank" class="dna-type-link" data-type="${typeName}">${typeLetter}</a>`;
        }
    }
    // Special case for dopamine to link to appropriate detail page
    if (typeName === 'dopamine') {
        if (typeLetter === 'D') {
            return `<a href="dopamine-D.html" target="_blank" class="dna-type-link" data-type="${typeName}">${typeLetter}</a>`;
        } else if (typeLetter === 'B') {
            return `<a href="dopamine-B.html" target="_blank" class="dna-type-link" data-type="${typeName}">${typeLetter}</a>`;
        }
    }
    // Special case for learning to link to appropriate detail page
    if (typeName === 'learning') {
        if (typeLetter === 'I') {
            return `<a href="learning-I.html" target="_blank" class="dna-type-link" data-type="${typeName}">${typeLetter}</a>`;
        } else if (typeLetter === 'A') {
            return `<a href="learning-A.html" target="_blank" class="dna-type-link" data-type="${typeName}">${typeLetter}</a>`;
        }
    }
    // Special case for eating to link to appropriate detail page
    if (typeName === 'eating') {
        if (typeLetter === 'R') {
            return `<a href="eating-R.html" target="_blank" class="dna-type-link" data-type="${typeName}">${typeLetter}</a>`;
        } else if (typeLetter === 'C') {
            return `<a href="eating-C.html" target="_blank" class="dna-type-link" data-type="${typeName}">${typeLetter}</a>`;
        }
    }
    // Special case for cortisol to link to appropriate detail page
    if (typeName === 'cortisol') {
        if (typeLetter === 'R') {
            return `<a href="cortisol-R.html" target="_blank" class="dna-type-link" data-type="${typeName}">${typeLetter}</a>`;
        } else if (typeLetter === 'S') {
            return `<a href="cortisol-S.html" target="_blank" class="dna-type-link" data-type="${typeName}">${typeLetter}</a>`;
        }
    }
    return `<a href="#${typeName}" target="_blank" class="dna-type-link" data-type="${typeName}">${typeLetter}</a>`;
}

// ====== Buttons ======
function updateButtons() {
    const isLastQuestion = current >= quizData.length - 1;
    
    prevBtn.disabled = current === 0;
    nextBtn.disabled = isLastQuestion;
    doneBtn.disabled = !isLastQuestion; // Only enable Done on last question
    
    // Add spark effect to Done button when enabled on last question
    if (isLastQuestion && !doneBtn.disabled) {
        if (!doneBtn.dataset.sparkAdded) {
            doneBtn.dataset.sparkAdded = 'true';
            addSparkAnimation(doneBtn);
        }
        doneBtn.classList.add('done-spark');
    } else {
        doneBtn.classList.remove('done-spark');
    }
}

// ====== Spark Animation for Done Button ======
function addSparkAnimation(btn) {
    let sparkInterval = null;
    
    const createSpark = () => {
        if (btn.disabled) return;
        
        const rect = btn.getBoundingClientRect();
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        particleSystem.burst(x, y, 5);
    };
    
    // Create sparks periodically when button is visible
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target === btn && !btn.disabled) {
                if (!sparkInterval && btn.offsetParent !== null) {
                    sparkInterval = setInterval(createSpark, 150);
                }
            } else if (sparkInterval && btn.disabled) {
                clearInterval(sparkInterval);
                sparkInterval = null;
            }
        });
    });
    
    observer.observe(btn, { attributes: true, attributeFilter: ['disabled'] });
    
    // Also trigger immediate spark on hover
    btn.addEventListener('mouseenter', () => {
        if (!btn.disabled) {
            const rect = btn.getBoundingClientRect();
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const x = rect.left + Math.random() * rect.width;
                    const y = rect.top + Math.random() * rect.height;
                    particleSystem.burst(x, y, 8);
                }, i * 50);
            }
        }
    });
}

// ====== Restart Quiz ======
function restartQuiz() {
    current = 0;
    for (let cat in scores) scores[cat] = geneSystem[cat].start;
    // Clear selections
    for (let key in selections) delete selections[key];
    resultCard.style.display = 'none';
    document.querySelector('.quiz-card').style.display = 'block';
    loadQuestion();
}

// ====== Uniform Option Height ======
function setUniformOptionHeight() {
    const options = optionsDiv.querySelectorAll('.option');
    if (!options) return;
    let maxHeight = 0;
    options.forEach(opt => {
        opt.style.height = 'auto'; // reset
        if (opt.offsetHeight > maxHeight) maxHeight = opt.offsetHeight;
    });
    options.forEach(opt => opt.style.height = maxHeight + 'px');
}

// ====== CLICK SOUND EFFECT ======
let clickSoundContext = null;

function playClickSound() {
    // Initialize audio context on first click (required by browsers)
    if (!clickSoundContext) {
        try {
            clickSoundContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            // AudioContext not supported
            return;
        }
    }
    
    // Resume context if suspended (browser autoplay policy)
    if (clickSoundContext.state === 'suspended') {
        clickSoundContext.resume();
    }
    
    // Create oscillator for click sound
    const oscillator = clickSoundContext.createOscillator();
    const gainNode = clickSoundContext.createGain();
    
    // Create a pleasant "pop" sound
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, clickSoundContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(300, clickSoundContext.currentTime + 0.08);
    
    // Volume envelope - quick attack, smooth decay
    gainNode.gain.setValueAtTime(0.15, clickSoundContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, clickSoundContext.currentTime + 0.08);
    
    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(clickSoundContext.destination);
    
    // Play sound
    oscillator.start(clickSoundContext.currentTime);
    oscillator.stop(clickSoundContext.currentTime + 0.1);
}

// ====== ADVANCED DNA PARTICLE SYSTEM ======
class DNAParticleSystem {
    constructor() {
        this.particles = [];
        this.colors = [
            '#0681ed', // blue
            '#06ac43', // green
            '#f77aa0', // pink
            '#ffbdbd', // light pink
            '#67c9f7', // light blue
            '#9b59b6', // purple
            '#e74c3c', // red
            '#2ecc71'  // emerald
        ];
        this.init();
    }

    init() {
        // Create canvas element
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'dna-canvas';
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        // Set canvas size
        this.resize();
        window.addEventListener('resize', () => this.resize());

        // Start animation loop
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    // Create a single DNA particle
    createParticle(x, y, angle, speed, color, size) {
        return {
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            gravity: 0.15,
            friction: 0.92,
            size: size,
            initialSize: size,
            color: color,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.4,
            life: 1,
            decay: 0.05, // Fast decay
            type: Math.random() > 0.5 ? 'helix' : 'base',
            phase: Math.random() * Math.PI * 2
        };
    }

    // Burst particles from a point
    burst(x, y, count = 10) {
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i / count) + Math.random() * 0.2;
            const speed = 6 + Math.random() * 6; // Very fast
            const color = this.colors[Math.floor(Math.random() * this.colors.length)];
            const size = 5 + Math.random() * 6;
            
            this.particles.push(this.createParticle(x, y, angle, speed, color, size));
        }
    }

    // Draw a DNA helix strand particle
    drawHelixParticle(particle) {
        const ctx = this.ctx;
        const { x, y, size, color, rotation, life, phase } = particle;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.globalAlpha = life;
        
        // Glow effect
        ctx.shadowBlur = 15 * life;
        ctx.shadowColor = color;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;

        // Draw double helix representation
        const helixWidth = size * 0.4;
        const helixHeight = size * 0.8;
        
        // Left strand
        ctx.beginPath();
        for (let i = 0; i <= 10; i++) {
            const t = i / 10;
            const px = -helixWidth + Math.sin(t * Math.PI * 2 + phase) * helixWidth * 0.5;
            const py = -helixHeight/2 + t * helixHeight;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Right strand
        ctx.beginPath();
        for (let i = 0; i <= 10; i++) {
            const t = i / 10;
            const px = helixWidth + Math.sin(t * Math.PI * 2 + phase + Math.PI) * helixWidth * 0.5;
            const py = -helixHeight/2 + t * helixHeight;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Connection lines (base pairs)
        ctx.globalAlpha = life * 0.6;
        for (let i = 1; i < 10; i += 2) {
            const t = i / 10;
            const leftX = -helixWidth + Math.sin(t * Math.PI * 2 + phase) * helixWidth * 0.5;
            const rightX = helixWidth + Math.sin(t * Math.PI * 2 + phase + Math.PI) * helixWidth * 0.5;
            const py = -helixHeight/2 + t * helixHeight;
            
            ctx.beginPath();
            ctx.moveTo(leftX, py);
            ctx.lineTo(rightX, py);
            ctx.stroke();
        }

        ctx.restore();
    }

    // Draw a simple base particle
    drawBaseParticle(particle) {
        const ctx = this.ctx;
        const { x, y, size, color, rotation, life } = particle;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.globalAlpha = life;
        
        // Glow effect
        ctx.shadowBlur = 10 * life;
        ctx.shadowColor = color;
        
        // Draw nucleotide base
        ctx.fillStyle = color;
        ctx.beginPath();
        
        // Create a more complex shape
        const s = size * 0.6;
        ctx.moveTo(0, -s);
        ctx.lineTo(s * 0.7, -s * 0.3);
        ctx.lineTo(s * 0.4, s * 0.2);
        ctx.lineTo(0, s);
        ctx.lineTo(-s * 0.4, s * 0.2);
        ctx.lineTo(-s * 0.7, -s * 0.3);
        ctx.closePath();
        ctx.fill();
        
        // Inner highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(-s * 0.2, -s * 0.2, s * 0.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    // Update particles
    update() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            
            // Apply physics
            p.vx *= p.friction;
            p.vy *= p.friction;
            p.vy += p.gravity;
            
            p.x += p.vx;
            p.y += p.vy;
            
            // Update rotation
            p.rotation += p.rotationSpeed;
            
            // Update phase for helix animation
            p.phase += 0.1;
            
            // Decay life
            p.life -= p.decay;
            
            // Remove dead particles
            if (p.life <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    // Draw all particles
    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (const particle of this.particles) {
            if (particle.type === 'helix') {
                this.drawHelixParticle(particle);
            } else {
                this.drawBaseParticle(particle);
            }
        }
    }

    // Animation loop
    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Global particle system instance
let particleSystem;

// ====== DNA Animation Functions ======
function addDNAAnimation(btn) {
    // Initialize particle system on first use
    if (!particleSystem) {
        particleSystem = new DNAParticleSystem();
    }

    // Hover animation - burst from cursor position on every mouse enter
    btn.addEventListener('mouseenter', (e) => {
        if (btn.classList.contains('selected')) return;
        
        const x = e.clientX;
        const y = e.clientY;
        particleSystem.burst(x, y, 8);
    });

    // Click animation - burst from click position
    btn.addEventListener('click', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;
        
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
            particleSystem.burst(x, y, 10);
        }
    });
}

// ====== Init ======
document.addEventListener('DOMContentLoaded', () => {
    // Check if there's a stored result to show
    const storedResults = sessionStorage.getItem('dnaQuizResults');
    const isComplete = sessionStorage.getItem('dnaQuizComplete');
    
    if (storedResults && isComplete === 'true') {
        // Show the stored results
        document.querySelector('.quiz-card').style.display = 'none';
        resultCard.style.display = 'block';
        
        const types = JSON.parse(storedResults);
        
        // Create clickable links for each DNA type
        const typeLinks = {
            chronotype: createTypeLink(types.chronotype, 'chronotype'),
            cortisol: createTypeLink(types.cortisol, 'cortisol'),
            dopamine: createTypeLink(types.dopamine, 'dopamine'),
            learning: createTypeLink(types.learning, 'learning'),
            eating: createTypeLink(types.eating, 'eating')
        };

        finalType.innerHTML = `Your DNA Type: 
            ${typeLinks.chronotype} 
            ${typeLinks.cortisol} 
            ${typeLinks.dopamine} 
            ${typeLinks.learning} 
            ${typeLinks.eating}`;
    } else {
        // Start fresh quiz
        loadQuestion();
    }
    
    nextBtn.addEventListener('click', nextQuestion);
    prevBtn.addEventListener('click', prevQuestion);
    doneBtn.addEventListener('click', showResult);
    document.getElementById('restartBtn').addEventListener('click', restartQuiz);
});

