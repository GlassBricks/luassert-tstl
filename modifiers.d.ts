declare namespace assert {

    // Modifiers
    // https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/modifiers.lua

    /** A modifier that does nothing in an assertion statement. */
    export const is: typeof assert;

    /** A modifier that does nothing in an assertion statement. */
    export const are: typeof assert;

    /** A modifier that does nothing in an assertion statement. */
    export const was: typeof assert;

    /** A modifier that does nothing in an assertion statement. */
    export const has: typeof assert;

    /** A modifier that does nothing in an assertion statement. */
    export const does: typeof assert;

    /** A modifier that pollutes the assertion statement expecting the assertion to be false. */
    export const not: typeof assert;

    /** A modifier that pollutes the assertion statement expecting the assertion to be false. */
    export const no: typeof assert;

    // Modifier permutations
    export const is_no: typeof assert;
    export const is_not: typeof assert;
    export const are_no: typeof assert;
    export const are_not: typeof assert;
    export const was_no: typeof assert;
    export const was_not: typeof assert;
    export const has_no: typeof assert;
    export const has_not: typeof assert;
    export const does_no: typeof assert;
    export const does_not: typeof assert;
}

interface AssertChaining {
    is: this;
    are: this;
    was: this;
    has: this;
    does: this;
    not: this;
    no: this;
    is_no: this;
    is_not: this;
    are_no: this;
    are_not: this;
    was_no: this;
    was_not: this;
    has_no: this;
    has_not: this;
    does_no: this;
    does_not: this;
}
