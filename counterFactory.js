

export function counterFactory(){
    return {
      increment: function ( temp ){
          return temp+=1;
      },
      decrement: function ( temp ){
         return temp-=1;
    }
  }
}
//   let myCounter = counterFactory();
//   console.log(myCounter.increment(3));
  
//   console.log(myCounter.decrement(3));