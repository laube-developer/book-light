export function getReadingLightColor(i: number): string {
  // Garante que o valor de entrada esteja no intervalo [-127, 127]
  const clampedI = Math.max(-127, Math.min(127, i));

  let r, g, b;

  if (clampedI >= 0) {
    // Cores quentes (branco a amarelo suave)
    const normalized = clampedI / 127;
    r = 255;
    g = Math.round(255 - (50 * normalized));
    b = Math.round(255 - (150 * normalized));
  } else {
    // Cores frias (branco a azul suave)
    const normalized = Math.abs(clampedI) / 127;
    r = Math.round(255 - (150 * normalized));
    g = Math.round(255 - (50 * normalized));
    b = 255;
  }

  // Função auxiliar para converter um número para uma string hexadecimal de 2 dígitos
  const toHex = (c: number): string => {
    const hex = Math.max(0, c).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}