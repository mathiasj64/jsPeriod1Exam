var myFilter = require('./callback');

let names = ["kurt", "Ib", "Lars", "Ida"];

let names2 = myFilter(names,function(name){
    return name.length <=3;
});
console.log("");
console.log(names2);