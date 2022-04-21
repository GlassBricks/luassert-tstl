/** @noSelfInFile */
/** Mocks a table. All functions, deeply searched, are stubbed. */
declare function mock<T extends object>(
  table: T,
  doStub: true
): mock.Stubbed<T>;
/** Mocks a table. All functions, deeply searched, are spied or stubbed. */
declare function mock<T extends object>(
  table: T,
  doStub?: boolean
): mock.Mocked<T>;

/** @noSelf */
declare namespace mock {
  type Stubbed<T> = {
    [P in keyof T]: T[P] extends Function
      ? stub.Stub<T[P]>
      : T[P] extends object
      ? Stubbed<T[P]>
      : T[P];
  };

  type Mocked<T> = {
    [P in keyof T]: T[P] extends Function
      ? spy.Spy<T[P]>
      : T[P] extends object
      ? Mocked<T[P]>
      : T[P];
  };

  /** Clears all spies in the mock. */
  export function clear(table: object): void;
  /** Reverts a mock */
  export function revert(table: object): void;
}
