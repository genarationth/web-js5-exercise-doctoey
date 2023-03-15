/*
Exercise #2
Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *

*/

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
