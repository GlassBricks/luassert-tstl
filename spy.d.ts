/** @noSelfInFile */

/** Shorthand spy constructor. Creates a spy on a new empty function. */
declare function spy<
  T extends Function = (this: any, ...args: any) => any
>(): spy.Spy<T>;
/** Shorthand spy constructor. Spies on the specified callable function. */
declare function spy<T extends Function>(callback: T): spy.Spy<T>;

declare namespace spy {
  import Matcher = match.Matcher;
  import Fluent = assert.Fluent;

  interface ArgList {
    readonly vals: readonly unknown[];
    readonly refs: readonly unknown[];
  }

  // WITH self
  interface SpyObj<T extends Function> {
    /** Stops spying reverting the target function back to its original state. */
    revert(): T;

    /** Clears all records of calls and return values. */
    clear(): this;

    /** The parameters called on the function. */
    readonly calls: readonly ArgList[];
    /** The return values of the spied function. */
    readonly returnvals: readonly unknown[];
  }

  /** Represents a spied function. */
  type Spy<T extends Function> = SpyObj<T> & T;

  type ValueOrMatcher<T> = {
    [K in keyof T]: T[K] | match.Matcher;
  };

  type ReturnVals<T> = T extends (...args: any) => infer R ? R : unknown;

  type ReturnValsMatching<T> = T extends (...args: any) => infer R
    ? R extends LuaMultiReturn<infer A>
      ? ValueOrMatcher<A>
      : [R | Matcher]
    : [unknown];

  type ReturnValsAsArgs<T> = T extends (...args: any) => infer R
    ? R extends LuaMultiReturn<infer A>
      ? A
      : [R]
    : [unknown];

  type Parameters<T> = T extends (...args: infer A) => any ? A : unknown[];

  type ParameterMatching<T> = T extends (...args: infer A) => any
    ? ValueOrMatcher<A>
    : [unknown];

  /** @noSelf */
  interface SpyAssertions<T extends Function> {
    /**
     * Checks every time the spied upon function has been called for the specified return value(s).
     *
     * Can be used with matchers.
     */
    returned_with(...arguments: ReturnValsMatching<T>): ReturnVals<T>;
    returned_with(...arguments: unknown[]): ReturnVals<T>;

    /**
     * Checks every time the spied upon function has been called for the specified parameters.
     *
     * Can be used with matchers.
     */
    called_with(
      ...arguments: ParameterMatching<T>
    ): LuaMultiReturn<Parameters<T>>;
    called_with(...arguments: unknown[]): LuaMultiReturn<Parameters<T>>;

    /**
     * Whether the spied upon function has been called.
     * @param numberOfTimes The number of times this function is expected to be called.
     */
    called(numberOfTimes?: number): void;

    called_at_least(numberOfTimes: number): void;
    called_at_most(numberOfTimes: number): void;
    called_more_than(numberOfTimes: number): void;
    called_less_than(numberOfTimes: number): void;
  }

  type SpyAssert<T extends Function> = Fluent<SpyAssertions<T>>;

  /** Spies on the specified method within the specified table. */
  function on<T extends Record<K, Function>, K extends keyof T>(
    table: T,
    methodName: K
  ): Spy<T[K]>;

  function is_spy(value: unknown): value is Spy<Function>;
}

declare namespace assert {
  /** @noSelf */
  interface Assert {
    spy<T extends Function>(
      spy: spy.Spy<T>,
      failureMessage?: string
    ): spy.SpyAssert<T>;
  }
}
