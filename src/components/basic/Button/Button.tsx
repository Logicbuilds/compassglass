import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  /** Example Button property. */
  variant?: string;
  redirect: string;
  buttonClass?: string;
}

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = ({
  variant,
  redirect,
  buttonClass,
  children,
}) => {
  return (
    <Link className={'button ' + buttonClass} to={redirect}>
      {children}
    </Link>
  );
};
