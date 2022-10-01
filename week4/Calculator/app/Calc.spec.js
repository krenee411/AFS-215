const {expect, assert} = require('chai')
const problem = require('./Calc')

describe("Doing Simple Math", () => {
    it("Can add two numbers", () => {
        const addition = new problem(1,1);
    console.log(addition.add())
    })
    it("Can subtract two numbers", () => {
        const subtraction = new problem(2,1)
        console.log(subtraction.sub())
    })
    it("Can multiply two numbers", () => {
        const multiply = new problem(2,2)
        console.log(multiply.multi())
    })
    it("Can divide two numbers", () => {
        const divide = new problem(2,2)
        console.log(divide.div())
    })
    it("Can give an error", () => {
        const error = new problem("Hello", "World")
        console.log(error.error())
        
    })
})