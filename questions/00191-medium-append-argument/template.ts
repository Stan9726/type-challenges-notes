type AppendArgument<Fn extends (...args: any) => unknown, A> = (
  ...args: [...Parameters<Fn>, A]
) => ReturnType<Fn>
