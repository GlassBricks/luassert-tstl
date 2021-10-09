/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that a given value is false.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L264)
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function False(value: unknown, failureDescription?: string): boolean;

    /**
     * Asserts that a given value is not false.
     * @param failureDescription Custom error message to show on assertion failure.
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L264)
     */
    export function not_false(value: unknown, failureDescription?: string): boolean;

    export const is_false: typeof False;
    export const is_not_false: typeof not_false;
    export const was_false: typeof False;
    export const was_not_false: typeof not_false;

}
