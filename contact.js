// ─── SP Rad | Contact Form  ───

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Máscaras de telefone
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    }
    e.target.value = value;
});

// Validação e envio do formulário
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('i');

    // Verifica reCAPTCHA
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        formStatus.textContent = '✕ Por favor, complete a verificação reCAPTCHA.';
        formStatus.className = 'form-status error';
        return;
    }

    // Estado de carregamento
    submitBtn.disabled = true;
    btnText.textContent = 'ENVIANDO...';
    btnIcon.className = 'fa-solid fa-spinner fa-spin';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    // Coleta os dados
    const formData = new FormData(contactForm);
    formData.append('g-recaptcha-response', recaptchaResponse);

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Sucesso
            formStatus.textContent = '✓ Mensagem enviada com sucesso! Entraremos em contato em breve.';
            formStatus.className = 'form-status success';
            contactForm.reset();
            grecaptcha.reset();

            // Animação de sucesso no botão
            btnText.textContent = 'ENVIADO';
            btnIcon.className = 'fa-solid fa-check';

            setTimeout(() => {
                btnText.textContent = 'ENVIAR MENSAGEM';
                btnIcon.className = 'fa-solid fa-paper-plane';
                submitBtn.disabled = false;
            }, 3000);

        } else {
            throw new Error('Erro ao enviar');
        }

    } catch (error) {
        // Erro
        formStatus.textContent = '✕ Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.';
        formStatus.className = 'form-status error';

        btnText.textContent = 'TENTAR NOVAMENTE';
        btnIcon.className = 'fa-solid fa-paper-plane';
        submitBtn.disabled = false;
        grecaptcha.reset();
    }
});

// Validação em tempo real
const inputs = contactForm.querySelectorAll('input[required], textarea[required]');

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (!input.value.trim()) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    input.addEventListener('input', () => {
        if (input.value.trim()) {
            input.classList.remove('error');
        }
    });
});

// Animação dos cards de contato ao hover
const infoItems = document.querySelectorAll('.info-item');

infoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('.info-icon i');
        icon.style.transform = 'scale(1.2) rotate(10deg)';
    });

    item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('.info-icon i');
        icon.style.transform = 'scale(1) rotate(0)';
    });
});