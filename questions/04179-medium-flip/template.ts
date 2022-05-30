type Flip<T extends Record<string, string | boolean | number>> = {
  [P in keyof T as `${T[P]}`]: P
}
