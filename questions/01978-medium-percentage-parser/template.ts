type PercentageParser<
  A extends string,
  U extends [string, string, string] = ['', '', ''],
> = A extends `${infer F}${infer R}`
  ? F extends '+' | '-'
    ? PercentageParser<R, [F, U[1], U[2]]>
    : F extends '%'
      ? PercentageParser<R, [U[0], U[1], '%']>
      : PercentageParser<R, [U[0], `${U[1]}${F}`, U[2]]>
  : U
