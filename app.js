// ============================================
// ICFES Prep Pro — Application Logic
// ============================================

(function () {
    'use strict';

    // --- State ---
    let currentScreen = 'landing';
    let currentArea = null;        // null = all areas (simulacro completo)
    let quizQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];          // { questionIndex, selectedOption, correct, timeSpent }
    let timerInterval = null;
    let timeLeft = 120;            // seconds per question
    const TIME_PER_QUESTION = 120;

    // --- DOM Refs ---
    const screens = {
        landing: document.getElementById('landing'),
        areaPicker: document.getElementById('area-picker'),
        studyGuide: document.getElementById('study-guide'),
        quiz: document.getElementById('quiz'),
        results: document.getElementById('results'),
        review: document.getElementById('review')
    };

    // --- Particles ---
    function createParticles() {
        const container = document.getElementById('particles');
        const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 4 + 2;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            p.style.left = Math.random() * 100 + '%';
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.animationDuration = (Math.random() * 15 + 10) + 's';
            p.style.animationDelay = (Math.random() * 10) + 's';
            container.appendChild(p);
        }
    }
    createParticles();

    // --- Screen Navigation ---
    function showScreen(name) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[name].classList.add('active');
        currentScreen = name;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- Load saved stats ---
    function loadStats() {
        try {
            const data = JSON.parse(localStorage.getItem('icfes_stats'));
            if (data) {
                document.getElementById('landing-stats').style.display = 'flex';
                document.getElementById('stat-last-score').textContent = data.lastScore + '%';
                document.getElementById('stat-best-score').textContent = data.bestScore + '%';
            }
        } catch (_) { /* ignore */ }
    }

    function saveStats(score) {
        try {
            let data = JSON.parse(localStorage.getItem('icfes_stats')) || { bestScore: 0 };
            data.lastScore = score;
            if (score > data.bestScore) data.bestScore = score;
            localStorage.setItem('icfes_stats', JSON.stringify(data));
        } catch (_) { /* ignore */ }
    }

    loadStats();

    // --- Area Picker ---
    function buildAreaPicker() {
        const grid = document.getElementById('area-grid');
        grid.innerHTML = '';
        AREAS.forEach(area => {
            const count = QUESTIONS.filter(q => q.area === area.id).length;
            const card = document.createElement('div');
            card.className = 'area-card';
            card.setAttribute('data-color', area.color);
            card.innerHTML = `
                <span class="area-card-icon">${area.icon}</span>
                <span class="area-card-title">${area.name}</span>
                <span class="area-card-desc">${area.desc}</span>
                <span class="area-card-count">${count} preguntas disponibles</span>
            `;
            card.addEventListener('click', () => openStudyGuide(area.id));
            grid.appendChild(card);
        });
    }
    buildAreaPicker();

    // --- Study Guide ---
    function openStudyGuide(areaId) {
        const area = AREAS.find(a => a.id === areaId);
        currentArea = areaId;
        document.getElementById('guide-area-icon').textContent = area.icon;
        document.getElementById('guide-area-title').textContent = area.name + ' — Guía Rápida';

        const content = document.getElementById('guide-content');
        content.innerHTML = '';
        area.guide.forEach(topic => {
            const div = document.createElement('div');
            div.className = 'guide-topic';
            div.innerHTML = `
                <div class="guide-topic-title">
                    ${topic.title}
                    ${topic.tip ? '<span class="tip-badge">Clave</span>' : ''}
                </div>
                <div class="guide-topic-body">${topic.body}</div>
            `;
            content.appendChild(div);
        });

        showScreen('studyGuide');
    }

    // --- Shuffle helper ---
    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // --- Start Quiz ---
    function startQuiz(areaId) {
        currentArea = areaId;
        if (areaId) {
            quizQuestions = shuffle(QUESTIONS.filter(q => q.area === areaId));
        } else {
            // Full simulacro: pick questions from each area proportionally
            quizQuestions = shuffle(QUESTIONS);
        }
        currentQuestionIndex = 0;
        userAnswers = [];
        showScreen('quiz');
        renderQuestion();
    }

    function renderQuestion() {
        const q = quizQuestions[currentQuestionIndex];
        const area = AREAS.find(a => a.id === q.area);
        const total = quizQuestions.length;

        // Top bar
        document.getElementById('quiz-area-badge').textContent = area.name;
        document.getElementById('quiz-area-badge').style.color = `var(${area.colorVar})`;

        // Progress
        const progress = ((currentQuestionIndex) / total) * 100;
        document.getElementById('quiz-progress-fill').style.width = progress + '%';
        document.getElementById('quiz-progress-label').textContent = `${currentQuestionIndex + 1} / ${total}`;

        // Question
        document.getElementById('question-number').textContent = `Pregunta ${currentQuestionIndex + 1}`;
        document.getElementById('question-text').textContent = q.question;

        // Options
        const letters = ['A', 'B', 'C', 'D'];
        const optionsList = document.getElementById('options-list');
        optionsList.innerHTML = '';
        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
            btn.addEventListener('click', () => selectAnswer(i));
            optionsList.appendChild(btn);
        });

        // Hide feedback
        document.getElementById('feedback-card').classList.add('hidden');

        // Re-animate card
        const card = document.getElementById('question-card');
        card.style.animation = 'none';
        card.offsetHeight; // trigger reflow
        card.style.animation = '';

        // Start timer
        startTimer();
    }

    function startTimer() {
        clearInterval(timerInterval);
        timeLeft = TIME_PER_QUESTION;
        updateTimerDisplay();
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                // Time's up — mark as unanswered
                selectAnswer(-1);
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        const text = `${m}:${s.toString().padStart(2, '0')}`;
        const el = document.getElementById('timer-text');
        const timerWrap = document.getElementById('quiz-timer');
        el.textContent = text;

        timerWrap.classList.remove('warning', 'danger');
        if (timeLeft <= 15) timerWrap.classList.add('danger');
        else if (timeLeft <= 30) timerWrap.classList.add('warning');
    }

    function selectAnswer(optionIndex) {
        clearInterval(timerInterval);
        const q = quizQuestions[currentQuestionIndex];
        const isCorrect = optionIndex === q.correct;
        const timeSpent = TIME_PER_QUESTION - timeLeft;

        userAnswers.push({
            questionIndex: currentQuestionIndex,
            selectedOption: optionIndex,
            correct: isCorrect,
            timeSpent
        });

        // Highlight options
        const optionBtns = document.querySelectorAll('#options-list .option-btn');
        optionBtns.forEach((btn, i) => {
            btn.classList.add('disabled');
            if (i === q.correct) btn.classList.add('correct');
            if (i === optionIndex && !isCorrect) btn.classList.add('incorrect');
        });

        // Show feedback
        const feedback = document.getElementById('feedback-card');
        feedback.classList.remove('hidden');

        const icon = document.getElementById('feedback-icon');
        const title = document.getElementById('feedback-title');
        const explanation = document.getElementById('feedback-explanation');

        if (optionIndex === -1) {
            icon.textContent = '⏱️';
            title.textContent = '¡Se acabó el tiempo!';
            title.className = 'feedback-title incorrect';
        } else if (isCorrect) {
            icon.textContent = '🎉';
            title.textContent = '¡Correcto!';
            title.className = 'feedback-title correct';
        } else {
            icon.textContent = '😕';
            title.textContent = 'Incorrecto';
            title.className = 'feedback-title incorrect';
        }

        explanation.textContent = q.explanation;

        // Update next button text
        const nextBtn = document.getElementById('btn-next-question');
        if (currentQuestionIndex >= quizQuestions.length - 1) {
            nextBtn.querySelector('span').textContent = 'Ver Resultados';
        } else {
            nextBtn.querySelector('span').textContent = 'Siguiente Pregunta';
        }
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex >= quizQuestions.length) {
            showResults();
        } else {
            renderQuestion();
        }
    }

    // --- Results ---
    function showResults() {
        clearInterval(timerInterval);
        const total = quizQuestions.length;
        const correctCount = userAnswers.filter(a => a.correct).length;
        const pct = Math.round((correctCount / total) * 100);

        saveStats(pct);

        // Score circle
        document.getElementById('results-score').textContent = pct + '%';
        const circumference = 2 * Math.PI * 52; // r=52
        const offset = circumference * (1 - pct / 100);

        // Add SVG gradient def if not exists
        const svg = document.querySelector('.results-svg');
        if (!svg.querySelector('defs')) {
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            grad.setAttribute('id', 'scoreGradient');
            grad.setAttribute('x1', '0%'); grad.setAttribute('y1', '0%');
            grad.setAttribute('x2', '100%'); grad.setAttribute('y2', '0%');
            const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop1.setAttribute('offset', '0%'); stop1.setAttribute('stop-color', '#3b82f6');
            const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop2.setAttribute('offset', '100%'); stop2.setAttribute('stop-color', '#8b5cf6');
            grad.appendChild(stop1);
            grad.appendChild(stop2);
            defs.appendChild(grad);
            svg.insertBefore(defs, svg.firstChild);
        }

        const fillCircle = document.getElementById('results-fill-circle');
        fillCircle.style.strokeDasharray = circumference;
        fillCircle.style.strokeDashoffset = circumference;
        setTimeout(() => {
            fillCircle.style.strokeDashoffset = offset;
        }, 100);

        // Title
        const title = document.getElementById('results-title');
        const subtitle = document.getElementById('results-subtitle');
        if (pct >= 80) {
            title.textContent = '🌟 ¡Excelente!';
            subtitle.textContent = `Acertaste ${correctCount} de ${total} preguntas. ¡Estás muy bien preparado!`;
        } else if (pct >= 60) {
            title.textContent = '👏 ¡Buen trabajo!';
            subtitle.textContent = `Acertaste ${correctCount} de ${total} preguntas. ¡Sigue repasando los temas débiles!`;
        } else if (pct >= 40) {
            title.textContent = '💪 ¡Puedes mejorar!';
            subtitle.textContent = `Acertaste ${correctCount} de ${total} preguntas. Repasa los temas donde fallaste.`;
        } else {
            title.textContent = '📚 ¡A estudiar!';
            subtitle.textContent = `Acertaste ${correctCount} de ${total} preguntas. No te preocupes, revisa las explicaciones.`;
        }

        // Breakdown by area
        const breakdownDiv = document.getElementById('results-breakdown');
        breakdownDiv.innerHTML = '';
        const areasInQuiz = [...new Set(quizQuestions.map(q => q.area))];
        areasInQuiz.forEach(areaId => {
            const area = AREAS.find(a => a.id === areaId);
            const areaQs = quizQuestions.map((q, i) => ({ ...q, idx: i })).filter(q => q.area === areaId);
            const areaCorrect = areaQs.filter(q => userAnswers[q.idx] && userAnswers[q.idx].correct).length;
            const areaPct = Math.round((areaCorrect / areaQs.length) * 100);

            let barColor = 'var(--accent-emerald)';
            if (areaPct < 40) barColor = 'var(--accent-rose)';
            else if (areaPct < 70) barColor = 'var(--accent-amber)';

            const row = document.createElement('div');
            row.className = 'breakdown-row';
            row.innerHTML = `
                <span class="breakdown-icon">${area.icon}</span>
                <div class="breakdown-info">
                    <div class="breakdown-label">${area.name}</div>
                    <div class="breakdown-bar-track">
                        <div class="breakdown-bar-fill" style="width: 0%; background: ${barColor};"></div>
                    </div>
                </div>
                <span class="breakdown-score">${areaCorrect}/${areaQs.length}</span>
            `;
            breakdownDiv.appendChild(row);

            // Animate bar fill
            setTimeout(() => {
                row.querySelector('.breakdown-bar-fill').style.width = areaPct + '%';
            }, 200);
        });

        // Tips
        const tipsDiv = document.getElementById('results-tips');
        const weakAreas = areasInQuiz
            .map(areaId => {
                const areaQs = quizQuestions.map((q, i) => ({ ...q, idx: i })).filter(q => q.area === areaId);
                const areaCorrect = areaQs.filter(q => userAnswers[q.idx] && userAnswers[q.idx].correct).length;
                return { areaId, pct: (areaCorrect / areaQs.length) * 100 };
            })
            .filter(a => a.pct < 70)
            .sort((a, b) => a.pct - b.pct);

        if (weakAreas.length > 0) {
            const area = AREAS.find(a => a.id === weakAreas[0].areaId);
            tipsDiv.innerHTML = `
                <h3>💡 Consejo de Estudio</h3>
                <ul>
                    <li>Tu área más débil fue <strong>${area.name}</strong>. Te recomiendo repasar la guía de estudio de esa área.</li>
                    <li>Lee las explicaciones de las preguntas que fallaste.</li>
                    <li>Recuerda: en el examen real, si no sabes, descarta 2 opciones y elige entre las 2 restantes.</li>
                    <li>Mañana descansa bien, desayuna y llega temprano. ¡Confía en ti!</li>
                </ul>
            `;
        } else {
            tipsDiv.innerHTML = `
                <h3>💡 Consejo</h3>
                <ul>
                    <li>¡Vas muy bien en todas las áreas! Sigue practicando para mantener el nivel.</li>
                    <li>Mañana descansa bien, desayuna y llega con tiempo de sobra. ¡Confía en tu preparación!</li>
                </ul>
            `;
        }

        // Confetti for high scores
        if (pct >= 70) {
            launchConfetti();
        }

        showScreen('results');
    }

    // --- Confetti ---
    function launchConfetti() {
        let existing = document.getElementById('confetti-canvas');
        if (existing) existing.remove();

        const canvas = document.createElement('canvas');
        canvas.id = 'confetti-canvas';
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const confetti = [];
        const colors = ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981', '#f43f5e', '#06b6d4'];

        for (let i = 0; i < 120; i++) {
            confetti.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                w: Math.random() * 8 + 4,
                h: Math.random() * 4 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                vx: (Math.random() - 0.5) * 3,
                vy: Math.random() * 3 + 2,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10
            });
        }

        let frames = 0;
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            confetti.forEach(c => {
                c.x += c.vx;
                c.y += c.vy;
                c.rotation += c.rotationSpeed;
                ctx.save();
                ctx.translate(c.x, c.y);
                ctx.rotate((c.rotation * Math.PI) / 180);
                ctx.fillStyle = c.color;
                ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
                ctx.restore();
            });
            frames++;
            if (frames < 180) {
                requestAnimationFrame(draw);
            } else {
                canvas.remove();
            }
        }
        draw();
    }

    // --- Review ---
    function showReview() {
        const list = document.getElementById('review-list');
        list.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D'];

        quizQuestions.forEach((q, i) => {
            const area = AREAS.find(a => a.id === q.area);
            const answer = userAnswers[i];
            const status = !answer ? 'skipped' : answer.correct ? 'correct' : 'incorrect';

            const item = document.createElement('div');
            item.className = 'review-item';
            item.innerHTML = `
                <div class="review-item-header">
                    <span class="review-status-dot ${status}"></span>
                    <span class="review-item-area">${area.name}</span>
                    <span class="review-item-qnum">Pregunta ${i + 1}</span>
                </div>
                <div class="review-item-question">${q.question}</div>
                <div class="review-answer-row">
                    <span class="review-label">Correcta:</span>
                    <span class="review-answer-correct">${letters[q.correct]}. ${q.options[q.correct]}</span>
                </div>
                ${answer && answer.selectedOption !== -1 && answer.selectedOption !== q.correct ? `
                    <div class="review-answer-row">
                        <span class="review-label">Tu respuesta:</span>
                        <span class="review-answer-wrong">${letters[answer.selectedOption]}. ${q.options[answer.selectedOption]}</span>
                    </div>
                ` : answer && answer.selectedOption === -1 ? `
                    <div class="review-answer-row">
                        <span class="review-label">Tu respuesta:</span>
                        <span class="review-answer-wrong">Sin responder (tiempo agotado)</span>
                    </div>
                ` : ''}
                <div class="review-explanation">${q.explanation}</div>
            `;
            list.appendChild(item);
        });

        showScreen('review');
    }

    // --- Event Listeners ---

    // Landing
    document.getElementById('btn-start-quiz').addEventListener('click', () => startQuiz(null));
    document.getElementById('btn-pick-area').addEventListener('click', () => showScreen('areaPicker'));

    // Area Picker
    document.getElementById('btn-back-landing').addEventListener('click', () => showScreen('landing'));

    // Study Guide
    document.getElementById('btn-back-from-guide').addEventListener('click', () => showScreen('areaPicker'));
    document.getElementById('btn-start-area-quiz').addEventListener('click', () => startQuiz(currentArea));

    // Quiz
    document.getElementById('btn-quit-quiz').addEventListener('click', () => {
        clearInterval(timerInterval);
        if (userAnswers.length > 0) {
            showResults();
        } else {
            showScreen('landing');
        }
    });
    document.getElementById('btn-next-question').addEventListener('click', nextQuestion);

    // Results
    document.getElementById('btn-retry').addEventListener('click', () => startQuiz(currentArea));
    document.getElementById('btn-review').addEventListener('click', showReview);
    document.getElementById('btn-home').addEventListener('click', () => {
        loadStats();
        showScreen('landing');
    });

    // Review
    document.getElementById('btn-back-from-review').addEventListener('click', () => showScreen('results'));

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (currentScreen !== 'quiz') return;
        const feedbackVisible = !document.getElementById('feedback-card').classList.contains('hidden');

        if (feedbackVisible) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                nextQuestion();
            }
            return;
        }

        const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
        const idx = keyMap[e.key.toLowerCase()];
        if (idx !== undefined) {
            e.preventDefault();
            const btns = document.querySelectorAll('#options-list .option-btn');
            if (btns[idx] && !btns[idx].classList.contains('disabled')) {
                selectAnswer(idx);
            }
        }
    });

})();
