
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './layout/Header';
import DailySalesForm from './component/salesForm/dailysales';
import SalesHistoryList from './component/salesList/salesHistory';
import SalesAnalysis from './component/salesChart/salesCharts';
import { SalesHistoryProvider } from './context/salesFormHistoryContext';
import LogInForm from './component/salesForm/salesLogin/logInForm';

function App() {
  // const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <SalesHistoryProvider>
        <Routes>
          <Route path='/' element={<Header />} />


          <Route path='/logInForm/salesLogin' element={<LogInForm />} />

          <Route path='/salesForm' element={<DailySalesForm />} />
          <Route path='/salesList' element={<SalesHistoryList />} />

          <Route path='/salesChart' element={<SalesAnalysis />} />
          <Route path='*' element={<div>You have miss your way dear staff</div>} />
        </Routes>
      </SalesHistoryProvider>
    </BrowserRouter>



  )
};

export default App;
