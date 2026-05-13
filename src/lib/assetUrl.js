/**
 * URL vers un fichier dans `public/asset/`.
 * Le nom doit correspondre exactement au fichier (extension .jpg, .jpeg, .jfif, etc.).
 */
export function assetUrl(filename) {
  return `/asset/${encodeURIComponent(filename)}`;
}
