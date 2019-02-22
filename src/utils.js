export function mod(score) {
  const modVal = score ? Math.floor(score / 2) - 5 : '';
  const sign = score ? (modVal > 0 ? '+' : (modVal < 0 ? '-' : '')) : '';

  return `${sign}${modVal}`;
}

export function roll(num, sides, highest) {
  return [...Array(num)]
    .map(() => Math.ceil(Math.random() * sides))
    .sort()
    .reverse()
    .slice(0, highest || num)
    .reduce((sum, value) => (sum + value), 0);
}
