// DateField.tsx
import { ChangeEvent } from "react";

interface DateFieldProps {
  label: string;
  name: string;
  value: string | Date;
  onChange: (name: string, value: string | Date) => void;
  disabled?: boolean;
}
export function DateField({
  label,
  name,
  value,
  onChange,
  disabled = false,
}: DateFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(name, new Date(event.target.value)); // Convert value to Date
  };
  return (
    <div className="date-field">
      <label>{label}:</label>
      <input
        type="date"
        value={
          typeof value === "string"
            ? value
            : (value as Date).toISOString().split("T")[0]
        }
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}

export default DateField;
