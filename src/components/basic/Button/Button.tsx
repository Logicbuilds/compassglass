import React from 'react';

export interface ButtonProps {
  /** Example Button property. */
  variant?: string;
}

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  return <button className="button">{children}</button>;
};
