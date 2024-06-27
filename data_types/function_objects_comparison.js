function compareObjects(obj1,obj2){
     if(!(obj1 instanceof Object && obj2 instanceof Object)){
          throw TypeError("The arguments must have type Object")
     }

     for(key in obj1){
         if(!(obj1[key] instanceof Object)){
               if(obj1[key]!==obj2[key]){
                    return false
               }
         }else{
             if(!compareObjects(obj1[key],obj2[key])){
               return false
             }
         }
     }

     return true
}

console.log(compareObjects({name:{k:1}},{name:{k:2}}));//false
console.log(compareObjects({name:{k:1}},{name:{k:1}}));//true