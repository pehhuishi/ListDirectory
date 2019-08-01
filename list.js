var fs = require('fs');
    path = require('path');

//this is to create and tell where i want to start off from
// let directory = 'path';
// let dirBuf= Buffer.from(directory);
// console.log(dirBuf);

//this is doing the sync way to read my files
// let files = fs.readdirSync(directory);
// console.log(files);

//this is doing it in async way
// fs.readdir(dirBuf,(err,files) => {
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log(files);
//     }
// })

function search(dir){
    // console.log('\t', dir);
    var files = fs.readdirSync(dir);
    for(var x in files){
        var next = path.join(dir,files[x]);
        if(fs.lstatSync(next).isDirectory()){
            search(next);
        }
        else{
            console.log('\t',next.replace(__dirname, ''));
        }
    }
}

search(__dirname);