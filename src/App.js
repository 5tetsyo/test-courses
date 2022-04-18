import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import BanksManPage from './components/banks-managment-page/BanksManPage'
import CalcPage from './components/mortgage-calculator-page/CalcPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BanksManPage/>}/>
          <Route path = "/calc" element={<CalcPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
