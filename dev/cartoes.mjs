// Gera os cartões digitais estáticos em /cartao (HTML, .vcf e QR Code embutido).
// Uso: npm install && npm run cartoes
// Para adicionar um cartão, inclua uma entrada em CARTOES e rode o script de novo.
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const OUT = fileURLToPath(new URL("../cartao/", import.meta.url));
const SITE = "https://www.sprad.com.br";
// Onde os cartões estão publicados hoje. Prévia de compartilhamento (Open Graph) e o botão
// Compartilhar usam este endereço, porque www.sprad.com.br ainda está na HostGator.
// Quando o domínio for apontado para a Vercel, troque para PUBLICO = SITE e rode de novo.
const PUBLICO = "https://sprad.vercel.app";
const AZUL_QR = "#0b3a66";

const COMERCIAL = ["(16) 98200-0886", "5516982000886"];
const FIXO = ["(16) 3419-3804", "551634193804"];

const CARTOES = [
  {
    slug: "sprad",
    arquivo: "index.html",
    path: "/cartao",
    titulo: "Cartão Digital | SP Rad",
    descricao: "Acesse o cartão digital da SP Rad e entre em contato com nossa equipe de proteção radiológica.",
    nome: "SP Rad",
    cargo: "Serviços em Proteção Radiológica",
    whatsapp: COMERCIAL,
    contatos: [
      ["Celular / WhatsApp", COMERCIAL],
      ["Telefone fixo", FIXO],
    ],
    email: "sprad@sprad.com.br",
    qrRotulo: "QR Code da SP Rad",
    empresa: true,
  },
  {
    slug: "plferrao",
    arquivo: "plferrao.html",
    path: "/cartao/plferrao",
    titulo: "Paulo Leandro Ferrão | SP Rad",
    descricao: "Cartão digital de Paulo Leandro Ferrão, Tecnólogo Responsável da SP Rad. Acesse os contatos.",
    nome: "Paulo Leandro Ferrão",
    sobrenome: "Ferrão",
    prenome: "Paulo Leandro",
    cargo: "Tecnólogo Responsável",
    whatsapp: ["(16) 98137-7485", "5516981377485"],
    contatos: [
      ["Celular / WhatsApp", ["(16) 98137-7485", "5516981377485"]],
      ["Celular comercial", COMERCIAL],
    ],
    email: "paulo@sprad.com.br",
    qrRotulo: "QR Code individual",
    empresa: false,
  },
];

const REDES = [
  ["Instagram", "https://www.instagram.com/sprad.protecaoradiologica/", "instagram",
    '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/>' +
    '<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/>' +
    '<circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/>'],
  ["LinkedIn", "https://br.linkedin.com/company/sprad-protecaoradiologica", "linkedin",
    '<rect x="3.5" y="9" width="3.5" height="11" fill="currentColor"/>' +
    '<circle cx="5.25" cy="5.25" r="2.05" fill="currentColor"/>' +
    '<path fill="currentColor" d="M9.5 9h3.3v1.6c.5-.9 1.7-1.9 3.6-1.9 3.4 0 4.1 2.2 4.1 5.2V20H17v-5.3c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V20H9.5z"/>'],
  ["Facebook", "https://www.facebook.com/sprad.com.br/?locale=pt_BR", "facebook",
    '<path fill="currentColor" d="M14 8.5V6.8c0-.8.5-1.3 1.4-1.3H17V2.2c-.4-.1-1.6-.2-2.7-.2-2.5 0-4.1 1.5-4.1 4.3v2.2H7.5V12h2.7v10H14V12h2.8l.4-3.5z"/>'],
];

const ICONES = {
  whatsapp: '<path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>',
  compartilhar: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>' +
    '<path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
  site: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',
  seta: '<path d="M7 17L17 7M8 7h9v9"/>',
};

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;" };
const escape = (texto) => String(texto).replace(/[&<>"']/g, (ch) => ESCAPES[ch]);

function icone(nome, classe = "ico") {
  const traco = nome === "whatsapp" ? "" : ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  return `<svg class="${classe}" viewBox="0 0 24 24" aria-hidden="true"${traco}>${ICONES[nome]}</svg>`;
}

async function qrSvg(url) {
  const svg = await QRCode.toString(url, {
    type: "svg", errorCorrectionLevel: "M", margin: 4, color: { dark: AZUL_QR, light: "#ffffff" },
  });
  return svg.trim().replace("<svg ", `<svg role="img" aria-label="QR Code para ${escape(url)}" class="qr" `);
}

function vcard(c) {
  const linhas = ["BEGIN:VCARD", "VERSION:3.0"];
  if (c.empresa) {
    linhas.push("N:;;;;", "FN:SP Rad", "ORG:SP Rad - Serviços em Proteção Radiológica", "X-ABShowAs:COMPANY");
  } else {
    linhas.push(`N:${c.sobrenome};${c.prenome};;;`, `FN:${c.nome}`, "ORG:SP Rad - Serviços em Proteção Radiológica", `TITLE:${c.cargo}`);
  }
  for (const [, [, numero]] of c.contatos) {
    const tipo = numero === FIXO[1] ? "WORK,VOICE" : (numero === COMERCIAL[1] && !c.empresa ? "WORK,CELL" : "CELL");
    linhas.push(`TEL;TYPE=${tipo}:+${numero}`);
  }
  linhas.push(`EMAIL;TYPE=INTERNET,WORK:${c.email}`, `URL:${SITE}`, `URL:${SITE}${c.path}`, "END:VCARD");
  return linhas.join("\r\n") + "\r\n";
}

async function pagina(c) {
  const url = SITE + c.path;
  const urlPublica = PUBLICO + c.path;
  const t = escape(c.titulo), d = escape(c.descricao);
  const waNum = c.whatsapp[1];
  let contatos = c.contatos.map(([rotulo, [exibe, numero]]) =>
    `<li><span class="rotulo">${escape(rotulo)}</span><a href="tel:+${numero}">${escape(exibe)}</a></li>`
  ).join("");
  contatos += `<li><span class="rotulo">E-mail</span><a href="mailto:${c.email}">${c.email}</a></li>`;
  const redes = REDES.map(([nome, href, classe, svg]) =>
    `<a class="rede rede-${classe}" href="${href}" target="_blank" rel="noopener" aria-label="${nome} da SP Rad">` +
    `<svg viewBox="0 0 24 24" aria-hidden="true">${svg}</svg></a>`
  ).join("");
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TN8BWZRL');</script>
<!-- End Google Tag Manager -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t}</title>
    <meta name="description" content="${d}">
    <meta name="robots" content="noindex, follow">
    <link rel="canonical" href="${url}">
    <link rel="shortcut icon" type="image/png" href="/imagens/icon.png">
    <meta name="theme-color" content="#0b3a66">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:site_name" content="SP Rad">
    <meta property="og:title" content="${t}">
    <meta property="og:description" content="${d}">
    <meta property="og:url" content="${urlPublica}">
    <meta property="og:image" content="${PUBLICO}/miniaturas/cartao.jpeg">
    <meta property="og:image:secure_url" content="${PUBLICO}/miniaturas/cartao.jpeg">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="1200">
    <meta property="og:image:alt" content="SP Rad | Cartão digital">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${t}">
    <meta name="twitter:description" content="${d}">
    <meta name="twitter:image" content="${PUBLICO}/miniaturas/cartao.jpeg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap">
    <link rel="stylesheet" href="/cartao/cartao.css">
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TN8BWZRL"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<main class="cartao">
    <div class="topo">
        <header class="logo">
            <a href="${SITE}"><img src="/imagens/logo-site.jpg" width="1208" height="475" alt="SP Rad - Serviços em Proteção Radiológica"></a>
        </header>

        <section class="faixa">
            <p class="sobre">Cartão digital · SP Rad</p>
            <h1>${escape(c.nome)}</h1>
            <p class="cargo">${escape(c.cargo)}</p>
            <p class="slogan">Segurança · Credibilidade · Qualidade</p>
        </section>
    </div>

    <div class="corpo">
    <div class="conteudo">
        <div class="acoes">
            <a class="btn btn-whats" href="https://wa.me/${waNum}" target="_blank" rel="noopener">${icone("whatsapp")}WhatsApp</a>
            <button class="btn btn-compartilhar" type="button" data-compartilhar data-titulo="${t}" data-texto="${d}" data-url="${urlPublica}">${icone("compartilhar")}Compartilhar cartão</button>
        </div>

        <ul class="contatos">${contatos}</ul>

        <div class="bloco-site">
            <a class="btn btn-site" href="${SITE}" target="_blank" rel="noopener">${icone("site")}Visitar nosso site${icone("seta", "ico seta")}</a>
            <p class="legenda">www.sprad.com.br</p>
        </div>

        <div class="bloco-redes">
            <h2>Acompanhe a SP Rad</h2>
            <div class="redes">${redes}</div>
        </div>
    </div>

    <section class="qr-bloco">
        <h2>${escape(c.qrRotulo)}</h2>
        ${await qrSvg(url)}
        <p class="legenda pequena">${url.replace(".com.br/", ".com.br/<wbr>")}</p>
    </section>
    </div>

    <footer class="rodape"><a href="${SITE}">www.sprad.com.br</a></footer>
</main>

<div class="aviso" role="status" aria-live="polite" hidden></div>
<script src="/cartao/cartao.js" defer></script>
</body>
</html>
`;
}

await mkdir(OUT, { recursive: true });
for (const c of CARTOES) {
  await writeFile(OUT + c.arquivo, await pagina(c), "utf8");
  await writeFile(OUT + `${c.slug}.vcf`, vcard(c), "utf8");
  console.log(SITE + c.path);
}
