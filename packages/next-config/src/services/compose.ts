/* eslint-disable @typescript-eslint/no-explicit-any */
type CFn<C, R> = (c: C) => R;
type Fn = (...args: readonly any[]) => any;
type P<T extends Fn> = T extends (...args: infer P) => any ? P[0] : never;
type R<T extends Fn> = T extends (...args: any) => infer R ? R : any;
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable prettier/prettier */
export function compose<A extends Fn>(a: A): CFn<P<A>, R<A>>;
export function compose<A extends Fn, B extends Fn>(a: A, b: B): CFn<P<A> & P<B>, R<A> & R<B>>;
export function compose<A extends Fn, B extends Fn, C extends Fn>(
  a: A, b: B, c: C
): CFn<P<A> & P<B> & P<C>, R<A> & R<B> & R<C>>;
export function compose<A extends Fn, B extends Fn, C extends Fn, D extends Fn>(
  a: A, b: B, c: C, d: D
): CFn<P<A> & P<B> & P<C> & P<D>, R<A> & R<B> & R<C> & R<D>>;
export function compose<A extends Fn, B extends Fn, C extends Fn, D extends Fn, E extends Fn>(
  a: A, b: B, c: C, d: D, e: E
): CFn<P<A> & P<B> & P<C> & P<D> & P<E>, R<A> & R<B> & R<C> & R<D> & R<E>>;
export function compose<A extends Fn, B extends Fn, C extends Fn, D extends Fn, E extends Fn, F extends Fn>(
  a: A, b: B, c: C, d: D, e: E, f: F
): CFn<P<A> & P<B> & P<C> & P<D> & P<E> & P<F>, R<A> & R<B> & R<C> & R<D> & R<E> & R<F>>;
export function compose<A extends Fn, B extends Fn, C extends Fn, D extends Fn, E extends Fn, F extends Fn, G extends Fn>(
  a: A, b: B, c: C, d: D, e: E, f: F, g: G
): CFn<P<A> & P<B> & P<C> & P<D> & P<E> & P<F> & P<G>, R<A> & R<B> & R<C> & R<D> & R<E> & R<F> & R<G>>;
export function compose<A extends Fn, B extends Fn, C extends Fn, D extends Fn, E extends Fn, F extends Fn, G extends Fn, H extends Fn>(
  a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H
): CFn<P<A> & P<B> & P<C> & P<D> & P<E> & P<F> & P<H> & P<G>, R<A> & R<B> & R<C> & R<D> & R<E> & R<F> & R<G> & R<H>>;
/* eslint-enable prettier/prettier */

// eslint-disable-next-line functional/functional-parameters
export function compose(...fns: readonly Fn[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
  return (args: any) => fns.reduceRight((acc, cur) => cur(acc), args);
}
