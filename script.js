'use strict';
{
    // Run the intro independently so an unrelated feature cannot prevent it from starting.
    const introPanel = document.querySelector('#loader');
    const introCounter = document.querySelector('#loader-count');
    const introFill = document.querySelector('#loader-fill');
    let introFrame;
    let introFinishTimer;
    let introHideTimer;
    let introRunning = false;

    function closeIntro() {
        if (!introRunning) return;
        introRunning = false;
        cancelAnimationFrame(introFrame);
        clearTimeout(introFinishTimer);
        introPanel.classList.add('finished');
        document.body.classList.remove('intro-playing');
        document.body.classList.add('intro-complete');
        introHideTimer = setTimeout(() => {
            introPanel.hidden = true;
            introPanel.classList.remove('active');
        }, 1000);
    }

    function playIntro() {
        clearTimeout(introHideTimer);
        clearTimeout(introFinishTimer);
        cancelAnimationFrame(introFrame);
        introRunning = true;
        introPanel.hidden = false;
        introPanel.classList.remove('finished');
        introPanel.classList.add('active');
        document.body.classList.remove('intro-complete');
        document.body.classList.add('intro-playing');
        introCounter.textContent = '000';
        introFill.style.width = '0%';
        const startedAt = performance.now();
        // Reduced motion keeps a brief static introduction instead of movement.
        const prefersLessMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
        const duration = prefersLessMotion ? 650 : 3600;

        function updateIntro(now) {
            if (!introRunning) return;
            const elapsed = Math.min((now - startedAt) / duration, 1);
            const percentage = Math.round(elapsed * 100);
            introCounter.textContent = String(percentage).padStart(3, '0');
            introFill.style.width = percentage + '%';
            if (elapsed < 1) introFrame = requestAnimationFrame(updateIntro);
            else introFinishTimer = setTimeout(closeIntro, 400);
        }
        introFrame = requestAnimationFrame(updateIntro);
        // Always release the page, even if the browser pauses animation frames.
        introFinishTimer = setTimeout(closeIntro, 6000);
    }

    document.querySelector('#skip-intro').addEventListener('click', closeIntro);
    document.querySelector('#replay-intro').addEventListener('click', playIntro);
    playIntro();

}

// Keep the footer year current without needing a manual edit.
document.querySelector('#year').textContent = new Date().getFullYear();
// Read the visitor’s motion preference before starting any animations.
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
// Project notes are stored together so the dialog content is easy to update.
const details = {
    tanning: {
        title: 'Tanning Tropical',
        intro: 'A customer-facing business website, from interface design to production deployment.',
        items: ['Designed the presentation of salon services, pricing, branding, and contact information.', 'Built the frontend with React, JavaScript, HTML, CSS, and Vite.', 'Adapted the layouts for desktop and mobile screens.', 'Deployed the website to Vercel and refined responsiveness and performance.']
    },
    chat: {
        title: 'AI Chat Application',
        intro: 'An exploration of conversational interfaces and the backend services that make them work.',
        items: ['Built a JavaScript interface for entering messages and displaying AI responses.', 'Used Node.js and Express to handle requests and connect to an external AI API.', 'Separated interface behavior from backend API integration.', 'Debugged request-and-response behavior and tracked development with Git.']
    },
    student: {
        title: 'Student Management System',
        intro: 'A practical Java application for organizing and maintaining student records.',
        items: ['Implemented creation, viewing, updates, and deletion of student records.', 'Added GPA management, searching, and sorting through a menu-driven interface.', 'Used modular, object-oriented code and input validation.', 'Saved records to persistent files so data remains available between sessions.']
    },
    expense: {
        title: 'Personal Expense Manager',
        intro: 'A Python tool that makes personal spending easier to record and understand.',
        items: ['Built workflows for adding, viewing, and analyzing expenses.', 'Organized transactions into categories for spending review.', 'Used CSV files to save and reload transaction history.', 'Generated category totals, reports, and automated summaries.']
    }
};
// Reuse one dialog instead of building a separate popup for every project.
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => {
    const data = details[button.dataset.detail];
    document.querySelector('#dialog-title').textContent = data.title;
    document.querySelector('#dialog-intro').textContent = data.intro;
    document.querySelector('#dialog-list').replaceChildren(...data.items.map(text => {
        const li = document.createElement('li');
        li.textContent = text;
        return li
    }));
    dialog.showModal()
}));
// The close button, Escape key, and a click outside the panel all dismiss the dialog.
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
    if (event.target === dialog) {
        const r = dialog.getBoundingClientRect();
        if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close()
    }
});
// Copy the email address and show a brief confirmation. If copying fails, open an email draft.
let toastTimer;
document.querySelector('#copy-email').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText('DhrutPatel277@gmail.com');
        const toast = document.querySelector('#toast');
        toast.textContent = 'Email copied. Let’s make something happen.';
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2600)
    } catch {
        window.location.href = 'mailto:DhrutPatel277@gmail.com'
    }
});
// The thin bar at the top shows how far the visitor has scrolled.
function progress() {
    const range = document.documentElement.scrollHeight - innerHeight;
    document.querySelector('.progress').style.width = (range > 0 ? scrollY / range * 100 : 0) + '%'
}
addEventListener('scroll', progress, {
    passive: true
});
addEventListener('resize', progress);
progress();
// Reveal project artwork as it enters the screen. Content stays visible if this feature is unavailable.
if (!reduced && 'IntersectionObserver' in window) {
    document.body.classList.add('motion-ready');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('offscreen');
            observer.unobserve(entry.target)
        }
    }), {
        threshold: .08
    });
    document.querySelectorAll('.project-visual').forEach(el => {
        el.classList.add('offscreen');
        observer.observe(el)
    })
}
// This hero uses moving light and typography instead of the previous canvas sculpture.
const nameStage = document.querySelector('.name-stage');
const nameLetters = [...document.querySelectorAll('.kinetic-name i')];
const heroSection = document.querySelector('.hero');
let nameFrame = 0;
let heroIsVisible = true;

// Pause the ongoing hero effect once it leaves the screen.
if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
        heroIsVisible = entries[0].isIntersecting;
    }).observe(heroSection);
}

function animateName(time) {
    if (heroIsVisible && !document.hidden) {
        nameLetters.forEach((letter, index) => {
            const wave = Math.sin(time / 1100 + index * 0.85);
            letter.style.fontWeight = String(Math.round(500 + wave * 300));
            letter.style.transform = `scaleX(${1 + wave * 0.13})`;
            letter.style.opacity = String(0.65 + (wave + 1) * 0.175);
        });
    }
    nameFrame = requestAnimationFrame(animateName);
}
if (!reduced) requestAnimationFrame(animateName);

// Move the red glow gently toward the mouse. Touch devices keep the default position.
heroSection.addEventListener('pointermove', event => {
    if (reduced || event.pointerType === 'touch') return;
    const bounds = heroSection.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    heroSection.style.setProperty('--glow-x', `${x * 100}%`);
    heroSection.style.setProperty('--glow-y', `${y * 100}%`);
});

// Tilt each project panel a few degrees as visitors explore its surface.
document.querySelectorAll('.project-visual').forEach(panel => {
    panel.addEventListener('pointermove', event => {
        if (reduced || event.pointerType === 'touch') return;
        const bounds = panel.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        panel.style.transform = `perspective(1000px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
    });
    panel.addEventListener('pointerleave', () => {
        panel.style.transform = '';
    });
});