console.log("01.", "1" == 1);
console.log("02.", "1" === 1); // "1" é string e 1 number.
console.log("03.", "3" != 3);
console.log("04.", "3" !== 3); // Diferentes msm? sim, tipos diferentes;
console.log("05.", "3" < 2);
console.log("06.", "3" > 2);
console.log("07.", "3" <= 2);
console.log("08.", "3" >= 3);

const d1 = new Date(0);
const d2 = new Date(1);
console.log("09.", d1 === d2); // Comparando referencia de memoria
console.log("10.", d1 == d2); // Comparando referencia de memoria
console.log("11.", d1.getTime() === d2.getTime()); // Mesmo tipo e valor
console.log("12.", undefined == null);
console.log("13.", undefined === null);





