import { ChangeEvent, FocusEvent } from "react";

type FormInputProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  textarea?: boolean;
  rows?: number;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function FormInput({
  id,
  name,
  label,
  type = "text",
  value,
  placeholder,
  required = false,
  error,
  textarea = false,
  rows = 4,
  onChange,
  onBlur,
}: FormInputProps) {
  const inputClasses = `w-full px-4 py-3 bg-card border ${
    error ? "border-red-500" : "border-card-border"
  } rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors`;

  return (
    <div className='mb-6'>
      <label
        htmlFor={id}
        className='block text-primary font-medium mb-2 transition-colors'
      >
        {label}
        {required && <span className='text-brand-primary ml-1'>*</span>}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          rows={rows}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClasses}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClasses}
        />
      )}

      {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
    </div>
  );
}
