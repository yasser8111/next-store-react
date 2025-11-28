export function fixImageUrl(filename) {
  if (!filename) return "../assets/logo.png";
  if (filename.startsWith("http://") || filename.startsWith("https://")) return filename;
  return `https://res.cloudinary.com/dxbelrmq1/image/upload/${filename}`;
}
