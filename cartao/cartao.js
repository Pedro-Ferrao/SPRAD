// Compartilhar cartão: usa o compartilhamento nativo e, sem ele, copia o link.
(function () {
    const botao = document.querySelector("[data-compartilhar]");
    const aviso = document.querySelector(".aviso");
    if (!botao) return;

    let timer;
    function mostrar(msg) {
        aviso.textContent = msg;
        aviso.hidden = false;
        clearTimeout(timer);
        timer = setTimeout(() => { aviso.hidden = true; }, 2500);
    }

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
