const {expect} = require('chai')
const User = require('./User')

describe('Get Greeting', () => {
    it('greeting user by name and age', () => {
        const user = new User();
        num1 = null
        num2 = null
    info =user.getUserInfo()
    console.log("Hello" + info)
    })

})

describe('Math', () => {
    it('can add', () => {
        const user = new User();
    expect(num1).to.equal(num1)
    expect(num2).to.equal(num2)
    user.add(num1,num2)
    })

    it('can subtract', () => {
        const user = new User();
    expect(num1).to.equal(num1)
    expect(num2).to.equal(num2)
    user.sub(num1,num2)
    })

    it('can multiply', () => {
        const user = new User();
    expect(num1).to.equal(num1)
    expect(num2).to.equal(num2)
    user.multi(num1,num2)

    })

    it('can divide', () => {
        const user = new User();
    expect(num1).to.equal(num1)
    expect(num2).to.equal(num2)
    user.div(num1,num2)
    })

    it('can make numbers a string', () => {
        const user = new User();
    expect(num1).to.equal(num1)
    expect(num2).to.equal(num2)
    user.makeString(num1,num2)
    })
})

