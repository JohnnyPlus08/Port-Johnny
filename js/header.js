// ==========================================================================
// HEADER & NAVIGATION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.desktop-header');
    const hamburger = document.querySelector('.hamburger-mobile');
    const sidebar = document.querySelector('.mobile-sidebar');
    const backdrop = document.querySelector('.mobile-sidebar-backdrop');
    const closeBtn = document.querySelector('.close-sidebar');
    const backToTopBtn = document.getElementById('backToTop');
    const navLinks = document.querySelectorAll('header nav ul li a, .mobile-sidebar ul li a');

    // Toggle Mobile Sidebar
    function toggleSidebar(open) {
        if (open) {
            sidebar.classList.add('open');
            backdrop.classList.add('active');
            hamburger.classList.add('open');
            document.body.style.overflow = 'hidden';
        } else {
            sidebar.classList.remove('open');
            backdrop.classList.remove('active');
            hamburger.classList.remove('open');
            document.body.style.overflow = '';
        }
    }

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const isOpen = sidebar.classList.contains('open');
            toggleSidebar(!isOpen);
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => toggleSidebar(false));
    }

    if (backdrop) {
        backdrop.addEventListener('click', () => toggleSidebar(false));
    }

    // Fechar ao clicar em qualquer link da sidebar
    document.querySelectorAll('.mobile-sidebar a').forEach(link => {
        link.addEventListener('click', () => toggleSidebar(false));
    });

    // Header Scrolled & Back to Top Button
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        // Header Blur & Shadow on Scroll
        if (scrollPos > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to Top Visibility
        if (backToTopBtn) {
            if (scrollPos > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Active Nav Indicator (ScrollSpy)
        const sections = document.querySelectorAll('section.full-screen');
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    });

    // Botão Voltar ao Topo
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
