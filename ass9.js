
        // "ARRAY PROGRAM"


// program :1
// var country = ["pakistan", "india", "china", "turkey", "afganistan", "england"];
// console.log("ALL ELEMENT IN ARRAY :",country);


// program 2
// var num = [1, 2, 34, 5, 64, -2, 4, -9, -7, 5, 0, -4774];
//  var  negNum = num.filter(num => num < 0)
// {
//     console.log(negNum);
//     
// }




// program 3
// var numCheck = [2, 4, 5, 0, 9, 3, 4, 55];
// var sum=0;
// for (let index = 0; index < numCheck.length; index++) {
//     sum= sum + numCheck[index];


// }
// console.log(sum);


// program 6
// var number= [45,43,3,4,2,35,3,6,5,7,87,89,1,22];
// console.log("Actual Array",number);
// var finalEven=number.filter((item)=>{
//     if(item%2==0){
//         return item
//     }
// })
// console.log(finalEven);
// console.log("total number even",finalEven.length);

// var finalodd=number.filter((item)=>{
//     if(item%2==1){
//         return item
//     }
// })
// console.log(finalodd);
// console.log("total number even",finalodd.length);
 




// // program :7
// var num = [1, 2, 34, 5, 64, -2, 4, -9, -7, 5, 0, -4774];
//  var  negNum = num.filter(num => num < 0)
// {
//     console.log(negNum);
//     console.log(negNum.length);
// }



// program 8
// var country = ["pakistan", "india", "china", "turkey", "afganistan", "england"];
// console.log("country",country);
// var  country2=country.slice();
// console.log("COPY ALL ELEMENT IN ANOTHER  ARRAY",country2);



// program 9
// var country = ["pakistan", "india", "china", "turkey", "afganistan", "england"];
// console.log("without add element",country);

// country.push("spain");
// console.log("ADD ELEMENT IN ARRAY",country);









// program:15

// var num1= [2, 4, 5, 0, 9, 3, 4, 55, 45, 3, 25, 2, 6, 72, 7, 7, 41];
// var num2= [2, 2, 23, 023, 923, 332, 423, 55233, 4523, 323, 2523, 223, 6,2323, 72, 7, 7, 41];
// var merArray=num1.concat(num2);
// console.log("two array merge ",merArray);



// PROGRAM 16
// var country = ["pakistan", "india", "china", "turkey", "afganistan", "england", "england"];
// var revArray = country.reverse();
// console.log("value reverse array ", revArray);

// switch case

// PROGRAM 23
// var Num = parseInt( prompt("ENTER A  WEEK NUMBER"));
// switch (Num) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wenesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Satursday");
//         break;
//     default:
//         console.log("invalid number");
//         break;
// }

// PROGRAM :24
// var Num =  prompt("ENTER A  MONTH NUMBER");
// switch ( Num){
//     case "january":

//         console.log("january");
//         console.log("days:30");
//         break;
//     case "February":
//         console.log("February");
//         console.log("days:28");
//         break;
//     case "march":
//         console.log("march");
//         console.log("days:31");
//         break;
//     case "april":
//         console.log("april");
//         console.log("days:30");
//         break;
//     case "may":
//         console.log("may");
//         console.log("days:31");
//         break;
//     case "june":
//         console.log( "june");
//         console.log(" days:30");
//         break;
//     case "july":
//         console.log("july");
//         console.log(" days:31");
//         break;
//         case  "august":
//             console.log("august");
//         console.log(" days:31");
//         break;
//         case "september":
//             console.log("september");
//         console.log(" days:30");
//         break;
//         case "october":
//             console.log("october");
//         console.log(" days:31");
//         break;
//         case  "november":
//             console.log("november");
//         console.log(" days:30");
//         break;
//         case  "december":
//             console.log("december");
//         console.log(" days:31");
//         break;

//     default:
//         console.log("invalid number");
//         break;
// }

// program :26
//  var num;
//  var num2 = parseInt(prompt("enter a number"));
// switch (num) {
//     case num:
//         var num2 = parseInt(prompt("enter a number"));
//         if (num>num2) 
//             {
//             console.log("num is greater than num2");
//             }
//             else{
//                 console.log("num2  greater ");
//             }
//           break;




//     default:
//       console.log("number is  invalid");
//         break;
// }
// program :27
// var num = parseInt(prompt("enter a number"));
// switch (num) {
//     case num:

//         if (num%2== 0) 
//             {
//             console.log("number is even");
//             }
//             else{
//                 console.log("number is odd");
//             }
//           break;




//     default:
//       console.log("number is  invalid");
//         break;
// }

// program :28

// var num = parseInt(prompt("enter a number"));
// switch (num) {
//     case num:

//         if (num > 0) 
//             {
//             console.log("number is positive");
//             }

//         else{
//             console.log("number is negative");
//         }




//     default:
//       console.log("number is zero");
//         break;
// }
// program:30

// var num = parseInt(prompt("Enter 1 is add\nEnter 2 is mul \nEnter 3 is div \nEnter 3 is div \n Enter 4 sub"));

// switch (num) {

//     case 1:
       
//     {var a = parseInt(prompt("enter a number"));
//         var b = parseInt(prompt("enter second number"));
//         var add = a + b;
      
// }
//         break;
//     case 2:
//         {
//         var a = parseInt(prompt("enter a number"));
//         var b = parseInt(prompt("enter second number"));
//         var mul = a * b;
//         console.log("Mul", mul);
//         }
//         break;
//     case 3:
//         {
//         var a = parseInt(prompt("enter a number"));
//         var b = parseInt(prompt("enter second number"));
//         var div = a / b;
//         console.log("div", div);
//         }
//         break;
//     case 4:
//         {
//         var a = parseInt(prompt("enter a number"));
//         var b = parseInt(prompt("enter second number"));
//         var sub = a - b;
//         console.log("div", sub);
//         }
//         break;
        

//     default:
//         console.log("invalid num");
//         break;
// }

