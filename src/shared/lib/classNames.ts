type Mods = Record<string, string | boolean>;

export function classNames(baseCls: string, mods: Mods = {}, additional: string[] = []) {
  return [
    baseCls,
    ...Object.entries(mods)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional,
  ].join(' ');
}
