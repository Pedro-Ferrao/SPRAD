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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
                    </svg>
                    <span>sprad&#64;sprad.com.br</span>
                </a>
                <div class="contact-divider"></div>
                <a href="https://wa.me/5516982000886" target="_blank" class="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none">
                    <path d="M6.579 8.121c.209-.663.778-1.457 1.19-1.66.183-.09.319-.11.763-.11.522 0 .548.005.684.14.088.095.328.606.673 1.432.292.71.533 1.315.533 1.347 0 .146-.293.61-.627 1.002-.23.267-.365.47-.365.543 0 .068.167.381.376.69.506.757 1.44 1.696 2.167 2.177.568.376 1.582.867 1.785.867.152 0 .429-.272.992-.982.23-.287.434-.495.512-.511.068-.021.235.005.37.057.392.152 2.371 1.117 2.476 1.211.203.188.037 1.264-.267 1.702-.464.68-1.79 1.259-2.663 1.17-.636-.068-2.14-.564-3.117-1.029-1.253-.6-2.574-1.697-3.644-3.038-.611-.763-1.227-1.692-1.493-2.246-.36-.751-.491-1.331-.455-2 .016-.287.068-.631.11-.762Z" fill="currentColor"/>
                    <path clip-rule="evenodd" d="M.606 9.5C1.582 4.491 5.576.76 10.709.06c.705-.1 2.684-.068 3.368.046.715.126 1.66.371 2.24.59 3.832 1.426 6.663 4.72 7.466 8.683.35 1.729.272 3.755-.203 5.457-1.133 4.03-4.423 7.205-8.511 8.218-2.663.658-5.462.37-7.983-.81l-.617-.292-3.226 1.029C1.473 23.545.01 23.994 0 23.983c-.01-.01.45-1.415 1.029-3.112l1.05-3.096-.424-.84C.48 14.569.12 12.01.605 9.498Zm21.172-.408c-1.028-3.76-4.297-6.626-8.145-7.148-2.099-.282-4.078.037-5.9.956-4.417 2.234-6.522 7.341-4.93 11.957.204.59.752 1.702 1.092 2.213l.271.408-.605 1.775a69.688 69.688 0 0 0-.606 1.817c0 .026.84-.224 1.864-.548a99.767 99.767 0 0 1 1.9-.596c.022 0 .225.11.45.24 2.428 1.447 5.456 1.76 8.187.852a9.927 9.927 0 0 0 6.48-6.945 9.998 9.998 0 0 0-.058-4.98Z" fill="currentColor" fill-rule="evenodd"/>
                    </svg>'
                    (16) 98200-0886 
                </a>
                <div class="contact-divider"></div>
                <a href="tel:+551634193804" class="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    (16) 3419-3804
                </a>
            </div>

            <div class="mobile-actions">
                <a href="https://wa.me/5516982000886" class="whatsapp-mobile-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="22" height="22">
                        <path d="M30.19.031a31.753 31.753 0 0 0-26.735 46.12L.085 62.509A1.235 1.235 0 0 0 1.58 63.96l16.029-3.8A31.744 31.744 0 1 0 30.19.031zM49.316 49.31A24.871 24.871 0 0 1 20.68 54l-2.232-1.112-9.828 2.326 2.069-10.042-1.1-2.154a24.874 24.874 0 0 1 4.578-28.857A24.854 24.854 0 0 1 49.316 49.31z" fill="white"/>
                        <path d="M47.147 38.619L41 36.854a2.292 2.292 0 0 0-2.267.6l-1.5 1.531a2.239 2.239 0 0 1-2.435.514C31.883 38.32 25.765 32.88 24.2 30.16a2.239 2.239 0 0 1 .177-2.483l1.312-1.7a2.292 2.292 0 0 0 .283-2.328L23.388 17.8a2.293 2.293 0 0 0-3.58-.82c-1.716 1.451-3.752 3.657-4 6.1-.436 4.308 1.411 9.738 8.4 16.258 8.071 7.534 14.534 8.528 18.743 7.509 2.387-.578 4.294-2.9 5.5-4.793a2.293 2.293 0 0 0-1.3-3.436z" fill="white"/>
                    </svg>
                </a>
                <button class="hamburger" id="hamburger" aria-label="Abrir menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

        </div>
    </div>

    <nav class="navbar" id="navbar">
        <div class="container">
            <ul class="nav-links" id="nav-links">
                <li><a href="index.html#home">Home</a></li>
                <li><a href="index.html#empresa">Empresa</a></li>
                <li><a href="index.html#servicos">Serviços</a></li>
                <li><a href="index.html#downloads">Downloads</a></li>
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
            <div class="footer-logo">
                <img src="Imagens/Logo-sprad.png" alt="SP Rad">
            </div>
        </div>

        <div class="footer-contacts">
            <div class="contact-item">
                <a href="mailto:sprad@sprad.com.br" target="_blank" class="contact-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="4"/>
                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
                    </svg>
                    <span>sprad@sprad.com.br</span>
                </a>
            </div>

            <div class="contact-group">
                <div class="contact-item">
                    <a href="https://wa.me/5516982000886" target="_blank" class="contact-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
                            <path d="M30.19.031a31.753 31.753 0 0 0-26.735 46.12L.085 62.509A1.235 1.235 0 0 0 1.58 63.96l16.029-3.8A31.744 31.744 0 1 0 30.19.031zM49.316 49.31A24.871 24.871 0 0 1 20.68 54l-2.232-1.112-9.828 2.326 2.069-10.042-1.1-2.154a24.874 24.874 0 0 1 4.578-28.857A24.854 24.854 0 0 1 49.316 49.31z" fill="#76D7D7"/>
                            <path d="M47.147 38.619L41 36.854a2.292 2.292 0 0 0-2.267.6l-1.5 1.531a2.239 2.239 0 0 1-2.435.514C31.883 38.32 25.765 32.88 24.2 30.16a2.239 2.239 0 0 1 .177-2.483l1.312-1.7a2.292 2.292 0 0 0 .283-2.328L23.388 17.8a2.293 2.293 0 0 0-3.58-.82c-1.716 1.451-3.752 3.657-4 6.1-.436 4.308 1.411 9.738 8.4 16.258 8.071 7.534 14.534 8.528 18.743 7.509 2.387-.578 4.294-2.9 5.5-4.793a2.293 2.293 0 0 0-1.3-3.436z" fill="#76D7D7"/>
                        </svg>
                        <span>(16) 98200-0886</span>
                    </a>
                </div>
            </div>

            <div class="contact-group">
                <div class="contact-item">
                    <a href="tel:+551634193804" class="contact-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
                        </svg>
                        <span>(16) 3419-3804</span>
                    </a>
                </div>
            </div>

        </div>

    </div>

            <div class="social-links">
                <a href="https://www.facebook.com/sprad.com.br/?locale=pt_BR" target="blank" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                </a>

                <a href="https://www.instagram.com/sprad.protecaoradiologica/" target="_blank" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                </a>

                <a href="https://www.linkedin.com/company/sp-rad-servi%C3%A7os-em-prote%C3%A7%C3%A3o-radiol%C3%B3gica/?originalSubdomain=br" target="_blank" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                </a>
            </div>

    <div class="footer-bottom">
        <div class="footer-container flex-between">
            <p>Site Desenvolvido por <strong>Pedro Ferrão©</strong></p>

        </div>
    </div>
    
</footer>
`;

document.getElementById('header').innerHTML = headerHTML;
document.getElementById('footer').innerHTML = footerHTML;

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

const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('#nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href').split('#')[0];
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});