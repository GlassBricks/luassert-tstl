/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that a given value is falsy.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L149)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function falsy(value: unknown, failureDescription?: string): void;

    /**
     * Asserts that a given value is truthy.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L149)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function not_falsy(value: unknown, failureDescription?: string): void;

    export const is_falsy: typeof falsy;
    export const is_not_falsy: typeof not_falsy;
    export const are_falsy: typeof falsy;
    export const are_not_falsy: typeof not_falsy;
    export const was_falsy: typeof falsy;
    export const was_not_falsy: typeof not_falsy;

}
