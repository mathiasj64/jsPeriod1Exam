let myDirSeacher = require("./dirSearcher.js");

myDirSeacher(process.argv[2], process.argv[3], function(err, data){
    if(err){
        return callback(err);
    }
    console.log(data.join('\n'));
});

//node '.\8. User defined modules\user.js' '.\1. Hoisting\' 'js'