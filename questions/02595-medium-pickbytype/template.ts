type PickByType<T extends Record<string, unknown>, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P]
}
