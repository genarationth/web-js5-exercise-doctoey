/*
Exercise #3
Write while loops to do the following:

–1. Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive.

-2. Print all the odd numbers between 1 - 100.

-3. Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]

-4. Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190

*/

//-1

let xValue = 10;
while(xValue > 0){
  console.log(xValue);
  xValue -= 0.5;
}



//-2
//อันแรก
let i = 1;
while (i <= 100) {
  if (i % 2 !== 0) {   //ไม่ควรใช้ != ถึงมันจะใช้ได้
    console.log(i);
  }
  i++;
}

//อันสอง
// let i = 0
// do {
//     if(i%2 != 0){
//     console.log(i);
// }
//     i++;
// } while (i<101)

//อันสาม
// for (let i = 0; i<101 ; i++){
//     if(i %2 != 0){
//       console.log(i)   //1,3,5,7,..,99
//     }
//   }


//-3

let sqb = (num) => {
    let i=0
    while(i<num){
        i++
        console.log(`[${i}]`)
    }
}
sqb(6) // [1][2][3][4][5][6]


//-4. 

let summary = (num) => {
    let sum = 0
    let i = 0
    while (i<=num){
        sum += i
        i++
    }
    return sum
}

console.log(summary(5)) //15
console.log(summary(19)) //190
