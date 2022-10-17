module.exports = class dataClass{
    constructor(){
        this.dataArray = {};
        this.length = 0
        
    }

push(item){
   this.dataArray[this.length] = item;
   this.length++;
   return `${item} has been added`
}
showArray(){
    return Object.values(this.dataArray)
    
}
remove(){
    const removed = this.dataArray[this.length-1]
        delete this.dataArray[this.length-1];
        this.length--;
        return `${removed} was removed.`
        
    
}
search(item){
    const found = this.dataArray[0]
    if(found === item)
         return true
    else
    return 'Error: The title you are searching for is not found.'    
}
}