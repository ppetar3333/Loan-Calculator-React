import React from "react";

export const setupVariables = (
  setInstallmentToPay: React.Dispatch<React.SetStateAction<number>>,
  amountToPay: number,
  setNumberOfPaymentsState: React.Dispatch<React.SetStateAction<number>>,
  numberOfPayments: number,
  setTotalToPayState: React.Dispatch<React.SetStateAction<number>>,
  totalToPay: number,
  setTotalInterestState: React.Dispatch<React.SetStateAction<number>>,
  totalInterest: number
) => {
  setInstallmentToPay(Math.round(amountToPay * 100) / 100);
  setNumberOfPaymentsState(Math.round(numberOfPayments));
  setTotalToPayState(totalToPay);
  setTotalInterestState(totalInterest);
};
