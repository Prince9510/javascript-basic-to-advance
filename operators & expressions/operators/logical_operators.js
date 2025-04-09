// Logical Operators
let num1 = 10;
let num2 = 20;
let num3;

// AND (&&)

if(num1 % 2 === 0 && num1 % 2 === 0){
    console.log("&& : both condition are true");
}else{
    console.log("&& : both condition are not true");
}

// OR (||)
if(num1 % 2 === 1 || num1 % 2 === 0){
    console.log("|| : any one condition are true");
}else{
    console.log("|| : both condition are not true");
}


// NOT (!)

if(!num3){
    console.log("assigne any value to num3");
}else{
    console.log("num3 has a value");
}