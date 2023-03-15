/*
Exercise #2
Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *

*/

for (let i=0; i<=4 ; i++){
  let temp = ""
  for(let j=0 ;j <= i ; j++){
    temp += "*"
  }
console.log(temp)
}

//'*'
//'**'
//'***'
//'****'
//'*****'



/* น่าจะผิด ไม่ใช่ nested loop
let add = (pt) => {
  let dokjan = "";
  for(let i = 0 ; i < pt ; i++){
    console.log(dokjan += "*")
 }
}
add(5);
//'*'
//'**'
//'***'
//'****'
//'*****'
*/
