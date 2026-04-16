import React, { ReactNode } from 'react';
import Link from 'next/link';

export interface ButtonProps {
  /** Example Button property. */
  variant?: string;
  redirect: string;
  buttonClass?: string;
  linkTarget?: string;
  children: ReactNode;
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
    <Link className={'button ' + buttonClass} href={redirect} target={linkTarget}>
      {/* @ts-ignore  */}
      {children}
    </Link>
  );
};
