//1.返回一个数组的最大值，最小值，长度，平均值
function f(arr) {
    return [Math.min(...arr), Math.max(...arr), arr.length, avg(arr)]
}

function avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length
}
//参考答案  使用reduce
function minMaxLengthAverage(arr) {
    const len = arr.length
    const avg = arr.reduce((v1, v2) => v1 + v2) / len;
    const min = arr.reduce((v1, v2) => v1 > v2 ? v2 : v1);
    const max = arr.reduce((v1, v2) => v1 > v2 ? v1 : v2);
    return [min, max, len, avg];
}

//2.根据n截取π的长度   智障了智障了   直接用toFixed就成，我还想着先转换成字符串然后截取，不和初衷，我还以为不用四舍五入呢
function myPi(n) {
    return parseFloat(parseFloat(Math.PI.toString().substr(0,n+3)).toFixed(n))
}

//标准答案   可以用Number定义个新类型
function myPi(n) {
	return Number(Math.PI.toFixed(n));
}


//3.判断一个数组的平均值是否为一个整数
arr=[1, 2, 3]
//console.log(avg(arr)===Math.round(avg(arr)))

//参考答案  Number里有个isInteger这个API去判断是否整数    另外reduce又忘了去使用了
function isAvgWhole(arr) {
	return Number.isInteger(arr.reduce((accum, val) => accum + val) / arr.length) 
}

//4.判断第一个str在第二个str中出现的次数   数组的length，必须保证有数组，如果是null会引发错误
function charCount(myChar, str) {
	return str.match(new RegExp(myChar,'g'))?str.match(new RegExp(myChar,'g')).length:0
}
//参考答案 思路一致，它的各式巧妙，一些简单判断可以先使用，三元转换符，也可以使用逻辑表达式
function charCount1(myChar, str) {
    return (str.match(new RegExp(myChar,"g"))||[]).length;
    }
//标准答案  另一种思路，将str打散，但是只是针对myChar是一个字母，当然这道题是这样，我觉得我的拓展性好，嘻嘻嘻
function charCount2(myChar, str) {
	return [...str].filter(x => x===myChar).length;
}

//5.以字符串形式返回一个 由多个数字组成的字符串 中的最大值和最小值 eg："1 2 3 4 5" ——>"5 1"
function highLow(str) {
	arr=str.split(' ').map(el=>parseInt(el))
	
	return Math.max(...arr)+' '+Math.min(...arr)
}

//6.判断字符串中x和o的数量 返回一个布尔值   
function XO(str) {
	return (str.match(/x/ig)||[]).length===(str.match(/o/ig)||[]).length
}

//参考答案  这里主要谈一下replace这个API,以及他的正则的写法  /[^x]/ig   ^的具体意思
function XO(str) {
    return str.replace(/[^x]/ig, '').length === str.replace(/[^o]/ig, '').length
  }

  //进行 str的API总结 和 Math常用方法总结    以及  正则几处使用场景和具体写法  
                                                    //String的常用API总结
                                                    const str="hello worldhello world"
  //对于string类型   感觉使用起来很像数组，可以直接使用索引的形式，比如str[],可以直接遍历。特别舒服
// for (const iterator of str) {
//     console.log(iterator)
// }
// for (const key in str) {
//     console.log('key:',key,str[key])
// }
//     str.split(',')  和 arr.join('-')   字符串根据','分成数组  数组以'-'合成字符串  使用跟其他语言类似
//     str.length   长度属性     str.substring(start:number,end:number):截取字符串， str.match(reg)：匹配一个正则表达式   str.indexOf('xx')：查看xx在str的位置，如果存在返回索引，若不存在返回-1
//     两者的区别                str.substr(start:number,length:number)
console.log(str.substr(1,3))            //ell
console.log(str.substring(1,3))         //el
// str.valueOf()  暂时没明白   str.toUpperCase() 将字符串所有字母变为大写 toLocaleUpperCase() 当地语言
console.log(str.toLocaleUpperCase()) //HELLO WORLD
// str.sup() 返回一个HTML标签 <sup>hello world</sup>  类似的 str.sub() str.strike() str.small() str.big()
console.log(str.sup()) //<sup>hello world</sup>
//将字符串自加  str.repeat(count:number)
console.log(str.repeat(5)) //hello worldhello worldhello worldhello worldhello world
//字符串替换 str.replace(reg,newString)
console.log(str.replace(/hello/,'nihao'))  //hello worldhello worldhello worldhello worldhello world
//str.search(reg)   返回查找到的索引，找不到就返回-1     str.indexOf(searchString:string,position:number?)  indexOf可以多一个位置功能？
console.log(str.search(/world/))    //6
console.log(str.indexOf('o',5))   //7
//str.link()  创建HTML的<a>标签
console.log(str.link('xx'))  //<a href="xx">hello world</a>
//str.slice()  支持负数（加自身长度），很灵活，不会自动区分两个数大小   substr也支持负数   substring自动区分两个值的大小
console.log(str.slice(4,-1))  //o worl
console.log(str.substr(4,1))  //o
console.log(str.substring(4,1)) //ell
//str.includs 查看字符串是否包含某个字符串 返回boolean
console.log(str.includes('hellx'))  //false
//str.charCodeAt()  查看字符串对应位置的Unicode


                                                            //Math常用方法
//Math.max()   Math.min()   Math.PI   这三个经常用不赘述
console.log(Math.random())   //返回一个0到1的值随机数
console.log(Math.pow(2,3))   //2的3次方，很好理解
console.log(Math.round(2.2))   //四舍五入，保留整数
//常用的几个API,Math剩下的API就是一些的数学操作，有特殊场景的时候再掉吧，比如三角函数，另外的一些数学函数
                                                            //正则表达式的总结
//几个标志     i：忽略大小写     g：全文查找    m:多行查找
//几个常用的正则式API        test:boolean  测试是否有匹配正则的值，返回bool   exec：返回一个数组
const reg=/o/ig;
const reg2 = /^h(.?)(.?)(.*)d/g;
console.log(reg.exec(str))   //[ 'o', index: 4, input: 'hello world' ]
console.log(reg.exec(str))   //[ 'o', index: 7, input: 'hello world' ]
console.log(reg2.exec(str))
console.log(reg2.exec(str))
console.log(reg2.exec(str))
console.log(reg.test(str))   //true
console.log(str.match(reg))  //[ 'o', 'o' ]




