
const Time = require('./Time')



const one = new Time(6)
const two = new Time(14)
const three = new Time(21)
const four = new Time(2)
const five = new Time("HelloWorld")


console.log(one.timeOfDay())
console.log(two.timeOfDay())
console.log(three.timeOfDay())
console.log(four.timeOfDay())
console.log(five.timeOfDay())