type KebabCase<
  S extends string,
  F extends string = '',
> = S extends `${infer L}${infer R}`
  ? L extends Lowercase<L>
    ? `${KebabCase<R, `${F}${L}`>}`
    : F extends ''
      ? `${KebabCase<R, `${Lowercase<L>}`>}`
      : `${KebabCase<R, `${F}-${Lowercase<L>}`>}`
  : F
