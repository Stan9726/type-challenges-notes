type Range<
  L extends number,
  A extends unknown[] = [],
  R = never,
> = A['length'] extends L
  ? R | A['length']
  : Range<L, [0, ...A], R | A['length']>

type NumberRange<L extends number, H extends number> =
  | Exclude<Range<H>, Range<L>>
  | L
