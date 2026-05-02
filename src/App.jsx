import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
  import Shop from "./pages/Shop";

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black min-h-screen text-white">
      <Navbar />
    
  

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/cart" element={<Cart />} />
</Routes>

      <Footer />
    </div>
  );
}

export default App;