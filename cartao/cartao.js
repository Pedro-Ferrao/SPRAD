(function () {
    const aviso = document.querySelector(".aviso");

    let timer;
    function mostrar(msg, tempo) {
        aviso.textContent = msg;
        aviso.hidden = false;
        clearTimeout(timer);
        timer = setTimeout(() => { aviso.hidden = true; }, tempo || 2500);
    }

    // Salvar contato: nenhum site grava direto na agenda, então cada sistema usa o caminho nativo.
    // Android abre "Adicionar contato" preenchido; iPhone abre o .vcf na tela de contato do sistema;
    // no PC não há agenda, então orienta a usar o QR Code no celular.
    const salvar = document.querySelector("[data-salvar]");
    if (salvar) {
        const ua = navigator.userAgent;
        const android = /Android/i.test(ua);
        const ios = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);

        salvar.addEventListener("click", (e) => {
            if (ios) return;
            e.preventDefault();
            if (android) {
                const vcf = new URL(salvar.getAttribute("href"), location.href).href;
                location.href = salvar.dataset.android + "S.browser_fallback_url=" + encodeURIComponent(vcf) + ";end";
                return;
            }
            mostrar("Para salvar o contato, escaneie o QR Code com o celular.", 4000);
            const qr = document.querySelector(".qr-bloco");
            if (qr) {
                qr.scrollIntoView({ behavior: "smooth", block: "center" });
                qr.classList.remove("destaque");
                void qr.offsetWidth;
                qr.classList.add("destaque");
            }
        });
    }

    // Compartilhar cartão: usa o compartilhamento nativo e, sem ele, copia o link.
    const botao = document.querySelector("[data-compartilhar]");
    if (!botao) return;

    function copiarAntigo(texto) {
        const campo = document.createElement("textarea");
        campo.value = texto;
        campo.setAttribute("readonly", "");
        campo.style.position = "fixed";
        campo.style.opacity = "0";
        document.body.appendChild(campo);
        campo.select();
        let ok = false;
        try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
        campo.remove();
        return ok;
    }

    async function copiar(url) {
        try {
            await navigator.clipboard.writeText(url);
            mostrar("Link copiado!");
        } catch (e) {
            mostrar(copiarAntigo(url) ? "Link copiado!" : url);
        }
    }

    botao.addEventListener("click", async () => {
        const { titulo, texto, url } = botao.dataset;
        if (navigator.share) {
            try {
                await navigator.share({ title: titulo, text: texto, url });
                return;
            } catch (e) {
                if (e.name === "AbortError") return;
            }
        }
        copiar(url);
    });
})();
