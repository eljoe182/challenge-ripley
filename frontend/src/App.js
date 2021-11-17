import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent";
import HomePage from './pages/HomePage';
import RegisterAccountPage from "./pages/RegisterAccountPage";
import TransactionsPage from "./pages/TransactionsPage";
import TransferPage from "./pages/TransferPage";


function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register_account" element={<RegisterAccountPage />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
