//SECTION 2-------CODING CHALLENGE 1
//arrow fn
const average = (num1, num2, num3) => (num1 + num2 + num3) / 3;
//calculating avg
let avg_dolphin = average(44, 23, 71);
let avg_koalas = average(65, 54, 49);
console.log(avg_dolphin, avg_koalas);

function checkWinner(avgdolphin, avgkoalas) {
    if (avgdolphin >= 2 * avgkoalas) {
        console.log(`Dolphin Wins (${avgdolphin} Vs ${avgkoalas})`);
    } else if (avgkoalas >= 2 * avgdolphin) {
        console.log(`Koalas Wins (${avgkoalas} Vs ${avgdolphin})`);

    } else {
        console.log("no one wins");
    }
}
checkWinner(avg_dolphin, avg_koalas);
avg_dolphin = average(85, 54, 41);
avg_koalas = average(23, 34, 27);

console.log(avg_dolphin, avg_koalas);
checkWinner(avg_dolphin, avg_koalas);

//SECTION 2-------CODING CHALLENGE 2
//ARRAYS
// let tip1;

// function calcTip1(billvalue) {
//     if (billvalue >= 50 && billvalue <= 300) {
//         tip = (15 / 100) * billvalue;
//     } else {
//         tip = (20 / 100) * billvalue;

//     }
//     return tip;
// }

// const billvalues1 = [125, 555, 44];
// const tips1 = [calcTip(billvalues[0]), calcTip(billvalues[1]), calcTip(billvalues[billvalues.length - 1])];
// console.log(tips);

// const total1 = [billvalues[0] + tips[0], billvalues[1] + tips[1], billvalues[2] + tips[2]];
// console.log(total);

//SECTION 2-------CODING CHALLENGE 3
//OBJECTS
const mark = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s BMI (${john.bmi})`);
} else {
    console.log(`${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s BMI (${mark.bmi})`);

}

//SECTION 2-------CODING CHALLENGE 4
//LOPPING OVER ARRAYS
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

let tip;
let total;

function calcTip(billvalue) {
    if (billvalue >= 50 && billvalue <= 300) {
        tip = (15 / 100) * billvalue;
    } else {
        tip = (20 / 100) * billvalue;

    }

    return tip;

}
for (let i = 0; i < bills.length; i++) {
    calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + (bills[i]));

}
console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));