export const calculationLogic = (rate: number, numberOfPayments: number, amount: number) => {
  let ratePercent = (rate / Math.round(numberOfPayments)) / 100;
  let amountToPay = amount * (ratePercent * Math.pow((1 + ratePercent), Math.round(numberOfPayments))) / ((Math.pow((1 + ratePercent), Math.round(numberOfPayments))) - 1);
  let totalToPay = Math.round((amountToPay * Math.round(numberOfPayments)) * 100) / 100;
  let totalInterest = Math.round((totalToPay - amount) * 100) / 100;
  return { amountToPay, totalToPay, totalInterest };
};
