// reference type
// // by referens vs by value
// let _a = 5;
// let _b = 10;
// // console.log(_a === _b);
//  _b = _a;
//  _b++;

// console.log(_a);
// console.log(_b);

//  const arr1 = [1,3,4];
//  let arr2 = []
//  arr2 = arr1;
// //
// arr2[1] = 5;
//  console.log("arr1",arr1);
//  console.log("arr2",arr2);

// let obj1 = { value: 10 }
// let obj2 = obj1;
// let obj3 = { value: 10 }
// // console.log(obj1 === obj2);
// obj2.value = 15;
// console.log(obj1.value);
// console.log(obj3.value);
// // //
// const arr1 = [1,3,4];
// let arr2 = [].concat(arr1);
// arr2[2] = 6;
// console.log(arr1);
// console.log(arr2);
// let obj1 = { value: 10 }
// let obj = Object.assign({},obj1)
// console.log('obj', obj);
// obj.value = 20;
// console.log(obj1.value);
// console.log(obj.value);
//
//  obj.value = 20;
// //  console.log('obj', obj);
//  console.log('obj1', obj1);
// // //
// let obj1 = { value: 10 }
// let objNew = {...obj1};
// objNew.value = 9;
// console.log('obj1', obj1);
// console.log('objNew', objNew);

// let obj = Object.assign({},obj1)
//
// let obj1 = {
//    a: 'java',
//    b: {
//      type: 'script'
//    }
// }

// let obj2 = {...obj1}
//
// obj1.a = "c++";
// console.log(obj2.a);
// console.log(obj1.a);
// obj2.b.type = 'css';
// console.log(obj1.b.type); //css
// console.log(obj2.b.type); // css
//
// console.log(obj1.a); // c++
// console.log(obj2.a); // java
// console.log(inObj.b.type);
// //deep cloning
// let obj1 = {
//    a: 'java',
//    b: {
//      type: 'script'
//    }
// }
// let obj2 = JSON.parse(JSON.stringify(obj1));
// console.log('newInObj', obj2);
// obj2.b.type = 'html';
// console.log('objInObj', obj1.b.type);
// console.log('newInObj', obj2.b.type);
// //
// //
// let b = 'hhhh';
// //context vs scope
// const x = () => {
//   let a = "hi";
//   let b = 'ffffff';
//   //return value;
// }
// // console.log(a);
// //
// const a = () => {
//     console.log(this);
// }
// a();
// // //
// // //
//  const obj4 = {
//    a: function() {
//      console.log(this);
//    },
//    b: 'some text'
//
//  }
//  obj4.a();
//
// //instantiation
// class someclass {
//   constructor(){
//
//   }
//   loopinsideaclass(){
//     return y.getName();
//   }
// }
// class someotherclass {
//   constructor(param, param2){
//     this.name = param;
//     this.lastname = param2;
//   }
//   getName(){
//     return this.name;
//   }
//   getLastName(){
//     return this.lastname;
//   }
//   getFullName(){
//     return this.name + " " + this.lastname;
//   }
//   getFullNameWithGap(gap){
//     return this.name + gap + this.lastname;
//   }
// }
// let x = new someclass();
// let y = new someotherclass('Olivier', 'Smile');
// console.log(y);
// console.log(y.getName());
// console.log(y.getLastName());
// console.log(y.getFullName());
// console.log(y.getFullNameWithGap(' :) '));
// console.log( x.loopinsideaclass(y) );
//
// let  _x = () => {
//
// }


class Fruit {
  constructor(fruitName){
    this.name = fruitName;
  }
  _x =() => {
      return this.name;
  }
  setName(newname){
    this.name = newname;
  }
  getName() {
    return this.name;
  }

}
// let my_fruit = new Fruit('Apple');
// console.log( my_fruit._x() );
//
// class Apple extends Fruit {
//   constructor(name){
//     super(name);
//   }
//   getName() {
//     return this.name + ' I am an apple';
//   }
//   // _x = () => {
//   //      return false;
//   // }
// }
// let my_fruit_green = new Apple('AppleGreen');
// console.log( my_fruit_green.getName() );
//
// class AppleGreen extends Apple {
//   constructor(name){
//       super(name);
//   }
// }
// //









//
// class Animal {
//  constructor() {
// 		this.name = "";
// 		this.color = "";
// 		this.type = "";
// 	}
//   constructor(a, b) {
// 		this.name = a;
// 		this.color = b;
// 		this.type = "";
// 	}
// 	constructor(a, b, c) {
// 		this.name = a;
// 		this.color = b;
// 		this.type = c;
// 	}
//   sound(){
//     console.log("I dont have a sound yet");
//   }
//   setName(name){
//     this.name = name;
//   }
//   setColor(color){
//     this.color = color;
//   }
//   setType(type){
//     this.type = type;
//   }
// }
// //
// class Mamal extends Animal {
// 	constructor(x, y, z) {
// 		super(x, y);
// 	}
// 	sound() {
// 		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
// 	}
// }
// //
// const cow = new Mamal('Shelly', 'cow', 'brown');
// console.log(cow);
// cow.sound();

// //ES7
// let _s = 'helooooooooooo p'
// console.log(_s.includes('ziv'));
//
// let _e =  10**3;
// console.log(_e);
// //
// // ES8
// //String
// let _w = 'What';//11
// _w = _w.padEnd(100,'What');// 6
// console.log( _w );
// //
// let str1 = '5';
// console.log(str1.padStart(100, '0').length);
// // .padStart();
// // .padEnd();
// //
// // const _m = (a,b,c,) => console.log(a);
//
// let _myObj = {
//   a: 1,
//   b: {
//     c: 3
//   }
// }
// //[a,b]
// Object.keys(_myObj).forEach((key) => {
//   console.log('key', key);
// });
// //[1,2]
// Object.values(_myObj).forEach((val) => {
//   console.log('value', val);
// });
// // [a,1] [b,{}]
// Object.entries(_myObj).forEach((ent) => {
//   console.log('enteries', ent);
// });

// var arr1 = [1, 2, [3, 4]];
// console.log( arr1 );
// console.log( arr1.flat() );
// // [1, 2, 3, 4]
//
// var arr2 = [
//             1,
//             2,
//             [3, 4,
//               [5, 6]
//             ]
//           ];
// console.log( arr2.flat(1) );
// [1, 2, 3, 4, [5, 6]]
//
// var arr3 = [1, 2, [3, 4, [5, 6]]];
// console.log( arr3.flat(2) );
// // // [1, 2, 3, 4, 5, 6]
// //
// var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log( arr4.flat(Infinity) );
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// let arr1 = [1, 2, 3, 4];
// let arr2 = arr1.map(x => {
//   return [x * 2];
// });
// console.log(arr2);
// // [[2], [4], [6], [8]]
//
// let arr3 = arr1.flatMap(x => {
//   return [x * 2];
// });
// console.log(arr3);
// // [2, 4, 6, 8]
//
// // only one level is flattened
// let arr4 = arr1.flatMap(x => {
//   return [[x * 2]];
// });
// console.log(arr4);
// // [[2], [4], [6], [8]]

let str = '       Stop Talking sil vous plait   ';
console.log(str.trimEnd());
console.log(str.trimStart());
console.log(str.trim());


// const obj = { foo: 'bar', baz: 42 };
// console.log(Object.entries(obj));

// [ ['foo', 'bar'], ['baz', 42] ]
//
// //// iterate through key-value gracefully
// const obj = { a: 5, b: 7, c: 9 };
// for (const [key, value] of Object.entries(obj)) {
//   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// }
// //
// // // Or, using array extras
// Object.entries(obj).forEach(([key, value]) => {
//   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// });


// const arr = [ ['ziv', 'a'], ['olivier', 'b'], ['miriam', 'c'] ];
// const obj = Object.fromEntries(arr);
// console.log(obj); // { 0: "a", 1: "b", 2: "c" }
