function callbackWithDelay(callback) {
     setTimeout(() => {
       callback();
     }, 2000);
}

callbackWithDelay(()=>console.log('Hello World'))