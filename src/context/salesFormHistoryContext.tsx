
import { createContext, useState } from "react";
import { ISales } from "../type/Isales";
import { ISalesContext } from "../type/isalesContext";



export const SalesHistoryContext = createContext<ISalesContext | undefined>(undefined);



export const SalesHistoryProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {  

    const [salesHistory, setSalesHistory] = useState<ISales[]>(() => {
    const savedSalesHistory = localStorage.getItem("salesHistory");
    return savedSalesHistory ? JSON.parse(savedSalesHistory) : [];
});

const addSalesHistory = (newSale: ISales) => {
    const updatedSalesHistory = [...salesHistory, newSale];
    setSalesHistory(updatedSalesHistory);
    localStorage.setItem("salesHistory", JSON.stringify(updatedSalesHistory));
};

return (
    <SalesHistoryContext.Provider value={{ salesHistory, addSalesHistory }}>{children}</SalesHistoryContext.Provider>

);
};

export default SalesHistoryContext;