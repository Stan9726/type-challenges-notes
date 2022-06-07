type LastIndexOf<T extends unknown[], U> = T extends [...infer R, infer L]
  ? Equal<L, U> extends true
    ? R['length']
    : LastIndexOf<R, U>
  : -1
