/** Creates an empty stub. */
declare function stub<T extends Function = Function>(): stub.Stub<T>;

/** Given a table and index, stubs the function at the index. */
declare function stub<T extends Record<K, Function>, K extends keyof T>(
  table: T,
  key: K,
  func?: T[K]
): stub.Stub<T[K]>;
declare function stub<T extends Record<K, Function>, K extends keyof T>(
  table: T,
  key: K,
  func: Function
): stub.Stub<T[K]>;
declare function stub<T extends Record<K, Function>, K extends keyof T>(
  table: T,
  key: K,
  ...returnVals: spy.ReturnValsAsArgs<T[K]>
): stub.Stub<T[K]>;

declare namespace stub {
  import ReturnValsAsArguments = spy.ReturnValsMatching;
  /** @noSelf */
  interface StubSettings<T extends Function> {
    /** Specifies the return values for the stub. */
    returns(...values: ReturnValsAsArguments<T>): this;

    /** Specifies a function to call when the stub is called. */
    invokes(func: T): this;
  }

  /** @noSelf */
  interface StubObj<T extends Function> extends spy.SpyObj<T>, StubSettings<T> {
    /** Used to specify the behavior of the stub, by default. */
    readonly by_default: StubSettings<T>;

    /** Used to specify the behavior of the stub, when matching the given arguments. */
    on_call_with(...args: spy.ParameterMatching<T>): StubSettings<T>;
  }

  type Stub<T extends Function> = StubObj<T> & T;
}

declare namespace Assert {
  interface Assert {
    stub<T extends Function>(
      st: stub.Stub<T>,
      failureMessage?: string
    ): spy.SpyAssert<T>;
  }
}
