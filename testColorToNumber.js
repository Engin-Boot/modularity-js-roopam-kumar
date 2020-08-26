const expect = require('chai').expect;
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

function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = obj.GetPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}
exports.testColorToNumber = testColorToNumber;
