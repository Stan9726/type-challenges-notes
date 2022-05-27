type TupleToNestedObject<T extends unknown[], U> = T extends [
  infer F,
  ...infer R,
]
  ? Record<F & string, TupleToNestedObject<R, U>>
  : U
