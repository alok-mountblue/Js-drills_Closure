

import {limitFunctionCallCount} from "../limitFunctionCallCount.js";

function callback (){
    
    console.log("Callback function invoked");}

let nTimes = limitFunctionCallCount(callback, 2);

nTimes.invoke();
nTimes.invoke();
nTimes.invoke();