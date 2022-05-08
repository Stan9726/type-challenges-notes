type Includes<T extends readonly unknown[], U> = T extends [
  infer First,
  ...infer Rest,
]
  ? true extends Equal<First, U>
    ? true
    : Includes<Rest, U>
  : false

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
