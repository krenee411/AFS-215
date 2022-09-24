module.exports = class ClassInst{
    constructor(number){
        this.number = parseInt(number);
    }

    timeOfDay(){
        if(this.number === 1){
            return "1"
        }
        else if(this.number === 2){
            return "2"
        }
        else if(this.number % 3 ===0 && this.number % 7 === 0){ 
            return "Good Evening"
        }
        else if(this.number % 3 === 0 &&  number % 7 != 0){
            return "Good Morning"
        }
        else if(this.number % 7 === 0 ){
            return "Good Afternoon"
        }
        else if(this.number % 3 !== 0 && this.number % 7 !== 0){
            return this.number
        }
        else if(this.number.dataType === String){
            return "Error: a number was expected please enter a number."
        }
    
    }
}