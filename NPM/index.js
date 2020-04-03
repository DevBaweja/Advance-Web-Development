const _ = require('lodash'); 
const numbers = [33,46,76,44,12,2,91,62];

_.each(numbers,function(number,i){
    console.log(number);
});

// Using node index.js to run it in terminal