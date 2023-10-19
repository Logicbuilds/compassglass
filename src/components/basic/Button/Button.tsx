import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  /** Example Button property. */
  variant?: string;
  redirect: string;
  buttonClass?: string;
  linkTarget?: string;
}

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = ({
  variant,
  redirect,
  buttonClass,
  linkTarget,
  children,
}) => {
  return (
    /* @ts-ignore */
    <Link className={'button ' + buttonClass} to={redirect} target={linkTarget}>
      {/* @ts-ignore  */}
      {children}
    </Link>
  );
};
