import { Routes, Route } from 'react-router-dom';
import './App.css';
import DashboardAdminPage from './pages/admin/DashboardAdminPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin/dashboard" element={<DashboardAdminPage />} />
      </Routes>
    </div>
  )
}

export default App;
