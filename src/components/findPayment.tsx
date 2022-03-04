export const findPayment = (payBack: String) => {
  let paymentFrequency = 0;
  if (payBack === "Every Day") {
    paymentFrequency = 1;
  } else if (payBack === "Every Week") {
    paymentFrequency = 7;
  } else if (payBack === "Every 2 Weeks") {
    paymentFrequency = 14;
  } else if (payBack === "Every Half Month") {
    paymentFrequency = 15;
  } else if (payBack === "Every Month") {
    paymentFrequency = 30;
  } else if (payBack === "Every Quarter") {
    paymentFrequency = 90;
  } else if (payBack === "Every 6 Months") {
    paymentFrequency = 180;
  } else {
    paymentFrequency = 365;
  }
  return paymentFrequency;
};
