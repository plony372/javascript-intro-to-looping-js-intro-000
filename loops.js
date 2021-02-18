for (let num = 1; num < 6; num +=1) {
  console.log(num)
}
let i = 0;



function forLoop(array){
  for (let num = 0; num < 25; num++){
    console.log(`I am ${num} strange loop`)
  }
  
}

function whileLoop(number){
 while (number > 0) {
  console.log(--number);
 }
 return 'done'
}


function incrementVariable(){
  i = i + 1;
  return i;
}





function doWhileLoop(num){
  do {
    console.log("I run once regardless")
  }while (incrementVariable() <= num)
}