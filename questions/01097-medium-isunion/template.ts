type IsUnion<T, U = T> = T extends T ? ([U] extends [T] ? false : true) : never
