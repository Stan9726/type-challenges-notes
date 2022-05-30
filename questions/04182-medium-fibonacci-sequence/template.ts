type Fibonacci<
  T extends number,
  A extends number[] = [0, 0],
  P extends number[] = [0],
  C extends number[] = [0],
> = T extends 1
  ? 1
  : A['length'] extends T
    ? C['length']
    : Fibonacci<T, [...A, 0], C, [...P, ...C]>
