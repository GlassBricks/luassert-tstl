/** @noSelfInFile */

interface Matcher {
    (this: Matcher, value: any): boolean;
}

/** @noSelf */
interface Match extends AssertChaining {
    true(): Matcher;
    false(): Matcher;
    nil(): Matcher;
    boolean(): Matcher;
    number(): Matcher;
    string(): Matcher;
    table(): Matcher;
    function(): Matcher;
    userdata(): Matcher;
    thread(): Matcher;
    ref(t: object): Matcher;
    same(value: unknown): Matcher;
    matches(pattern: string, init?: number, plain?: boolean): Matcher;
    match(pattern: string, init?: number, plain?: boolean): Matcher;
    near(value: number, tolerance: number): Matcher;
    equal(value: unknown): Matcher;
    equals(value: unknown): Matcher;
    unique(deep?: boolean): Matcher;
    truthy(value: unknown): Matcher;
    falsy(value: unknown): Matcher;
    all_of(...matchers: Matcher[]): Matcher;
    any_of(...matchers: Matcher[]): Matcher;
    none_of(...matchers: Matcher[]): Matcher;
}

declare const match: Match & {
    _(): Matcher
    is_matcher(a: unknown): a is Matcher
    is_ref_matcher(a: unknown): boolean
};
