function integerValidator(num){
     if(!Number.isInteger(num)){
          throw Error("Number must be an integer")
     }
}

try{
     let num = 4;
     integerValidator(num);
     console.log(num)
}
catch(e){
     console.log(e)
}

try{
     let num = 4.1;
     integerValidator(num);
     console.log(num)
}
catch(e){
     console.log(e)
}