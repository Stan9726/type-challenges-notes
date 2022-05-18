type AppendToObject<T extends Record<string, unknown>, U extends string, V> = {
  [P in keyof T | U]: P extends U ? V : T[P]
}
