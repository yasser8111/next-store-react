export function fixImageUrl(url) {
  if (!url) return "/public/img/hero.png";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://res.cloudinary.com/dxbelrmq1/image/upload/${url}`;
}