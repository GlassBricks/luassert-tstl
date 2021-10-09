declare function mock<T extends object>(table: T, doStub: true): mock.Stubbed<T>;
declare function mock<T extends object>(table: T, doStub?: boolean): mock.Mocked<T>;

declare namespace mock {
    type Stubbed<T> = {
        [P in keyof T]: T[P] extends Function
            ? Stub<T[P]>
            : T[P] extends object
                ? Stubbed<T[P]>
                : T[P]
    }

    type Mocked<T> = {
        [P in keyof T]: T[P] extends Function
            ? spy.Spy<T[P]>
            : T[P] extends object
                ? Mocked<T[P]>
                : T[P]
    }

    export function clear(table: object): void;
    export function revert(table: object): void;
}
