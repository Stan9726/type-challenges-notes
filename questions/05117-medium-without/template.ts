type NumToArray<T> = T extends unknown[] ? T : [T]

type Without<
  T extends unknown[],
  U extends unknown | unknown[],
  Res extends unknown[] = [],
> = T extends [infer F, ...infer R]
  ? F extends NumToArray<U>[number]
    ? Without<R, U, [...Res]>
    : Without<R, U, [...Res, F]>
  : Res
