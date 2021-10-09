/** @noSelfInFile */
declare namespace assert {

    /**
     * Calls a function expecting it to throw an error.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L153)
     *
     * @param func The function to call, expecting it to error.
     * @param errorExpected The error message expected from the error.
     * @param failureDescription Custom message to show on assertion failure.
     */
    export function error(func: Function, errorExpected?: string, failureDescription?: string): void;

    /**
     * Calls a function expecting it to not to throw an error.
     *
     * [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L153)
     *
     * @param func The function to call, expecting it to error.
     * @param errorExpected The error message expected from the error.
     * @param failureDescription Custom message to show on assertion failure.
     */
    export function not_error(func: Function, errorExpected?: string, failureDescription?: string): void;

    export function error_matches(func: Function, pattern: string, from?: number, plain?: boolean): void;

    export const is_error: typeof error;
    export const is_not_error: typeof not_error;
    export const are_error: typeof error;
    export const are_not_error: typeof not_error;
    export const was_error: typeof error;
    export const was_not_error: typeof not_error;
    export const has_error: typeof error;
    export const has_no_error: typeof not_error;
    export const does_error: typeof error;
    export const does_not_error: typeof not_error;

}
