export const handleDataChange = (
  amount: number,
  numberOfPayments: number,
  rate: number,
  installmentToPay: number
) => {
  let dataObject = [
    {
      payment: installmentToPay,
      begginingBalance: amount,
      interest: 0,
      principal: 0,
      endingBalance: 0,
    },
  ];

  let endingBalanceAmount = amount;
  let iterestAmount = 0;
  let principalAmount = 0;
  let begginingBalanceAmount = 0;
  let ratePercent = rate / 100;

  for (let i = 1; i <= numberOfPayments; i++) {
    iterestAmount = (ratePercent / numberOfPayments) * endingBalanceAmount;
    principalAmount = installmentToPay - iterestAmount;
    begginingBalanceAmount = endingBalanceAmount;
    endingBalanceAmount = endingBalanceAmount - principalAmount;

    if (i === numberOfPayments) endingBalanceAmount = 0;

    dataObject.push({
      payment: parseFloat(installmentToPay.toFixed(2)),
      begginingBalance: parseFloat(begginingBalanceAmount.toFixed(2)),
      interest: parseFloat(iterestAmount.toFixed(2)),
      principal: parseFloat(principalAmount.toFixed(2)),
      endingBalance: parseFloat(endingBalanceAmount.toFixed(2)),
    });
  }
  return dataObject;
};
