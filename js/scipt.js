//Q1
// var x=Number(prompt("Please Enter Number"));
// console.log(x)

///////////////////////////////////////////////////////////////////////////////////////////

//Q2
// var x=Number(prompt("Please Enter Number"));
// if (x % 3 ===0 && x % 4 ===0){
// console.log("Yes");
// }else{
//     console.log("No");
// }

///////////////////////////////////////////////////////////////////////////////////////////

//Q3
// var x = Number(prompt("Please Enter 1st Number"));
// var y = Number(prompt("Please Enter 2nd Number"));
// if (x > y) {
//     console.log("The Max Number is:", x);
// } else if (y > x){
//     console.log("The Max Number is:", y);
// }else {
//     console.log("The Two Numbers are equal");
// }

///////////////////////////////////////////////////////////////////////////////////////////

//Q4
// var x = Number(prompt("Please Enter a Number"));
// if (x > 0) {
//     console.log("It is a Positive Number");
// } else if (x < 0){
//     console.log("It is a Negative Number");
// }else {
//     console.log("It is Zero");
// }

///////////////////////////////////////////////////////////////////////////////////////////

//Q5
// var x = Number(prompt("Please Enter 1st Number"));
// var y = Number(prompt("Please Enter 2nd Number"));
// var z = Number(prompt("Please Enter 3rd Number"));

// var max = x;
// var min = x;

// if (y > max) {
//     max = y;
// } if (z > max) {
//     max = z;
// }

// if (y < min) {
//     min = y;
// } if (z < min) {
//     min = z;
// }

// console.log("The Max Number is:",max);
// console.log("The Min Number is:",min);

///////////////////////////////////////////////////////////////////////////////////////////

//Q6 7
// var x = Number(prompt("Please Enter a Number"));
// if (x %2 === 0) {
//     console.log("It is a Even Number");
// } else  {
//     console.log("It is a Odd Number");
// }

///////////////////////////////////////////////////////////////////////////////////////////

//Q8
// var x = prompt("Please Enter a Character");
// if (x === 'a'|| x === 'e' || x === 'i' || x === 'o'|| x === 'u') {
//     console.log("It is vowel");
// } else  {
//     console.log("It is consonant");
// }

///////////////////////////////////////////////////////////////////////////////////////////

//Q9
// var x = Number(prompt("Please Enter a Number"));

// for (var i=1;i<=x;i++){
//     console.log(i)
// }

///////////////////////////////////////////////////////////////////////////////////////////

//Q10
// var x = Number(prompt("Please Enter a Number"));

// for (var i=1;i<=12;i++){
//     console.log(i*x)
// }

///////////////////////////////////////////////////////////////////////////////////////////

//Q11
// var x = Number(prompt("Please Enter a Number"));

// for (var i = 1; i <= x; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

///////////////////////////////////////////////////////////////////////////////////////////

//Q12
// var x = Number(prompt("Please Enter 1st Number"));
// var y = Number(prompt("Please Enter 2nd Number"));
// var power=1;
// for (var i = 1; i <= y; i++) {
//  power*=x;
// }
// console.log(power)

///////////////////////////////////////////////////////////////////////////////////////////

//Q12
// var x = Number(prompt("Please Enter 1st Number"));
// var y = Number(prompt("Please Enter 2nd Number"));
// var z = Number(prompt("Please Enter 3rd Number"));
// var a = Number(prompt("Please Enter forth Number"));
// var b = Number(prompt("Please Enter fifth Number"));

// var total = x+y+z+a+b;
// var avg= total/5;
// var percentage= (total /500)*100;

// console.log("Total marks ="+ total)
// console.log("Average Marks ="+ avg)
// console.log(" Percentage ="+ percentage)

///////////////////////////////////////////////////////////////////////////////////////////

//Q13
// var month = Number(prompt("Please Enter the Month Number"));

// var days;

// if (month === 1 || month === 3 || month === 5 || month === 7 ||
//     month === 8 || month === 10 || month === 12) {
//     days = 31;
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     days = 30;
// } else if (month === 2) {
//     days = 28; 
// }

// console.log(" Days in Month:"+ days);

///////////////////////////////////////////////////////////////////////////////////////////

//Q14
// var Physics = Number(prompt("Please Enter Mark of Physics"));
// var chemistry = Number(prompt("Please Enter Mark of Chemistry"));
// var biology = Number(prompt("Please Enter Mark of Biology"));
// var math = Number(prompt("Please Enter Mark of Mathematics"));
// var computer = Number(prompt("Please Enter Mark of Computer"));

// var total = Physics + chemistry + biology + math + computer;
// var percentage = (total / 500) * 100;

// var grade;
// if (percentage >= 90) {
//     grade = "A";
// } else if (percentage >= 80) {
//     grade = "B";
// } else if (percentage >= 70) {
//     grade = "C";
// } else if (percentage >= 60) {
//     grade = "D";
// } else if (percentage >= 40) {
//     grade = "E";
// } else {
//     grade = "F";
// }
// console.log(" Percentage:"+percentage+'%');
// console.log(" Grade:"+ grade);

///////////////////////////////////////////////////////////////////////////////////////////

//Q15

// var month = Number(prompt("please enter the month number"));
// var days;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         days = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         days = 30;
//         break;
//     case 2:
//         days = 28;
//         break;
//     default:
//         days = "Invalid month number!";
// }

// console.log("Total days in month ", days);

///////////////////////////////////////////////////////////////////////////////////////////
//Q16

// var x = prompt("Please Enter a letter");
// switch (x) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("It's Vowel letter");
//         break;
//     default:
//         console.log("It's Constant letter");
// }

///////////////////////////////////////////////////////////////////////////////////////////
// //Q17

// var x = Number(prompt("Enter the first number:"));
// var y = Number(prompt("Enter the second number:"));

// switch (true) {
//     case (x > y):
//         console.log("The Maximum Number is:",x);
//         break;
//     case (y > x):
//         console.log("The Maximum Number is:",y);
//         break;
//     default:
//         console.log("Both numbers are equal");
// }

///////////////////////////////////////////////////////////////////////////////////////////

//Q18

// var x = Number(prompt("Enter a Number:"));
// switch (true) {
//     case (x % 2 == 0):
//         console.log("It's Even Number");
//         break;
//     case (x % 2 != 0):
//         console.log("It's Odd Number");
//         break;
// }
///////////////////////////////////////////////////////////////////////////////////////////

//Q19

// var x = Number(prompt("Enter a Number:"));
// switch (true) {
//     case (x > 0):
//         console.log("It's Positive Number");
//         break;
//     case (x < 0):
//         console.log("It's Negative Number");
//         break;
//     default:
//         console.log("It's Zero");
// }

///////////////////////////////////////////////////////////////////////////////////////////

//Q20

// var num1 = Number(prompt("Enter the first number:"));
// var operator = prompt("Enter operator (+, -, *, /):");
// var num2 = Number(prompt("Enter the second number:"));
// var result;

// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         console.log("Result:",num1,"+",num2,"=",result);
//         break;
//     case "-":
//         result = num1 - num2;
//         console.log("Result:",num1,"-",num2,"=",result);
//         break;
//     case "*":
//         result = num1 * num2;
//         console.log("Result:",num1,"*",num2,"=",result);
//         break;
//     case "/":
//         if (num2 !== 0) {
//             result = num1 / num2;
//         console.log("Result:",num1,"/",num2,"=",result);
//         } else {
//             console.log("Error: Division by zero");
//         }
//         break;
//     default:
//         console.log("Invalid operator");
// }
