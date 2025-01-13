
import { Line } from 'react-chartjs-2';
import { useSalesHistoryContext } from '../../context/useSalesContext';

import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const SalesAnalysis = () => {
const {salesHistory} = useSalesHistoryContext();

  const dates = salesHistory.map((sale) =>sale.date);
  // const product = salesHistory.map((sale) => sale.productName);
  const amounts = salesHistory.map((sale) => sale.totalPrice);



  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Daily Sales',
        data: amounts,
        borderColor: 'blue',
        backgroundColor: 'red',
        fill: true,
        tension: 0.5, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: true,
        // text: 'Sales Analysis',
      },
    },
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-cover bg-[url('https://media.istockphoto.com/id/1383864065/photo/increase-sales-volume-profit-and-revenue-concept-successful-marketing-strategy-improving-lead.jpg?s=1024x1024&w=is&k=20&c=XbKxifqjgH5ST6y7QVJV0ClPQ_sxQiZ05Jse3oFb8Oo=')] h-100 rounded-xl shadow-lg  mt-0 ">
        <h1 className='text-white text-center font-bold text-3xl'>Sales Analysis</h1>
        <Line data={chartData} options={options} /></div>
    </>);
};


export default SalesAnalysis;
