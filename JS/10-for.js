/*
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
Statement 1 is executed (one time) before the execution of the code block.
Statement 2 defines the condition for executing the code block.
Statement 3 is executed (every time) after the code block has been executed.
*/


for (let i = 0; i < 5; i++) {
    console.log('labas', i);
}
console.log('end');


const mark = [7, 5, 9, 10, 7];
let sum = 0;
const count = marks.length;
sum += mark[0];
sum += mark[1];
sum += mark[2];
sum += mark[3];
sum += mark[4];
const average = sum / count;

 console.log("Pazymiu vidurkis", average);


 const marks1 = [7, 5, 9, 10, 7, 8, 9];
 let suma1 = 0;
 const skaiciuok = marks1.length;

 for (let i = 0; i < skaiciuok; i++) {
     suma1 += marks[i];
 }