// Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. 
// Calculate the total energy bill of that consumer if per unit rate is 10?

let s=100;
let energy=s*24*30;
let bill=(energy/1000)*10;
console.log(`Electricity Bill : ${bill}rs`);