//1.返回数组中1-10缺失的一个数字   我的思路：sum-数组和     其它思路：一个一个排查
function missingNums(arr) {
    return 55-arr.reduce((a,b)=>a+b)
}
//2.判断是否平安夜  使用Date类型的API
function Eva(date){
    return date.getMonth() === 11 && date.getDate() === 24;
}
//3.数组去重   第一个想到使用set()   set的一个特性是，不重复   还有一个特性是不按特定的方式排序
function removeDups(arr) {
	return Array.from(new Set(arr))
}
//参考写法   将Set转换为Arr  我第一时间没想到这种写法   
function removeDups(arr) {
    return [...new Set(arr)];
}

//4.根据信息判断浏览器   进行判断的方式   也可以使用str.includes()方法
arr=[ "Google Chrome", "Mozilla Firefox","Internet Explorer"]
function detectBrowser(userAgent) {
    const reg = new RegExp('Chrome','ig')
    const reg1 = new RegExp('Firefox','ig')
    let i=2;
    if(reg.test(userAgent)){
        i = 0;
    }
    if(reg1.test(userAgent)){
        i = 1;
    }
    return arr[i]
}
//参考答案   数组的find(cb())  感觉很爽的样子
const detectBrowser1 = (userAgent) => {
	return [
		{
			rgx: /(MSIE)|(Explorer)/g,
			name: 'Internet Explorer'
		},
		{
			rgx: /Firefox/g,
			name: 'Mozilla Firefox'
		},
		{
			rgx: /Chrome/g,
			name: 'Google Chrome'
		}
	].find(e => e.rgx.test(userAgent)).name;
} 
//5.拼接数组，格式化字符串 formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
function formatPhoneNumber(numbers) {
    str=numbers.join('')
	return '('+str.substring(0,3)+')'+' '+str.substring(3,6)+'-'+str.substr(6)
}
//参考答案1   使用arr.splice的API,给数组进行插入
function formatPhoneNumber1(numbers) {  
    numbers.splice(0,0,'(');
    numbers.splice(4,0,') ');
    numbers.splice(8,0,'-');
    return numbers.join('');
  }
//参考答案2   使用str.indexOf(),进行字符串替换
  function formatPhoneNumber2(numbers) {
    let arr = "(XXX) XXX-XXXX".split('');
    numbers.forEach(n => {
      arr[arr.indexOf('X')] = n;
    });
    return arr.join('');
  }


//6.字符串替换 a4,e3,i1,o0,s5
function hackerSpeak(str) {
	return str.replace(/a/ig,4)
	.replace(/e/ig,3)
	.replace(/i/ig,1)
	.replace(/o/ig,0)
	.replace(/s/ig,5)    
}
//参考答案  replace的回调方法的遍历形式
function hackerSpeak1(str) {
    var chars = {'a':'4','e':'3','i':'1', 'o':'0', 's':'5'};
    str = str.replace(/[aeios]/g, letter => chars[letter]);
    str.resever()
    return str;
  }
// 7.判断回文数字
function isSymmetrical(num) {
    return [...num.toString()].reverse().join('')==num.toString()
}
console.log(isSymmetrical(12345))

// 8.使字符串数组的每一项第一个字母大写，其它的字母小写
function capMe(arr) {
    return    arr.map((el)=>el[0].toUpperCase()+el.slice(1).toLowerCase())
}
console.log(capMe(["mavis", "senaida", "letty"]))

//9 8.
function sortDecending(num) {
	return [...num.toString()].sort((a,b)=>a>b).join('')
}

console.log(Number(true))

//10.
function formatNum(num) {
    // let numList = [...num.toString()];
    // let result = [];
    // var i = 0;
    // while(numList.length>0){
    //     result.unshift(numList.pop());
    //     i++;
    //     if(i == 3 && numList.length != 0) {
    //         result.unshift(',');
    //         i = 0;
    //     }
    // }
    // return result.join('');
    return [...num.toString()].reverse().join('').replace(/\w{3}/g, str => str+",").split("").reverse().join("");
}

function equal(a, b, c) {
	var arr=new Set([a,b,c])
	if(arr.size()==3) return 0
	if(arr.length==2) return 2
	if(arr.length==1) return 3
}
