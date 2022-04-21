/** @noSelfInFile */

declare namespace match {
  interface Matcher {
    (value: unknown): boolean;
    _matcherBrand: any;
  }

  /** @noSelf */
  interface MatchCreator {
    /** Creates a matcher that matches true values. */
    true(): Matcher;
    /** Creates a matcher that matches false values. */
    false(): Matcher;

    /** Creates a matcher that matches nil values. */
    nil(): Matcher;
    /** Creates a matcher that matches boolean values. */
    boolean(): Matcher;
    /** Creates a matcher that matches number values. */
    number(): Matcher;
    /** Creates a matcher that matches string values. */
    string(): Matcher;
    /** Creates a matcher that matches table values. */
    table(): Matcher;
    /** Creates a matcher that matches function values. */
    function(): Matcher;
    /** Creates a matcher that matches userdata values. */
    userdata(): Matcher;
    /** Creates a matcher that matches thread values. */
    thread(): Matcher;

    /** Creates a matcher that matches the given value exactly (same reference). */
    ref(t: object | Function): Matcher;
    /** Creates a matcher that matches the given value. Can deeply compare tables. */
    same(value: unknown): Matcher;
    /** Creates a matcher that matches if the value tostring matches a given pattern. */
    matches(pattern: string, init?: number, plain?: boolean): Matcher;
    /** Creates a matcher that matches if the value tostring matches a given pattern. */
    match(pattern: string, init?: number, plain?: boolean): Matcher;
    /** Creates a matcher that matches if a number is near a given value, with a specified tolerance. */
    near(value: number, tolerance: number): Matcher;
    /** Creates a matcher that matches the given value using direct comparison. */
    equal(value: unknown): Matcher;
    /** Creates a matcher that matches the given value using direct comparison. */
    equals(value: unknown): Matcher;

    /** Creates a matcher that matches if all values in a array are unique. */
    unique(deep?: boolean): Matcher;

    /** Creates a matcher that truthy values. */
    truthy(): Matcher;
    /** Creates a matcher that falsy values. */
    falsy(): Matcher;

    /** Creates a composite matcher that matches if all given matchers match. */
    all_of(...matchers: Matcher[]): Matcher;
    /** Creates a composite matcher that matches if any of given matchers match. */
    any_of(...matchers: Matcher[]): Matcher;
    /** Creates a composite matcher that matches if none of given matchers match. */
    none_of(...matchers: Matcher[]): Matcher;
  }

  type Match = assert.Fluent<MatchCreator> & {
    /** A matcher that matches any value. */
    readonly _: Matcher;
    is_matcher(a: unknown): a is Matcher;
    is_ref_matcher(a: unknown): boolean;
  };
}
declare var match: match.Match;
