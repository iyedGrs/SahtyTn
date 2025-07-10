import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...props }) => {
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
