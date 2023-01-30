import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ProtectedRoute } from './components/ProtectedRoute';
import DashboardAdminPage from './pages/admin/DashboardAdminPage';
import KategoriAdminPage from './pages/admin/KategoriAdminPage';
import ProdukAdminCreatePage from './pages/admin/ProdukAdminCreatePage';
import ProdukAdminDetailPage from './pages/admin/ProdukAdminDetailPage';
import ProdukAdminEditPage from './pages/admin/ProdukAdminEditPage';
import ProdukAdminListPage from './pages/admin/ProdukAdminListPage';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import DashboardUserPage from './pages/admin/DashboardUserPage';
import Forbidden from './components/Forbidden';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forbidden" element={<Forbidden />} />

        <Route path="/user/dashboard" element={
          <ProtectedRoute userRole="user">
            <DashboardUserPage />
          </ProtectedRoute>
        } />

        <Route path="/admin/dashboard" element={
          <ProtectedRoute userRole="admin">
            <DashboardAdminPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/kategori" element={
          <ProtectedRoute userRole="admin">
            <KategoriAdminPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/produk" element={
          <ProtectedRoute userRole="admin">
            <ProdukAdminListPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/produk/create" element={
          <ProtectedRoute userRole="admin">
            <ProdukAdminCreatePage />
          </ProtectedRoute>
        } />
        <Route path="/admin/produk/detail/:id" element={
          <ProtectedRoute userRole="admin">
            <ProdukAdminDetailPage />
          </ProtectedRoute>
        } />
        <Route path="/admin/produk/edit/:id" element={
          <ProtectedRoute userRole="admin">
            <ProdukAdminEditPage />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App;
