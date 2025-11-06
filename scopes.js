let language = 'Javascript';
global.myLanguage = 'Node js'
function greet(){
    console.log(`Hello from ${language}`)
}
greet()

//function scope
function sayHi(){
    let userName = 'Alice';
    console.log(`Hello ${userName}`)
}
sayHi()

//block scope
function count(){
    const number = 3
    if(number > -1){
        let type = 'Positive'
        console.log(type)
    }
}
count()