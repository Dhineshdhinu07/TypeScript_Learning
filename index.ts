//Sample code:
// type Person = {
//     name: string;
// };

// const person: Person = {
//     name: "John",
// };
// console.log(person.name);
// ----------------------------------------//
//Annotations
//Strings
// let myName: string = "Dhinesh M";
// console.log(myName);

// //Numbers
// let myAge: number = 21;
// console.log(myAge);

// //Booleans
// let isStudent: boolean = true;
// console.log(isStudent);

//---------------------------------------------//

//Type Inference
// let tech = "TypeScript"; //Here the compiler is inferring the type automatically. We didn't gave any type explicitly.
// // tech = 12; //It will give us an error because its already declared as string.
// let num = 8;
// console.log(typeof num);
// console.log(typeof tech);
// console.log(tech);

//------------------------------------------------//

//Any Type

// let color: any = "white";
// color = 12;
// color = true;
// console.log(color); // The output will be "true"

//-------------------------------------------------//

//Functional parameters annotations
//Regular func
// function addNum (num: number){
//     return num + 1;
// }

// const result = addNum(5);
// console.log(result); 

//Arrow func
// const double = (x: number, y: number) => x * y;
// const result2 = double(5, 6);
// console.log(result2);

// ---------------------------------------------- //

//Default parameters(params)

// function greet(person: string = "Developer"){ //Default value for the function parameter.
//     return `Hello ${person}`;
// }

// const res = greet("Dhinesh");
// console.log(res);

// ---------------------------------------------- //

//Return Annotations
// Regular func
// function double(x: number): number // This is the return annotations which is used to declare the return type.
// {
//     return x * x;
// }
// const result = double(5);
// console.log(result);

// // Arrow func

// const double2 = (x: number): number => x * x;
// const result2 = double2(5);
// console.log(result2);

// ------------------------------------------------- //

//Void return type

// function printMessage(msg: string): void{
//     console.log(`This is my new message: ${msg}`);
// }

// const res = printMessage("Hello");

// -------------------------------------------------- //

//Never keyword - used in:
//Func that throws error

// function throwError(msg: string): never{
//     throw new Error(msg);
//  }

//func that runs infinite loop

// function infiniteLoop(): never{
//     while(true){}
//  }

//variable that doesn't have value:

// let x = never;
// function neverReturns(): never{
//    while(true){}
// }

// x = neverReturns(); //This line will cause compile time error because the function never returns.

// -------------------------------------------------- //

//Arrays

// const nums: number[] = [1, 2, 3, 4];
// console.log(nums);
// const myName: string[] = ["Dhi"];
// const names: Array<string> = ["Alice", "Bob", "Charlie"];
// names.push("Dan");
// console.log(names);

// -------------------------------------------------- //

//Multi Dimensional Arrays

// const single: number[] = [1, 2, 3, 4, 5];
// const double: number[][] = [[1, 2], [3, 4]];
// const triple: number[][][] = [
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ]
// ];

// console.log(single);
// console.log(double);
// console.log(triple);

// -------------------------------------------------- //

//Objects
//Declaration

// const person: {firstName: string; lastName: string; age: number} = {
//     firstName: "Dhinesh",
//     lastName: "M",
//     age: 21
// }

// console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

//Object in functions

// function printUser():{name: string; age: number; location: string}  {
//     return {
//         name: "Dhinesh",
//         age: 21,
//         location: "Chennai"
//     }
// }

// console.log(printUser());
// -------------------------------------------------- //