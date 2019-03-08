export function signed(num) {
  return Number.isFinite(num) ? `${num > 0 ? '+' : ''}${num}` : '';
}

export function mod(score) {
  return Number.isFinite(score) ? signed(Math.floor(score / 2) - 5) : '';
}

export function roll(num, sides, highest) {
  return [...Array(num)]
    .map(() => Math.ceil(Math.random() * sides))
    .sort()
    .reverse()
    .slice(0, highest || num)
    .reduce((sum, value) => (sum + value), 0);
}
