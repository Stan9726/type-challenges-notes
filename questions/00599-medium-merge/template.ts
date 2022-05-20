type Merge<F extends Record<any, any>, S extends Record<any, any>> = {
  [P in keyof F | keyof S]: P extends keyof S ? S[P] : F[P]
}
