// type MinusOne<T extends number, R extends number[] = []> = T extends R['length']
//   ? R extends [infer F, ...infer L]
//     ? L['length']
//     : 0
//   : MinusOne<T, [...R, 0]>

type MinusOneMap = {
  '0': '9'
  '1': '0'
  '2': '1'
  '3': '2'
  '4': '3'
  '5': '4'
  '6': '5'
  '7': '6'
  '8': '7'
  '9': '8'
}

type StrToArr<T extends string> = T extends `${infer F}${infer R}`
  ? [F, ...StrToArr<R>]
  : []

type ArrToStr<T extends unknown[]> = T extends [infer F, ...infer R]
  ? F extends string
    ? R extends string[]
      ? `${F}${ArrToStr<R>}`
      : F
    : ''
  : ''

type Decrease<T extends string> = StrToArr<T> extends [...infer H, infer L]
  ? L extends '0'
    ? H extends string[]
      ? [
          ...(Decrease<ArrToStr<H>> extends ['0'] ? [] : Decrease<ArrToStr<H>>),
          MinusOneMap[L],
        ]
      : never
    : L extends keyof MinusOneMap
      ? [...H, MinusOneMap[L]]
      : never
  : never

type StrToLengthArr<
  T extends string,
  R extends any[] = [],
> = `${R['length']}` extends T ? R : StrToLengthArr<T, [...R, 1]>

type PraseInt<
  T,
  R extends unknown[] = [],
> = T extends `${infer Head}${infer Rest}`
  ? PraseInt<Rest, [...XTen<R>, ...StrToLengthArr<Head>]>
  : R['length']

type XTen<T extends unknown[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
]

type MinusOne<T extends number> = PraseInt<
  ArrToStr<Decrease<ArrToStr<StrToArr<`${T}`>>>>
>
