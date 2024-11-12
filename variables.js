// Variables/* */
// strings
// var name = "Matthew"
// const name = "matthew"
// let name = "Matthew"

// numbers
// let number1 = 10.5

// booleans
//let value = true //false

// undefined
// let name

// null
// let value = null

// let name = "Matt"
// let num = 5
// console.log(`My name is ${name}`);
// console.log("My name is \n" + name +num);

// array
// let myArray = ['anything',2, true, 'string']
// console.log(myArray[0]); //indexing

// camelcase -> myArray(always used in JS)
// Pascalcase -> MyArray
// kebabcase -> my-array(only use in vue)

// object literal -declare (make) an object
// let table = {
//     material:"wood",
//     no_of_legs:4,
//     occupied: true
// }
// // bracket notation
// console.log(table['material']);
// // dot notation
// console.log(table.material);
// // destructuring
// let {material} = table//wood
// console.log(material);

// functions
// () -> parentheses
// [] -> brackets
// {} -> braces
// function greeting(a,b){
//     // a&b are parameters
//     console.log('This is a greeting'+ (a+b));    
// }
// 3&4 are arguments
// greeting(3,4)

// let num1 = 5
// ++num1 pre increment
// num1++ post increment
// --num1 pre decrement
// num1-- post decrement
// console.log(--num1);
// console.log(6!=='6');


// TODO: Create a variable called firstName and store your first name in it
// let firstName = "Matthew"
// TODO: Create a variable called lastName and store your last name in it
// let lastName = "Brown"
// TODO: Create a variable called age using let (you'll modify this later)
// let age 
// TODO: Create a fullName variable that combines firstName and lastName
// let fullName = firstName +' '+ lastName

// TODO: Print a greeting to the console using these variables
// console.log(`Hi ${fullName}`);

// TODO: Try changing the age variable to a different value
// age=20

// Exercise 2
// TODO: Create a variable called number1 and store any number in it
// let number1 = 10
// TODO: Create a variable called number2 and store a different number in it
// let number2 = 20
// TODO: Convert number1 to a string and store it in a new variable
// let number3 = number1.toString()

// TODO: Add number1 and number2 and store the result in a variable called sum
// let sum = number1 +number2
// TODO: Multiply number1 and number2 and store the result in a variable called product
// let product = number1 * number2
// TODO: Print all results to the console
// console.log(sum, product);

// shows us the length on the string
// let length = myString.length
// make text capital --> myString.toUpperCase()
// make text small letter --> myString.toLowerCase()
// let split = myString.toLowerCase().split('')
// console.log(split);


// let myString = "Somethings"

// if(myString == "Something"){
//     console.log('The string is equal to Something');
// } else if(typeof myString == 'string') {
//     console.log('The string is a string but it is not equal to Something');
// }else{
//     console.log('The string is not equal to Something');
// }
// let age = 15
// if(age>=18){
//     console.log("You qualify for your Driver's license");
// } else if(age>=16 && age<18) {
//     console.log("You qualify for your learner's not driver's");
// }else{
//     console.log('You are too young');
// }


// if(num % 2 ==0){
//     console.log('Even');
// } else{
//     console.log('Odd');
// }

// Matthew wrote 3 exams and received, Mathematics: 56%,
// Physics:71%
// English:55%
// Calculate the average and check whether of not if he got an average of grade A(100%>80%),grade B(79%>70%),grade C(69%>60%), grade D(59%>50%) or if he does not deserve a grade((っ °Д °;)っ)

// let ave = (56+71+55)/3
// let grade
// if (ave>=80){
//     grade = 'A'
// } else if (ave>=70){
//     grade = 'B'
// } else if (ave>=60){
//     grade = 'C'
// } else if(ave>=50){
//     grade ='D'
// } else{
//     grade='(っ °Д °;)っ'
// }
// console.log(grade)
// 1 - 'Sunny'
// 2 - 'Cloudy'
// 3 - 'Raining' 
// let value = 3
// switch (value) {
//     case 1:
//         console.log('It is sunny');   
//         break;
//     case 2:
//         console.log('It is Cloudy');
//         break;
//     case 3:
//         console.log('It is Raining');
//         break;
//     default:
//         console.log('Couldnt read value');
//         break;
// }

// even numbers -coditional statements 
// switch (true) {
    //     case num %2==0:
    //         console.log('Number is even');
    //         break;
    //     default:
    //         console.log('Number is odd');
    //         break;
    // }
    // let num = 11
    // console.log(num%2==0 ? 'Even' : 'Odd');
    
    // let studAtLC = true

    // console.log(studAtLC? "you are a student at LC":'You are not a student at LC');
    // if(studAtLC){

    // }else{ 

    // }
    