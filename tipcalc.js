// Tip Calculator 

var tipWithBill = []
var tips = []

function tipCalculator(bill) { 
    if (bill < 50) {
     var result = bill * 0.2; 
     tips.push(result);
     var resultWithBill = result + bill;
     tipWithBill.push(resultWithBill)
    } else if (bill < 50 && bill < 200) {
     var result = bill * 0.15; 
     tips.push(result);
     var resultWithBill = result + bill;
     tipWithBill.push(resultWithBill);
    } else {
     var result = bill * 0.10; 
     tips.push(result);
     var resultWithBill = result + bill;
     tipWithBill.push(resultWithBill);
    }
return tipWithBill
return tips
}

console.log(tipCalculator(124));
console.log(tipCalculator(48));
console.log(tipCalculator(268));