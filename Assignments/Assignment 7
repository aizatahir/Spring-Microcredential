// A
var lucasMass = 78;
var johnLucas = 92;

var lucasHeight = 1.69;
var JohnHeight = 1.95;

function findBMI(mass, height) {
  var BMI = mass / (height * height)
  return BMI;

}

var lucasBMI = findBMI(lucasMass, lucasHeight)
var johnBMI = findBMI(johnMass, johnHeight)

let lucasHigherBMI = false;
if (lucasBMI > johnBMI) {
  lucasHighterBMI = true;

}

console.log("Lucas' BMI is" + lucasBMI + " ,and John's BMI is " + johnBMI);

if (lucasHigherBMI = false) {
    console.log("Lucas has a lower BMI than John");
} else {
    console.log("Lucas has a higher BMI");
}


// B
function cToF(c) {
    var f = (c * 9/5 + 32);
    return c + " celcius in fahrenheit is: " + f + " fahrenheit ";
}

function fToC(f) {
    c = (f - 32) * 5/9;
    return f + " in celcius is " + c + " celcius";
}

 console.log(cToF(50));
 console.log(fToC(100));


// C
let userinputNets1 = parseInt(prompt("Enter score #1 for Nets:"));
console.log(userinputNets1);

let userinputNets2 = parseInt(prompt("Enter score #2 for Nets:"));
console.log(userinputNets2);

let userinputNets3 = parseInt(prompt("Enter score #3 for Nets:"));
console.log(userinputNets3);

console.log("Nets 3 scores are: " + userinputNets1, "", userinputNets2, "", userinputNets3);

let averageNets = (userinputNets1 + userinputNets2 + userinputNets3) / 3;

console.log("Nets average score is: " + Math.round(averageNets));



const userinputKnicks1 = parseInt(prompt("Now enter score #1 for Knicks:"));
console.log(userinputKnicks1);

const userinputKnicks2 = parseInt(prompt("Enter score #2 for Knicks:"));
console.log(userinputKnicks2);

const userinputKnicks3 = parseInt(prompt("Enter score #2 for Knicks:"));
console.log(userinputKnicks3);

console.log("Knicks 3 scores are: " + userinputKnicks1, "", userinputKnicks2, "", userinputKnicks3);

let averageKnicks = (userinputKnicks1 + userinputKnicks2 + userinputKnicks3) / 3;

console.log("Knicks average score is: " + Math.round(averageKnicks));


if ((averageNets > averageKnicks) && ((userinputNets1 >= 100 || userinputNets2 >= 100 || userinputNets3 >= 100))) {
    console.log("Nets is the winner!");
}
else if ((averageKnicks > averageNets) && ((userinputKnicks1 >= 100 || userinputKnicks2 >= 100 || userinputKnicks3 >= 100))) {
    console.log("Knicks is the winner!");

}
else {
    console.log("Sorry! No one won");
}
