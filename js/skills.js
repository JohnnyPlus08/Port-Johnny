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
                                <i class="fas fa-wind"></i>
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
