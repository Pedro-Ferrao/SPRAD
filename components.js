const headerHTML = `
<header>
    <div class="top-bar">
        <div class="container">

            <a href="index.html" class="logo-link">
                <div class="logo-wrapper">
                    <img src="Imagens/logo_site.jpeg" alt="SP Rad - Serviços em Proteção Radiológica">
                </div>
            </a>

            <div class="top-contacts">
                <a href="mailto:sprad@sprad.com.br" class="contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
                    </svg>
                    <span>sprad&#64;sprad.com.br</span>
                </a>
                <div class="contact-divider"></div>
                <a href="https://wa.me/5516982000886" class="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
                    aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>WhatsApp</title>
                    <desc>A color styled icon from Orion Icon Library.</desc>
                    <path data-name="layer1"
                    d="M30.19.031a31.753 31.753 0 0 0-26.735 46.12L.085 62.509A1.235 1.235 0 0 0 1.58 63.96l16.029-3.8A31.744 31.744 0 1 0 30.19.031zM49.316 49.31A24.871 24.871 0 0 1 20.68 54l-2.232-1.112-9.828 2.326 2.069-10.042-1.1-2.154a24.874 24.874 0 0 1 4.578-28.857A24.854 24.854 0 0 1 49.316 49.31zm0 0"
                    fill="#76D7D7"></path>
                    <path data-name="layer1" d="M47.147 38.619L41 36.854a2.292 2.292 0 0 0-2.267.6l-1.5 1.531a2.239 2.239 0 0 1-2.435.514C31.883 38.32 25.765 32.88 24.2 30.16a2.239 2.239 0 0 1 .177-2.483l1.312-1.7a2.292 2.292 0 0 0 .283-2.328L23.388 17.8a2.293 2.293 0 0 0-3.58-.82c-1.716 1.451-3.752 3.657-4 6.1-.436 4.308 1.411 9.738 8.4 16.258 8.071 7.534 14.534 8.528 18.743 7.509 2.387-.578 4.294-2.9 5.5-4.793a2.293 2.293 0 0 0-1.3-3.436z"
                    fill="#76D7D7"></path>
                    </svg>
                    (16) 98200-0886
                </a>
                <div class="contact-divider"></div>
                <a href="tel:+551634193804" class="contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
                    </svg>
                    (16) 3419-3804
                </a>
            </div>

            <button class="hamburger" id="hamburger" aria-label="Abrir menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

        </div>
    </div>

    <nav class="navbar" id="navbar">
        <div class="container">
            <ul class="nav-links" id="nav-links">
                <li><a href="index.html#home">Home</a></li>
                <li><a href="index.html#empresa">A Empresa</a></li>
                <li><a href="index.html#servicos">Serviços</a></li>
                <li><a href="index.html#downloads">downloads</a></li>
                <li><a href="index.html#contato">Contato</a></li>
            </ul>
        </div>
    </nav>
    <div class="navbar-border"></div>
</header>
`;

const footerHTML = `
<footer class="footer-main" id="contato">
    <div class="footer-container">

        <div class="footer-brand">
            <div class="footer-logo-text">
                <span class="logo-sp">SP</span><span class="logo-rad">Rad</span>
            </div>
            <p class="footer-slogan">Serviços em Proteção Radiológica</p>
        </div>

        <div class="footer-contacts">

            <div class="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Rua Rui Barbosa, 2495 – São Carlos-SP</span>
            </div>

            <div class="contact-group">
                <div class="contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
                    </svg>
                    <span>(16) 3419-3804</span>
                </div>
                <div class="contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
                    </svg>
                    <span>(16) 3419-3805</span>
                </div>
            </div>

            <div class="contact-group">
                <div class="contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="22 17 22 11 16 11 16 17 22 17"/>
                        <rect x="2" y="11" width="10" height="10" rx="1"/>
                        <path d="M6 11V4a1 1 0 0 1 1-1h7l5 5v3"/>
                        <line x1="6" y1="15" x2="6" y2="15"/>
                        <line x1="10" y1="15" x2="10" y2="15"/>
                        <line x1="6" y1="19" x2="6" y2="19"/>
                        <line x1="10" y1="19" x2="10" y2="19"/>
                    </svg>
                    <span>(16) 3419-3806</span>
                </div>
                <div class="contact-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                    <span>(16) 98200-0886</span>
                </div>
            </div>

        </div>
    </div>

    <div class="footer-bottom">
        <div class="footer-container flex-between">
            <p>Site Desenvolvido por <strong>Pedro Ferrão©</strong></p>
            <div class="social-links">
                <a href="https://www.facebook.com/sprad.com.br/?locale=pt_BR" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/sprad.protecaoradiologica/" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</footer>
`;

// ─── Injeta os componentes ───
document.getElementById('header').innerHTML = headerHTML;
document.getElementById('footer').innerHTML = footerHTML;

// ─── Hamburguer (reinicializa após injeção) ───
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ─── Marca o link ativo conforme a página atual ───
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('#nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href').split('#')[0];
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});

