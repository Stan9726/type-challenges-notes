type ReverseArguments<T extends unknown[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : []
type FlipArguments<T extends Function> = T extends (...args: any) => unknown
  ? (...args: ReverseArguments<Parameters<T>>) => ReturnType<T>
  : never
