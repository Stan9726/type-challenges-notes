// type Flatten<T extends unknown[]> = T extends [infer F, ...infer R]
//   ? F extends unknown[]
//     ? [...Flatten<F>, ...Flatten<R>]
//     : [F, ...Flatten<R>]
//   : T
type Flatten<T extends unknown[], U extends unknown[] = []> = T extends [
  infer F,
  ...infer R,
]
  ? F extends unknown[]
    ? Flatten<[...F, ...R], U>
    : Flatten<R, [...U, F]>
  : U
