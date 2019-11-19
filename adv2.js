// function x(){
//   var sayhelloo = "Hello";
//   function y(){
//     console.log(sayhelloo);
//   }
//   return y;
// }
//
// let say = x();
// console.log(say);
// say();

// const x = () => {
//   const sayhelloo = "Hello";
//   const y = () => {
//     const z = "no accees";
//     console.log(sayhelloo);
//   }
//   console.log(z);
//   return y;
// }
// const say = x();
// console.log(say);
// say();
//closurs
// parent do not have access to children but children have access to parent


// currying
// const x = (a ,b) => a * b;
// console.log( x(5,6));
// //
// const y = (a) => (b) => a * b;
// console.log( y(5)() );
// //
// const z = y(3);
// console.log(z);
//  console.log( z(9) );

//compose
// const x = (a, b) => (c) => a(b(c));
// const sum2 = (num) => num * 2;
// const sum = (num) => num + 1;
// console.log( x(sum, sum2)(6) );

// console.log( x(sum, sum2)(2)  );

//arrays
// let arr = [0,1,1,2,3,5,8];
// for(var i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }
//
// arr.forEach((i) => {
//  console.log(i);
// });
// //
// const newArr = [];
// arr.forEach((i) => {
//    newArr.push(i * 2);
// });
// console.log('forEach',newArr);

// map
//  const ziv = arr.map((i) => {
//    return i * 2;
//  });
//  console.log(ziv);
// //
// const mapArr2 = arr.map( i => {
//      return i * 2;
//  });
//  console.log('map2', mapArr2);
// //
// const mapArr3 = arr.map( i => i * 2 );
// console.log('map3', mapArr3);


// filter
// const filterArr = arr.filter(i => {
//   return i > 3;
// });
// console.log(arr);
// console.log('filter',  filterArr);
// // //
// const filterArr2 = arr.filter(i => i === 3 );
// console.log('filter2', filterArr2);

// // // reduce
// const addTo = x => y => x + y;
// const addToTen = addTo(10);
// console.log(addToTen(3));

// Js Array reduce
// let numbers = [2, 5, 10,100];
// const newNumbers = numbers.reduce((total, num) => {
//   console.log(total + " " + num);
//   return num;
// });
// console.log(newNumbers);

// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// const filterName = dragons.filter(i => {
//   // console.log('name', name.includes('John'));
//   return i.includes('Sa');
// });
// console.log(filterName);

// function mergeWords(string) {
//  return function(nextString) {
//    if (nextString === undefined) {
//      return string;
//    } else {
//      return mergeWords(string + ' ' + nextString);
//    }
//  }
// }
//
// console.log(mergeWords('There')('is')('no')('spoon.')());

const mergeWords = (string) => (nextString) =>
  nextString === undefined ? string : mergeWords(`${string} ${nextString}`);

// console.log(mergeWords('Hello')('Student')());
console.log(mergeWords('There')('is')('no')('spoon.')());
