const expect = require('chai').expect;
//const GetColorFromPairNumber = require('./getColorFromPairNumber.js');
require('./getColorFromPairNumber.js');

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

export function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = GetColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}
//module.exports = { testNumberToPair,
                 //};
