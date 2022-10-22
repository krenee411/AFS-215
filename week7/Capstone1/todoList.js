module.exports = class Mylist{
    constructor(){
        this.list = []
        this.length = 0
    }

    getList(){
        return Object.values(this.list)
    }

    add(item){
        this.list[this.length] = item;
        this.length++;
        return `${item} has been added`
    }

    multiAdd(words){
        this.list[this.length] = words
        this.length++;
        return `${words} have been added to the list`
       
    }
    removeFirst(item){
        item = this.list.shift()
        this.length--
        return `${item} has been removed from list`
    }
    removeLast(item){
        item = this.list.pop()
        this.length--
        return `${item} has been removed from list`
    }
    removeSpecific(word,item,index){
        index = this.list.indexOf(word)
        item = this.list.splice(word,1)
        this.length--
       return `${item} has been removed from list`
        
    }
}