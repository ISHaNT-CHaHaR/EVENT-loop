const fs = require('fs');

setTimeout(()=>console.log("timer 1 ...finished!"),0);
setImmediate(()=> console.log("Immediate 1 finished!"))

fs.readFile('text-file.txt',()=>{
    console.log('I/O finsihed!');
}
)

console.log("hello from top!");  