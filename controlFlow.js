let age = 17
if(age >= 18){
    console.log('You are an adult.')
}else{
    console.log('You ar a teeneger.')
}

const fruits = ['Orange','Apple','Banana']
for(const fruit of fruits){
    console.log(fruit)
}
let output = ''
for (let i = 0; i < 3; i++) {
    console.log('*')
    for(let i = 0; i < 4; i++){
        console.log('#')
    }
    for(let i = 0; i < 5; i++){
        console.log('-')
    }
}

// Stars + stripes (7 rows)
for (let i = 0; i < 7; i++) {
    let stars = "";
    // alternating pattern
    if (i % 2 === 0) {
        stars = "* * * * * *";
    } else {
        stars = " * * * * *";
    }
    console.log(stars + " =========================");
}

// Remaining stripes (6 rows)
for (let i = 0; i < 6; i++) {
    console.log("=====================================");
}
