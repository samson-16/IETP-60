import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Technology from './pages/Technology/Technology';
import Contact from './pages/contact/Contact';
import Order from './pages/Order.jsx/Order';

function App() {
  return (
    
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />

      </Routes>
   
  );
}

export default App;
