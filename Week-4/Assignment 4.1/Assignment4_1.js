function getNumber(rejectionTime,callback){
    const randNumber= parseInt(Math.random()*100);
     if (randNumber%5!==0){
      setTimeout(()=>{
        callback(`Reject, ${randNumber} is not divisible by 5`);
      },rejectionTime);
    }else{
      setTimeout(() => {
        callback(`Resolved, ${randNumber} is not divisible by 5`);
      }, rejectionTime);
    };
   }
    getNumber(1000,function(result){
      console.log(result);
    });