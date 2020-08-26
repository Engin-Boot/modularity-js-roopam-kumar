const expect = require('chai').expect;
//const  GetPairNumberFromColors  = require('./getPairNumberFromColors.js');
const obj = require('./getPairNumberFromColors');


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


function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = obj.GetPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}
//export {testColorToNumber};
exports.testColorToNumber = testColorToNumber;
//module.exports = { testColorToNumber,
                // };
