// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


for(let i = 1; i <= 5; i++){
    let line = ""
    for(let j = 1; j <= i; j++){
        line += j + " " 
    }
    console.log(line);
}