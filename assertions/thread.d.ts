/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that the given value is a thread.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L299)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function thread(value: unknown, failureDescription?: string): void;

    /**
     * Asserts that the given value is not a thread.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L299)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function not_thread(value: unknown, failureDescription?: string): void;

    export const is_thread: typeof thread;
    export const is_not_thread: typeof not_thread;
    export const was_thread: typeof thread;
    export const was_not_thread: typeof not_thread;

}
