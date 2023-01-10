import { createContext, useState } from 'react';

export const isOpenContext = createContext();

export const IsOpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const hide = () => {
    setOpen(false);
  };

  const show = () => {
    setOpen(true);
  };

  return (
    <isOpenContext.Provider value={{ open, toggle, hide, show }}>
      {children}
    </isOpenContext.Provider>
  );
};
