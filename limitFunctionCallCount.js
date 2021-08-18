
  
  
  
  export function limitFunctionCallCount(cb, n) {
     let count = n;
    function invoke () {

       if(count>0){
          cb();
          count--;
       }else{
          //console.log("Callback already called "+n+" times");
          return null;
       }
    }
       return {invoke};
}
