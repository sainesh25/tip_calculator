const priceIn = document.getElementById('priceIn');
const tipPercentIn = document.getElementById('tipPercentIn');
const gstPercentIn = document.getElementById('gstPercentIn');

const calculateBtn = document.getElementById('calculateBtn');
const clearBtn = document.getElementById('clearBtn');
const tipTotalAmt = document.getElementById('tipTotalAmt');
const taxTotalAmt = document.getElementById('taxTotalAmt');
const grandTotalAmt = document.getElementById('grandTotalAmt');
const noOfPeopleIn = document.getElementById('noOfPeopleIn');
const splitBillBtn = document.getElementById('splitBillBtn');
const splitAmt = document.getElementById('splitAmt');
const splitedAmtTxt = document.getElementById('splitedAmtTxt');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const addBtn2 = document.getElementById('addBtn2');
const subtractBtn2 = document.getElementById('subtractBtn2');
const addPeopleBtn = document.getElementById('addPeopleBtn');
const deductPeopleBtn = document.getElementById('deductPeopleBtn');



let percent = 0;
let percent2 = 0
let persons = 0;

addBtn.addEventListener('click', (e) => {
    if(percent == 100){
        tipPercentIn.value = 100; 
    }
    else{
        tipPercentIn.value = percent += 1
    }
});
subtractBtn.addEventListener('click', (e) => {
    if(percent <= 0){
        tipPercentIn.value = 0;
    }
    else{
        tipPercentIn.value = percent -= 1;
    }
});

addBtn2.addEventListener('click', (e) => {
    if(percent == 100){
        gstPercentIn.value = 100; 
    }
    else{
        gstPercentIn.value = percent2 += 1
    }
});
subtractBtn2.addEventListener('click', (e) => {
    if(percent <= 0){
        gstPercentIn.value = 0;
    }
    else{
        gstPercentIn.value = percent2 -= 1;
    }
});

addPeopleBtn.addEventListener('click', (e) => {
    noOfPeopleIn.value = persons += 1;
});

deductPeopleBtn.addEventListener('click', (e) => {
    if(persons <= 0){
        noOfPeopleIn.value = 0;
    }
    else{
        noOfPeopleIn.value = persons -= 1;
    }
});

calculateBtn.addEventListener('click', (e) => {
    let priceVal = priceIn.value;
    let tipPercentVal = tipPercentIn.value;
    let gstPercentVal = gstPercentIn.value;

    const tipFormula = priceVal * (tipPercentVal / 100);
    tipTotalAmt.innerHTML = Math.ceil(tipFormula);
    
    const GSTFormula = priceVal * (gstPercentVal / 100);
    taxTotalAmt.innerHTML = Math.ceil(GSTFormula);

    let grandTotalVal = +priceVal + +tipFormula + +GSTFormula; 
    grandTotalAmt.innerHTML = Math.ceil(grandTotalVal);  
});

clearBtn.addEventListener('click', (e) => {
    location.reload();
});

splitBillBtn.addEventListener('click', (e) => {
    let priceVal = priceIn.value;
    let tipPercentVal = tipPercentIn.value;
    let gstPercentVal = gstPercentIn.value;

    const tipFormula = priceVal * (tipPercentVal / 100);
    const GSTFormula = priceVal * (gstPercentVal / 100);

    let grandTotalVal = +priceVal + +tipFormula + +GSTFormula;
    
    let noOfPeopleVal = noOfPeopleIn.value;
    
    const splitBillAmt = grandTotalVal / noOfPeopleVal;
    splitedAmtTxt.style.display = 'block';
    splitAmt.innerHTML = Math.ceil(splitBillAmt);
});






