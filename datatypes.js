/*
primitive data types:
  1.string
  2.Numbers
  3.Big int
  4.undefined
  5.null
  6.symbol

*/
/*
Non primitive data types
 1.arrays
 2.functions
 4.object
 5.map
 6.sets
*/



//---strings----
let user = 'Alice';
let city = String('Nairobi');

console.log(typeof user);
console.log(typeof city);

//--Number---
let age = 18;
let price = 19.65;
let total = age + price
console.log(total)

//---Big int--
let num = 354782289893090209203n;
console.log(typeof num)

//---null---
let game = null;
console.log(game)

//---undefined---
let fn;
console.log(fn)

//--symbol--
const prime = Symbol('Define')
console.log(prime)

//--Boleans--
let isAdmin = true;
let notAdmin = false;

// Non - primitive types

//--object--a collection of many keywords
let person = {
      name : 'Horace Witaba',
      age : 25,
      isStudent : true
}
console.log(person.name);

let states = new Object(
    {
        country : 'Kenya',
        city : 'Nairobi',
        population : '40 million'

    }
)
console.log(typeof states)

//accessing properties in objects
person.age = 20;
console.log(person)

//---Arrays--
let fruits = [
    'Mango', 'Apple', 'Orange',
    'Melon', 'Grapes' , 'Blackberry' , 'Kiwi'
]
console.log(fruits[4])
 //iterating through an array
for(let fruit of fruits){
    console.log(fruit)
}

// -- function --

function greet(){
    let bot = 'ChatLexi'
    console.log('Hello there! how are you doing?')
    console.log(`I am ${bot} your chatbot.`)
}
greet()
//arrow function
const func = ()=>{
    console.log('I hate gaming!')
}
func()

/*
common method in array 
  length
*/
console.log(fruits.length)
console.log("Horace Witaba".length)

//indexOf
console.log(fruits.indexOf('Apple') + 1)
//LastIndexOf
console.log(fruits.lastIndexOf('Grapes') + 1)
//includes
console.log(fruits.includes('Mango'))
//filter-returns arrays of elements that meets a condition
 const gtTunes = fruits.filter((value,index)=>{
    return index < 4;
 })
 console.log(gtTunes)
 //sort
 let num1 = [3,6,2,4,1,8,5,9,7]
 num1.sort()
 console.log(num1)

 //---object method---
 const voter = {
    name : 'John Doe',
    age : 18,
    isVoter : true,
    greet : function (){
        return `Hello ${this.name} welcome to Voters hub`
    }

 }
console.log(voter.greet())
//methods in objects
console.log(Object.values(voter))
console.log(Object.entries(voter))


