// 1.输入小写字母，返回大写字母的Unicode的值，类推
function counterpartCharCode(char) {
    if (char === char.toUpperCase()) {
        return char.toLowerCase().charCodeAt(0);
    }
    return char.toUpperCase().charCodeAt(0);

}

// 2.判断两个圆是否相交
function isCircleCollision(c1, c2) {
    return !(Math.hypot(c1[1] - c2[1], c1[2] - c2[2]) > (c1[0] + c2[0]))
}

// 3.求数组的中位数
function median(arr) {
    return (arr.sort((a, b) => a - b)[Math.floor((arr.length - 1) / 2)] + arr.sort((a, b) => a - b)[Math.round((arr.length - 1) / 2)]) / 2
}

// 4.判断字符串中的字母是否回环
function isPalindrome1(str) {
    arr = [...str].filter((el) => {
        if (el.charCodeAt(0) > 64 && el.charCodeAt(0))
            return el
    })
    return arr.join('').toLowerCase() === arr.reverse().join('').toLowerCase()
}
// 参考答案，正则表达式过滤非法字符
function isPalindrome(string) {
    var sanitized = string.toLowerCase().replace(/[^a-z]/g, "");
    var reversed = sanitized.split('').reverse().join('');
    return (reversed == sanitized);
}

// 5.判断后一个字符串每个字母是否在前一个字符串里
function letterCheck1(arr) {
    str1 = arr[0].toLowerCase()
    str2 = arr[1].toLowerCase().split('')
    for (let i = 0; i < str2.length; i++) {
        if (!str1.includes(str2[i])) {
            return false
        }
    }
    return true
}

// 参考答案  ~????????
letterCheck = a =>
    a[1].split ``.every(v => ~a[0].toLowerCase().indexOf(v))

console.log(letterCheck(['asdasd', 'as']))

// 6.'M 0 0' ➞ [ { command: 'M', parameters: [0, 0] } ] 
function pathDataParser1(str) {
    str1 = 'command'
    str2 = 'parameters'
    // arr = str.replace(/,/g, ' ').replace(/\s/,'').split('').map((el)=>el.trim()) //将字符串处理为数组
    arr = str.replace(/[^a-z-0-9]/g,'').split(''); 
    len = arr.length
    arr1 = [] //存放字母索引
    arr2 = [] //大数组
    arr.forEach((e, index) => {
        if (/[a-z]/i.test(e)) arr1.push(index)
    });
    len1 = arr1.length
    for (let i = 0; i < len1; i++) {
        let obj = {}
        obj[str1] = arr[arr1[i]]
        if(i==arr1.length){
            obj[str2] = arr.slice(arr1[i]+1).map((e)=>Number(e))
        }else{
            obj[str2] = arr.slice(arr1[i]+1,arr1[i+1]).map((e)=>Number(e))
        }
    
        arr2.push(obj)
    }
    return arr2
}
// 参考答案
pathDataParser = g => 
    (g.match(/([a-z]|-?\d*\.?\d+)/ig) || [])
        .reduce((t,v) => (isNaN(v) 
            ? t.push({command: v, parameters: []})
            : t[t.length-1].parameters.push(+v) 
        ,t), []);
console.log('M1 0H0v1h.6H0v1h1.5V0c1 0 1 2 0 2h1L3 0l.25 1h-.5.5l.25 1H4V0c.7 0 .7 1 0 1 1 0 1 1 0 1h1.3V0v2h1V0h-.5 1'.match(/([a-z]|-?\d*\.?\d+)/ig))

const a7 = pathDataParser('M1 0H0v1h.6H0v1h1.5V0c1 0 1 2 0 2h1L3 0l.25 1h-.5.5l.25 1H4V0c.7 0 .7 1 0 1 1 0 1 1 0 1h1.3V0v2h1V0h-.5 1');
const e7 = [
  { command: 'M', parameters: [1, 0] },
  { command: 'H', parameters: [0] },
  { command: 'v', parameters: [1] },
  { command: 'h', parameters: [0.6] },
  { command: 'H', parameters: [0] },
  { command: 'v', parameters: [1] },
  { command: 'h', parameters: [1.5] },
  { command: 'V', parameters: [0] },
  { command: 'c', parameters: [1, 0, 1, 2, 0, 2] },
  { command: 'h', parameters: [1] },
  { command: 'L', parameters: [3, 0] },
  { command: 'l', parameters: [0.25, 1] },
  { command: 'h', parameters: [-0.5, 0.5] },
  { command: 'l', parameters: [0.25, 1] },
  { command: 'H', parameters: [4] },
  { command: 'V', parameters: [0] },
  { command: 'c', parameters: [0.7, 0, 0.7, 1, 0, 1, 1, 0, 1, 1, 0, 1] },
  { command: 'h', parameters: [1.3] },
  { command: 'V', parameters: [0] },
  { command: 'v', parameters: [2] },
  { command: 'h', parameters: [1] },
  { command: 'V', parameters: [0] },
  { command: 'h', parameters: [-0.5, 1] }
];
s="asda  s,da-123!@##$fsdfs"
console.log(s.replace(/[^a-z-0-9]/g,'').replace('',' '))