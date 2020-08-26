const expect = require('chai').expect;
//const  GetPairNumberFromColors  = require('./getPairNumberFromColors.js');
require('./getPairNumberFromColors.js');


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



//import {GetPairNumberFromColors} from './getPairNumberFromColors';


export function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = GetPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}

//module.exports = { testColorToNumber,
                // };
