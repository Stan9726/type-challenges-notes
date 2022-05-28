type FlattenDepth<
  T extends unknown[],
  D extends number = 1,
  C extends unknown[] = [],
> = C['length'] extends D
  ? T
  : T extends [infer F, ...infer R]
    ? F extends unknown[]
      ? [...FlattenDepth<F, D, [...C, 1]>, ...FlattenDepth<R, D, C>]
      : [F, ...FlattenDepth<R, D, C>]
    : T
