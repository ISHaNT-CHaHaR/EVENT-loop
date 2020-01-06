const fs = require('fs');
const crypto = require('crypto');

setTimeout(()=>console.log("timer 1 ...finished!"),4000);
setImmediate(()=> console.log("Immediate 1 finished!"))

fs.readFile('text-file.txt',()=>{


    setTimeout(()=>console.log("timer 2 ...finished!"),0);
    
    setTimeout(()=>console.log("timer 3 ...finished!"),3000);

    setImmediate(()=> console.log("Immediate 2 finished!"));

    process.nextTick(()=>console.log("process.nextTick")); 


    console.log('I/O finsihed!');
    


}
)

console.log("hello from top!");  