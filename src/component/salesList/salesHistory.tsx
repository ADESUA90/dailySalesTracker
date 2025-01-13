
import { useSalesHistoryContext } from "../../context/useSalesContext";



const SalesHistoryList = () => {
    const { salesHistory } = useSalesHistoryContext();

    return (
        <div className="flex flex-col bg-[url('https://media.istockphoto.com/id/1352651140/photo/stock-market-data-on-trading-board.jpg?s=1024x1024&w=is&k=20&c=Z-xrxyg2JpZYByBUWRKSp8KCPuT-QfTbOoB2Myc2Kcg=')] rounded-md shadow-md p-6">
            <h1 className=" font-bold text-center mb-4 text-gray-800">Sales History</h1>
            <div className="border-2 border-black-300  rounded-md w-full overflow-x-auto bg-purple-200">
                <table className="min-w-full ">
                    <thead className="bg-purple-400 text-white ">
                        <tr className="p-0">
                            <th className="py-1 px-2 border-b">S/N</th>
                            <th className="py-1 px-2 border-b">Date</th>
                            <th className="py-1 px-2 border-b">Customer Name</th>
                            <th className="py-1 px-2 border-b">Product</th>
                            <th className="py-1 px-2 border-b">Quantity</th>
                            <th className="py-1 px-2 border-b">Price</th>
                            <th className="py-1 px-2 border-b">Total</th>
                            <th className="py-1 px-2 border-b">Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesHistory.length > 0 ? (
                            salesHistory.map((sale, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="py-0 px-2 border-b text-center">{index + 1}</td>
                                    <td className="py-0 px-2 border-b text-center">{sale.date}</td>
                                    <td className="py-0 px-2 border-b">{sale.customerName}</td>
                                    <td className="py-0 px-2 border-b">{sale.product}</td>
                                    <td className="py-0 px-2 border-b text-center">{sale.quantity}</td>
                                    <td className="py-0 px-2 border-b text-center">{sale.price}</td>
                                    <td className="py-0 px-2 border-b text-center">{sale.totalPrice}</td>
                                    <td className="py-0 px-2 border-b text-center">{sale.paymentStatusNote}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={8} className="py-4 px-6 text-center border-1 border-black-100 text-gray-500">
                                    No sales history available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};




export default SalesHistoryList;