type DropChar<
  S extends string,
  C extends string,
> = S extends `${infer Pre}${C}${infer Suf}` ? DropChar<`${Pre}${Suf}`, C> : S
