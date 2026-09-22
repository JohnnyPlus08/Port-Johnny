// ==========================================================================
// EXPERIENCE SECTION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const sectionContainer = document.getElementById('experience');
    if (!sectionContainer) return;

    const experienceHTML = `
        <div class="title reveal">
            <h2>Experiência & Atuação</h2>
            <p class="subtitle">
                Conheça minhas áreas de atuação e como posso transformar <br>
                <span class="highlight">DESAFIOS TÉCNICOS EM SOLUÇÕES EFICIENTES E ESCALÁVEIS</span> <br>
                <span class="p">unindo tecnologia, infraestrutura, desenvolvimento e inovação.</span>
            </p>
        </div>

        <div class="experience-cards">
            <div class="experience-card reveal">
                <div class="icon-container">
                    <span role="img" aria-label="Desenvolvimento Web">💻</span>
                </div>
                <h3>Desenvolvimento Web & Front-End</h3>
                <p>
                    Construção de aplicações e sites modernos, rápidos e responsivos. Utilização das melhores 
                    práticas em HTML5 semântico, estilização com CSS3/Flexbox/Grid e dinamismo com JavaScript, 
                    garantindo acessibilidade e alta experiência de navegação em múltiplos dispositivos.
                </p>
                <div class="specialty-tags">
                    <span>HTML5 & CSS3</span>
                    <span>JavaScript</span>
                    <span>Responsividade</span>
                    <span>UI / UX</span>
                </div>
            </div>

            <div class="experience-card reveal">
                <div class="icon-container">
                    <span role="img" aria-label="Suporte Técnico">🛠️</span>
                </div>
                <h3>Suporte Técnico & Infraestrutura</h3>
                <p>
                    Experiência prática como Técnico em Informática em diagnóstico e reparo de hardware, 
                    configuração de sistemas operacionais (Windows/Linux), instalação de softwares corporativos, 
                    gestão de usuários, rotinas de backup e atendimento proativo ao cliente final.
                </p>
                <div class="specialty-tags">
                    <span>Hardware</span>
                    <span>Windows / Linux</span>
                    <span>Troubleshooting</span>
                    <span>Atendimento</span>
                </div>
            </div>

            <div class="experience-card reveal">
                <div class="icon-container">
                    <span role="img" aria-label="Empreendedorismo e Inovação">🚀</span>
                </div>
                <h3>Empreendedorismo & Inovação</h3>
                <p>
                    Capacitação especializada pela Fundação Bradesco em identificação de oportunidades, 
                    pensamento ágil, otimização contínua de processos e criação de valor em produtos e serviços. 
                    Capacidade de conectar necessidades de negócios a soluções digitais tangíveis.
                </p>
                <div class="specialty-tags">
                    <span>Fundação Bradesco</span>
                    <span>Gestão Ágil</span>
                    <span>Modelagem</span>
                    <span>Resolução de Problemas</span>
                </div>
            </div>

            <div class="experience-card reveal">
                <div class="icon-container">
                    <span role="img" aria-label="Redes e Segurança">🔒</span>
                </div>
                <h3>Redes & Segurança da Informação</h3>
                <p>
                    Configuração de redes locais (LAN/WLAN), roteadores, switches, endereçamento IP e 
                    implementação de medidas de segurança básica para prevenção de vulnerabilidades, 
                    garantindo disponibilidade, integridade de dados e estabilidade da infraestrutura.
                </p>
                <div class="specialty-tags">
                    <span>TCP/IP & DNS</span>
                    <span>Roteamento</span>
                    <span>Segurança Básica</span>
                    <span>Políticas de TI</span>
                </div>
            </div>
        </div>
    `;

    sectionContainer.innerHTML = experienceHTML;
});
