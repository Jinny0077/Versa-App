// SelectField.tsx
import { ChangeEvent } from "react";

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (name: string, value: string) => void;
  disabled?: boolean;
}

export function SelectField({
  label,
  value,
  options,
  onChange,
  disabled = false,
}: SelectFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.name, event.target.value);
  };
  return (
    <div className="select-field">
      <label>{label}:</label>
      <select value={value} onChange={handleChange} disabled={disabled}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
