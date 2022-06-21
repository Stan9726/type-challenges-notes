type CurriedFn<F> = F extends (...args: infer A) => infer R
  ? A extends [infer F, ...infer Rest]
    ? (arg: F) => CurriedFn<(...args: Rest) => R>
    : R
  : never

declare function Currying<F>(fn: F): CurriedFn<F>
