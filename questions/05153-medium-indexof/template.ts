type IndexOf<T extends unknown[], U, R extends unknown[] = []> = T extends [
  infer F,
  ...infer Rest,
]
  ? Equal<F, U> extends true
    ? R['length']
    : IndexOf<Rest, U, [...R, F]>
  : -1
