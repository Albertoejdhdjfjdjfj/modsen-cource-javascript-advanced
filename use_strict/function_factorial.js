"use strict"

function factorial(num){
     if(typeof num !== "number"){
          throw new TypeError("Expected argument type Number")
     }

     if(Number.isNaN(num)){
          throw new Error("The Argument can't be NaN")
     }

     let result=1;

     for(let i = 1;i<=num;i++){
          result*=i;
     }

     return result;
}


console.log(factorial(4));// 24
console.log(factorial(NaN));// errar
console.log(factorial(true));//TypeError