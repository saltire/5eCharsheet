export function signed(num) {
  return Number.isFinite(num) ? `${num > 0 ? '+' : ''}${num}` : '';
}

export function mod(score) {
  return Number.isFinite(score) ? Math.floor(score / 2) - 5 : '';
}

export function range(size) {
  return [...Array(size)];
}

export function sum(...values) {
  return values.reduce((s, v) => (s + (v || 0)), 0);
}

export function roll(num, sides, highest) {
  return sum(...range(num)
    .map(() => Math.ceil(Math.random() * sides))
    .sort()
    .reverse()
    .slice(0, highest || num));
}

export function commas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
