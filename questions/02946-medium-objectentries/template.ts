// type ObjectEntries<T, K = keyof T> = K extends keyof T ? [K, T[K]] : never
type ObjectEntries<T> = {
  [P in keyof T]-?: [
    P,
    Exclude<T[P], undefined> extends never ? T[P] : Exclude<T[P], undefined>,
  ]
}[keyof T]
