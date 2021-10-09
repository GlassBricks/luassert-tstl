/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that a value is within a tolerable range of an expected value.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L53)
     *
     * @param expected The expected value.
     * @param actual The actual value.
     * @param tolerance How much difference between the two numbers is tolerable.
     * @param failureDescription The error message to display on failure.
     */
    export function near(expected: number, actual: number, tolerance: number, failureDescription?: string): void;

    /**
     * Asserts that a value is NOT within a tolerable range of an expected value.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L53)
     *
     * @param expected The expected value.
     * @param actual The actual value.
     * @param tolerance How much difference between the two numbers is tolerable.
     * @param failureDescription The error message to display on failure.
     */
    export function not_near(expected: number, actual: number, tolerance: number, failureDescription?: string): void;

    export const is_near: typeof near;
    export const is_not_near: typeof not_near;
    export const was_near: typeof near;
    export const was_not_near: typeof not_near;

}
