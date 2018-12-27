// var arr=[1,2,3,4,5,6,7,8,9,10,11,12]
// for (const item of arr) {
//     console.log(item);
// }

// console.log(new Date(2000, 8 - 1).toLocaleString("en-us", {month: "long"}));
// console.log(new Date(2000, 6 - 1).toLocaleString("en-us", {}));

// var arr=[1,2,3,4];
// console.log(Math.min(...arr));


// const arr = ["hi", "edabit", "fgh", "abc"];
// const str = 'fgh';
// for (const item of arr) {
//     console.log(item)
// }

// parseInt

// var a='';
// class Test{
//     set a(value){
//         if(value>20){
//             a=value;
//         }else{
//             console.log('输入的值小于20，请重新设置');
//         }
//     }
// }

// const A=new Test();

// A['a']=30;

// console.log(A['a']);
// console.log(A.b);


////JavaScript的get和set方法，方法名为字段名，可以自由编写，通过.或者[]获取。
// var age = 18;
// class test  {
//     get age() {
//         return age;
//     }
//     set age(value) {
//         if (value > 100) age = new Date().getFullYear() - value;
//         else age = value;
//     }
// };
// const t=new test();

// t['age']='20';
// console.log(t.age)

// const arr1=[1,2,3,4,5,6,7];
// const arr2=['a','b','e','c','d'];

// const params={
//     'id':'1314',
//     'name':'xiaosu'
// }

//c=arr1.join('*')  //1*2*3*4*5*6*7
// ...将后边的数组分为每一项添加进去
//[arr2,...arr1]  //[ [ 'a', 'b' ], 1, 2, 3, 4, 5, 6, 7 ]
//concat 用于连接两个数组
//pop()删除并返回数组的最后一个值
//push()数组添加并返回添加的元素
//reverse()跌倒数组顺序
//shift()删除并返回数组中的第一个元素,与pop()相反
//sort()排序并返回新的数组
//toString(),返回字符串，每项之间用,连接
//splice(start,count) slice(start,end)
//forEach((el,index,arr)=>{})  仅仅做遍历
// console.log(arr1.map((el,index,arr)=>{
//     return el+1
// })
// )

// for(let i=0;i<arr1.length;i++){
//     arr1[i]=arr1[i]+1
// }


//console.log(typeof typeof Undefined)
//string


//反转bool，剩下的boolean expected   双重三元运算符
function reverse(bool) {
    return typeof(bool) !== 'boolean' ? 'boolean expected' : bool === true ? false : true 
}
