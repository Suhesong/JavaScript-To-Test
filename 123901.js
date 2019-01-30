// Load the full build.
var _ = require('lodash');
var users = [{
        'user': 'barney',
        'age': 36
    },
    {
        'user': 'fred',
        'age': 40
    },
    {
        'user': 'pebbles',
        'age': 18
    }
];
//_.chain 将对象打成lodash对象 最后用value还原
var names = _.chain(users)
    .map(function (user) {
        return user.user;
    })
    .join(" , ")
    .value();
console.log(names);

//获取最年轻的User
var youngest = _.chain(users)
    .min(function (user) {
        return user.age;
    })
    .value();
console.log(youngest);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(_.chunk(['a', 'b', 'c', 'd'], 3));
console.log(  _.uniq([1, 1, 3]));
console.log( _.compact([0, 1, false, 2, '', 3]));
console.log(_.difference([2, 1,3,5,6], [2, 3]));
console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
// =>[[1,2],[3,4],[5,6],[7,8],[9]]
var array = [1, [2, [3, [4]], 5]];

console.log(_.flattenDepth(array,3))