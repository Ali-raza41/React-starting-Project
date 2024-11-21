import React from "react";

import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  function dropdownChangeHandler(e) {
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select>
          <option value={props.selected} onChange={dropdownChangeHandler}>
            2024
          </option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
