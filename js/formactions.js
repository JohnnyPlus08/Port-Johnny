// ==========================================================================
// FORMAÇÃO & CERTIFICAÇÕES SECTION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const sectionContainer = document.getElementById('formaction');
    if (!sectionContainer) return;

    const formactionHTML = `
        <div class="title reveal">
            <h2>Formação & Certificações</h2>
            <p class="subtitle">
                Minha trajetória de capacitação técnica, acadêmica e contínua evolução em <br>
                <span class="highlight">TECNOLOGIA, DESENVOLVIMENTO E INOVAÇÃO</span>
            </p>
        </div>

        <div class="filter-buttons reveal">
            <button id="btnCertifications" class="active">
                <i class="fas fa-certificate"></i> Certificações
            </button>
            <button id="btnAcademic">
                <i class="fas fa-graduation-cap"></i> Acadêmico
            </button>
        </div>

        <div class="formation-section">
            <!-- ABA 1: CERTIFICAÇÕES -->
            <div class="formation-container" style="display: grid;">
                <!-- Destaque 1: Certificado Cisco / Python Institute -->
                <div class="certification-card featured-cert reveal">
                    <span class="featured-cert-badge">
                        <i class="fas fa-check-circle"></i> Verificado Oficial
                    </span>
                    <h3>Fundamentos do Python 1</h3>
                    <span class="institution-year">
                        <i class="fab fa-python" style="color: #38bdf8;"></i> Cisco Networking Academy & Python Institute • 2025
                    </span>
                    <p>
                        Certificação internacional em programação Python concedida a <strong>Johnny da Silva Franco de Lima</strong> 
                        através do programa <strong>Cisco Networking Academy</strong> em parceria com o <strong>Python Institute (OpenEDG)</strong>, 
                        oferecido pela <strong>Fatec-217-Diadema-Luigi Papaiz</strong> sob instrução do Prof. <em>Lucio Nunes de Lira</em>. Concluído em 11/11/2025.
                    </p>

                    <div class="specialty-tags">
                        <span>Python 3</span>
                        <span>Cisco Academy</span>
                        <span>Python Institute</span>
                        <span>Lógica & Algoritmos</span>
                    </div>

                    <div class="cert-action-links">
                        <a href="assets/certificado-python-cisco-fatec.pdf" target="_blank" rel="noopener noreferrer" class="cert-link-btn">
                            <i class="fas fa-file-pdf"></i> Abrir PDF Oficial
                        </a>
                        <button class="cert-link-btn" id="btnOpenPythonCertModal">
                            <i class="fas fa-eye"></i> Ver Certificado
                        </button>
                    </div>
                </div>

                <!-- Destaque 2: Certificado Fundação Bradesco -->
                <div class="certification-card featured-cert reveal">
                    <span class="featured-cert-badge">
                        <i class="fas fa-check-circle"></i> Verificado Oficial
                    </span>
                    <h3>Empreendedorismo e Inovação</h3>
                    <span class="institution-year">
                        <i class="fas fa-building-columns"></i> Fundação Bradesco | Escola Virtual • 2026
                    </span>
                    <p>
                        Curso autoinstrucional com carga horária de <strong>12 horas</strong>, concluído com êxito em 17/09/2026. 
                        Capacitação voltada a identificação de oportunidades estratégicas, metodologias de inovação, 
                        modelagem de valor e resolução criativa de problemas aplicados à tecnologia.
                    </p>

                    <div class="cert-auth-box">
                        <span class="cert-auth-label">Código de Autenticidade Oficial:</span>
                        <div class="cert-auth-code">
                            <code id="bradescoCode">AD18B544-995F-4B84-AB2C-3CD1428BB7BD</code>
                            <button class="btn-copy-code" id="btnCopyCode" title="Copiar código de autenticidade">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>

                    <div class="cert-action-links">
                        <a href="https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?uid=14172294&p=aVdKWvrLGag0TpkjaGnuYU9vrRfFbVfJ" target="_blank" rel="noopener noreferrer" class="cert-link-btn">
                            <i class="fas fa-external-link-alt"></i> Validar no Portal EV
                        </a>
                        <button class="cert-link-btn" id="btnOpenCertModal">
                            <i class="fas fa-file-invoice"></i> Ver Detalhes
                        </button>
                    </div>
                </div>

                <div class="certification-card reveal">
                    <h3>Desenvolvimento Web & Fundamentos</h3>
                    <span class="institution-year">
                        <i class="fas fa-code"></i> Rocketseat Discover • 2025/2026
                    </span>
                    <p>
                        Programa intensivo de formação em tecnologias Web essenciais: estruturação semântica com HTML5, 
                        estilização avançada com CSS3 moderno (Flexbox/Grid, responsividade), e manipulação de DOM com JavaScript.
                    </p>
                    <div class="specialty-tags">
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript ES6+</span>
                    </div>
                </div>

                <div class="certification-card reveal">
                    <h3>Redes de Computadores & Conectividade</h3>
                    <span class="institution-year">
                        <i class="fas fa-network-wired"></i> Capacitação Técnica em TI
                    </span>
                    <p>
                        Fundamentos de arquitetura de redes, modelo OSI/TCP-IP, protocolos HTTP/HTTPS, DNS, DHCP, 
                        configuração de roteadores, cabeamento estruturado e boas práticas de segurança em redes locais.
                    </p>
                    <div class="specialty-tags">
                        <span>TCP/IP</span>
                        <span>DNS / DHCP</span>
                        <span>Roteamento</span>
                    </div>
                </div>

                <div class="certification-card reveal">
                    <h3>Suporte & Manutenção de Sistemas Operacionais</h3>
                    <span class="institution-year">
                        <i class="fas fa-desktop"></i> Qualificação Profissional em Informática
                    </span>
                    <p>
                        Configuração e otimização de ambientes Windows e Linux, gerenciamento de permissões, políticas de grupo, 
                        manutenção preventiva e corretiva de hardware e rotinas de backup.
                    </p>
                    <div class="specialty-tags">
                        <span>Windows</span>
                        <span>Linux</span>
                        <span>Hardware</span>
                    </div>
                </div>
            </div>

            <!-- ABA 2: ACADÊMICO -->
            <div class="formation-academic" style="display: none;">
                <div class="formation-card featured-cert reveal">
                    <span class="featured-cert-badge" style="background: linear-gradient(135deg, #00d2ff, #3a7bd5);">
                        <i class="fas fa-graduation-cap"></i> Ensino Superior
                    </span>
                    <h3>Desenvolvimento de Software em Multiplataformas</h3>
                    <span class="institution-year">
                        <i class="fas fa-university"></i> Fatec Luigi Papaiz • 2025 - Cursando (3° Semestre)
                    </span>
                    <p>
                        Curso Superior de Tecnologia com ênfase em engenharia de software, desenvolvimento Web e Mobile, 
                        modelagem de banco de dados (relacional e não relacional), segurança de aplicações, 
                        DevOps, integração contínua (CI/CD) e computação em nuvem.
                    </p>
                    <div class="specialty-tags">
                        <span>Fatec Luigi Papaiz</span>
                        <span>Multiplataforma</span>
                        <span>Web & Mobile</span>
                        <span>DevOps</span>
                    </div>
                </div>

                <div class="formation-card reveal">
                    <span class="featured-cert-badge" style="background: linear-gradient(135deg, #10b981, #059669);">
                        <i class="fas fa-check-circle"></i> Concluído
                    </span>
                    <h3>Curso Técnico em Informática</h3>
                    <span class="institution-year">
                        <i class="fas fa-school"></i> Etec Juscelino Kubitschek de Oliveira • Concluído em 2012
                    </span>
                    <p>
                        Formação técnica profissionalizante com ênfase em arquitetura de computadores, redes locais de computadores, 
                        manutenção de hardware, configuração de sistemas operacionais (Windows/Linux), lógica de programação e suporte técnico especializado.
                    </p>
                    <div class="specialty-tags">
                        <span>Etec JK</span>
                        <span>Suporte & Hardware</span>
                        <span>Redes Locais</span>
                        <span>Sistemas Operacionais</span>
                    </div>
                </div>

                <div class="formation-card reveal">
                    <span class="featured-cert-badge" style="background: linear-gradient(135deg, #7928ca, #ec4899);">
                        <i class="fas fa-language"></i> Idiomas
                    </span>
                    <h3>Comunicação Técnica & Idiomas</h3>
                    <span class="institution-year">
                        <i class="fas fa-globe"></i> Inglês & Espanhol • Nível Intermediário
                    </span>
                    <p>
                        Capacidade de leitura e interpretação intermediária de documentações técnicas de desenvolvimento, 
                        especificações de APIs, bibliotecas, repositórios internacionais e comunicação técnica na área de T.I.
                    </p>
                    <div class="specialty-tags">
                        <span>Inglês Técnico</span>
                        <span>Espanhol</span>
                        <span>Interpretação & Leitura</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal de Visualização do Certificado Python / Cisco -->
        <div id="pythonCertModalOverlay" class="contact-popup-overlay">
            <div class="contact-popup-card" style="max-width: 680px; text-align: left; padding: 30px;">
                <div class="popup-content">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px;">
                        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; color: #fff; display: flex; align-items: center; gap: 8px;">
                            <i class="fab fa-python" style="color: var(--color-primary);"></i>
                            Certificado Oficial Cisco & Python Institute
                        </h4>
                        <button id="btnClosePythonCertModal" style="background: none; border: none; color: var(--text-muted); font-size: 1.8rem; cursor: pointer; line-height: 1;">&times;</button>
                    </div>

                    <div style="margin-bottom: 16px; border-radius: 12px; overflow: hidden; border: 1px solid rgba(0, 210, 255, 0.35); box-shadow: 0 6px 25px rgba(0,0,0,0.6);">
                        <img src="assets/certificado-python-cisco-fatec.png" alt="Certificado Fundamentos do Python 1 - Johnny da Silva Franco de Lima" style="width: 100%; height: auto; display: block;">
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                        <span style="font-size: 0.85rem; color: var(--text-muted);">
                            <i class="fas fa-calendar-check" style="color: #10b981; margin-right: 6px;"></i> Concluído em 11 Nov 2025 • Fatec Diadema
                        </span>
                        <a href="assets/certificado-python-cisco-fatec.pdf" target="_blank" rel="noopener noreferrer" class="btn-primary-hero" style="font-size: 0.88rem; padding: 10px 20px; text-decoration: none;">
                            <i class="fas fa-file-pdf"></i> Abrir PDF Original
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal de Visualização do Certificado Bradesco -->
        <div id="certModalOverlay" class="contact-popup-overlay">
            <div class="contact-popup-card" style="max-width: 550px; text-align: left;">
                <div class="popup-content">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 15px;">
                        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; color: #fff;">
                            <i class="fas fa-certificate" style="color: var(--color-primary); margin-right: 8px;"></i>
                            Comprovante Oficial
                        </h4>
                        <button id="btnCloseCertModal" style="background: none; border: none; color: var(--text-muted); font-size: 1.8rem; cursor: pointer; line-height: 1;">&times;</button>
                    </div>

                    <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(0, 210, 255, 0.2); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                        <p style="font-size: 0.85rem; color: var(--color-primary); font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">Fundação Bradesco | Escola Virtual</p>
                        <h3 style="font-size: 1.2rem; color: #fff; margin-bottom: 10px;">Certificado de Conclusão</h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 12px; line-height: 1.6;">
                            Certificamos que <strong>JOHNNY DA SILVA FRANCO DE LIMA</strong> concluiu o curso autoinstrucional 
                            <strong>EMPREENDEDORISMO E INOVAÇÃO</strong>, com carga horária de <strong>12 hora(s)</strong>, no período de 17/09/2026 a 17/09/2026.
                        </p>
                        <p style="font-size: 0.82rem; color: var(--text-dim); margin-bottom: 6px;">Osasco, 17 de setembro de 2026</p>
                        <div style="font-family: monospace; font-size: 0.82rem; color: #10b981; background: rgba(16, 185, 129, 0.1); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.25);">
                            Autenticidade: AD18B544-995F-4B84-AB2C-3CD1428BB7BD
                        </div>
                    </div>

                    <div style="display: flex; gap: 12px; justify-content: flex-end;">
                        <a href="https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateContent.aspx?uid=14172294&p=aVdKWvrLGag0TpkjaGnuYU9vrRfFbVfJ" target="_blank" rel="noopener noreferrer" class="btn-primary-hero" style="font-size: 0.85rem; padding: 10px 18px;">
                            <i class="fas fa-check-circle"></i> Abrir Certificado Original
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    sectionContainer.innerHTML = formactionHTML;

    // Alternador de Abas
    const btnAcademic = document.getElementById('btnAcademic');
    const btnCertifications = document.getElementById('btnCertifications');
    const academicSection = sectionContainer.querySelector('.formation-academic');
    const certificationSection = sectionContainer.querySelector('.formation-container');

    btnAcademic.addEventListener('click', () => {
        academicSection.style.display = 'grid';
        certificationSection.style.display = 'none';
        btnAcademic.classList.add('active');
        btnCertifications.classList.remove('active');
    });

    btnCertifications.addEventListener('click', () => {
        academicSection.style.display = 'none';
        certificationSection.style.display = 'grid';
        btnCertifications.classList.add('active');
        btnAcademic.classList.remove('active');
    });

    // Copiar código de autenticidade
    const btnCopyCode = document.getElementById('btnCopyCode');
    const bradescoCode = document.getElementById('bradescoCode');

    if (btnCopyCode && bradescoCode) {
        btnCopyCode.addEventListener('click', () => {
            navigator.clipboard.writeText(bradescoCode.textContent.trim()).then(() => {
                const originalHtml = btnCopyCode.innerHTML;
                btnCopyCode.innerHTML = '<i class="fas fa-check" style="color: #10b981;"></i>';
                setTimeout(() => {
                    btnCopyCode.innerHTML = originalHtml;
                }, 2000);
            });
        });
    }

    // Modal de Detalhes do Certificado Bradesco
    const certModalOverlay = document.getElementById('certModalOverlay');
    const btnOpenCertModal = document.getElementById('btnOpenCertModal');
    const btnCloseCertModal = document.getElementById('btnCloseCertModal');

    if (btnOpenCertModal && certModalOverlay) {
        btnOpenCertModal.addEventListener('click', () => {
            certModalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (btnCloseCertModal && certModalOverlay) {
        btnCloseCertModal.addEventListener('click', () => {
            certModalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (certModalOverlay) {
        certModalOverlay.addEventListener('click', (e) => {
            if (e.target === certModalOverlay) {
                certModalOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Modal de Detalhes do Certificado Python / Cisco
    const pythonCertModalOverlay = document.getElementById('pythonCertModalOverlay');
    const btnOpenPythonCertModal = document.getElementById('btnOpenPythonCertModal');
    const btnClosePythonCertModal = document.getElementById('btnClosePythonCertModal');

    if (btnOpenPythonCertModal && pythonCertModalOverlay) {
        btnOpenPythonCertModal.addEventListener('click', () => {
            pythonCertModalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (btnClosePythonCertModal && pythonCertModalOverlay) {
        btnClosePythonCertModal.addEventListener('click', () => {
            pythonCertModalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (pythonCertModalOverlay) {
        pythonCertModalOverlay.addEventListener('click', (e) => {
            if (e.target === pythonCertModalOverlay) {
                pythonCertModalOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
