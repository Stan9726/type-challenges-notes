type Chunk<
  T extends unknown[],
  U extends number,
  C extends unknown[] = [],
> = T extends [infer F, ...infer R]
  ? C['length'] extends U
    ? [C, ...Chunk<T, U>]
    : Chunk<R, U, [...C, F]>
  : C extends []
    ? C
    : [C]
