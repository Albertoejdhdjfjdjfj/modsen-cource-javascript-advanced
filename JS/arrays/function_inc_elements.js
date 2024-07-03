function incElements(arr){
     return arr.map((el)=>Math.round(el * 1.1));
}

console.log(incElements([100,200,300]))