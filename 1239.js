// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
class User {
    constructor({
        userName,
        avator
    }) {
        this.userName = userName;
        this.avator = avator;
    }
}
const currentUser = new User({
    userName: 'Foo',
    avator: 'foo.png'
});
User.prototype = {};
console.log(currentUser instanceof User)
console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }))
console.log(_.chunk(['a', 'b', 'c', 'd'], 2))