//array destructuring
const numbers = [10,20,30]
const [x,y,z] = numbers
console.log(x)
console.log(y)
console.log(z)

//object destructuring
const user = {
    name : 'Alice',
    age :18
}
const {name} = user
console.log(name)

//spreed in array
const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9]
const arr3 = [...arr1 , ...arr2]
console.log(arr3)
//spread in objects
const lady = {name : 'Main',age:22,gender:'Male'}
const updated = {...lady, status:'Single',employabilty:'self employed'}
console.log(updated)

//rest in array
const myNum = [4,5,6]
const [firstNum , ...otherNum] = myNum
console.log(firstNum)
console.log(otherNum)