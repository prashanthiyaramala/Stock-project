import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Verification from './pages/Verification';
import Buysell from "./components/buysell";
import Usermanagement from './components/Usermanagement';
import Stockxg1 from './Stockxg1';
import Stockxg2 from './Stockxg2';
import Wallet from "./components/wallet";
import Transcation from './components/Transcation'; 


function App() {
  return (
      <Routes>
        <Route path="/KYC/*" element={<Verification />} />
        <Route path="/buy" element={<Buysell />} />
        <Route path="/user" element={<Usermanagement />} />
        <Route path="/transaction" element={<Stockxg1 />} />
        <Route path="/customer" element={<Stockxg2 />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/tr" element={<Transcation />} />
      </Routes>
  );
}

export default App;
