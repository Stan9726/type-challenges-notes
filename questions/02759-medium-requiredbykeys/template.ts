type RequiredByKeys<T, K = keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
} & {
  [P in keyof T as P extends K ? P : never]-?: T[P]
} extends infer R
  ? {
      [P in keyof R]: R[P]
    }
  : never
