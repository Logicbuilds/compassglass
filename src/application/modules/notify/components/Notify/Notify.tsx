import React from 'react';
import { DefaultToast, ToastProps } from 'react-toast-notifications';

export interface NotifyProps extends ToastProps {
  subscript?: string;
  title?: string;
  content?: string;
  identifier?: string;
}

export const Notify: React.FC<NotifyProps> = ({
  children,
  title,
  subscript,
  ...props
}) => {
  return (
    <DefaultToast {...props}>
      <div className="notify">
        {title && <h1>{title}</h1>}
        {children}
        <br />
        {subscript && <sub>{subscript}</sub>}
      </div>
    </DefaultToast>
  );
};
