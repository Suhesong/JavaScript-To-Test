// 构建管道
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
// 构建柯里化
const curry = (
    f, arr = []
) => (...args) => (
    a => a.length === f.length ?
    f(...a) :
    curry(f, a)
)([...arr, ...args]);
// 组合函数
const g = n => n + 1;
const f = n => n * 2;

const doStuff1 = x => {
    const afterG = g(x);
    const afterF = f(afterG);
    return afterF;
};
// 有意识的组合函数
const doStuffBetter1 = x => f(g(x));


// 将doStuff()进行调试
const doStuff2 = x => {
    const afterG = g(x);
    console.log(`after g: ${ afterG }`);
    const afterF = f(afterG);
    console.log(`after f: ${ afterF }`);
    return afterF;
};
// 将调试抽象成为trace()
const trace = label => value => {
    console.log(`${label}:${value}`)
}
const doStuff = x => {
    const afterG = g(x);
    trace('after g')(afterG)
    const afterF = f(afterG);
    trace('after f')(afterF)
    return afterF;
}

const doStuffBetter = pipe(
    g,
    trace('after g'),
    f,
    trace('after f')
);

console.log(doStuffBetter(20)); //42

// 编写一个promise链
const wait = time => new Promise(
    (resolve, reject) => setTimeout(
        resolve,
        time
    )
)
wait(300)
    .then(() => 20)
    .then(g)
    .then(f)
    .then(value => console.log(value))

// 使用类继承构建复合
class Foo {
    constructor() {
        this.a = 'a'
    }
}
class Bar extends Foo {
    constructor(options) {
        super()
        this.b = 'b'
    }
}
const myBar = new Bar();
console.log(myBar);
// 混合组合构建复合
const a = {
    a: 'a'
}
const b = {
    b: 'b'
}
const c = {
    ...a,
    ...b
}
console.log(c)

arr1 = [1, 2, 3]
arr2 = [4, 5, 6]
console.log([...arr1, ...arr2])

// 函数
const double = x => x * 2;
console.log(double)
console.log(double.toString())

//返回布尔值的函数叫做断言
const gt4 = v => v >= 4
console.log([2, 4, 6].filter(gt4))

//自动柯里化函数
const add3 = curry((a, b, c) => a + b + c);
console.log(add3(1)(2)(3))

// 举例高阶函数filter的实现
const reduce =(reducer,initial,arr) =>{
    let acc = initial;
    for(let i=0,{length} = arr;i<length;i++){
        acc = reducer(acc,arr[i]);
    }
    return acc
}
const filter = (fn, arr) => reduce((acc, curr) => fn(curr) ? acc.concat([curr]) : acc, [], arr);

const censor = words => filter(
    word => word.length !== 4,
    words
  );
console.log(censor(['oops', 'gasp', 'shout', 'sun']))