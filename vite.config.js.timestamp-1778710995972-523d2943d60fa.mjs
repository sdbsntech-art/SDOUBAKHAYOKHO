// vite.config.js
import { defineConfig } from "file:///C:/Users/princ/OneDrive/Desktop/sdbsndev/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/princ/OneDrive/Desktop/sdbsndev/node_modules/@vitejs/plugin-react/dist/index.js";
import tailwindcss from "file:///C:/Users/princ/OneDrive/Desktop/sdbsndev/node_modules/@tailwindcss/vite/dist/index.mjs";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
var __vite_injected_original_import_meta_url = "file:///C:/Users/princ/OneDrive/Desktop/sdbsndev/vite.config.js";
var __dirname = path.dirname(fileURLToPath(__vite_injected_original_import_meta_url));
var docRoot = path.resolve(__dirname, "document");
function documentsPlugin() {
  return {
    name: "sdbsn-documents",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const raw = req.url?.split("?")[0] ?? "";
        if (!raw.startsWith("/document/")) {
          next();
          return;
        }
        const rel = decodeURIComponent(raw.slice("/document/".length));
        if (rel.includes("..") || path.isAbsolute(rel)) {
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
        res.setHeader("Content-Type", "application/pdf");
        fs.createReadStream(resolved).pipe(res);
      });
    },
    closeBundle() {
      if (!fs.existsSync(docRoot)) return;
      const dest = path.join(__dirname, "dist", "document");
      fs.mkdirSync(dest, { recursive: true });
      for (const name of fs.readdirSync(docRoot)) {
        const src = path.join(docRoot, name);
        if (fs.statSync(src).isFile()) {
          fs.copyFileSync(src, path.join(dest, name));
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/SDOUBAKHAYOKHO/" : "/",
  plugins: [react(), tailwindcss(), documentsPlugin()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwcmluY1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHNkYnNuZGV2XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwcmluY1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHNkYnNuZGV2XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9wcmluYy9PbmVEcml2ZS9EZXNrdG9wL3NkYnNuZGV2L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJztcbmltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xuXG5jb25zdCBfX2Rpcm5hbWUgPSBwYXRoLmRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKTtcbmNvbnN0IGRvY1Jvb3QgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnZG9jdW1lbnQnKTtcblxuZnVuY3Rpb24gZG9jdW1lbnRzUGx1Z2luKCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdzZGJzbi1kb2N1bWVudHMnLFxuICAgIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcbiAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJhdyA9IHJlcS51cmw/LnNwbGl0KCc/JylbMF0gPz8gJyc7XG4gICAgICAgIGlmICghcmF3LnN0YXJ0c1dpdGgoJy9kb2N1bWVudC8nKSkge1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVsID0gZGVjb2RlVVJJQ29tcG9uZW50KHJhdy5zbGljZSgnL2RvY3VtZW50LycubGVuZ3RoKSk7XG4gICAgICAgIGlmIChyZWwuaW5jbHVkZXMoJy4uJykgfHwgcGF0aC5pc0Fic29sdXRlKHJlbCkpIHtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gcGF0aC5yZXNvbHZlKHBhdGguam9pbihkb2NSb290LCByZWwpKTtcbiAgICAgICAgY29uc3Qgcm9vdFJlc29sdmVkID0gcGF0aC5yZXNvbHZlKGRvY1Jvb3QpO1xuICAgICAgICBpZiAoIXJlc29sdmVkLnN0YXJ0c1dpdGgocm9vdFJlc29sdmVkKSkge1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKHJlc29sdmVkKSB8fCAhZnMuc3RhdFN5bmMocmVzb2x2ZWQpLmlzRmlsZSgpKSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vcGRmJyk7XG4gICAgICAgIGZzLmNyZWF0ZVJlYWRTdHJlYW0ocmVzb2x2ZWQpLnBpcGUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2xvc2VCdW5kbGUoKSB7XG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZG9jUm9vdCkpIHJldHVybjtcbiAgICAgIGNvbnN0IGRlc3QgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnZGlzdCcsICdkb2N1bWVudCcpO1xuICAgICAgZnMubWtkaXJTeW5jKGRlc3QsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGZzLnJlYWRkaXJTeW5jKGRvY1Jvb3QpKSB7XG4gICAgICAgIGNvbnN0IHNyYyA9IHBhdGguam9pbihkb2NSb290LCBuYW1lKTtcbiAgICAgICAgaWYgKGZzLnN0YXRTeW5jKHNyYykuaXNGaWxlKCkpIHtcbiAgICAgICAgICBmcy5jb3B5RmlsZVN5bmMoc3JjLCBwYXRoLmpvaW4oZGVzdCwgbmFtZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogcHJvY2Vzcy5lbnYuR0lUSFVCX0FDVElPTlMgPyAnL1NET1VCQUtIQVlPS0hPLycgOiAnLycsXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCB0YWlsd2luZGNzcygpLCBkb2N1bWVudHNQbHVnaW4oKV0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1QsU0FBUyxvQkFBb0I7QUFDblYsT0FBTyxXQUFXO0FBQ2xCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQUxxSyxJQUFNLDJDQUEyQztBQU9wUCxJQUFNLFlBQVksS0FBSyxRQUFRLGNBQWMsd0NBQWUsQ0FBQztBQUM3RCxJQUFNLFVBQVUsS0FBSyxRQUFRLFdBQVcsVUFBVTtBQUVsRCxTQUFTLGtCQUFrQjtBQUN6QixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixnQkFBZ0IsUUFBUTtBQUN0QixhQUFPLFlBQVksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTO0FBQ3pDLGNBQU0sTUFBTSxJQUFJLEtBQUssTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLO0FBQ3RDLFlBQUksQ0FBQyxJQUFJLFdBQVcsWUFBWSxHQUFHO0FBQ2pDLGVBQUs7QUFDTDtBQUFBLFFBQ0Y7QUFDQSxjQUFNLE1BQU0sbUJBQW1CLElBQUksTUFBTSxhQUFhLE1BQU0sQ0FBQztBQUM3RCxZQUFJLElBQUksU0FBUyxJQUFJLEtBQUssS0FBSyxXQUFXLEdBQUcsR0FBRztBQUM5QyxlQUFLO0FBQ0w7QUFBQSxRQUNGO0FBQ0EsY0FBTSxXQUFXLEtBQUssUUFBUSxLQUFLLEtBQUssU0FBUyxHQUFHLENBQUM7QUFDckQsY0FBTSxlQUFlLEtBQUssUUFBUSxPQUFPO0FBQ3pDLFlBQUksQ0FBQyxTQUFTLFdBQVcsWUFBWSxHQUFHO0FBQ3RDLGVBQUs7QUFDTDtBQUFBLFFBQ0Y7QUFDQSxZQUFJLENBQUMsR0FBRyxXQUFXLFFBQVEsS0FBSyxDQUFDLEdBQUcsU0FBUyxRQUFRLEVBQUUsT0FBTyxHQUFHO0FBQy9ELGVBQUs7QUFDTDtBQUFBLFFBQ0Y7QUFDQSxZQUFJLFVBQVUsZ0JBQWdCLGlCQUFpQjtBQUMvQyxXQUFHLGlCQUFpQixRQUFRLEVBQUUsS0FBSyxHQUFHO0FBQUEsTUFDeEMsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLGNBQWM7QUFDWixVQUFJLENBQUMsR0FBRyxXQUFXLE9BQU8sRUFBRztBQUM3QixZQUFNLE9BQU8sS0FBSyxLQUFLLFdBQVcsUUFBUSxVQUFVO0FBQ3BELFNBQUcsVUFBVSxNQUFNLEVBQUUsV0FBVyxLQUFLLENBQUM7QUFDdEMsaUJBQVcsUUFBUSxHQUFHLFlBQVksT0FBTyxHQUFHO0FBQzFDLGNBQU0sTUFBTSxLQUFLLEtBQUssU0FBUyxJQUFJO0FBQ25DLFlBQUksR0FBRyxTQUFTLEdBQUcsRUFBRSxPQUFPLEdBQUc7QUFDN0IsYUFBRyxhQUFhLEtBQUssS0FBSyxLQUFLLE1BQU0sSUFBSSxDQUFDO0FBQUEsUUFDNUM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU0sUUFBUSxJQUFJLGlCQUFpQixxQkFBcUI7QUFBQSxFQUN4RCxTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztBQUNyRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
