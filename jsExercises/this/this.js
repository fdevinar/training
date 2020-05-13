// - IMPLICIT (REFERS TO OBJECT CONTEXT)

// let dog = {
// name: 'Rex Doggo',
// bark: function bark(){
//     console.log('Auau, hi I am dog named ' + this.name);
//     // Auau, hi I am dog named Rex Doggo
// },
// whoIsThis: function whoIsThis(){
//     console.log(this); // dog Object
// },
// friend: {
//     whoIsThis: function whoIsThis(){
//         console.log(this); // friend Object
//         console.log(this.name); // undefined
//     }
// }
// }

// - CALL, APPLY

// let fabri = {
//     name: 'Fabrigol',
//     sayHi: function() {
//         return 'Hi ' + this.name;
//     },
//     sum: function(a,b,c,d) {
//         return this.name + ' likes to rave at ' + (a + b + c + d);
//     }
// }
// let jack = {
//     name: 'Jack Daniels',
// }

// fabri.sayHi();
// //"Hi Fabrigol"
// fabri.sayHi.call(jack);
// //"Hi Jack Daniels"

// fabri.sum(1,2,3,4);
// //"Fabrigol likes to rave at 10"
// fabri.sum.call(jack,1,2,3,4);
// //"Jack Daniels likes to rave at 10"
// fabri.sum.apply(jack,[1,2,3,4]);
// //"Jack Daniels likes to rave at 10"

// let math = {
//     name: 'Math Object',
//     multiply: function(x,y) {
//         return (this.name + ' returns the result ' + x * y);
//     }
// }
// let XMath = {
//     name: 'Extra Math Object'
// }

// math.multiply(3,4)
// // "Math Object returns the result 12"
// let calc = math.multiply.bind(XMath);
// calc(4,5)
// // "Extra Math Object returns the result 20"
// calc(6,4)
// // "Extra Math Object returns the result 24"

// let timer = {
//     name: 'Timer function',
//     exec: function() {
//         setTimeout(function() {
//             console.log(this.name + ' has been executed right now! on context :' + this);
//         }.bind(this), 1000);
//     }
// }

// // without .bind(this)
// timer.exec();
// //  has been executed right now! on context :[object Window]

// // with .bind(this)
// timer.exec();
// // Timer function has been executed right now! on context :[object Object]

