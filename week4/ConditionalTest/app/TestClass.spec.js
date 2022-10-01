const {expect, assert} = require('chai')
const ClassInst = require('./Class')


describe('getting the proper outputs', () =>{
    it("gives a 1 string", () => {
        const CI = new ClassInst(1).timeOfDay();
        console.log("1: " + CI)
    })
    it("gives a 2 string", () => {
        const CI = new ClassInst(2).timeOfDay();
        console.log("2: " + CI)
        
    })
    it('says good morning when passed 3', () => {  
        const CI = new ClassInst(3).timeOfDay();
    console.log("3: " + CI)
       
    })
    it('says good afternoon when passed 7', () => {
        const CI = new ClassInst(7).timeOfDay();
    console.log("4: " + CI)
    })
    it('says good morning when passed multiple of 3', () => {  
        const CI = new ClassInst(6).timeOfDay();
    console.log("5: " + CI)
    })
    it('says good afternoon when passed multiple of 7', () => {
        const CI = new ClassInst(14).timeOfDay();
    console.log("6: " + CI)
    })

    it('says good evening when passed multiple of 3 and 7', () => {
        const CI = new ClassInst(21).timeOfDay();
        console.log("7: " + CI)
    })

    it('is neither a multiple of 3 or 7 returns string', () => {
        const CI = new ClassInst(19).timeOfDay();
        console.log("8: " + CI)
    })
    
    it('throws an error', () => {
        const CI = new ClassInst("Hello World").timeOfDay();
        console.log("7: " + error)
    })
  
})