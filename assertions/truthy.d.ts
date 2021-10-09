/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that a given value is truthy.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L144)
     *
     * @param value The value to check truthiness for.
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function truthy(value: unknown, failureDescription?: string): void;

    /**
     * Asserts that a given value is falsy.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L144)
     *
     * @param value The value to check truthiness for.
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function not_truthy(value: unknown, failureDescription?: string): void;

    export const is_truthy: typeof truthy;
    export const is_not_truthy: typeof not_truthy;
    export const are_truthy: typeof truthy;
    export const are_not_truthy: typeof not_truthy;
    export const was_truthy: typeof truthy;
    export const was_not_truthy: typeof not_truthy;

}
