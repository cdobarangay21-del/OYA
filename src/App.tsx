import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Checkout } from './pages/Checkout';
import { CartProvider } from './components/CartContext';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Layout>
        <Toaster position="top-center" />
      </Router>
    </CartProvider>
  );
}

export default App;
