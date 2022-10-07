module.exports = class Calculator{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    add(){
       return (this.num1) + (this.num2)
    }

    sub(){
       return (this.num1) - (this.num2)
    }

    multi(){
       return (this.num1) * (this.num2)
    }

    div(){
        return (this.num1) / (this.num2)
    }
    error(){
        if(typeof this.num1 !== "number"|| typeof this.num1 !== "number"){
            return "Error: Please enter a number"
        }else{
            return this.add()
        }
        

    }
}