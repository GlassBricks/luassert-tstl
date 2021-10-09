/** @noSelfInFile */

/** @noSelf */
interface ArrayAssertion extends AssertChaining {
    holes(length?: number): void;
}

declare namespace assert {
    export function array(arr: any[]): ArrayAssertion
}

