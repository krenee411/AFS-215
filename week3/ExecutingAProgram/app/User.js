module.exports = class User{
    constructor(){
        this.num1 = {};
        this.num2 = {};
        this.name = 'Kelci';
        this.age = 31;
    }

    getUserInfo(){
         this.name + this.age
    
    }

    add(){
        (this.num1) + (this.num2)
    }

    sub(){
        (this.num) - (this.num2)
    }

    multi(){
        (this.num) * (this.num2)
    }

    div(){
        (this.num1) / (this.num2)
    }

    makeString(){
        this.num1.toString()
        this.num2.toString()
        return num1 + num2
    }
}