/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that a given value is a function.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L298)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function Function(value: unknown, failureDescription?: string): boolean;

    /**
     * Asserts that a given value is not a function.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L298)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function not_function(value: unknown, failureDescription?: string): boolean;

    export const is_function: typeof Function;
    export const is_not_function: typeof not_function;
    export const was_function: typeof Function;
    export const was_not_function: typeof not_function;

}
