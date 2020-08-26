const expect = require('chai').expect;
//require('./getColorFromPairNumber.js'); //using require
//require('./getPairNumberFromColors.js');
const obj3 = require('./testNumberToPair');
const obj4 = require('./testColorToNumber');

const MajorColors = [
    "white",
    "red",
    "black",
    "yellow",
    "violet"
];

const MinorColors = [
    "blue",
    "orange",
    "green",
    "brown",
    "slate"
];

//import testNumberToPair from './testNumberToPair'; //using import
//import testColorToNumber from './testColorToNumber';

console.log("color coder");
obj3.testNumberToPair(4, "white", "brown");
obj3.testNumberToPair(25, "violet", "slate");
obj4.testColorToNumber("black", "brown", 14);
obj4.testColorToNumber("yellow", "green", 18);
