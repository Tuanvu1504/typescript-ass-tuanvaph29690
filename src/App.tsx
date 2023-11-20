import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
<<<<<<< HEAD


=======
import ProductPage from './pages/ProductPage';
>>>>>>> 5b3c4598d3681306a376aa051fab59c6d5f08b9c
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
<<<<<<< HEAD
        <Route path="/" element={<HomePage /> } />
=======
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
>>>>>>> 5b3c4598d3681306a376aa051fab59c6d5f08b9c
      </Routes>
    </BrowserRouter>
  );
}

export default App;