var fs = require('fs');

let directory = "path";
let dirBuf= Buffer.from(directory);

fs.readdir(dirBuf, (err,files) => {
    if(err){
        console.log(err.message);
    }
    else{
        console.log(files);
    }
})

