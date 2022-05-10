type MyParameters<T extends Function> = T extends (
  ...args: infer Args
) => unknown
  ? Args
  : never
