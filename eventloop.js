const fs = require('fs');
const crypto = require('crypto');

const start= Date.now();

process.env.UV_THREADPOOL_SIZE=3;

setTimeout(()=>console.log("timer 1 ...finished!"),0);
setImmediate(()=> console.log("Immediate 1 finished!"))

fs.readFile('text-file.txt',()=>{


    setTimeout(()=>console.log("timer 2 ...finished!"),0);
    
    setTimeout(()=>console.log("timer 3 ...finished!"),0);

    setImmediate(()=> console.log("Immediate 2 finished!"));

    process.nextTick(()=>console.log("process.nextTick")); 


    console.log('I/O finsihed!');
    
    crypto.pbkdf2('password','salt', 100000,1024,'sha512', ()=>{
        console.log(Date.now()-start,"Password encrypted!");   });
    
    crypto.pbkdf2('password','salt', 100000,1024,'sha512', ()=>{
            console.log(Date.now()-start,"Password encrypted!");  }); 

    crypto.pbkdf2('password','salt', 100000,1024,'sha512', ()=>{
                console.log(Date.now()-start,"Password encrypted!");   });
    crypto.pbkdf2('password','salt', 100000,1024,'sha512', ()=>{
                    console.log(Date.now()-start,"Password encrypted!");  
    });


})

console.log("hello from top!");