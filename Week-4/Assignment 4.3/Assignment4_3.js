
const fib = (n)=>({
    [Symbol.iterator]: function () {
      let i = 1;
      let prev = 0
      let nextNo = 0;
      let fibn=n;
      return {
        next: () => {
          if (i++ <= fibn) {
            [prev,nextNo] = [nextNo,(prev + nextNo)||1];
            return { value:prev, done: false }
          } 
          else {
            return { done: true };
          }
        }
      }
  
    }
  });
  
  
  console.log([...fib(6)])
  for (let num of fib(6)) {
    console.log(num);
  }