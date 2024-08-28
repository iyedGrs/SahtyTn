/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Input = ({ label, name, ...props }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <label className="font-Josefin pr-5" htmlFor={name}>
        {label}
      </label>
      <input
        className="border-2 border-gray-200 p-1"
        {...props}
        required
        name={name}
      />
    </div>
  );
};

export default Input;
