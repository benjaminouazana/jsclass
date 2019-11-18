/* Scope */
// let _x = "Yes";
// function getX() {
//   var _x = "No";
//   console.log("in x = ",_x);
// }
// getX();
// console.log("out x = ", _x);

// for(var i = 0; i <= 5; i++){
//
// }
// console.log("i =  ", i);

/* ternary operator */
// let a = 5;
// let b = 7;
// if(a === b){
//   b=6;
// }
// else{
//   b=7;
// }
// console.log(b);
// let c = (a===b) ? 5 : (a!==d) ? 9 : 90;
// console.log(c);
//  _x = "Yes";
// let getX = (_x === "Yes") ? getName() : 'no  name';
// function(_x==="yes"){
//   getX = true;
// }
// else{
//   getX= false;
// }
// console.log(getX);

/* let vs const */
// const myFunc = function() {
//     const myFunc = 1 + 2; //kkjkjkjk
//     console.log(muFunc);
// }
// myFunc = "yyyyuyw";
//  console.log(muFunc);
// muFunc = "Some Text";
// console.log(muFunc);

/* Destructuring */
const car = {
   name: "Fiat",
   model: "500",
   color: "white",
   a: [1,2,3,4,5]
}
// const name = car.name;
// const model = car.model;
// const color = car.color;

// const{ name , color, a} = car;
// console.log(a);
// const name = obj.name;
// const model - obj.model;
// /* Object properties */
//
// const obj = {
//     name: "Fiat",
//     model: "500",
//     color: "white"
//  }
//
 // const ziv1  = "car" + "model";
 // const obj1 = {
 //   // [ziv] : "Fiat",
 //   [ziv1]: "500"
 //   // carmodel: "500"
 // }
// console.log(obj1.car);
// console.log(obj1.carmodel);
// //
const name = [1,2,3,4,5];
const model = "500";

// const obj = {
//    name: name,
//    model: model
// }
// console.log(obj.name);
//
// const obj = {
//   name,
//   model
// }
// console.log('name=',obj.name);


/* Templates strings */

const obj = {
    name: "Fiat",
    model: "500",
    color: "white"
 }
//
// let mycar = "My car is" + " " + obj.name + obj.model ;
// console.log(mycar);
// mycar = `My car is ${obj.name} ${obj.model} `;
// console.log(mycar);

/* default parameters */

 // function myCar(name = "Fiat", model = '500') {
 //   let mycar = `My car is ${name} ${model} `;
 //   console.log(mycar);
 // }
 // myCar("alfa","mito");
 // myCar();


/* Symbol */
// let _s1 = Symbol("Fiat");
// let _s2 = Symbol("Fiat");
// //
// if(_s1 == _s2) {
//   console.log("Yes");
// }
// else {
//   console.log("No");
// }

/* arrow function */

// function myFunc (x, y) {
//   return x + y;
// }
// myFunc(2,9);
// //
// const myFunc1 = (x, y) => {
//   return x + y;
// }
// myFunc1(6,7)
//
// const a = function() {
//
// }
// a();

// var a = [3,5,7,8];
// console.log('array',a);
// a.reverse(); // 8 7 5 3
// console.log('reverse',a);

// function reverseArr(input) {
//     var ret = new Array;
//     for(var i = input.length-1; i >= 0; i--) {
//         ret.push(input[i]);
//     }
//     return ret;
// }
//
// var b = [3,5,7,8];
// console.log('b',b);
// b = reverseArr(b);
// console.log('reverse',b);
