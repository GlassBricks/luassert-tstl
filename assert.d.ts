/** @noSelfInFile */

declare namespace assert {
  // individual assertion functions are added in other files via declaration merging
  interface Assertions {}

  interface Chaining {
    readonly is: this;
    readonly are: this;
    readonly was: this;
    readonly has: this;
    readonly does: this;

    readonly not: this;
    readonly no: this;

    readonly is_not: this;
    readonly are_not: this;
    readonly was_not: this;
    readonly has_not: this;
    readonly does_not: this;

    readonly is_no: this;
    readonly are_no: this;
    readonly was_no: this;
    readonly has_no: this;
    readonly does_no: this;
  }
  type Phrases<T extends string> = T | Capitalize<T> | `${keyof Chaining}_${T}`;

  type Fluent<T> = {
    [P in keyof T as P extends string ? Phrases<P> : never]: T[P];
  } & Chaining;

  /** @noSelf */
  interface Assert extends Fluent<Assertions> {
    <V>(this: void, v: V): Exclude<V, undefined | null | false>;
    <V, A extends any[]>(this: void, v: V, ...args: A): LuaMultiReturn<
      [Exclude<V, undefined | null | false>, ...A]
    >;
  }
}

declare var assert: assert.Assert;
