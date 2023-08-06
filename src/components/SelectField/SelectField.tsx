import React from 'react';
import PropTypes from 'prop-types';

export interface SelectFieldProps {
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <select
      onChange={onChange}
      value={value}
      className={`block w-full px-4 py-2 mt-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 ${className}`}
    >
      {options.map((option: string, index: number) => (
        <option
          value={option}
          key={`${option}-${index}`}
          className="text-gray-800"
        >
          {option}
        </option>
      ))}
    </select>
  );
};

SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SelectField;
