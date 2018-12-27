function log(str) {
    console.log(str)
}
// 1. 返回字符串中间的值
function getMiddle(str) {
    const len = parseInt(str.length / 2)
    return str.length % 2 ? str[len] : str[len - 1] + str[len]
}

// 参考答案 使用字符串裁剪
function getMiddle1(str) {
    return str.length % 2 ? str[(str.length - 1) / 2] : str.substr((str.length - 2) / 2, 2);
}

// 2. 判断格式是否正确 "(123) 456-7890" ➞ true 应该使用正则
function isValidPhoneNumber(str) {
    // const reg = new RegExp(/[(\d{3})]+[\S\d{4}]+[-\d{3}]/)
    const reg = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    return reg.test(str)
}

// 3. 交替大小写字符串
function alternatingCaps(str) {
    let j = 0;
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 122) {
            if (!(j % 2)) {
                result.push(str[i].toUpperCase());
            } else {
                result.push(str[i].toLowerCase());
            }
            j++
        } else {
            result.push(str[i]);
        }

    }
    return result.join("");
}

// 4. 将一个数组值最小的两个正数相加，返回相加值
function sumTwoSmallestNums(arr) {
    return arr.filter(el => el > 0).sort((a, b) => a - b)[0] + arr.filter(el => el > 0).sort((a, b) => a - b)[1]
}

// 5. 接受三个参数  例如 2,2,3    则返回[[3,3],[3,3]]
function matrix(x, y, z) {
    arr = []
    for (let i = 0; i < x; i++) {
        arr.push(z.toString().repeat(y).split(''))
    }
    return arr
}
// 参考答案  我知道肯定有个数组填充的API  找了半天没找到。。。
function matrix(x, y, z) {
    return Array(x).fill(Array(y).fill(z));
}

// 6. 将arr的关键词替换为Wurst    使用正则表达式的  |
function wurstIsBetter(str) {
    const arr = [
        'Kielbasa',
        'Chorizo',
        'Moronga',
        'Salami',
        'Sausage',
        'Andouille',
        'Naem',
        'Merguez',
        'Gurka',
        'Snorkers',
        'Pepperoni'
    ]
    const re = new RegExp(arr.join('|'), 'gi');
    return str.replace(re, 'Wurst');
}

// 7. 将字符串中的每个词的首字母大写
function makeTitle(str) {
    return str.split(' ').map(el => el.split('')[0].toUpperCase() + el.substring(1)).join(' ')
}

// 8.数组去重以后从小到大排序
function uniqueSort(arr) {
    return Array.from(new Set(arr)).sort((a, b) => a - b)
}


// 9.判断pin值为四个或者六个数字
function validatePIN(pin) {
    return pin.length === 4 && /\d{4}/.test(pin) || (pin.length === 6 && /\d{6}/.test(pin))
}

// 参考答案
function validatePIN1(pin) {
    var regEx = new RegExp(/^(\d{4}|\d{6})$/);
    return regEx.test(pin);
}

// 10. 根据字符串的不同种类返回不同的结果
function flipEndChars(str) {
    if (typeof str !== 'string') return "Incompatible."
    if (str.length < 3) return "Incompatible."
    if (str[0] == str[str.length - 1]) return "Two's a pair."
    return str[str.length - 1] + str.substring(1, str.length - 1) + str[0]
}

// 11.移除数组中最小的一个值，数组顺序不变
function removeSmallest(arr) {
    const t = Math.min(...arr);
    const str = arr.join('')
    const i = arr.join('').indexOf(t);
    return (str.substring(0, i) + str.substring(i + 1)).split('').map(el => parseInt(el))
}
// 参考答案 splice()  方法向/从数组中添加/删除项目，然后返回被删除的项目。
function removeSmallest1(arr) {
    let lowest = Math.min(...arr);
    arr.splice(arr.indexOf(lowest), 1);
    return arr;
}

// 12.AABBCCAAAB  =>ABCAB
function uniqueInOrder(sequence) {
    if (typeof sequence === 'string') return Array.from(new Set([...sequence.split('')]))
    return Array.from(new Set([...sequence]))
}

// 13.
function realType(value) {
    const answers = ["array", "object", "string", "number", "function", "regexp", "boolean", "null", "undefined", "function", "date", "number", "number", "function", "error", "string", "number", "number"];
    answers.forEach(el => {
        if (value.constructor == el)
            return el
    })
}
// 参考答案1
function realType1(value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
// 参考答案2     construcor.name
function realType2(value) {
    return value != null ? value.constructor.name.toLowerCase() :
        value !== null ? 'undefined' : 'null';
}

// 14.计算两点之间的距离
function shortestDistance(str) {
    const arr = str.split(',')
    let x = Math.abs(arr[0] - arr[2])
    let y = Math.abs(arr[1] - arr[3])
    return Math.sqrt(x * x + y * y).toFixed(2)
}
// 参考答案  Math.hypot()求两点间的距离
function shortestDistance(str) {
    let [x1, y1, x2, y2] = str.split(",").map(a => Number(a));
    return Number(Math.hypot(x1 - x2, y1 - y2).toFixed(2));
};

// 15.计算一个数的二进制中1的数量
function countOnes(i) {
    return i.toString('2').replace(/0/g, "").length
}

// 16.返回数组中正数的数量和数组的和    数组判断非空，使用.length===0?  有没有更好的方法呢
function countPosSumNeg(arr) {
    if(arr===null) return []
    if(arr.length===0) return []
    const x=arr.filter(el=>el>0).length
    const y=arr.filter((el)=>el<0).reduce((a,b)=>a+b)
    return [x,y]
}

// 17.将字符串中大写字母的索引以数组的形式返回
function indexOfCaps(str) {
    let arr=[]
    str.split('').forEach((el,index)=>{
        if(64<el.charCodeAt(0)&&el.charCodeAt(0)<92) arr.push(index)
    })
    return arr
}

// 参考答案 使用正则判断大写字母    使用reduce
function indexOfCaps1(str) {
    return str.split('').reduce((arr, c, i) => /[A-Z]/.test(c) ? arr.concat(i) : arr, [])
  }

// 18.讲一个对象的key和value分别放在一个数组并返回
function keysAndValues(obj) {
    let x=[],y=[];
    for(let k in obj){
        x.push(k)
        log(x)
        y.push(obj[k])
    }
    return [x,y]
}
// 参考答案  思路还是用API   比如Object.keys(obj)
function keysAndValues1(obj) {
    var keys = Object.keys(obj);
    return [keys, keys.map( key => obj[key] )];
  }

// 19.判断是否为质数  只能被1和自身整除的数
function isPrime(num) {
    if(num===1) return false
    for(let i=2;i<num/2+1;i++){
        if(num%i===0) return false 
    }
    return true
}
// 参考答案  思路一样，把判断值减少为sqrt，减少计算量，把判断1和true放在了一起
function isPrime(n) {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++)
      if(n % i === 0) return false; 
    return n !== 1;
  }