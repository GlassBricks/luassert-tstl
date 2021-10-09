/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that two values are the same. Can deeply compare tables.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L123)
     *
     * @param expected The expected value.
     * @param actual The actual value.
     * @param failureDescription The error message to display on failure.
     */
    export function same(expected: unknown, actual: unknown, failureDescription?: string): boolean;

    /**
     * Asserts that two values are NOT the same. Can deeply compare tables.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L123)
     *
     * @param expected The expected value.
     * @param actual The actual value.
     * @param failureDescription The error message to display on failure.
     */
    export function not_same(expected: unknown, actual: unknown, failureDescription?: string): boolean;

    export const is_same: typeof same;
    export const is_not_same: typeof not_same;
    export const are_same: typeof same;
    export const are_not_same: typeof not_same;
    export const was_same: typeof same;
    export const was_not_same: typeof not_same;
    export const has_same: typeof same;
    export const has_not_same: typeof not_same;

}
