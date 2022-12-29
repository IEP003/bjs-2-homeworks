//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  
  return (...args) => {
    const hash = md5(args);
    let objectInCache = cache.find((object) => object.hash === hash)
    if(objectInCache){
        return `Из кэша: ${objectInCache.result}`;
    }

    const result = func(...args);
    cache.push({hash, result});
    if(cache.length > 5){
        cache.shift();
    }
    return `Вычисляем: ${result}`;
  }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let isCooldown = true;
  decoratedFunction.allCount = 0;
  decoratedFunction.count = 0;
  function decoratedFunction(...args){
    decoratedFunction.allCount ++;
    if(timeoutId){
        clearTimeout(timeoutId);
    }
    if(isCooldown){
      decoratedFunction.count ++;
      func(...args);
      isCooldown = false;
    }
    timeoutId = setTimeout(() => {
      decoratedFunction.count ++;
      timeoutId = null;
      func(...args);
    }, delay);
  }
  return decoratedFunction;
}
