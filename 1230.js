// //1.判断一个数组中原因字母的数量
// function countVowels(str) {
// 	const arr='aouie'
// 	let count = 0
// 	for(let i=0;i<str.length;i++){
// 		if(arr.indexOf(str[i])>-1) count++
// 	}
// 	return count
// }
// //最佳答案   使用正则表达式
// function countVowels(str) {
//     return str.match(/[aeiou]/g).length;
//   }

// //参考答案  思想类似
// let countVowels = str =>
// 	[...str].filter(c => /[aeiou]/i.test(c)).length

//2.返回字符串每个值都变为双倍的字符串 如abc=>aabbcc
function doubleChar(str) {
    return str.split('').map((el) => el + el).join('')
}

//3.返回斐波那契数列指定项的值
function factorial(x) {
    if (x === 0) return 1
    if (x === 1) {
        return 1
    } else {
        return (factorial(x - 1) + factorial(x - 2))
    }
}
//4.把一个字符串中的原因字母移掉
str='aoieusadasda' 
function f(str){
    return [...str].filter((el)=>!(/[aoieu]/i.test(el))).join('')
}
function g(str){
    return str.match(/[aeiou]/g).join('')
}
console.log(g(str))
//参考答案  使用字符串的取代函数  正则表达式用的方式有很多！！！  后边的ig参数需要查一下
function silenceTrump(str) {
    return str.replace(/[aeiou]/ig, '');
  }

//返回数组中每项绝对值的和、
//参考答案 reduce，第二个参数是0是什么意思
function getAbsSum(arr){
    return arr.reduce((count, num) => count + Math.abs(num), 0)
  }
