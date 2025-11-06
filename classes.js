class Person {
    constructor(userName,age){
        this.userName = userName;
        this.age = age;
    }
    greet(){
        console.log(`Hi i am ${this.userName},and i am ${this.age}`)
    }
}
const person = new Person('Alice', 25);
person.greet()

class Car{
    constructor(model , year, color){
        this.model =model;
        this.year = year;
        this.color = color;
    }
    car(){
        console.log(`A new ${this.model} ${this.year}, ${this.color}`)
    }
}
const car1 = new Car('Mustang',2019,'Black')
car1.car()

class Library{
    constructor(title,Author,isAvailable){
              this.title = title;
              this.Authour = Author;
              this.isAvailable = isAvailable;

    }
    book(){
        if(this.isAvailable){
            console.log(`The book ${this.title} by ${this.Authour} is available for order`)
        }
        else{
            console.log(`The book ${this.title} by ${this.Authour} is not available for order`)
        }
    }
}
const book1 = new Library('1964','Jean Fr. Reicherl',true)
const book2 = new Library('Unpopular Word','Zedic R. Wellingnes',false)
book1.book()
book2.book()


//private, public static ,non-static  fields and method of a class

class MathUtils{
    static PI = 3.14;
    static #secretConstant = 49;

    static circle(radius){
        return this.PI * radius
    }
    static #addSecret(value){
        return value * Math.floor(this.#secretConstant)
    }
    computeSecret(value){
        return MathUtils.#addSecret(value)
    }
}
const area = MathUtils.circle(18);
const utils = new MathUtils()
console.log(area)
const  util = utils.computeSecret(34)
console.log(util)

//------oop concepts-----
//inheritance
class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,age,owner){
        super(name);
        this.age = age;
        this.owner = owner;
        
    }
    dog(){
        console.log(`the dog ${this.name} aged ${this.age} owned by ${this.owner}`)
    }

}
const bunny = new Dog('Bunny',3,'Horace')
bunny.dog()

//Abstraction
class CoffeeMachine{
    #waterLevel = 0;
    filterWater(amount){
        this.#waterLevel + amount;
    }
    #boilWater(){
        console.log('Boiling water....')
    }
    makeCofee(){
        if(this.#waterLevel > 0){
            this.#boilWater();
            console,log('cofee ready....')
        }
        else{
            console.log('Fill in water')
        }
    }

}
const water = new CoffeeMachine();
water.filterWater(23);
water.makeCofee()

//