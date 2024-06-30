function executeSequentialAsync(tasks) {
     return tasks.reduce((promise, task) => {
       return promise.then(() => {
         return new Promise((resolve, reject) => {
           task()
             .then(resolve)
             .catch(reject);
         });
       });
     }, Promise.resolve());
   }

const task1 = () => {
     return new Promise((resolve) => {
       console.log('Task 1 started');
       setTimeout(() => {
         console.log('Task 1 completed');
         resolve();
       }, 2000);
     });
   };
   
   const task2 = () => {
     return new Promise((resolve) => {
       console.log('Task 2 started');
       setTimeout(() => {
         console.log('Task 2 completed');
         resolve();
       }, 1000);
     });
   };
   
   const task3 = () => {
     return new Promise((resolve) => {
       console.log('Task 3 started');
       setTimeout(() => {
         console.log('Task 3 completed');
         resolve();
       }, 3000);
     });
   };
   
   executeSequentialAsync([task1, task2, task3])
     .then(() => {
       console.log('All tasks completed');
     })
     .catch((error) => {
       console.error('Error:', error);
     });