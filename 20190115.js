const Observable = require('rxjs')
const ob = Observable.interval(1000);
ob.take(3).map(n => n * 2).filter(n => n > 0).subscribe(n => console.log(n));