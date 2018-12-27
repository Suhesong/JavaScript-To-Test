// //1.get word count   
// const str = "What an easy task,right";

// console.log(str.split(',').join(' ').split(' ').length)

// //过滤数组

// arr=['xiao','shuai','susu','nihao'];

// console.log(arr.filter(x => x.length===4))

// //按顺序将单词字母排序  合成字符串的时候注意","  别使用toString()  使用join    ehllo   e,h,l,l,o   灵活使用reduce
// function AlphabetSoup(str) {
//     return str.split('').sort().join('');    [...str]  和 str.split('') 相同
//   }
// console.log(AlphabetSoup('hello'))

//算从一累加到某个数的和 递归形式
function add(num){
    if(num===1) return 1
    else return num+add(num-1)
}

console.log(add(100))