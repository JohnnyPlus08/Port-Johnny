// ==========================================================================
// ABOUT ME / HERO SECTION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const sectionContainer = document.getElementById('aboutMe');
    if (!sectionContainer) return;

    const aboutMeHTML = `
        <div class="aboutMe-container">
            <div class="left-side">
                <div class="photo-container reveal">
                    <div class="photo-inner">
                        <img src="assets/johnny-real.jpg" alt="Johnny da Silva Franco de Lima" class="photo" id="avatarImg">
                    </div>
                    <div class="status-pill">
                        <span class="pulse-dot"></span>
                        <span>Disponível para Projetos</span>
                    </div>
                </div>

                <div class="social-icons reveal">
                    <a href="https://wa.me/5511957928254?text=Ol%C3%A1%20Johnny,%20vim%20pelo%20seu%20portf%C3%B3lio!" target="_blank" rel="noopener noreferrer" class="social-icon whatsapp" title="WhatsApp">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/johnny-da-silva-franco-de-lima-8b07b759/" target="_blank" rel="noopener noreferrer" class="social-icon linkedin" title="LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/JohnnyPlus08" target="_blank" rel="noopener noreferrer" class="social-icon github" title="Perfil no GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="mailto:guildy.jy@gmail.com" class="social-icon email" title="Enviar E-mail">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>

                <div class="hero-cta-buttons reveal">
                    <a href="https://wa.me/5511957928254?text=Ol%C3%A1%20Johnny,%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade!" target="_blank" rel="noopener noreferrer" class="btn-primary-hero">
                        <i class="fab fa-whatsapp"></i> Falar Comigo
                    </a>
                    <a href="#formaction" class="btn-secondary-hero">
                        <i class="fas fa-award"></i> Certificados
                    </a>
                </div>
            </div>

            <div class="right-side">
                <div class="greeting-label reveal">
                    <i class="fas fa-terminal"></i> Desenvolvedor & Técnico em TI
                </div>
                <h1 class="reveal">
                    Olá, eu sou <br>
                    <span class="highlight-name">Johnny Lima</span>
                </h1>

                <div class="typewriter-container reveal">
                    <span class="typewriter-prefix">Atuação em</span>
                    <span id="letreiro"></span>
                </div>

                <p class="description reveal">
                        Sou profissional de tecnologia com formação técnica em informática pela <strong>Etec Juscelino Kubitschek</strong>, 
                    estudante do 3° semestre de <strong>Desenvolvimento de Software em Multiplataformas na Fatec Luigi Papaiz</strong> e com certificações 
                    oficiais em <strong>Python (Cisco Academy / Python Institute)</strong> e <strong>Inovação</strong>. 
                    Atualmente, trabalho na <strong>Prefeitura de Diadema como Desenvolvedor Full Stack</strong>. 
                    Unindo visão prática de suporte, infraestrutura e <strong>engenharia de software</strong>, desenvolvo 
                    aplicações digitais eficientes, funcionais e com design moderno.
                </p>

                <div class="bio-highlights reveal">
                    <div class="highlight-card">
                        <i class="fab fa-python" style="color: #38bdf8;"></i>
                        <div class="info">
                            <span class="info-title">Cisco & Python Inst.</span>
                            <span class="info-desc">Fundamentos do Python 1</span>
                        </div>
                    </div>

                    <div class="highlight-card">
                        <i class="fas fa-graduation-cap"></i>
                        <div class="info">
                            <span class="info-title">Fatec Luigi Papaiz</span>
                            <span class="info-desc">Software Multiplataforma (3° Sem)</span>
                        </div>
                    </div>

                    <div class="highlight-card">
                        <i class="fas fa-certificate"></i>
                        <div class="info">
                            <span class="info-title">Fundação Bradesco</span>
                            <span class="info-desc">Empreendedorismo & Inovação</span>
                        </div>
                    </div>

                    <div class="highlight-card">
                        <i class="fas fa-code"></i>
                        <div class="info">
                            <span class="info-title">Desenvolvimento Web</span>
                            <span class="info-desc">HTML5, CSS3, JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    sectionContainer.innerHTML = aboutMeHTML;

    // Inicialização do Efeito Letreiro / Typewriter
    const letreiro = document.getElementById("letreiro");
    const textos = [
        "Desenvolvimento Web & Python",
        "Software Multiplataforma (FATEC)",
        "Técnico em Informática",
        "Suporte & Infraestrutura de TI",
        "Inovação & Empreendedorismo",
        "Front-End & UI Design",
        "Resolução de Problemas Técnicos"
    ];
    let index = 0;

    function escreverTexto() {
        if (!letreiro) return;
        let currentText = textos[index];
        let currentIndex = 0;

        function digitar() {
            if (currentIndex < currentText.length) {
                letreiro.textContent += currentText[currentIndex];
                currentIndex++;
                setTimeout(digitar, 80);
            } else {
                setTimeout(apagarTexto, 1400);
            }
        }

        function apagarTexto() {
            if (currentText.length > 0) {
                letreiro.textContent = currentText.slice(0, -1);
                currentText = letreiro.textContent;
                setTimeout(apagarTexto, 50);
            } else {
                index = (index + 1) % textos.length;
                setTimeout(escreverTexto, 400);
            }
        }

        digitar();
    }

    escreverTexto();

    // ScrollReveal
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.reveal', {
            duration: 900,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease-out',
            opacity: 0,
            scale: 0.98,
            reset: false,
            interval: 90
        });
    }
});
