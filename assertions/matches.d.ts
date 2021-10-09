/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that a value matches a pattern.
     */
    export function matches(
        pattern: string,
        str: unknown,
        init?: number,
        plain?: boolean,
    ): void

    /**
     * Asserts that a value matches a pattern.
     */
    export function match(pattern: string, str: unknown, init?: number, plain?: boolean): void
}
