import * as React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface InputProps {
  label: string;
  name: string;
  type: string;
  register: UseFormRegister<any>;
  pattern?: { value: RegExp; message: string };
  errors: FieldErrors;
  required: boolean;
}

export const Input = ({
  label,
  name,
  type,
  register,
  errors,
  pattern,
  required,
}: InputProps) => {
  const registerProps = register(name, { required, pattern });

  return (
    <label className="form-group">
      <h4>{label}</h4>
      {type === 'textarea' && (
        <textarea {...registerProps} />
      )}
      {type !== 'textarea' && (
        <input {...registerProps} type={type} />
      )}
      {errors[name] && <p className="form-error">This field is required.</p>}
    </label>
  );
};
