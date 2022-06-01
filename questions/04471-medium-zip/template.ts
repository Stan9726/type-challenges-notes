type Zip<
  T extends unknown[],
  U extends unknown[],
  R extends unknown[] = [],
> = T extends [infer TF, ...infer TR]
  ? U extends [infer UF, ...infer UR]
    ? Zip<TR, UR, [...R, [TF, UF]]>
    : R
  : R
