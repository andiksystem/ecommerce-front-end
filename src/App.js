import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ProtectedRoute } from './components/ProtectedRoute';
import DashboardAdminPage from './pages/admin/DashboardAdminPage';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <DashboardAdminPage />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App;
