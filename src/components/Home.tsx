import { useState, useEffect } from "react";
import { Compounds, PayBack } from "./Enums";
import Select from "react-select";
import { findCompound } from "./findCompound";
import { findPayment } from "./findPayment";
import { handleDataChange } from "./utils";
import AmortizationGraph from "./AmortizationGraph";
import AmortizationTable from "./AmortizationTable";
import { setupVariables } from "./setupVariables";
import { calculationLogic } from "./calculationLogic";

const Home = () => {
  const [amount, setAmount] = useState<number>(0);
  const [termYear, setTermYear] = useState<number>(0);
  const [termMonth, setTermMonth] = useState<number>(0);
  const [yearAndMonths, setYearAndMonths] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [compound, setCompound] = useState<String>("");
  const [payBack, setPayBack] = useState<String>("");
  const [installmentToPay, setInstallmentToPay] = useState<number>(0);
  const [numberOfPaymentsState, setNumberOfPaymentsState] = useState<number>(0);
  const [totalToPayState, setTotalToPayState] = useState<number>(0);
  const [totalInterestState, setTotalInterestState] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  const changeSelectedCompound = (e: any) => setCompound(e.value);

  const changeSelectedPayBack = (e: any) => setPayBack(e.value);

  useEffect(() => {
    setYearAndMonths(termYear * 12 + termMonth);
  }, [termYear, termMonth]);

  let compoundFrequnecy = findCompound(compound);
  let paymentFrequency = findPayment(payBack);
  let numberOfPayments = (yearAndMonths * 30.42) / paymentFrequency;

  if (numberOfPayments > 33) numberOfPayments -= 1;

  const calculate = (e: any) => {
    e.preventDefault();
    let { amountToPay, totalToPay, totalInterest } = calculationLogic(
      rate,
      numberOfPayments,
      amount
    );
    setupVariables(
      setInstallmentToPay,
      amountToPay,
      setNumberOfPaymentsState,
      numberOfPayments,
      setTotalToPayState,
      totalToPay,
      setTotalInterestState,
      totalInterest
    );
  };

  const payments = handleDataChange(
    amount,
    numberOfPaymentsState,
    rate,
    installmentToPay
  );

  return (
    <>
      <section className="calculator">
        <div className="calculator__wrapper container">
          <form onSubmit={calculate} className="calculator__form">
            <label className="calculator__label" htmlFor="amount">
              Loan Amount
            </label>
            <input
              className="calculator__input"
              name="amount"
              id="amount"
              type="number"
              placeholder="$"
              required
              onChange={(e) => {
                setAmount(e.target.valueAsNumber);
              }}
            />{" "}
            <br />
            <label className="calculator__label" htmlFor="term">
              Loan Term
            </label>
            <input
              className="calculator__input"
              name="term"
              id="term"
              type="number"
              placeholder="years"
              required
              onChange={(e) => {
                setTermYear(e.target.valueAsNumber);
              }}
            />{" "}
            <br />
            <input
              className="calculator__input"
              name="term"
              id="term"
              type="number"
              placeholder="months"
              required
              onChange={(e) => {
                setTermMonth(e.target.valueAsNumber);
              }}
            />{" "}
            <br />
            <label className="calculator__label" htmlFor="rate">
              Interest Rate
            </label>
            <input
              className="calculator__input"
              name="rate"
              id="rate"
              type="number"
              placeholder="%"
              required
              onChange={(e) => {
                setRate(e.target.valueAsNumber);
              }}
            />{" "}
            <br />
            <label className="calculator__label" htmlFor="compound">
              Compound
            </label>
            <Select
              options={Compounds}
              className="calculator__input"
              onChange={changeSelectedCompound}
            />
            <label className="calculator__label" htmlFor="payBack">
              Pay Back
            </label>
            <Select
              options={PayBack}
              className="calculator__input"
              onChange={changeSelectedPayBack}
            />
            <input
              className="calculator__btn"
              type="submit"
              value="Calculate"
            />
          </form>
        </div>
      </section>
      {installmentToPay > 0 && (
        <div>
          <p>
            Payment {payBack} <b>${installmentToPay}</b>{" "}
          </p>
          <p>
            Total of <b>{numberOfPaymentsState}</b> Payments{" "}
            <b>${totalToPayState}</b>
          </p>
          <p>
            Total Interest <b>${totalInterestState}</b>
          </p>
          <AmortizationGraph principal={amount} interest={totalInterestState} />
          {active ? (
            <button onClick={() => setActive(false)}>
              Close Amortization Table
            </button>
          ) : (
            <button onClick={() => setActive(true)}>
              View Amortization Table
            </button>
          )}
          {active ? (
            <AmortizationTable
              props={payments}
              numberOfPayments={numberOfPaymentsState}
              active={active}
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default Home;
