// nested if else 

let mark = 78;

if(mark >= 90){
    console.log("Grade A");
}else if(mark >= 70 && mark < 90){
    console.log("Grade B");
}else if(mark >= 50 && mark < 70){
    console.log("Grade C");
}else if(mark >= 30 && mark < 50){
    console.log("Grade D");
}else{
    console.log("Fail");
}


// example 2


let light = "red"

if(light == "red"){
    console.log("stop here");
}else if(light == "yellow"){
    console.log("slow down here");
}else if(light == "green"){
    console.log("go now");
}else{
    console.log("invalid traffic light");
}

// example 3

let score = 720;
let member = true;
let bill = 22000

if(member === true){
    if(score >= 100 && score <= 200){
        let discount = (bill * 10) / 100
        let final_bill = bill - discount
        console.log("You Get 10% Discount and after discount you pay",final_bill);
    }else if(score >= 201 && score <= 500){
        let discount = (bill * 15) / 100
        let final_bill = bill - discount
        console.log("You Get 15% Discount and after discount you pay",final_bill);
    }else if(score >= 501 && score <= 1000){
        let discount = (bill * 25) / 100
        let final_bill = bill - discount
        console.log("You Get 25% Discount and after discount you pay",final_bill);
    }
}else{
    console.log("You are not eligible for Discount your total bill are",bill);
}


// example 4 

let a = 100;
let b = 800;
let c = 15;

if(a < b){
    console.log("b is big");
}else if(a < c){
    console.log("c is big ");
}else if(c < b){
    console.log("b is big");
}else{
    console.log("a is big");
}


// example 5

let num = -10;

if(num > 0){
    if(a % 2 === 0){
        console.log("positive even");
    } else{
        console.log("positive odd");
    }
}else if(num < 0){
    if(num % 2 !== 0){
        console.log("nagative odd");
    } else{
        console.log("nagative even");
    }
}else{
    console.log("not give 0");
}