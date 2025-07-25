// context/BillContext.js
import { createContext, useContext, useState } from 'react';

const BillContext = createContext();

export const BillProvider = ({ children }) => {
  const [bills, setBills] = useState([]);

  return (
    <BillContext.Provider value={{ bills, setBills }}>
      {children}
    </BillContext.Provider>
  );
};

export const useBill = () => {
  const context = useContext(BillContext);
  if (!context) {
    throw new Error('useBill must be used within a BillProvider');
  }
  return context;
};
