const expect = require('chai').expect;
//const GetColorFromPairNumber = require('./getColorFromPairNumber.js');
const obj2 = require('./getColorFromPairNumber');

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

//import {GetColorFromPairNumber} from './getColorFromPairNumber';

function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = obj2.GetColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}
//export {testNumberToPair};
exports.testNumberToPair = testNumberToPair;
//module.exports = { testNumberToPair,
                 //};
