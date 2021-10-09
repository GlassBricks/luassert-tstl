/** @noSelfInFile */

/**
 * Shorthand spy constructor. Spies on the specified callable function.
 * @param callback The function to spy on.
 * @returns A new callable spy.
 */
declare function spy<T extends Function>(callback: T): T & spy.Spy<T>;

declare namespace spy {
    /**
     * Spies on the specified method within the specified table.
     * @param table The table / object to spy on.
     * @param methodName The method within the table to spy on.
     * @returns A new callable spy.
     */
    function on<T extends Record<K, Function>, K extends keyof T>(table: T, methodName: K):
        Spy<T[K]>
    /**
     * Returns whether or not the specified value is a spy.
     */
    function is_spy(value: unknown): value is Spy<any>;


    /** @noSelf */
    interface Spy<T extends Function> {
        /**
         * Stops spying reverting the target function back to its original state.
         */
        revert(): T;

        /**
         * Clears all records of calls and return values.
         */
        clear(): this;

        /**
         * An array of arrays representing each call.
         */
        calls: any[][];
        returnvals: any[][];
    }

    /** @noSelf */
    interface SpyAssertion extends AssertChaining {
        returned_with(arguments: any[], level?: number): void;

        /**
         * Checks every time the spied upon function has been called for the specified parameters.
         */
        called_with(...arguments: any[]): void;

        /**
         * Whether or not the spied upon function has been called.
         * ```ts
         * assert.spy(mySpy).was.called();     // ✔
         * assert.spy(mySpy).was.called;       // ❌
         * ```
         * @param numberOfTimes The number of times this function is expected to be called.
         */
        called(numberOfTimes?: number): void;

        called_at_least: SpyAssertion["called"];
        called_at_most: SpyAssertion["called"];
        called_more_than: SpyAssertion["called"];
        called_less_than: SpyAssertion["called"];
    }
}


declare namespace assert {
    export function spy(spy: spy.Spy<any>): spy.SpyAssertion
}
