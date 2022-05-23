type RemoveIndexSignature<T> = {
  [P in keyof T as P extends `${infer R}` ? R : never]: T[P]
}
