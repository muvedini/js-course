// SECTION-2----CODING CHALLENGE-1

/*const markw = 78;
const markh = 1.69;
const johnw = 92;
const johnh = 1.95;*/

const markw = 95;
const markh = 1.88;
const johnw = 85;
const johnh = 1.76;
calculate_mark = markw / markh ** 2;
calculate_john = johnw / johnh ** 2;
higher_bmi = calculate_mark > calculate_john;
console.log(higher_bmi);
console.log(calculate_mark, calculate_john);

// SECTION-2----CODING CHALLENGE-2

if (calculate_mark > calculate_john) {
    console.log(" Mark has higher BMI ");
} else {
    console.log(" John has higher BMI ");
}

if (calculate_mark > calculate_john) {
    console.log(`Mark's BMI (${calculate_mark}) is Higher than John's (${calculate_john})`);
} else {
    console.log(`John's BMI (${calculate_john}) is Higher than Mark's (${calculate_mark}) `);

}

// SECTION-2----CODING CHALLENGE-3

let team_dolphin1 = 96 + 108 + 89;

let team_koalas1 = 88 + 91 + 110;

const dolphin_avg = (team_dolphin1) / 3;
const koalas_avg = (team_koalas1) / 3;

if (dolphin_avg > koalas_avg) console.log("Dolphin wins...!");
else console.log("Koalas wins...!");
if (dolphin_avg === koalas_avg) console.log("Draw");

// BONUS 1

let team_dolphin2 = 97 + 112 + 101;
let team_koalas2 = 109 + 95 + 106;

const dolphin_avg2 = (team_dolphin2) / 3;
const koalas_avg2 = (team_koalas2) / 3;

if (dolphin_avg2 > koalas_avg2 && dolphin_avg2 >= 100) {
    console.log("dolphin wins");
} else if (dolphin_avg2 < koalas_avg2 && koalas_avg2 >= 100) {
    console.log("koalas wins");
} else if (dolphin_avg2 === koalas_avg2) {
    console.log("draw");
}

// SECTION-2----CODING CHALLENGE-4

const billvalue = 430;
let tip;
(billvalue >= 50 && billvalue <= 300) ? tip = (15 / 100) * billvalue: tip = (20 / 100) * billvalue

console.log(`The bill value is ${billvalue}, tip value is ${tip}, total is ${billvalue+tip}`)