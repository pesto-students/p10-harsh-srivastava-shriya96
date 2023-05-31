function dotask1(){
    return new Promise(resolve=>{
      setTimeout(()=>{
      console.log("Task1 Completed")
      
      },3000);  
    })
  }
  
  function dotask2(){
    return new Promise(resolve=>{
      setTimeout(()=>{
      console.log("Task2 Completed")
      
      },1500);  
    })
  }
  
  function dotask3(){
    return new Promise(resolve=>{
      setTimeout(()=>{
      console.log("Task3 Completed")
      
      },2000);  
    })
  }
  
  async function asyncAwait(){
    try{
      const response1=  dotask1()
      const response2=  dotask2()
      const response3=  dotask3()
  
      await Promise.all([response1,response2,response3])
  
    }catch(err){
      console.log(`Tasks are unfinished due to ${err} `)
    }
    
  }
  
  console.log(asyncAwait()) 
  
  function* generatorFunction(){
    yield dotask1();
    yield dotask2();
    return dotask3();
  }
  
  let gen=generatorFunction()
  for(let val of gen){
    console.log(val)
  }
  
  
  
  