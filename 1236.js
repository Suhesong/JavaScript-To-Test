// 1.判断两个字符串的字母是否相同，不区分大小写    eg：abcd=dbCA
function isAnagram(s1, s2) {
    a1 = s1.toLowerCase().split('').sort('').join('')
    a2 = s2.toLowerCase().split('').sort('').join('')
    return a1 == a2
}

console.log(isAnagram('cristian', 'Cristina'))

// 2.重写repeat函数
function repeat(str, nb) {
    if (nb < 0) return ''
    let s = ''
    for (let i = 0; i < nb; i++) {
        s = s + str
    }
    return s
}
console.log(repeat('*', 1))

const Proxy = {};

// Object.defineProperty(String.prototype, "repeat", {
//     value: function repeat() {
//         console.log("Native repeat is not allowed !");
//         return ":("
//     },
//     writable: false,
//     configurable: false,
// })

// // Check time, valid string and length of string
// const checkRepeat = function (fct, arg1, arg2) {
//     ar str = fct(arg1, arg2);
//     var timerEnd = +new Date();
//     var time = (timerEnd - timerStart <= 5) ? true : false;
//     var strLength = str.length;
//     var isValidStr = true;
//     for (var i = 0; i < 2000; i++) {
//         var rand = Math.floor(Math.random() * strLength);
//         if (str[rand] != arg1) {
//             isValidStr = false;
//         }
//     }
//     console.log("Execution time : " + (timerEnd - timerStart) + " ms");
//     return (time && strLength == arg2 && isValidStr);
// }

// const start = +new Date();
// Test.assertEquals(checkRepeat(repeat, "A", 268435440), true);
// Test.assertEquals(checkRepeat(repeat, "A", 10000000), true);
// Test.assertEquals(checkRepeat(repeat, "A", 1000000), true);
// Test.assertEquals(checkRepeat(repeat, "A", 100000), true);
// Test.assertEquals(checkRepeat(repeat, "A", 10000), true);
// Test.assertEquals(checkRepeat(repeat, "A", 1000), true);
// Test.assertEquals(checkRepeat(repeat, "A", 100), true);
// Test.assertEquals(checkRepeat(repeat, "A", 10), true);
// Test.assertEquals(checkRepeat(repeat, "A", 1), true);
// Test.assertEquals(checkRepeat(repeat, "-", 1), true);
// Test.assertEquals(checkRepeat(repeat, "-", 10), true);
// Test.assertEquals(checkRepeat(repeat, "-", 100), true);
// Test.assertEquals(checkRepeat(repeat, "-", 1000), true);
// Test.assertEquals(checkRepeat(repeat, "-", 10000), true);
// Test.assertEquals(checkRepeat(repeat, "-", 100000), true);
// Test.assertEquals(checkRepeat(repeat, "-", 1000000), true);
// Test.assertEquals(checkRepeat(repeat, "-", 10000000), true);
// Test.assertEquals(checkRepeat(repeat, "-", 268435440), true);
// Test.assertEquals(checkRepeat(repeat, "&", 268435440), true);
// Test.assertEquals(checkRepeat(repeat, "2", 268435440), true);
// Test.assertEquals(checkRepeat(repeat, "+", 268435440), true);
// Test.assertEquals(checkRepeat(repeat, "@", 268435440), true);
// Test.assertEquals(checkRepeat(repeat, "+", 268435440), true);
// Test.assertEquals(checkRepeat(repeat, "e", 268435440), true);
// Test.assertEquals(checkRepeat(repeat, "%", 268435440), true);
// Test.assertEquals(checkRepeat(repeat, "/", 268435440), true);
// Test.assertEquals(checkRepeat(repeat, "!", 268435440), true);
// Test.assertEquals(checkRepeat(repeat, "?", 268435440), true);
// Test.assertEquals(checkRepeat(repeat, "°", 268435440), true);
// const end = +new Date();

// Test.assertEquals((end - start <= 3800), true, "You got " + (end - start) + " ms instead of <= 3800 ms");

// Test.assertEquals(repeat("-", -1), "");
// Test.assertEquals(repeat("-", 0), "");
// Test.assertEquals(repeat("", 10), "");
// Test.assertEquals(repeat("", -1), "");
// var timerStart = +new Date();

// 3. AABBBCC=>ABC
function uniqueInOrder(sequence) {
    let i = [];
    for (let j = 0; j < sequence.length; j++) {
        k = sequence[j]
        if (k == i[i.length - 1]) continue
        else i.push(k)
    }
    return i
}
// 参考答案一  这两种方式都是用到了filter，都用了一个算法即不与后边一个值相等进行过滤。   同时同理数组和字符串可使用Array.from()或者...  效果一样
function uniqueInOrder1(sequence) {
    return Array.from(sequence).filter((x, i, a) => x !== a[i - 1]);
}

// 参考答案二
function uniqueInOrder2(sequence) {
    return [...sequence].filter((a, i) => a !== sequence[i + 1])
}

// 4.将年份分成三个数字，1 10 2010   1*10=10  所以是魔法数字
function Magic(str) {
    arr = str.split(' ');
    return (arr[0] * arr[1] === arr[2] % 1000 || arr[0] * arr[1] === arr[2] % 100 || arr[0] * arr[1] === arr[2] % 1000)
}
console.log(Magic("1 10 2010"))

// 参考答案   数字判断相等，有时候转换为字符串，使用字符串的API
const Magic1 = str => {
    const [day, month, year] = str.split(' ').map(Number);

    return String(year).endsWith(day * month);
};

// 5.判断数组中是否有重复值
function isIsogram1(str) {
    const set = new Set(str.toLowerCase().split(''))
    return set.size === str.length
}
console.log(isIsogram("sada"))

// 参考答案
function isIsogram(str) {
    return !/(\w).*\1/i.test(str);
}

// 6.简单的使用类，加两个方法
class Rectangle {
    constructor(sideA, sideB) {
        this.sideA = sideA;
        this.sideB = sideB;
    }
    getArea() {
        return this.sideA * this.sideB
    };
    getPerimeter() {
        return (this.sideA + this.sideB) * 2
    };
}


class Circle {
    constructor(r) {
        this.r = r;
    }
    //put code here
    getArea() {
        return Math.PI * r * r;
    }
    getPerimeter() {
        return 2 * Math.PI * r;
    }
}

//  7.
function isPalindrome(str) {
    [...str].filter((el)=>el.c)
}


