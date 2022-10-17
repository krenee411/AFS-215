const {expect,assert} = require('chai')
const dataClass = require('./JsClass')

// describe('Can minipulate an array', () => {
//     it('can add to array', () => {
//         const canAdd = new dataClass
//         expect(canAdd.push('Lord of the Rings')).to.deep.equal('Lord of the Rings has been added')
//         console.log(canAdd)
//     })
//     it('can show data in array', () => {
//         const canShow = new dataClass
//         canShow.push('Lord of the Rings');
//         canShow.push(1)
//         expect(canShow.showArray()).to.deep.equal(['Lord of the Rings', 1])
//         console.log(canShow)
        
//     })
//     it('can remove data from array', () => {
//         const canRemove = new dataClass
//         canRemove.push("Hello")
//         canRemove.push("Jump")
//         canRemove.push("Lord of the Rings")
//         expect(canRemove.remove('Lord of the Rings')).to.equal('Lord of the Rings was removed.')
//         console.log(canRemove)
       
        
//     })
//     it('can search the data array', () =>{
//         const canSearch = new dataClass
//         canSearch.push('Lord of the Rings')
//         expect(canSearch.search('Lord of the Rings')).to.equal(true)
//         console.log(canSearch)
//         // expect(canSearch.search("Hello")).to.equal("Error: The title you are searching for is not found.")
        
//     })
    
// })

describe('Can minipulate an array', () => {
    before(() => {
        console.log("_______Begin_______")
    })

    beforeEach(() => {
        data = new dataClass
        data.push('Lord of the Rings')
        data.push(1)
        data.push('Cat')
    })
    after(() => {
        console.log("_______End_______")
    })
    afterEach(() => {
        console.log('_test complete_')
    })

    it('can add to array', () => {
        expect(data.push('Lord of the Rings')).to.deep.equal('Lord of the Rings has been added')
    })
    it('can show data in array', () => {
        expect(data.showArray()).to.deep.equal(['Lord of the Rings', 1, 'Cat'])
    })
    it('can remove data from array', () => {
        expect(data.remove('Cat')).to.equal('Cat was removed.')
    })
    it('can search the data array', () =>{
        expect(data.search('Lord of the Rings')).to.equal(true)
    })
})