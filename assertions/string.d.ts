/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that the given value is a string.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L294)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function string(value: unknown, failureDescription?: string): boolean;

    /**
     * Asserts that the given value is not a string.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L294)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function not_string(value: unknown, failureDescription?: string): boolean;

    export const is_string: typeof string;
    export const is_not_string: typeof not_string;
    export const was_string: typeof string;
    export const was_not_string: typeof not_string;

}
