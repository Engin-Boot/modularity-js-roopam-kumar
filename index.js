const expect = require('chai').expect;
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

console.log("color coder");
obj3.testNumberToPair(4, "white", "brown");
obj3.testNumberToPair(25, "violet", "slate");
obj4.testColorToNumber("black", "brown", 14);
obj4.testColorToNumber("yellow", "green", 18);
