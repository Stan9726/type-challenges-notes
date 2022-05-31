type GreaterThan<
  T extends number,
  U extends number,
  C extends number[] = [],
> = T extends U
  ? false
  : C['length'] extends T
    ? false
    : C['length'] extends U
      ? true
      : GreaterThan<T, U, [...C, 0]>
