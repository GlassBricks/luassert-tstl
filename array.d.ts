/** @noSelfInFile */

declare namespace assert {
  /** @noSelf */
  interface ArrayAssertions {
    /**
     * Asserts that the given array has no holes (undefined or null elements).
     *
     * @param length The expected length of the array.
     */
    holes(length?: number): void;
  }
  type ArrayAssert = Fluent<ArrayAssertions>;
  /** @noSelf */
  interface Assert {
    /** Begin assertions on an array. */
    array(arr: readonly unknown[]): ArrayAssert;
  }
}
