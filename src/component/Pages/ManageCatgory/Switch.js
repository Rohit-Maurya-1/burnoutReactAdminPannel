import React from "react";
const Switch = ({ id, checked, handleChecked }) => {
  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new${id}`}
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChecked(id, e.target.checked)}
      />
      <label className="react-switch-label" htmlFor={`react-switch-new${id}`}>
        <span className={`react-switch-button`}/>
      </label>
    </>
  );
};
export default Switch;