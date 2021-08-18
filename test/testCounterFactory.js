// function counterFactory() {
//   // Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.
// }

import{ counterFactory } from "../counterFactory.js";

let myCounter = counterFactory();
  console.log(myCounter.increment(3));
  
  console.log(myCounter.decrement(3));