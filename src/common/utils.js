export function signed(num) {
  return Number.isFinite(num) ? `${num > 0 ? '+' : ''}${num}` : '';
}

export function mod(score) {
  return Number.isFinite(score) ? Math.floor(score / 2) - 5 : '';
}

export function sum(...values) {
  return values.reduce((s, v) => (s + (v || 0)), 0);
}

export function roll(num, sides, highest) {
  return sum(...[...Array(num)]
    .map(() => Math.ceil(Math.random() * sides))
    .sort()
    .reverse()
    .slice(0, highest || num));
}
