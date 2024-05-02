// InputField.tsx
import { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string | Date) => void;
  disabled?: boolean;
  error?: string;
}

export function InputField({
  label,
  name,
  value,
  onChange,
  disabled = false,
  error,
}: InputFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(name, event.target.value); // Pass the field name and its new value
  };
  return (
    <div className="input-field">
      <label>{label}:</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}

export default InputField;
