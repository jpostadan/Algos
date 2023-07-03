// // const add=( num1,num2) =>{
// //     const sum = num1+num2;
// //     return sum;
// // }
   
// // console.log(add(100,299));

// // const counter =(num)=>{
   
// // }


// // function findNumber(arr, k) {
// //     if(!arr && !k){
// //         return false
// //     }else {
// //         for(let i=0; i<arr.length; i++){
// //             if(arr[i]===k){
// //                 return true  
// //             }
          
// //         }
// //         return false
// //     }
    
    
// // }
// // console.log(findNumber([1,2,3,4],4));


// // // var x = [-1,3,2,7]

// // // for(var i=0; i<x.length; i++){
// // //     if(x[i] < i){
// // //         x[i]=-10;
// // //     }
// // // }
// // // console.log(x)

// // // var x =0;
// // // for (var i=1; i<4; i++){
// // //     x =x +i;
// // //     console.log(x);
// // //     console.log(i)
// // // }

// // function a(b,c){
// //     console.log(b);
// //     return b+c;
// // }
// // console.log(a(3,2))

// // var array = [10,9,8,7,6,5,4,3]

// // for (var x=0; x<array.length; x++){
// //     for (var y=array.length - 1;y>=x; y--){
// //         if (array[x]> array[y]){
// //             var temp= array[y];
// //             array[y]=array[x];
// //             array[x]=temp;
// //         }
// //     }
// // }

// // console.log(array)

// // var number ='';
// // var x =5;

// // while(x<10){
// //     number +=x;
// //     x++
// // }

// // console.log(number)
// // var a=1;
// // var b=2;

// // function xyz(a,b){
// //     console.log(a);
// //     console.log(b);
// //     var c = a+b;
// //     var d = a*10;
// //     return c + d;
// // }
// // var z = xyz(a+2,b+2);
// // console.log(z)
// // console.log(a);
// // console.log(b);


// // function abc (number){
// //     var sum =0;
// //     for (var i =0; i<=number; i++){
// //         sum = sum+i;
// //     }
// //     console.log(sum)
// //     return sum +10;
// // }

// // output=abc(2);
// // console.log(output)

// // function looping(x,y){
// //     for (var i=0; i<x; i++){
// //         for ( var j=0; j<y; j++){
// //             console.log(i*j)
// //         }
// //     }
// //     return x*y
// // }

// // var z =looping(2,3);
// // console.log(z)


// 2
// 3
// 4
// 5
// 6
// 7
// // function countdownByFives(){
// //     for (var i = 50; i <0; i-=5) {
        
// //         console.log(i);
// //     }
    
// // }
// // console.log(countdownByFives())

// function NonrepeatingCharacter(str) { 

//     // code goes here  
//      for (var i=0; i<str.length; i++){
//         console.log(str.indexOf(str[i]));
//         console.log(str.lastIndexOf(str[i]))
//         console.log(str[i])
//       if (str.indexOf(str[i])===str.lastIndexOf(str[i]) && str[i] != ' '){
        
//           return str[i];
//       }
      
//   }   
  
//   }
     
//   // keep this function call here 
//   console.log(NonrepeatingCharacter((' hewlloworld!hihey')));

const dictStatus = {
    0: "Requested",
    1: "Missing info",
    2: "Processed",
    3: "Activated",
    4: "Canceled",
  };
  
  function calculateProjectStatus(...taskStatuses) {
    const uniqueStatuses = [...new Set(taskStatuses)]; // Get unique task statuses
  
    if (uniqueStatuses.length === 1) {
      // If all tasks are in the same status
      return dictStatus[uniqueStatuses[0]];
    }
  
    if (taskStatuses.includes(1)) {
      // If some task is Missing info
      return dictStatus[1];
    }
  
    if (taskStatuses.includes(2)) {
      // If some task is Processed
      return dictStatus[2];
    }
  
    if (
      uniqueStatuses.every((status) => status === 3 || status === 4)
    ) {
      // If all tasks are Activated or Canceled
      return dictStatus[3];
    }
  
    // In all other cases
    return dictStatus[0];
  }
  
  // Example usage
  const taskStatuses = [3, 3, 3]; // Replace with actual task statuses
  const projectStatus = calculateProjectStatus(...taskStatuses);
  console.log("Project status:", projectStatus);