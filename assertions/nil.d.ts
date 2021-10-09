/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that a given value is nil.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L296)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function Nil(value: unknown, failureDescription?: string): boolean;

    /**
     * Asserts that a given value is NOT nil.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L296)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function not_nil(value: unknown, failureDescription?: string): boolean;

    export const is_nil: typeof Nil;
    export const is_not_nil: typeof not_nil;
    export const was_nil: typeof Nil;
    export const was_not_nil: typeof not_nil;

}
