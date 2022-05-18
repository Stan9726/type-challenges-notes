type LengthOfString<
  S extends string,
  A extends string[] = [],
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...A, F]>
  : A['length']
