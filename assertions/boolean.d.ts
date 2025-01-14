/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that a given value is a boolean.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L292)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function boolean(value: unknown, failureDescription?: string): void;

    /**
     * Asserts that a given value is not a boolean.
     * @param failureDescription Custom error message to show on assertion failure.
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L292)
     */
    export function not_boolean(value: unknown, failureDescription?: string): void;

    export const is_boolean: typeof boolean;
    export const is_not_boolean: typeof not_boolean;
    export const was_boolean: typeof boolean;
    export const was_not_boolean: typeof not_boolean;

}
