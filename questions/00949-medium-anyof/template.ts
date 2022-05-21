type Falsy = 0 | '' | false | Record<any, never> | []

type AnyOf<T extends readonly unknown[]> = T[number] extends Falsy
  ? false
  : true
