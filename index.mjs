const expect = require('chai').expect;


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

import {testNumberToPair} from './testNumberToPair';
import {testColorToNumber} from './testColorToNumber';

console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);
