function isVowel(char){
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    if (vowels.has(char)){
      return true
    }
    else{return false}
}
function vowelCount(str){
    const vowelMap=new Map();
   
    for(let char of str){
        
        let lowerCaseChar=char.toLowerCase()
        
        if(isVowel(lowerCaseChar)){
            
            if(vowelMap.has(lowerCaseChar)){
                TotalCount=vowelMap.get(lowerCaseChar)+1
                
                vowelMap.set(lowerCaseChar,TotalCount);
                }
            else{
                
                vowelMap.set(lowerCaseChar,1);
                }
            }
        }
      
    return vowelMap;
}
const result = vowelCount("Hello World");
result.forEach((key,value,map)=>{
  console.log(`Vowel ${key} Count ${value} `)
});



