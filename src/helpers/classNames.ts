type Mods = Record<string, string | boolean>;

export function classNames(baseCls: string, mods: Mods, additional: string[] = []) {
  return [
    baseCls,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional
  ].join(' ');
}
