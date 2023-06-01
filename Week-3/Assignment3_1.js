
function memoize(fn){
    const cache=new Map();
    return function(...args){
    	const key=args;
      if (cache.has(key)){
          return cache.get(key);
      }
      cache.set(key, fn(...args));
      return cache.get(key)
    };
    
}
//Given reducer method:
function add(a,b){
		
    if (a===undefined){
        return b;
    }else if(b===undefined){
        return a;
    }else{
        return (a+b); 
       
    }
}
//Create a method called memoize such that:
const MemoizeAdd = memoize(add);
//then calling...
console.time("first");
console.log(MemoizeAdd(100,100));//returns 200
console.timeEnd("first");

console.time("second");
console.log(MemoizeAdd(100,100));//returns 200
console.timeEnd("second");

console.time("third");
console.log(MemoizeAdd(100));//returns 100
console.timeEnd("third");

console.time("fourth");
console.log(MemoizeAdd(100,200));//returns 300
console.timeEnd("fourth");
