export function extractColors(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return { r, g, b };
}

export function addAlpha(hex, alpha) {
  const { r, g, b } = extractColors(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
