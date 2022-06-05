type Trunc<T extends string | number> = `${T}` extends `${infer R}.${infer _}`
  ? R
  : `${T}`
