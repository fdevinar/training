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

// - CALL, APPLY, BIND

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

// - CLASSES

// class Workout {
//     constructor(name, exercises, trainer){
//         this.name = name;
//         this.exercises = exercises;
//         this.trainer = trainer;
//     }
//     // static function can only be called on Workout class
//     static printGeneric() {
//         console.log('Print Generic Static');
//     }
// };
// Workout.prototype.printWorkout = function() {
//     console.log(`${this.name} consiste nos exercicios ${this.exercises} feitos pelo ${this.trainer}`);
// }
// const W1 = new Workout('Monster Treino',['Squat','Bench','Deadlift'],'Fabrigol');
// console.log(W1);
// W1.printWorkout();
// Workout.printGeneric();

// class ExtendedWorkout extends Workout {
//     constructor(name, exercises, trainer, intensity, goal){
//         super(name, exercises, trainer);
//         this.intensity = intensity;
//         this.goal = goal;
//     }
// }
// ExtendedWorkout.prototype.printExtWorkout = function() {
//     console.log(`${this.name} consiste nos exercicios ${this.exercises} feitos pelo ${this.trainer}
//                 with  ${this.intensity} intensity and goal of ${this.goal}`);
// }
// const W2 = new ExtendedWorkout('Killa Training',['OHP','Loaded Carry','Explosion Delts'],
//                                 'Fabrigol','High','Delts Gainz');
// console.log(W2);
// W2.printExtWorkout();
// W2.printWorkout();

// - CLOSURES

// function outer() {
//     let outerData = ' my friend!';
//     return function inner() {
//         let innerData = 'We are the champions,';
//         return innerData + outerData;
//     }
// }

// console.log(outer());
// console.log(outer()());

// ƒ inner() {
//     let innerData = 'We are the champions,';
//     return innerData + outerData;
// }
// We are the champions, my friend!