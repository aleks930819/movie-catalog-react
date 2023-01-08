import { createContext, useState } from 'react';

export const isOpenContext = createContext();

export const IsOpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const isOpenClickHandler = () => {
    setOpen(!open);
  };

  return (
    <isOpenContext.Provider value={{ open, isOpenClickHandler }}>
      {children}
    </isOpenContext.Provider>
  );
};

