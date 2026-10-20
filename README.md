# SP Rad - Serviços em Proteção Radiológica

Este é o site institucional da **SP Rad**, uma empresa especializada em soluções de radioproteção. O projeto foi desenvolvido para oferecer uma interface moderna, facilitando o contato com clientes e apresentando os serviços de segurança e qualidade da empresa.

🔗 **Acesse o site:** [www.sprad.com.br](https://www.sprad.com.br)

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web fundamentais para garantir performance e SEO:

* **HTML5**: Estruturação semântica do conteúdo.
* **CSS3**: Estilização personalizada e design responsivo.
* **JavaScript**: Lógica para componentes interativos e dinamismo (sliders, máscaras de formulário, etc).

---

## 🛠️ Funcionalidades

* **Design Responsivo**: Adaptado para dispositivos móveis e desktop.
* **Slider Interativo**: Destaques visuais na página inicial para melhor engajamento.
* **Páginas Institucionais**:
    * **A Empresa**: História e valores.
    * **Serviços**: Detalhamento das soluções em proteção radiológica.
    * **Downloads**: Acesso a instruções normativas e materiais técnicos.
    * **Contato**: Formulário e links diretos para WhatsApp e E-mail.

---

## 📁 Estrutura do Projeto

```text
├── imagens/                # Logos, ícones e prévias das sinalizações
├── instrucoes-normativas/  # PDFs das INs e da RDC 611 (downloads)
├── miniaturas/             # Imagens de compartilhamento (Open Graph)
├── servicos/               # Imagens das páginas de serviço
├── sinalizacoes/           # PDFs das sinalizações (downloads)
├── slider/                 # Imagens do slider da página inicial
├── dev/server.mjs          # Servidor local (npm run dev), imita o .htaccess
├── .htaccess               # Regras do Apache (HostGator): HTTPS, URLs limpas, redirecionamentos
├── sitemap.xml / robots.txt
├── components.js           # Cabeçalho e rodapé compartilhados
├── contact.js              # Lógica do formulário de contato
├── slider.js               # Lógica do slider
├── style.css               # Folha de estilos principal
├── index.html              # Página principal (Home)
└── [outros arquivos .html] # Páginas secundárias (Empresa, Serviços, etc)
```

A pasta `alteracoes/` guarda o material enviado pelo cliente (documentos e artes originais). Ela fica fora do git e não deve ser enviada ao servidor.

## 💻 Rodando localmente

```bash
npm run dev   # http://localhost:3000
```

## 🚀 Publicação (HostGator)

Enviar para `public_html/` todos os arquivos do repositório, exceto `alteracoes/`, `dev/`, `README.md` e `package.json`. O servidor é Linux: os nomes de arquivos diferenciam maiúsculas de minúsculas, então mantenha tudo em minúsculas, sem espaços e sem acentos.
