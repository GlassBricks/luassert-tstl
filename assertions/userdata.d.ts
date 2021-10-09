/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that the given value is userdata.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L297)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function userdata(value: unknown, failureDescription?: string): boolean;

    /**
     * Asserts that the given value is not userdata.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L297)
     *
     * @param failureDescription Custom error message to show on assertion failure.
     */
    export function not_userdata(value: unknown, failureDescription?: string): boolean;

    export const is_userdata: typeof userdata;
    export const is_not_userdata: typeof not_userdata;
    export const was_userdata: typeof userdata;
    export const was_not_userdata: typeof not_userdata;

}
