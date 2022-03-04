export const findCompound = (compound: String) => {
  let compoundFrequnecy = 0;
  if (compound === "Annually (APY)") {
    compoundFrequnecy = 1;
  } else if (compound === "Semi-annually") {
    compoundFrequnecy = 2;
  } else if (compound === "Quarterly") {
    compoundFrequnecy = 4;
  } else if (compound === "Monthly (APR)") {
    compoundFrequnecy = 12;
  } else if (compound === "Semi-monthly") {
    compoundFrequnecy = 24;
  } else if (compound === "Biweekly") {
    compoundFrequnecy = 26;
  } else if (compound === "Weekly") {
    compoundFrequnecy = 52;
  } else {
    compoundFrequnecy = 365;
  }
  return compoundFrequnecy;
};
