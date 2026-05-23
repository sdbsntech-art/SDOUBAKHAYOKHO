import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docRoot = path.resolve(__dirname, 'document');

function documentsPlugin() {
  return {
    name: 'sdbsn-documents',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const raw = req.url?.split('?')[0] ?? '';
        if (!raw.startsWith('/document/')) {
          next();
          return;
        }
        const rel = decodeURIComponent(raw.slice('/document/'.length));
        if (rel.includes('..') || path.isAbsolute(rel)) {
          next();
          return;
        }
        const resolved = path.resolve(path.join(docRoot, rel));
        const rootResolved = path.resolve(docRoot);
        if (!resolved.startsWith(rootResolved)) {
          next();
          return;
        }
        if (!fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
          next();
          return;
        }
        res.setHeader('Content-Type', 'application/pdf');
        fs.createReadStream(resolved).pipe(res);
      });
    },
    closeBundle() {
      if (!fs.existsSync(docRoot)) return;
      const dest = path.join(__dirname, 'dist', 'document');
      fs.mkdirSync(dest, { recursive: true });
      for (const name of fs.readdirSync(docRoot)) {
        const src = path.join(docRoot, name);
        if (fs.statSync(src).isFile()) {
          fs.copyFileSync(src, path.join(dest, name));
        }
      }
    },
  };
}

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/SDOUBAKHAYOKHO/' : '/',
  plugins: [react(), tailwindcss(), documentsPlugin()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
});
