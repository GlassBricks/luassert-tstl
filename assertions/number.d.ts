/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that a given value is a number.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L293)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function number(value: unknown, failureDescription?: string): boolean;

    /**
     * Asserts that a given value is not a number.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L293)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function not_number(value: unknown, failureDescription?: string): boolean;

    export const is_number: typeof number;
    export const is_not_number: typeof not_number;
    export const was_number: typeof number;
    export const was_not_number: typeof not_number;

}
