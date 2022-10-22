const {expect} = require('chai')
const Mylist = require('./todoList')

// describe('Can minipulate a list', () => {
//   it('can show list', () => {
//     const item = new Mylist
//     item.add("Hello")
//     item.add(1)
//     item.add({"Name": "Kelci"})
//     item.add(true)
//     expect(item.getList()).to.deep.equal(["Hello", 1, {"Name": "Kelci"}, true])
//     console.log(item)
//   })
//   it('can add to list', () => {
//     const item = new Mylist
//     expect(item.add("Hello")).to.equal("Hello has been added")
//     console.log(item)
//   })
//   it('can add multi items to list', () => {
//     const item = new Mylist
//     expect(item.multiAdd([false, "World", 2])).to.deep.equal('false,World,2 have been added to the list')
//     console.log(item)
//   })
//   it('can remove fist item from list', () => {
//     const item = new Mylist
//     item.add("Hello")
//     expect(item.removeFirst()).to.equal("Hello has been removed from list")
//     console.log(item)
//   })
//   it('can remove last item from list', () => {
//     const item = new Mylist
//     item.add(true)
//     expect(item.removeLast()).to.equal("true has been removed from list")
//   })
//   it('can remove specific item from list', () => {
//     const item = new Mylist
//     item.add("World")
//     expect(item.removeSpecific("World")).to.equal("World has been removed from list")
//     console.log(item)
//   })
// })


describe('Can minipulate an array', () => {
    before(() => {
        console.log("_______Let the testing commence_______")
    })
    beforeEach(() => {
        item = new Mylist
        item.add("Hello")
        item.add(1)
        item.add("Jump")
        item.add({"Name": "Kelci"})
        item.add(true)
        
    })

    after(() => {
        console.log("_______Testing is complete_______")
    })

    afterEach(() => {
        console.log('----------------------')
    })

    it('can show list', () => {
        expect(item.getList()).to.deep.equal(["Hello", 1, "Jump", {"Name": "Kelci"}, true])
        console.log(item)
    })    
    it('can add to list', () => {
        expect(item.add("Dragon")).to.equal("Dragon has been added")
        console.log(item)
    })
    it('can add multi items to list', () => {
        expect(item.multiAdd([false, "World", 2])).to.deep.equal('false,World,2 have been added to the list')
        console.log(item)
    })
    it('can remove fist item from list', () => {
        expect(item.removeFirst()).to.equal("Hello has been removed from list")
        console.log(item)
    })
    it('can remove last item from list', () => {
        expect(item.removeLast()).to.equal("true has been removed from list")
        console.log(item)
    })
    it('can remove specific item from list', () => {
            //expect(item.removeSpecific(1)).to.equal("1 has been removed from list")
            expect(item.removeSpecific("Jump")).to.equal("Jump has been removed from list")
            console.log(item)
    })
    
})
