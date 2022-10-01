const {expect, assert} = require('chai')
const ClassInst = require('./Class')


describe('getting the proper outputs', () =>{
    it("gives a 1 string", () => {
        const CI = new ClassInst(1);
        answer = CI.timeOfDay()
        console.log("1: " + answer)
    })
    it("gives a 2 string", () => {
        const CI = new ClassInst(2);
        answer = CI.timeOfDay()
        console.log("2: " + answer)
        
    })
    it('says good morning when passed 3', () => {  
        const CI = new ClassInst(3);
    answer = CI.timeOfDay()
    console.log("3: " + answer)
       
    })
    it('says good afternoon when passed 7', () => {
        const CI = new ClassInst(7);
    answer = CI.timeOfDay()
    console.log("4: " + answer)
    })
    it('says good morning when passed multiple of 3', () => {  
        const CI = new ClassInst(6);
    answer = CI.timeOfDay()
    console.log("5: " + answer)
    })
    it('says good afternoon when passed multiple of 7', () => {
        const CI = new ClassInst(14);
    answer = CI.timeOfDay()
    console.log("6: " + answer)
    })

    it('says good evening when passed multiple of 3 and 7', () => {
        const CI = new ClassInst(21);
        answer = CI.timeOfDay()
        console.log("7: " + answer)
    })

    it('is neither a multiple of 3 or 7 returns string', () => {
        const CI = new ClassInst(19);
         string= CI.timeOfDay()
        console.log("8: " + string)
    })
    
    it('throws an error', () => {
        const CI = new ClassInst("Hello World");
        error = CI.timeOfDay()
        console.log("7: " + error)
    })
  
})