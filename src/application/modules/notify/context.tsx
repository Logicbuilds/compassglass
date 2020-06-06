import React, { useContext, createContext } from 'react';
import { useToasts, ToastProvider } from 'react-toast-notifications';

import { NOTIFY_DISMISS_TIMEOUT } from 'application/config';
import { UserNoteIDs, notifyService } from 'application/config';

import { Notify } from './components';
export interface NotifyContextState {
  notifyUser: (identifier: UserNoteIDs) => void;
}

const NotifyContext = createContext({} as NotifyContextState);

export const ProvideNotify: React.FC = ({ children }) => {
  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={NOTIFY_DISMISS_TIMEOUT}
      components={{
        Toast: (toastProps) => <Notify {...toastProps} />,
      }}
    >
      <NotifyProvider>{children}</NotifyProvider>
    </ToastProvider>
  );
};

const NotifyProvider: React.FC = ({ children }) => {
  const notify = useProvideNotify();
  return (
    <NotifyContext.Provider value={notify}>{children}</NotifyContext.Provider>
  );
};

export const useNotify = () => {
  return useContext(NotifyContext);
};

const useProvideNotify = () => {
  const { addToast } = useToasts();

  const notifyUser = (identifier: UserNoteIDs) => {
    const userNote = notifyService(identifier);
    if (!userNote) return;

    addToast(userNote.content, userNote);
  };

  return { notifyUser };
};
