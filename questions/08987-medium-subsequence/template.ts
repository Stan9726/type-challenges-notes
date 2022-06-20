type Subsequence<T extends unknown[]> = T extends [infer F, ...infer R]
  ? Subsequence<R> | [F, ...Subsequence<R>]
  : T
