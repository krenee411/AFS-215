const {expect} = require('chai')
const ClassInst = require('./Class')


describe('getting the proper outputs', () =>{
    it("gives a 1 string", () => {
        const CI = new ClassInst(1).timeOfDay();
        expect(CI).to.equal("1")
        console.log("1: " + CI)
    })
    it("gives a 2 string", () => {
        const CI = new ClassInst(2).timeOfDay();
        expect(CI).to.equal("2")
        console.log("2: " + CI)
        
    })
    it('says good morning when passed 3', () => {  
        const CI = new ClassInst(3).timeOfDay();
        expect(CI).to.equal("Good Morning")
    console.log("3: " + CI)
       
    })
    it('says good afternoon when passed 7', () => {
        const CI = new ClassInst(7).timeOfDay();
        expect(CI).to.equal("Good Afternoon")
    console.log("4: " + CI)
    })
    it('says good morning when passed multiple of 3', () => {  
        const CI = new ClassInst(6).timeOfDay();
        expect(CI).to.equal("Good Morning")
    console.log("5: " + CI)
    })
    it('says good afternoon when passed multiple of 7', () => {
        const CI = new ClassInst(14).timeOfDay();
        expect(CI).to.equal("Good Afternoon")
    console.log("6: " + CI)
    })

    it('says good evening when passed multiple of 3 and 7', () => {
        const CI = new ClassInst(21).timeOfDay();
        expect(CI).to.equal("Good Evening")
        console.log("7: " + CI)
    })

    it('is neither a multiple of 3 or 7 returns string', () => {
        const CI = new ClassInst(19).timeOfDay();
        expect(CI).to.be.a("string")
        console.log("8: " + CI)
    })
    
    it('throws an error', () => {
        const CI = new ClassInst("Hello World").timeOfDay();
        expect(CI).to.be.a("string")
        console.log("7: " + CI)
    })
  
})