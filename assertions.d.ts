/** @noSelfInFile */
declare namespace assert {
  /** @noSelf */
  interface Assertions {
    /** Assert that the given value is true. */
    true<T>(value: T, message?: string): T;
    /** Assert that the given value is false. */
    false<T>(value: T, message?: string): T;
    /** Assert that the given value is a boolean. */
    boolean<T>(value: T, message?: string): T;
    /** Assert that the given value is a number. */
    number<T>(value: T, message?: string): T;
    /** Assert that the given value is a string. */
    string<T>(value: T, message?: string): T;
    /** Assert that the given value is a table. */
    table<T>(value: T, message?: string): T;
    /** Assert that the given value is nil. */
    nil<T>(value: T, message?: string): T;
    /** Assert that the given value is userdata. */
    userdata<T>(value: T, message?: string): T;
    /** Assert that the given value is a function. */
    function<T>(value: T, message?: string): T;
    /** Assert that the given value is a thread. */
    thread<T>(value: T, message?: string): T;

    /** Assert that the number of arguments passed matches the given amount. */
    returned_arguments<T extends any[]>(
      amount: number,
      ...arguments: T[]
    ): LuaMultiReturn<[number, ...T]>;

    /** Assert that the give values are the same. Can deeply compare tables. */
    same<E, A>(
      expected: E,
      actual: A,
      message?: string
    ): LuaMultiReturn<[E, A]>;

    /** Asserts that a value, when converted using tostring(), matches a pattern. Returns the captures of the pattern.*/
    matches<T>(
      pattern: string,
      value: T,
      init?: number,
      plain?: boolean
    ): LuaMultiReturn<string[]>;

    /** Asserts that a value, when converted using tostring(), matches a pattern. Returns the captures of the pattern.*/
    match<T>(
      pattern: string,
      value: T,
      init?: number,
      plain?: boolean
    ): LuaMultiReturn<string[]>;

    /** Asserts that a value is within a tolerable range of an expected value. */
    near(
      expected: number,
      actual: number,
      tolerance: number,
      failureDescription?: string
    ): LuaMultiReturn<[number, number, number]>;

    /** Asserts that a values are equal, using direct comparison. */
    equal<E, A>(
      expected: E,
      actual: A,
      message?: string
    ): LuaMultiReturn<[E, A]>;

    /** Asserts that a values are equal, using direct comparison. */
    equals<E, A>(
      expected: E,
      actual: A,
      message?: string
    ): LuaMultiReturn<[E, A]>;
    /** Asserts that each member within a list is unique. */
    unique<T extends any[]>(
      list: T,
      failureDescription: string,
      deepComparison?: boolean
    ): T;
    /** Asserts that each member within a list is unique. */
    unique<T extends any[]>(list: T, deepComparison?: boolean): T;

    /**
     * Asserts that calling the given function will raise an error.
     * Returns the error raised or the return value.
     */
    error(
      func: () => void,
      expectedError?: unknown,
      failureDescription?: string
    ): unknown;

    /**
     * Asserts that calling the given function will raise an error.
     * Returns the error raised or the return value.
     */
    errors(
      func: () => void,
      expectedError?: unknown,
      failureDescription?: string
    ): unknown;

    /**
     * Asserts that calling the given function will throw an error that matches the given pattern.
     * Returns the error thrown or the return value.
     */
    error_match(
      func: () => void,
      pattern: string,
      init?: number,
      plain?: boolean
    ): string;
    /**
     * Asserts that calling the given function will throw an error that matches the given pattern.
     * Returns the error thrown or the return value.
     */
    error_matches(
      func: () => void,
      pattern: string,
      init?: number,
      plain?: boolean
    ): string;
    /**
     * Asserts that calling the given function will throw an error that matches the given pattern.
     * Returns the error thrown or the return value.
     */
    match_error(
      func: () => void,
      pattern: string,
      init?: number,
      plain?: boolean
    ): string;
    /**
     * Asserts that calling the given function will throw an error that matches the given pattern.
     * Returns the error thrown or the return value.
     */
    matches_error(
      func: () => void,
      pattern: string,
      init?: number,
      plain?: boolean
    ): string;

    /** Asserts that the given value is truthy. */
    truthy<T>(value: T, message?: string): T;

    /** Asserts that the given value is falsy. */
    falsy<T>(value: T, message?: string): T;
  }

  /** @noSelf */
  interface Assert {
    /** Sets the failure description for the next assertion. */
    message(message: string): this;
  }
}
