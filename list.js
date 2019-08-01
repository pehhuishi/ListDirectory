var fs = require('fs');
    path = require('path');

function search(dir){
    var files = fs.readdirSync(dir);
    for(var x in files){
        var directoryPath = path.join(dir,files[x]);
        //check if there is a folder if folder continue till you get
        if(fs.lstatSync(directoryPath).isDirectory()){
            search(directoryPath);
        }
        else{
            //after getting directory is done, open up the file to read what is the content
            fs.readFile(directoryPath, function(err, data){
                if(err){
                    console.log(err);
                }
                //print the path only if it has the word "TODO"
                else{
                    if(data.indexOf('TODO') >= 0) {
                        console.log('\t',directoryPath.replace(__dirname, ''));
                    }
                }
            })
        }
    }
}

search(__dirname);
