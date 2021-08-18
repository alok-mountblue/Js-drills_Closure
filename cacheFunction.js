

export function cacheFunction(cb) {
  
  const cache = {};
  
  function invoke ( parameter ) {

    if (!cache.hasOwnProperty(parameter)) {

      cache[parameter]=cb(parameter);
      return cache[parameter];
    } 
    else {
      //console.log(`from the cache storage`);
      return cache[parameter];
    }
  } 
  return {invoke};
}
