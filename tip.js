//getting Access Using ID's 
const billTotalInp = document.getElementById("billAmtInput");
const tipInput = document.getElementById("tipInput");
const totalPerPerson = document.getElementById("totalPerPerson");
const noOfPeopleDiv = document.getElementById("noOfPeople");

//converstion Into Number Data
let noOfPeople = Number(noOfPeopleDiv.innerText);

//calculating Bill
let calBill = () => {
    const bill = Number(billTotalInp.value)
    const tipPer = Number(tipInput.value) / 100;
    const tipAmt = bill * tipPer;
    const total = tipAmt + bill;
    const perPersonTotal = total / noOfPeople;
    totalPerPerson.innerText = `Rs ${perPersonTotal.toFixed(2)}`
}

// adding Persons 
let increasePer = () => {
    noOfPeople += 1
    noOfPeopleDiv.innerText = noOfPeople
    //calling calBill() After The Changes
    calBill()
}

// removing persons
let decreasePer = () => {
    // if Number Is 1 Then It returns Nothing
    if (noOfPeople <= 1) {
        return;
    }
    noOfPeople -= 1
    noOfPeopleDiv.innerText = noOfPeople
    //calling calBill() After The Changes
    calBill()
}

function resetting() {
    noOfPeopleDiv.innerText = 1;
    noOfPeople=1;
    //calling calBill() After The Changes
    calBill();
}
