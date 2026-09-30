// Servidor local de desenvolvimento (npm run dev).
// Imita o .htaccess da HostGator: URLs sem .html, redirecionamentos e sem cache.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));
const PORT = Number(process.env.PORT) || 3000;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

// Mesmos redirecionamentos do .htaccess
const REDIRECTS = {
  "/sinalizacoes/sinalizacao-luminosa.pdf": "/sinalizacoes/luz-vermelha-entrada-proibida.pdf",
  "/sinalizacoes/suspeita-de-gravidez.pdf": "/sinalizacoes/aviso-gravidez-exame-radiologico.pdf",
  "/sinalizacoes/pacientes-acompanhantes.pdf": "/sinalizacoes/orientacoes-protecao-radiologica.pdf",
};

async function isFile(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

function redirect(res, location) {
  res.writeHead(301, { Location: location });
  res.end();
}

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let path = decodeURIComponent(url.pathname);

  const target = REDIRECTS[path.toLowerCase()];
  if (target) return redirect(res, target);

  // /index ou /index.html -> /
  if (/\/index(\.html)?$/i.test(path)) return redirect(res, path.replace(/index(\.html)?$/i, "") + url.search);
  // /pagina.html -> /pagina
  if (path.endsWith(".html")) return redirect(res, path.slice(0, -5) + url.search);

  if (path.endsWith("/")) path += "index.html";

  const file = normalize(join(ROOT, path));
  if (!file.startsWith(ROOT + sep)) {
    res.writeHead(403);
    return res.end("Acesso negado");
  }

  let found = null;
  if (await isFile(file)) found = file;
  else if (await isFile(file + ".html")) found = file + ".html";

  if (!found) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end(`404 - Não encontrado: ${path}`);
  }

  const body = await readFile(found);
  res.writeHead(200, {
    "Content-Type": TYPES[extname(found).toLowerCase()] || "application/octet-stream",
    "Cache-Control": "no-store",
  });
  res.end(body);
}).listen(PORT, () => {
  console.log(`SP Rad rodando em http://localhost:${PORT}`);
});
