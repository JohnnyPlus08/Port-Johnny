// ==========================================================================
// SKILLS & TOOLS SECTION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const sectionContainer = document.getElementById('skills');
    if (!sectionContainer) return;

    const skillsHTML = `
        <div class="skills-wrapper">
            <div class="title reveal">
                <h2>Habilidades & Ferramentas</h2>
                <p class="subtitle">
                    Tecnologias, softwares e ferramentas práticas que utilizo para construir <br>
                    <span class="highlight">SOLUÇÕES DIGITAIS MODERNAS, SEGURAS E EFICIENTES</span>
                </p>
            </div>

            <div class="carousel-container reveal">
                <div class="carousel">
                    <!-- Slide 1: Front-End -->
                    <div class="carousel-slide active">
                        <h3>Front-End <span class="category-badge">Interfaces & Web</span></h3>
                        <div class="skills-list">
                            <div class="skill-card">
                                <i class="fab fa-html5"></i>
                                <span class="skill-name">HTML5</span>
                                <span class="skill-level">Semântico</span>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-css3-alt"></i>
                                <span class="skill-name">CSS3</span>
                                <span class="skill-level">Flex & Grid</span>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-js-square"></i>
                                <span class="skill-name">JavaScript</span>
                                <span class="skill-level">ES6+ Moderno</span>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-react"></i>
                                <span class="skill-name">React</span>
                                <span class="skill-level">Componentes</span>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-bootstrap"></i>
                                <span class="skill-name">Bootstrap</span>
                                <span class="skill-level">Framework</span>
                            </div>
                            <div class="skill-card">
                                <svg class="skill-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 33" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.463 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"/>
                                </svg>
                                <span class="skill-name">Tailwind</span>
                                <span class="skill-level">Utilitários</span>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-figma"></i>
                                <span class="skill-name">Figma</span>
                                <span class="skill-level">Prototipagem</span>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-mobile-alt"></i>
                                <span class="skill-name">Mobile First</span>
                                <span class="skill-level">Responsivo</span>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: Back-End & Dados -->
                    <div class="carousel-slide">
                        <h3>Back-End & Dados <span class="category-badge">Lógica & Armazenamento</span></h3>
                        <div class="skills-list">
                            <div class="skill-card">
                                <i class="fab fa-node-js"></i>
                                <span class="skill-name">Node.js</span>
                                <span class="skill-level">Runtime JS</span>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-python"></i>
                                <span class="skill-name">Python</span>
                                <span class="skill-level">Scripts & Dados</span>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-database"></i>
                                <span class="skill-name">SQL / MySQL</span>
                                <span class="skill-level">Bancos Relacionais</span>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-fire"></i>
                                <span class="skill-name">Firebase</span>
                                <span class="skill-level">BaaS & Auth</span>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-network-wired"></i>
                                <span class="skill-name">REST APIs</span>
                                <span class="skill-level">Integrações</span>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-file-code"></i>
                                <span class="skill-name">JSON</span>
                                <span class="skill-level">Estrutura Dados</span>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 3: Ferramentas & Infraestrutura -->
                    <div class="carousel-slide">
                        <h3>Infra & Ferramentas <span class="category-badge">Suporte & Ambientes</span></h3>
                        <div class="skills-list">
                            <div class="skill-card">
                                <i class="fab fa-git-alt"></i>
                                <span class="skill-name">Git</span>
                                <span class="skill-level">Controle de Versão</span>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-github"></i>
                                <span class="skill-name">GitHub</span>
                                <span class="skill-level">Repositórios</span>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-code"></i>
                                <span class="skill-name">VS Code</span>
                                <span class="skill-level">Editor Principal</span>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-windows"></i>
                                <span class="skill-name">Windows</span>
                                <span class="skill-level">Config & Suporte</span>
                            </div>
                            <div class="skill-card">
                                <i class="fab fa-linux"></i>
                                <span class="skill-name">Linux</span>
                                <span class="skill-level">Básico & Servidores</span>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-server"></i>
                                <span class="skill-name">Redes & TCP/IP</span>
                                <span class="skill-level">Roteamento & LAN</span>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-tools"></i>
                                <span class="skill-name">Hardware TI</span>
                                <span class="skill-level">Manutenção & Reparo</span>
                            </div>
                            <div class="skill-card">
                                <i class="fas fa-lightbulb"></i>
                                <span class="skill-name">Inovação</span>
                                <span class="skill-level">Bradesco EV</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="carousel-btn prev" aria-label="Slide Anterior">&#10094;</button>
                <button class="carousel-btn next" aria-label="Próximo Slide">&#10095;</button>

                <div class="carousel-indicators"></div>
            </div>
        </div>
    `;

    sectionContainer.innerHTML = skillsHTML;

    // Inicialização do Carrossel Interativo
    const carousel = sectionContainer.querySelector(".carousel");
    const slides = sectionContainer.querySelectorAll(".carousel-slide");
    const prevBtn = sectionContainer.querySelector(".prev");
    const nextBtn = sectionContainer.querySelector(".next");
    const indicatorsContainer = sectionContainer.querySelector(".carousel-indicators");

    let currentIndex = 0;
    let autoplayInterval;

    // Cria os indicadores / dots
    slides.forEach((_, index) => {
        const indicator = document.createElement("span");
        indicator.classList.add("indicator");
        if (index === 0) indicator.classList.add("active");
        indicator.setAttribute("aria-label", `Slide ${index + 1}`);
        indicator.addEventListener("click", () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = sectionContainer.querySelectorAll(".indicator");

    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
        slides.forEach((slide, idx) => slide.classList.toggle("active", idx === currentIndex));
        indicators.forEach((dot, idx) => dot.classList.toggle("active", idx === currentIndex));
    }

    function moveSlide(step) {
        currentIndex = (currentIndex + step + slides.length) % slides.length;
        updateCarousel();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(() => moveSlide(1), 5000);
    }

    function stopAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
    }

    if (prevBtn) prevBtn.addEventListener("click", () => {
        moveSlide(-1);
        startAutoplay();
    });

    if (nextBtn) nextBtn.addEventListener("click", () => {
        moveSlide(1);
        startAutoplay();
    });

    // Pausa no mouse hover
    const carouselContainer = sectionContainer.querySelector(".carousel-container");
    if (carouselContainer) {
        carouselContainer.addEventListener("mouseenter", stopAutoplay);
        carouselContainer.addEventListener("mouseleave", startAutoplay);
    }

    // Suporte a swipe touch em mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    }, { passive: true });

    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            moveSlide(1);
        } else if (touchEndX - touchStartX > 50) {
            moveSlide(-1);
        }
        startAutoplay();
    }, { passive: true });

    updateCarousel();
    startAutoplay();
});
