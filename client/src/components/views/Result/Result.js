import React, { useEffect } from "react";
import { data } from "./exampleData";

function result() {
  const renderTable = () =>
    data.map((data, index) => (
      <tr key={index}>
        <td>{data.university}</td>
        <td>{data.all}</td>
        <td>{data.four}</td>
        <td>{data.five}</td>
        <td>{data.six}</td>
      </tr>
    ));

  return (
    <div>
      <table border="1px">
        <thead>
          <tr>
            <th>학교</th>
            <th>전체이슈</th>
            <th>4월</th>
            <th>5월</th>
            <th>6월</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default result;
