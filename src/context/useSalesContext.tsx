import { useContext } from "react";
import { ISalesContext } from "../type/isalesContext";
import SalesHistoryContext from "./salesFormHistoryContext";

export const useSalesHistoryContext = (): ISalesContext => {
    const context = useContext(SalesHistoryContext);
    if (!context) {
        throw new Error("useSalesHistoryContext must be used within a SalesHistoryProvider");
    }
    return context;
};
