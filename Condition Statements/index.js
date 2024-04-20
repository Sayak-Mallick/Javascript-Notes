let x = 5;

if(x > 5){
    console.log("X is greater than 5");
}
else if(x < 5){
    console.log("X is less than 5");
}
else{
    console.log("X is equal to 5");
}


let y = 10;
let z = y > 5 ? "Y is greater than 5" : "Y is less than 5";
console.log(z);


let a = 5;
switch(a){
    case 1:
        console.log("A is 1");
        break;
    case 5:
        console.log("A is 5");
        break;
    default:
        console.log("A is not 1 or 5");
        break;
}