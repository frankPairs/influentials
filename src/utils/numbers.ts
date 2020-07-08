function formatCompact(number: number) {
  // @ts-ignore
  const intlNum = new Intl.NumberFormat(window.navigator.language, { notation: 'compact' });

  return intlNum.format(number);
}

export { formatCompact };
