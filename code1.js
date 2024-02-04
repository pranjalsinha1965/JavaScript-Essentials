//Note-1
"use strict";
//treat all JS code as newer version
//through out the document we will be using camel casing 
const user = {
    username: "hitesh",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

//Note-2
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

//Note-3
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
// accountId = 2 // not allowed
//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(typeof anotherId);

//Note-3

/* 
var should not be used because of 
block scope and functional scope problems 
*/
// we will be node.js as the javascript engine and not any browser 
// always watch ecma script mdn for js 
// undefined means the value has not been reassigned
// And null is basically a representation of standalone values
// const bigNumber = 3456543576654356754n
// Reference (Non primitive)
// Array, Objects, Functions

//Datatype conversion
//type-1: alphanumeric conversion
const  score  = "33abc";

console.log(typeof score);
console.log(typeof(score));

const valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//type-2: bool`s conversion
let isSignedIn = "Pranjal";
let booleanIsSignedIn = Boolean(isSignedIn);
console.log(booleanIsSignedIn);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

//Data-Types
//Primitive
// 7 Types: String, Number, Boolean, null, undefined, symbol, bigint

const numVar = 100;
const scoreVal = 100.3;

const isSignedOut = false;
const tempOutside = null;

const myId = Symbol('123');
const bigNum = 3456789123990n;
console.log(typeof bigNum);

//Reference (Non Primitve)
//Array, Objects, Functions

const heroes= ["superman", "Spiderman", "blackpanther"];
console.log(heroes);

//Stack Primitive, Heap Non-Primitive
//Datatype: Strings
const myName = "Pranjal";
const repoCount = 43;

console.log(`Hello my name is $(myName) and my repo count is $(repoCount)`);

const gameName = new String('hitesh-hc-com');

//console.log(gameName[0])
//console.log(gameName_.proto_);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());

console.log(gameName(charAt(2)));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(newString);

const newStringOne = "  Pranjal  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "WWW.google.com";
console.log(url.replace('googl', 'mdn'));
console.log(url.includes('pranjal'));
console.log(gameName.split('-'));

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

