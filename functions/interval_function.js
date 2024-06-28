function interval(callback,time,count){
     
    const interval = setInterval(()=>{
     callback();
     count--;
     if(!count){
     clearInterval(interval)
     }
},time);
}

let i=0;

interval(()=>console.log(i++),100,50)