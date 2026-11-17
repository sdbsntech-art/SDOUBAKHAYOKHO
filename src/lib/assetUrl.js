/**
 * URL vers un fichier dans `public/asset/`.
 * Le nom doit correspondre exactement au fichier (extension .jpg, .jpeg, .jfif, etc.).
 */
export function assetUrl(filename) {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}asset/${encodeURIComponent(filename)}`;
}
