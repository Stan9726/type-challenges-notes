type MyReturnType<T> = T extends (...args: any) => infer ReturnType
  ? ReturnType
  : never
