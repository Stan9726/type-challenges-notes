type Combination<
  T extends string[],
  U extends string = T[number],
  P extends string = U,
> = U | (P extends P ? `${P} ${Combination<T, Exclude<U, P>>}` : never)
