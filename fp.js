/**
These are 30 functions which can be used together for functional programming in JS.

This was an excercise to write all of the function definition in one line.

License:
Copyright 2018 Aleksandar Panic

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/


export const curry = (f, ...p) => (...a) => [...p, ...a].length < f.length ? curry(f, ...[...p, ...a]) : f(...[...p, ...a]);
export const reverseArgs = f => (...a) => f(...a.reverse());
export const compose = (...fs) => v => fs.reverse().reduce((a, f) => f(a), v);
export const pipe = (...fs) => v => fs.reduce((a, f) => f(a), v);
export const unzip = a => a.reduce(([a1, a2], c) => [[...a1, c[0]], [...a2, c[1]]], [[], []]);
export const head = a => a[0];
export const tail = a => a.slice(1);
export const last = a => a[a.length];
export const size = a => a.length;
export const unique = a => a.filter((i, idx) => a.indexOf(i) === idx);
export const negate = f => (...a) => !f(...a);
export const identity = v => v;
export const times = curry((n, p) => (new Array(n).fill(0).map(p)));
export const range = (n, from = 0) => times(n, (i, idx) => idx + from);
export const map = curry((p, v) => v.map(p));
export const reduce = curry((p, i, v) => v.reduce(p, i));
export const reduceRight = curry((p, i, v) => v.reverse().reduce(p, i));
export const filter = curry((p, v) => v.filter(p));
export const zip = curry((a, b) => b.reduce((p, c, i) => [...p, [a[i], c]], []));
export const zipWith = curry((f, a, b) => b.reduce((p, c, i) => [...p, f(a[i], c)], []));
export const tap = curry((f, v) => f(v) ? v : v);
export const take = curry((n, a) => a.slice(0, n));
export const get = curry((p, o) => o[p]);
export const pluck = curry((p, v) => map(get(p), v));
export const difference = curry((a, b) => [...a.filter(i => !b.includes(i)), ...b.filter(i => !a.includes(i))]);
export const intersection = curry((a, b) => [...a.filter(i => b.includes(i)), ...b.filter(i => a.includes(i))]);
export const partition = curry((p, a) => a.reduce(([r1, r2], c) => [[...r1, ...(p(c) ? [c] : [])], [...r2, ...(!p(c) ? [c] : [])]] , [[], []]));
export const without = curry((vs, a) => a.filter(i => !vs.includes(i)));
export const initial = curry((n, a) => a.slice(0, a.length - n));
export const chunk = curry((n, a) => times(Math.ceil(a.length / n), (i, idx) => a.slice(n * idx, n * idx + n)));
