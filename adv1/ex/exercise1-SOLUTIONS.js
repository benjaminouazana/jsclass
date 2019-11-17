
// For all of these, what is the value of a when the function gets called with the alert()
// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
// }
// alert(a); //3
//#2
// you must first run q2() in your console to add the new value. then run q22()
// var a = 0;
// function q2() {
//    var a = 5;
// }
//
// function q22() {
//     alert(a); //5
// }
// q22();
// q2();
// q22();

//
// // run in the console:
// q22();// -- 0
// q2();
// q22();// -- 5

//#3

// function q3() {
//     var a = "hello";
// }
// //
// // // you must first run q3() in your console to add the a property to the window. then run q32()
// function q32() {
//     alert(a); //"hello"
// }
// q3();
// q32();

//#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a); //"test"
// }
// alert(a);
// q4();

//#5 with var keyword, if statements do not create a new scope
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(a); // 5
// }
// alert(a); // 5
