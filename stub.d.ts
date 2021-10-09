import Stub = stub.Stub;
import ReturnValuesOf = stub.ReturnValuesOf;

declare function stub<F extends Function = Function>(): Stub<F>;

declare function stub<T extends Record<K, Function>, K extends keyof T>(
    table: T,
    key: K,
    ...ret: ReturnValuesOf<T[K]> | [T[K]] | []
): Stub<T[K]>;

declare namespace stub {
    type ValueOrMatcher<T> = {
        [P in keyof T]: T[P] | Matcher
    }

    type ReturnValuesOf<F> = F extends (...args: any) => infer R
        ? R extends LuaMultiReturn<infer A>
            ? A
            : [R]
        : never

    interface Stub<F extends Function> extends spy.Spy<F>, StubSettings<F> {
        by_default: StubSettings<F>;

        /** @noSelf */
        on_call_with(
            ...args: F extends (this: infer T, ...args: infer P) => any
                ? [T | Matcher, ...ValueOrMatcher<P>]
                : F extends (...args: infer P) => any
                    ? ValueOrMatcher<P>
                    : never[]
        ): StubSettings<F>;
    }

    /** @noSelf */
    interface StubSettings<F extends Function> {
        returns(value: F extends (...args: any) => infer R ? R : any): this;

        invokes(func: F): this;
    }
}

declare namespace assert {
    export function stub(stub: stub.Stub<any>): spy.SpyAssertion
}
