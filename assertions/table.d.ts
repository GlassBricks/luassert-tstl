/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that the given value is a table.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L295)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function table(value: unknown, failureDescription?: string): void;

    /**
     * Asserts that the given value is not a table.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L295)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function not_table(value: unknown, failureDescription?: string): void;

    export const is_table: typeof table;
    export const is_not_table: typeof not_table;
    export const was_table: typeof table;
    export const was_not_table: typeof not_table;

}
