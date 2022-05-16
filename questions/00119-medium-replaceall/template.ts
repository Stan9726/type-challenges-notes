type ReplaceAll<
  S extends string,
  From extends string,
  To extends string,
> = From extends ''
  ? S
  : S extends `${infer Pre}${From}${infer Suf}`
    ? `${Pre}${To}${ReplaceAll<Suf, From, To>}`
    : S
