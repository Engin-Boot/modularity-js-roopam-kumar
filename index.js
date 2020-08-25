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

function include(file) { 
  
  var script  = document.createElement('script'); 
  script.src  = file; 
  script.type = 'text/javascript'; 
  script.defer = true; 
  
  document.getElementsByTagName('head').item(0).appendChild(script); 
  
} 

function GetPairNumberFromColors(majorColor, minorColor) {
    let majorIndex = 0;
    let minorIndex = 0;
    for(majorIndex = 0; majorIndex < MajorColors.length; majorIndex++) {
        if(MajorColors[majorIndex] == majorColor) {
            break;
        }
    }
    for(minorIndex = 0; minorIndex < MinorColors.length; minorIndex++) {
        if(MinorColors[minorIndex] == minorColor) {
            break;
        }
    }
    return majorIndex * MinorColors.length + minorIndex + 1;
}

function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = GetColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = GetPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}

include(getColorFromPairNumber.js);
console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);
