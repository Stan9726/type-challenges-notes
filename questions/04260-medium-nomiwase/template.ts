// your answers
type Str2Union<
  A extends string,
  R extends string[] = [],
> = A extends `${infer Pre}${infer Suf}`
  ? Str2Union<Suf, [...R, Pre]>
  : [R[number]] extends [never]
      ? ''
      : R[number]

type CombinationTwo<A extends string, B extends string> =
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`

type AllCombinations<
  A extends string,
  B extends string = Str2Union<A>,
  C extends string = B,
> = B extends B ? '' | CombinationTwo<B, AllCombinations<Exclude<C, B>>> : never
