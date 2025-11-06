//setTimeout - method that executes a block of code after the specified time ie setTimeout(function,millisecond)

console.log('This message displays after 3 seconds')
setTimeout(()=>console.log('Hello world'),3000)

//clearTimout-clearTimeout(intervalID)
let count = 0;
function increaseCount(){
    count += 1;
    console.log(count)
}

let id = setTimeout(increaseCount,3000);
//clear timeout
clearTimeout(id);
console.log('setTimeout is Stopped');


//callback functions - is a function that is passed inside another function as argument.
function greet(name ,callback){
    console.log('Hello there ,'+ name)
    callback()
}
function callMe(){
    console.log('Really nigah')
}
greet('james',callMe);

function add(num1,num2,callback){
    console.log(`Result: ${num1 + num2}`)
    callback()
}
function improveMark(){
    console.log('You need to improve.')
}
add(23,12,improveMark)

//promise - it used to find out if the asynchronous operation is successfull.ie let promise = new promise(function(resolve,reject){})

const counting = true;
let countValue = new Promise(function(resolve,reject){
    if(counting){
        resolve('There is a count value')
    }
    else{
        reject('There is no count value')
    }
})
console.log(countValue)

//with then()
let countValues = new Promise(function(resolve,reject){
    resolve('Promise resolved')
});
countValues
.then(function successValue(result){
    console.log(result)
})
.then(function successValue1(){
    console.log('Call many as you want.')
})

//aync / await
async function f() {
    console.log('Async function')
    Promise.resolve(1)
}
f()
//await - pauses the async function until promise returns a result value
let promises = new Promise(function(resolve,reject){
    resolve('Done with task')
    console.log('Bye!')
})
async function  asynFunc() {
    let results = await promises
    console.log(results)
    console.log('Here are results')
}

asynFunc()