const {expect} = require('chai')
const ClassInst = require('./Class')


describe('getting the proper outputs', () =>{
    it('says good morning', () => {  
        const CI = new ClassInst(3);
    answer = CI.timeOfDay()
    console.log("1: " + answer)
       
    })

    it('says good afternoon', () => {
        const CI = new ClassInst(7);
    answer = CI.timeOfDay()
    console.log("2: " + answer)
    })

    it('says good evening', () => {
        const CI = new ClassInst(21);
        answer = CI.timeOfDay()
        console.log("3: " + answer)
    })

    it('turns to string', () => {
        const CI = new ClassInst(19);
         error= CI.timeOfDay()
        console.log("4: " + error)
    })
    
    it('throw an error', () => {
        const CI = new ClassInst('Hello World');
        string = CI.timeOfDay()
        console.log("4: " + string)
    })

    
    
})