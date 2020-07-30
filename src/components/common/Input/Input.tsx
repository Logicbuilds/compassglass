import * as React from 'react';

export interface InputProps {
  label: string;
  name: string;
  type: string;
  register: any;
  pattern?: { value: RegExp; message: string };
  errors: any;
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
  return (
    <label className="form-group">
      <h4>{label}</h4>
      {type === 'textarea' && (
        <textarea name={name} ref={register({ required, pattern })} />
      )}
      {type !== 'textarea' && (
        <input name={name} ref={register({ required })} type={type} />
      )}
      {errors[name] && <p className="form-error">This field is required.</p>}
    </label>
  );
};
