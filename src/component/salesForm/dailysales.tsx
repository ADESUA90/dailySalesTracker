import { useState } from "react";
import { useSalesHistoryContext } from "../../context/useSalesContext";
import { ISales } from "../../type/Isales";


const DailySalesForm = () => {

    const { addSalesHistory } = useSalesHistoryContext();
    const [date, setDate] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [customerName, setCustomerName] = useState<string>("");
    const [product, setProduct] = useState<string>("");
    const [paymentMethod, setPaymentMethod] = useState<string>("");
    const [paymentStatusNote, setPaymentStatusNote] = useState<string>("");
    


    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setQuantity(value);
        setTotalPrice(value * price);
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setPrice(value);
        setTotalPrice(quantity * value);
    };
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newSale: ISales = {
            date: date,
            customerName,
            product,
            quantity,
            price,
            totalPrice,
            paymentMethod,
            paymentStatusNote,
            
        };

        //console.log("Submitting new sale:", newSale);

        addSalesHistory(newSale);


        // const existingData = JSON.parse(localStorage.getItem("salesData") || "[]");
        // const updatedData = [...existingData, salesData];
        // localStorage.setItem("salesData", JSON.stringify(updatedData));


        setDate("");
        setCustomerName("");
        setProduct("");
        setQuantity(0);
        setPrice(0);
        setTotalPrice(0);
        setPaymentMethod("");
        setPaymentStatusNote("");
       

        alert("saved successfully");

    };


    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-120vh rounded-lg-shadow-lg  bg-red-500 h-screen w-screen bg-[url('https://media.istockphoto.com/id/669966070/photo/sale-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=66bmV9Tfjfff6lnDsqj310AX2cgkav5P9FcgM48c_lE=')]  bg-center"   >
                <h1 className="text-3xl font-bold text-center mb-8 text-white">Daily sales entry</h1>
                <div>
                    <form className="space-y-4 mt-0 p-4 rounded-md  shadow-xl shadow-black-500" onSubmit={handleFormSubmit}>
                        <nav className="grid grid-cols-2 gap-2  space-y-4 text-white rounded-md p-4">

                            <div>

                                <label htmlFor="date" className="block font-medium mb-2">Date:</label>
                                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" className="w-full text-black p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400" required />




                                <label htmlFor="product" className="block font-medium mb-2">Product:</label>
                                <input type="text" id="product" placeholder="Product name"
                                    value={product}
                                    onChange={(e) => setProduct(e.target.value)}
                                    className="w-full text-black p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400" required />



                            </div>

                            <div>
                                <label htmlFor="product" className="block font-medium mb-2">CustomerName:</label>
                                <input type="text" id="CustomerName" placeholder="CustomerName"
                                    value={customerName}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                    className="w-full text-black p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400" required />


                                <label htmlFor="quantity" className="block font-medium mb-2">Quantity:</label>
                                <input type="number" id="quantity" placeholder="Enter quantity" value={quantity} onChange={handleQuantityChange} className="w-full text-black p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400" required />
                            </div>

                            <div>

                                <label htmlFor="price" className="block font-medium mb-2">Price:</label>
                                <input type="number" id="price" placeholder="Price" value={price} onChange={handlePriceChange} className="w-full text-black p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400" required />


                                <label htmlFor="paymentMethod" className="block font-medium mb-2">Payment method:</label>
                                <input type="text" id="paymentMethod" placeholder="Payment method"
                                    value={paymentMethod}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="w-full text-black p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400" required />



                            </div>

                            <div>

                                <label htmlFor="totalPrice" className="block font-medium mb-2">Total:</label>
                                <input type="number" id="totalPrice" placeholder="Total price" value={totalPrice}
                                    className="w-full text-black p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400" required />







                                <label htmlFor="note" className="block font-medium mb-2">PaymentStatus/Note:</label>
                                <textarea id="note"
                                    value ={paymentStatusNote} onChange={(e) => setPaymentStatusNote(e.target.value)} className="w-full text-black p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400"
                                    placeholder="enter any note if any" required></textarea>

                            </div>

                            <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-lg shadow-lg items-center justify-center w-full">Submit</button>


                        </nav>
                    </form>

                </div>
            </div>
        </>
    )
};

export default DailySalesForm;