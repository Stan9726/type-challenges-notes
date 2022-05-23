type ReplaceKeys<
  U extends Record<string, unknown>,
  T extends string,
  Y extends Record<string, unknown>,
> = {
  [P in keyof U]: P extends T ? (P extends keyof Y ? Y[P] : never) : U[P]
}
