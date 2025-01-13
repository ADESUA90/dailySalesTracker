
import { ISales } from "./Isales";

export interface ISalesContext {
    salesHistory: ISales[];
    addSalesHistory: (newSale: ISales) => void;
}