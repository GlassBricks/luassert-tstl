/** @noSelfInFile */

declare function stub(toStub: any, alias: string): any;

declare function mock<T>(toMock: T, withStubs?: boolean): T;

declare namespace mock {
    export function revert(toRevert: object): void;
}

declare type ValueTest = (value: unknown, failureDescription?: string) => void;
declare type BinaryTest<T> = (expected: T, actual: T, failureDescription?: string) => void;

declare namespace assert {
    export function has_property(property: string, table: object): void;

    export function spy(s: Function): SpyAssertion

    export function stub(s: Function): SpyAssertion
}

interface SpyAssertion {
    returned_with(this: void, arguments: any[], level?: number): void;

    /**
     * Checks every time the spied upon function has been called for the specified parameters.
     */
    called_with(this: void, ...arguments: any[]): void;

    /**
     * Whether or not the spied upon function has been called.
     * ```ts
     * assert.spy(mySpy).was.called();     // ✔
     * assert.spy(mySpy).was.called;       // ❌
     * ```
     * @param numberOfTimes The number of times this function is expected to be called.
     */
    called(this: void, numberOfTimes?: number): void;

    called_at_least: SpyAssertion["called"];
    called_at_most: SpyAssertion["called"];
    called_more_than: SpyAssertion["called"];
    called_less_than: SpyAssertion["called"];

    was: SpyAssertion;
    was_not: SpyAssertion;
    not: SpyAssertion;
}

interface Spy {
    /**
     * Stops spying reverting the target function back to its original state.
     */
    revert(): void;

    /**
     * Clears all records of calls and return values.
     */
    clear(): void;

    /**
     * An array of arrays representing each call.
     */
    calls: any[][];
    returnvals: any[][];
}

/**
 * [Source (GitHub)](https://github.com/Olivine-Labs/luassert/blob/3b2351c384cf982b953ab6d7964f835acb8cb7db/src/spy.lua)
 */
declare const spy: {
    /**
     * Shorthand spy constructor. Spies on the specified callable function.
     * @param callback The function to spy on.
     * @returns A new callable spy.
     */
    <T extends Function>(this: void, callback: T): T & Spy;
    /**
     * Spies on the specified callable function.
     * @param callback The function to spy on.
     * @returns A new callable spy.
     */
    new: <T extends Function>(this: void, callback: T) => T & Spy;
    /**
     * Spies on the specified method within the specified table.
     * @param table The table / object to spy on.
     * @param methodName The method within the table to spy on.
     * @returns A new callable spy.
     */
    on<T extends object, K extends keyof T>(this: void, table: T, methodName: K): T[K] & Spy;
    /**
     * Returns whether or not the specified value is a spy.
     */
    is_spy(this: void, value: unknown): value is Spy;
};
