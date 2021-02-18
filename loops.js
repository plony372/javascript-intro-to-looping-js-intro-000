for (let num = 1; num < 6; num +=1) {
  console.log(num)
}
let i = 0;


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





function doWhileLoop(int){
  do {
    console.log("doo-bee-doo-bee-doo");
  }while (incrementVariable())
}