// ==========================================================================
// PROJECTS SECTION LOGIC
// ==========================================================================

import { projects } from './dictionary.js';

document.addEventListener('DOMContentLoaded', () => {
    const sectionContainer = document.getElementById('project');
    if (!sectionContainer) return;

    const orderedProjects = [...projects];

    // Partículas de fundo
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');
    sectionContainer.appendChild(particlesContainer);

    const numParticles = 40;
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('span');
        const size = Math.random() * 5 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 15 + 8}s`;
        particle.style.animationDelay = `${Math.random() * 4}s`;
        particle.style.setProperty('--x', `${Math.random() * 160 - 80}px`);
        particle.style.setProperty('--y', `${Math.random() * -180 - 40}px`);
        particlesContainer.appendChild(particle);
    }

    // Conteúdo principal dos projetos
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-project');
    sectionContainer.appendChild(contentContainer);

    // Título da seção
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title', 'title-reveal');
    titleDiv.innerHTML = `
        <h2>Projetos em Destaque</h2>
        <p class="subtitle">
            Conheça alguns dos meus trabalhos e soluções desenvolvidas, <br>
            <span class="highlight">TRANSFORMANDO CONHECIMENTO TÉCNICO EM APLICAÇÕES PRÁTICAS</span> <br>
            <span class="p">com foco em inovação, eficiência e excelente usabilidade.</span>
        </p>
    `;
    contentContainer.appendChild(titleDiv);

    // Container dos Cards
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('dashboardcards');
    contentContainer.appendChild(cardsContainer);

    // Dots para Mobile
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots-container');
    contentContainer.appendChild(dotsContainer);

    // Botões Ver Mais / Ver Menos
    const buttonsDiv = document.createElement('div');
    buttonsDiv.style.textAlign = 'center';
    buttonsDiv.style.marginTop = '35px';
    buttonsDiv.style.display = 'flex';
    buttonsDiv.style.justifyContent = 'center';
    buttonsDiv.style.gap = '15px';

    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.classList.add('btnLoadMoreProjects');
    loadMoreBtn.id = 'loadMoreBtn';
    loadMoreBtn.innerHTML = 'Ver Mais Projetos <i class="fas fa-arrow-down"></i>';

    const loadLessBtn = document.createElement('button');
    loadLessBtn.classList.add('btnLoadMoreProjects');
    loadLessBtn.id = 'loadLessBtn';
    loadLessBtn.style.display = 'none';
    loadLessBtn.innerHTML = 'Ver Menos <i class="fas fa-arrow-up"></i>';

    buttonsDiv.appendChild(loadLessBtn);
    buttonsDiv.appendChild(loadMoreBtn);
    contentContainer.appendChild(buttonsDiv);

    let visibleCount = 4;

    function isMobileScreen() {
        return window.matchMedia('(max-width: 768px)').matches;
    }

    function createCard(proj, index) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;

        card.innerHTML = `
            <div class="imagecard">
                <div class="mockup-cover" style="background: ${proj.gradient}15">
                    <i class="${proj.icon}"></i>
                    <div class="mockup-title">${proj.name}</div>
                </div>
            </div>

            <h3 class="namecard">${proj.name}</h3>
            <p class="descriptioncard">${proj.description}</p>

            <div class="languages">
                ${proj.languages.map(lang => `<span class="containerlanguage">${lang}</span>`).join('')}
            </div>

            <div class="status">
                <span class="status-dot ${proj.status}"></span>
                <span class="status-text">${proj.statusText}</span>
            </div>

            <button class="btnmore" aria-label="Ver detalhes de ${proj.name}">
                <span>Acessar Projeto</span>
                <i class="fas fa-arrow-up-right-from-square"></i>
            </button>
        `;

        card.querySelector('.btnmore').addEventListener('click', () => {
            window.open(proj.detailsLink, '_blank', 'noopener,noreferrer');
        });

        return card;
    }

    function renderDots() {
        if (!isMobileScreen()) {
            dotsContainer.innerHTML = '';
            return;
        }

        const totalCards = orderedProjects.length;
        dotsContainer.innerHTML = '';

        for (let i = 0; i < totalCards; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');

            dot.addEventListener('click', () => {
                const card = cardsContainer.children[i];
                if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            });

            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        const scrollLeft = cardsContainer.scrollLeft;
        const cardWidth = cardsContainer.children[0]?.offsetWidth + 20 || 1;
        const index = Math.round(scrollLeft / cardWidth);

        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
    }

    cardsContainer.addEventListener('scroll', updateDots);

    function renderProjects() {
        const mobile = isMobileScreen();
        visibleCount = mobile ? orderedProjects.length : 4;

        cardsContainer.innerHTML = '';
        const cards = orderedProjects.slice(0, visibleCount).map((proj, idx) => {
            const card = createCard(proj, idx);
            cardsContainer.appendChild(card);
            return card;
        });

        if (mobile) {
            loadMoreBtn.style.display = 'none';
            loadLessBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = visibleCount < orderedProjects.length ? 'inline-flex' : 'none';
            loadLessBtn.style.display = visibleCount > 4 ? 'inline-flex' : 'none';
        }

        renderDots();
    }

    renderProjects();

    // Eventos dos botões Ver Mais / Ver Menos
    loadMoreBtn.onclick = () => {
        const prevCount = visibleCount;
        visibleCount = Math.min(visibleCount + 2, orderedProjects.length);

        orderedProjects.slice(prevCount, visibleCount).forEach((proj, idx) => {
            const card = createCard(proj, prevCount + idx);
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            cardsContainer.appendChild(card);
            setTimeout(() => {
                card.style.transition = 'all 0.4s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, idx * 100);
        });

        loadMoreBtn.style.display = visibleCount >= orderedProjects.length ? 'none' : 'inline-flex';
        loadLessBtn.style.display = visibleCount > 4 ? 'inline-flex' : 'none';
    };

    loadLessBtn.onclick = () => {
        const cards = Array.from(cardsContainer.children);
        const removeCount = Math.min(2, visibleCount - 4);
        const cardsToRemove = cards.slice(-removeCount);

        cardsToRemove.forEach(card => card.remove());
        visibleCount -= removeCount;

        loadMoreBtn.style.display = visibleCount < orderedProjects.length ? 'inline-flex' : 'none';
        loadLessBtn.style.display = visibleCount > 4 ? 'inline-flex' : 'none';

        const lastCard = cardsContainer.children[visibleCount - 1];
        if (lastCard) lastCard.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };

    window.addEventListener('resize', renderProjects);
});
