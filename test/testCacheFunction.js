  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

import {cacheFunction} from "../cacheFunction.js";

function cb(parameter){
    //console.log(`For ${parameter} first time callBack function called `);
    let res= parameter*parameter;
    return res;
}

let argumentUsed = cacheFunction(cb);

console.log(argumentUsed.invoke(3));
console.log(argumentUsed.invoke(4)); 
console.log(argumentUsed.invoke(3));
//console.log(argumentUsed.invoke(4));
// console.log(argumentUsed.invoke("a"));
// console.log(argumentUsed.invoke("a")); 
// console.log(argumentUsed.invoke("b"));
