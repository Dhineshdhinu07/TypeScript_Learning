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
//Type Aliases

// type MyString = string; // syntax
// //EXAMPLE
// type Person = {
//    name: string;
//    age: number;
// };
// function printPerson(person: Person) {
//    console.log(`Name: ${person.name}, Age: ${person.age}`);
// }
// const myPerson: Person = {name: "Dhinu", age: 21};
// printPerson(myPerson);

// ------------------------------------------------ //

//Optional Property

// type User = {
//     name: string;
//     age?: number;
//     location: string;
// }

// const user: User = {
//     name: "Dhinesh",
//     age: 21,
//     location: "Chennai"
// };
//  const user1: User = {
//     name: "Dhinu",
//     location: "Chennai"
//  }
// console.log(`Name: ${user1.name}, Age: ${user1.age}, Location: ${user1.location}`);

// ------------------------------------------------- //

//ReadOnly Property

// type User = {
//     name: string;
//     age?: number;
//     readonly location: string;
// }

// const user: User = {
//     name: "Dhinesh",
//     age: 21,
//     location: "Chennai"
// };
// user.location = "Mumbai" //It will throw error as :- Cannot assign to'location' because it is a readonly property
//  const user1: User = {
//     name: "Dhinu",
//     location: "Chennai"
//  }
// console.log(`Name: ${user1.name}, Age: ${user1.age}, Location: ${user1.location}`);

// ------------------------------------------------- //

//Intersection Type

// type UserInfo = {
//     first: string;
//     last: string;
//     age: number;
// }
// type AccountDetails = {
//     email: string;
//     password: string;
// }

// type User = UserInfo & AccountDetails;

// const user: User = {
//     first: "Dhinesh",
//     last: "M",
//     age: 21,
//     email: "dhi@me.com",
//     password: "12345"
// }

// console.log(`Name: ${user.first} ${user.last}, Age: ${user.age}, Email: ${user.email}, Password: ${user.password}`);

// ------------------------------------------------- //

//Union Type

// let password : string | number = 20;

// type UserInfo = {
//     first: string;
//     last: string;
//     age: number;
// }

// type AccountDetails = {
//     email: string;
//     password: string | number;
// }


// let user: UserInfo | AccountDetails = {
//     email: "dhi@gmail.com",
//     password: 12345
// }

// const items: (number | string)[] = [1, 2, 3, "Hii"];

// console.log(items)

// --------------------------------------------------//

//Literal Types

// let color: 'red' | 'green' | 'blue';
// color = "red";
// color = "yellow"; //error

// let num: 1 | 2 | 3 | 4 | 5;
// num = 1;
// num = 6; //error

// let isTrue : true;
// isTrue = true;
// isTrue = false; //error

// ---------------------------------------------------- //

//Tuples

// let myTuple: [number, string];
// myTuple = [10, "Dhinu"];
// // myTuple = [10, 20]; //error
// console.log(myTuple);
// console.log(myTuple[0]);

// const persons : [string, string, string] = ["Alice", "Bob", "Charlie"];
// console.log(persons);
// console.log(persons[0]); // Alice

// ---------------------------------------------------- //

//Enums

// enum WeatherConditions {
//     SUNNY = "sunny",
//     CLOUDY = "cloudy",
//     RAINY = "rainy",
//     SNOWY = "snowy"
// }
// console.log(WeatherConditions.SNOWY); //If the Values not assigned it will give 3 
// const weather: WeatherConditions = WeatherConditions.SUNNY;
// console.log(`The current weather is ${weather}`);

// ------------------------------------------------------------//

// OOP

// class Person {
//     name: string;
//     age: number;

//     constructor(name: string, age:number){
//         this.name = name;
//         this.age = age;
//     }
// }

// const person = new Person("Dhinesh", 21);
// console.log(person); // Output : Person { name: 'Dhinesh', age: 21 }

//Access modifiers
//public
// class Human {
//     // public first: string;
//     private first : string;
//     public last : string;
//     protected age : number;
//     constructor(first: string, last: string, age: number){
//         this.first = first;
//         this.last = last;
//         this.age = age;
//     }
//     //Below method is used to get the private variables from the class
//     getName(): string {
//         return `${this.first} ${this.last}`;
//     }
// }

// class Person extends Human {
//     constructor(first: string, last: string, age: number){
//         super(first,last,age);
//     }
//     getAge(): number {
//         return this.age;
//     }
// }

// let p1 = new Person("Dhinesh", "M", 21);
// console.log(`Hi there, I'm ${p1.getName()} and I'm ${p1.getAge()} years old!!!`);

//---------------------------------------------------- //

//Getters and Setters

// class MyClass {
//     private _idNum : number = 8;
//     get idNum(): number {
//         return this._idNum;
//     }
//     set idNum(value: number){
//         // if(value < 0){
//         //     throw new Error("Id cannot be negative");
//         // }
//         this._idNum = value;
//     }
// }

// const myInstance = new MyClass();
// console.log(`Current value is ${myInstance.idNum}`)
// myInstance.idNum = 10;
// console.log(`Current value is ${myInstance.idNum}`)

// -------------------------------------------------- //

//Interface

// interface Computer {
//     name: string;
//     price: number;
//     ram: number;
// }

// const computer: Computer = {
//     name: "MAC",
//     price: 120000,
//     ram: 8
// }

// console.log(computer)
// console.log(computer.name)
// console.log(computer.price)
// console.log(computer.ram)

//Interface in functions
// interface MathOperation {
//     (x: number, y: number): number;
// }
// const add: MathOperation = (a, b) => a + b;
// console.log(add(1, 2));

// const sub: MathOperation = (a, b) => a - b;
// console.log(sub(1, 2));

//Interface with methods

// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
//     sayHello(): void;
// }
// function greet(person: Person){
//     console.log(`Hello ${person.firstName} ${person.lastName}`);
//     person.sayHello();
// }

// const dhinesh: Person = {
//     firstName: "Dhinesh",
//     lastName: "M",
//     age: 21,
//     sayHello(){
//         console.log(`Hello I am ${this.firstName} ${this.lastName} and I am ${this.age} years old`);
//     },
// };
// const danush: Person = {
//     firstName: "Danush",
//     lastName: "R",
//     age: 21,
//     sayHello(){
//         console.log(`Hello I am ${this.firstName} ${this.lastName} and I am ${this.age} years old. I'm a back-end dev`);
//     },
// };

// greet(dhinesh)
// greet(danush)

//Extending Interfaces

// interface MovieDetails {
//     readonly name: string;
//     ratings: number;
//     printMovieInfo(name: string, price: number, ratings:number) : string | number;
// }

// interface MovieGenre extends MovieDetails {
//     genre: string;
// }

// const movie: MovieGenre = {
//     name: "Avengers - End Game",
//     genre: "Action",
//     ratings: 9.5,
//     printMovieInfo(
//         name: string, 
//         price: number, 
//         ratings: number
//     ): string | number {
//         return `The name of the movie is ${name}, its ratings are ${ratings} and price is ${price}.`;
//     },
// }

// const movie2 : MovieGenre = {
//     name: "Avengers - Infinity War",
//     genre: "Action",
//     ratings: 9.0,
//     printMovieInfo(
//         name: string,
//         price: number,
//         ratings: number
//     ): string | number {
//         return `Movie name: ${name} Price: ${price} Ratings: ${ratings}.`
//     }
// }

// const res = movie.printMovieInfo("Avatar", 180, 9.1)
// console.log(res)

//Interfaces with classes

// interface Vehicle{
//     start() : void
//     stop() : void
// }

// class Car implements Vehicle {
//     start(): void {
//         console.log("Car started");
//     }
//     stop(): void {
//         console.log("Car stopped");
//     }
// }

// const myCar = new Car();
// myCar.start();// Car started
// myCar.stop();// Car stopped

//Declaration merging
//Original interface
// interface Car {
//     name: string;
//     start() : void
// }
// //Extended interface
// interface Car {
//     brand: string
//     stop() : void
// }

// const myCar: Car = {
//     name: "M4 Competition",
//     brand: "BMW",
//     start(){
//         console.log("Car purchased...")
//     },
//     stop() {
//      console.log("Car not purchased..")   
//     }
// }


// console.log(`The car is ${myCar.brand} ${myCar.name} `)
// myCar.start()

// --------------------------------------------------- //
//Generics

// function uniqueDataType<Type>(item: Type, value: Type):[Type,Type] {
//     return [item, value];
// }

// console.log(uniqueDataType<number>(1, 2));
// console.log(uniqueDataType<string>("Hello", "Dan"));
// console.log(uniqueDataType<boolean>(true, false));
// interface Dog {
//     name: string;
//     breed: string;
// }

// const dog1 = uniqueDataType<Dog>({name: "Bully", breed:  "Dog"}, {name: "Default", breed: "unknown"});

// console.log(dog1)



// ------------------------------------------------- //

//Type Narrowing
//type guard

// type MyType = string | number;
// //type guard will use typeof 
// function exFunc(value: MyType): void{
//     if(typeof value === "string"){
//         console.log(value.toUpperCase());
//     }else{
//         console.log(value.toFixed(2));
//     }
// }

// exFunc("Hello");
// exFunc(12.123);

//instanceof

// class Dog {
//     bark(): void{
//         console.log("Woff");
//     }
// }

// class Cat{
//     meow(): void{
//         console.log("Meow");
//     }
// }
// function animalSound(animal: Dog | Cat): void{
//     if(animal instanceof Dog){
//         animal.bark();
//     }else{
//         animal.meow();
//     }
// }

// const myDog = new Dog();
// const myCat = new Cat();

// animalSound(myDog);
// animalSound(myCat);

//Intersection type

// type Employee = {
//     name: string;
//     id: number;
// }
// type Manager = {
//     department: string;
//     role: string;
// }

// type CompanyEmployee = Employee & Manager;

// const person: CompanyEmployee = {
//     name: "Dhinesh",
//     id: 1,
//     department: "SDE",
//     role: "Manager"
// }

// console.log(person.name);
// console.log(person.id);
// console.log(person.department);
// console.log(person.role);

// ------------------------------------------------ //
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Type tsc in cmd to compile the ts file into js file.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!