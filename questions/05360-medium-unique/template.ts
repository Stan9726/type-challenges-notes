type In<T extends unknown[], U> = T extends [infer F, ...infer R]
  ? Equal<U, F> extends true
    ? true
    : In<R, U>
  : false

type Unique<T extends unknown[], R extends unknown[] = []> = T extends [
  infer F,
  ...infer Rest,
]
  ? In<R, F> extends true
    ? Unique<Rest, R>
    : Unique<Rest, [...R, F]>
  : R
