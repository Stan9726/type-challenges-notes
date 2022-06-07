type Join<
  T extends unknown[],
  U extends string | number,
  Result extends string = '',
> = T extends [infer F, ...infer R]
  ? Join<R, U, `${Result}${Result extends '' ? '' : U}${F & string}`>
  : Result
