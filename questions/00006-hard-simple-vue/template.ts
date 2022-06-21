declare function SimpleVue<D, C, M>(options: {
  data: (this: {}) => D
  computed: C & ThisType<D>
  methods: M & ThisType<D & M & {
    [K in keyof C]: C[K] extends (...args: any[]) => unknown
      ? ReturnType<C[K]>
      : never
  }>
}): unknown
