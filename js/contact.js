// ==========================================================================
// CONTACT SECTION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const sectionContainer = document.getElementById('contact');
    if (!sectionContainer) return;

    const contactHTML = `
        <canvas id="contact-particles"></canvas>

        <div class="contact-content-wrapper">
            <div class="title reveal">
                <h2>Vamos Conversar?</h2>
                <p class="subtitle">
                    Disponível para novos projetos, suporte técnico e oportunidades profissionais.<br>
                    <span class="highlight">CONECTE-SE DIRETAMENTE COMIGO</span><br>
                    <span class="p">Será um prazer trocar ideias e encontrar as melhores soluções juntos.</span>
                </p>
            </div>

            <!-- Cards de Contato Direto -->
            <div class="quick-contact-cards reveal">
                <a href="https://wa.me/5511957928254?text=Ol%C3%A1%20Johnny,%20vim%20pelo%20seu%20portf%C3%B3lio!" target="_blank" rel="noopener noreferrer" class="quick-card whatsapp">
                    <div class="quick-icon">
                        <i class="fab fa-whatsapp"></i>
                    </div>
                    <div class="quick-info">
                        <h4>WhatsApp Direto</h4>
                        <p>+55 (11) 95792-8254</p>
                    </div>
                </a>

                <a href="mailto:guildy.jy@gmail.com" class="quick-card">
                    <div class="quick-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="quick-info">
                        <h4>E-mail Profissional</h4>
                        <p>guildy.jy@gmail.com</p>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/johnny-da-silva-franco-de-lima-8b07b759/" target="_blank" rel="noopener noreferrer" class="quick-card">
                    <div class="quick-icon">
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                    <div class="quick-info">
                        <h4>LinkedIn</h4>
                        <p>Johnny da Silva Lima</p>
                    </div>
                </a>
            </div>

            <!-- Formulário de Contato -->
            <form id="contactForm" class="contact-form reveal">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nome"><i class="fas fa-user"></i> Nome:</label>
                        <input type="text" id="nome" name="name" required placeholder="Digite seu nome completo">
                    </div>
                    <div class="form-group">
                        <label for="email"><i class="fas fa-envelope"></i> E-mail:</label>
                        <input type="email" id="email" name="email" required placeholder="Digite seu e-mail para retorno">
                    </div>
                </div>

                <div class="form-group">
                    <label for="assunto"><i class="fas fa-tag"></i> Assunto:</label>
                    <input type="text" id="assunto" name="assunto" required placeholder="Ex: Proposta de projeto / Oportunidade profissional">
                </div>

                <div class="form-group">
                    <label for="mensagem"><i class="fas fa-comment-dots"></i> Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows="5" required placeholder="Escreva sua mensagem com detalhes sobre a necessidade ou projeto..."></textarea>
                </div>

                <div class="form-group">
                    <button type="submit" id="btnSubmit" class="btn-submit">
                        <span>Enviar Mensagem</span>
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </form>
        </div>

        <!-- Popup Modal de Confirmação & Partículas -->
        <div id="contactPopupOverlay" class="contact-popup-overlay">
            <div class="contact-popup-card">
                <canvas id="popup-particles" class="popup-particles-canvas"></canvas>
                <div class="popup-content">
                    <div class="popup-icon">
                        <i class="fas fa-check"></i>
                    </div>
                    <h3 class="popup-title">Mensagem Enviada!</h3>
                    <p class="popup-text" id="popupMessage">
                        Obrigado pelo contato! Sua mensagem foi registrada com sucesso e retornarei o mais breve possível.
                    </p>
                    <button id="btnClosePopup" class="btn-popup-close">
                        Entendido
                    </button>
                </div>
            </div>
        </div>
    `;

    sectionContainer.innerHTML = contactHTML;

    // ==========================================================================
    // Efeito de Partículas Interativas em Canvas
    // ==========================================================================
    const canvas = document.getElementById('contact-particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = sectionContainer.offsetWidth;
        let height = canvas.height = sectionContainer.offsetHeight;

        const particles = [];
        const numParticles = 45;

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 3 + 1.5,
                color: Math.random() > 0.5 ? 'rgba(0, 210, 255, 0.45)' : 'rgba(121, 40, 202, 0.45)',
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8
            });
        }

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);

            // Desenhar linhas de conexão entre partículas próximas
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 210, 255, ${0.15 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Desenhar partículas
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;
            });

            requestAnimationFrame(drawParticles);
        }

        drawParticles();

        window.addEventListener('resize', () => {
            width = canvas.width = sectionContainer.offsetWidth;
            height = canvas.height = sectionContainer.offsetHeight;
        });
    }

    // ==========================================================================
    // Popup Modal & Partículas de Celebração
    // ==========================================================================
    const popupOverlay = document.getElementById('contactPopupOverlay');
    const btnClosePopup = document.getElementById('btnClosePopup');
    const popupCanvas = document.getElementById('popup-particles');
    let popupAnimId;

    function runPopupConfetti() {
        if (!popupCanvas) return;
        const pCtx = popupCanvas.getContext('2d');
        popupCanvas.width = popupCanvas.offsetWidth || 400;
        popupCanvas.height = popupCanvas.offsetHeight || 300;

        const confetti = [];
        const colors = ['#00d2ff', '#7928ca', '#00f2fe', '#10b981', '#ffffff'];

        for (let i = 0; i < 35; i++) {
            confetti.push({
                x: popupCanvas.width / 2,
                y: popupCanvas.height / 2,
                vx: (Math.random() - 0.5) * 8,
                vy: (Math.random() - 0.5) * 8 - 2,
                size: Math.random() * 5 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: 1
            });
        }

        function animateConfetti() {
            pCtx.clearRect(0, 0, popupCanvas.width, popupCanvas.height);
            let active = false;

            confetti.forEach(c => {
                c.x += c.vx;
                c.y += c.vy;
                c.vy += 0.15; // gravidade
                c.alpha -= 0.015;

                if (c.alpha > 0) {
                    active = true;
                    pCtx.save();
                    pCtx.globalAlpha = c.alpha;
                    pCtx.fillStyle = c.color;
                    pCtx.fillRect(c.x, c.y, c.size, c.size);
                    pCtx.restore();
                }
            });

            if (active) {
                popupAnimId = requestAnimationFrame(animateConfetti);
            }
        }

        animateConfetti();
    }

    function showPopup(nome) {
        const msgEl = document.getElementById('popupMessage');
        if (msgEl) {
            msgEl.innerHTML = `Obrigado pelo contato, <strong>${nome}</strong>!<br>Sua mensagem foi enviada e retornarei para você no e-mail informado.`;
        }

        popupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        runPopupConfetti();
    }

    function hidePopup() {
        popupOverlay.classList.remove('active');
        document.body.style.overflow = '';
        if (popupAnimId) cancelAnimationFrame(popupAnimId);
    }

    if (btnClosePopup) {
        btnClosePopup.addEventListener('click', hidePopup);
    }

    if (popupOverlay) {
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) hidePopup();
        });
    }

    // ==========================================================================
    // Envio do Formulário
    // ==========================================================================
    const form = document.getElementById('contactForm');
    const btnSubmit = document.getElementById('btnSubmit');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const originalText = btnSubmit.innerHTML;

            btnSubmit.innerHTML = '<span>Enviando...</span> <i class="fas fa-spinner fa-spin"></i>';
            btnSubmit.disabled = true;

            setTimeout(() => {
                btnSubmit.innerHTML = originalText;
                btnSubmit.disabled = false;
                form.reset();
                showPopup(nome);
            }, 800);
        });
    }
});
