import React from 'react';

export interface ButtonProps {
  /** Example Button property. */
  exampleButton?: string;
}

/**
 * Basic button component
 */
export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <div className="button">
      <button>Button</button>
    </div>
  );
};
