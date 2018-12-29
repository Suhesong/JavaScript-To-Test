const arr = [1, 2, 3]
const trace = x => {
    console.log(x);
    return x;
}
// 函数组合是将一个函数的输出作为另一个函数输入的过程
// valueOf 这可被看作是提供了一个便捷的渠道来将值从functor盒子中取出
const Identity = value => ({
    map: fn => Identity(fn(value)),
    valueOf: () => value,
    [Symbol.iterator]: () => {
        let first = true;
        return ({
            next: () => {
                if (first) {
                    first = false;
                    return ({
                        done: false,
                        value
                    });
                }
                return ({
                    done: true
                });
            }
        })
    }
});

Object.assign(Identity,{
    toString: ()=>'Identity',
    is: x=> typeof x.map === 'function'
});

const u = Identity(2);
const u1 = Identity(4);

const f = n => n + 1
const g = n => n * 2
const r1 = u.map(x => f(g(x)))
const r2 = u.map(g).map(f)
r1.map(trace)
r2.map(trace)

const ints = u + u1;
trace(u + u1)

const fRange = (
    start,
    end
) => Array.from(
    {length: end -start +1},
    (x, i) => start.constructor(i + start)
)

const range = fRange(Identity(2), 4);
range.map(trace);
console.log(undefined.constructor.name)