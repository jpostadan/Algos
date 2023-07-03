const longestWordFinder = (sentence)=>{
    var arr = sentence.match(/[a-z]+/gi)
    if(arr !=null){
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].length > arr[i + 1].length){
                return arr[i]
            }
            
        }
    }else return 'Invalid Input'


}



  // keep this function call here 
  console.log(longestWordFinder(''));

  const printEnds= (str)=>{
    var start = '';
    var end = '';
    for (let i = 0; i < str.length; i++) {
        
            start = str[i]
            end = str[i -1]
        
        
    }return console.log(start,end)
   
  }

console.log(printEnds('sdfsadf'))