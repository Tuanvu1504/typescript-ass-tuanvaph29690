import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage';

import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<HomePage /> } />
        <Route path="/products" element={<ProductPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;