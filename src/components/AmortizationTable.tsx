import React from "react";
import { useState, useEffect } from "react";

const AmortizationTable = (props: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.props);
  }, [props.numberOfPayments]);

  return (
    <table className="table">
      <caption>Data</caption>
      <thead>
        <tr>
          <th>Payment</th>
          <th>Beggining Balance</th>
          <th>Intrest Date</th>
          <th>Principal</th>
          <th>Ending Balance</th>
        </tr>
      </thead>
      <tbody>
        {data.map((i: any, ind: number) => (
          <tr key={ind}>
            <td>{i.payment}</td>
            <td>{i.begginingBalance}</td>
            <td>{i.interest}</td>
            <td>{i.principal}</td>
            <td>{i.endingBalance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AmortizationTable;
