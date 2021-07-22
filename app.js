let billAmount = 0;
let paidAmount = 0;
const paybackCashAmount = [];

const bill = document.getElementById("bill");
const paid = document.getElementById("paid");

const CashReturn = (amountLeft) => {
  const cashAvailable = [2000, 500, 100, 20, 10, 5, 1];

  let amountToreturn = amountLeft;
  let countCash;

  cashAvailable.forEach((cashValue) => {
    countCash = 0;
    while (amountToreturn >= cashValue) {
      amountToreturn = amountToreturn - cashValue;
      countCash = countCash + 1;
    }
    const returnCash = {
      id: cashValue,
      amountRetrun: countCash,
    };
    paybackCashAmount.push(returnCash);
  });

  paybackCashAmount.map((cash) => {
    console.log(cash.amountRetrun);
  });
};

const CalculateBill = (billA, paidA) => {
  customerBill = parseInt(billA);
  customerPaid = parseInt(paidA);

  if (customerBill > customerPaid) {
    return alert("bill is more than paid");
  }
  ReturnAmount = customerPaid - customerBill;

  CashReturn(ReturnAmount);
};

bill.addEventListener("input", (e) => {
  const value = e.target.value;
  billAmount = value;
});

paid.addEventListener("input", (e) => {
  const val = e.target.value;
  paidAmount = val;
});

const submit = document.getElementById("btn");

submit.addEventListener("click", () => {
  CalculateBill(billAmount, paidAmount);
});
