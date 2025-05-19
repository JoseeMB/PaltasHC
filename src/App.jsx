import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutUs from './pages/AboutUs/AboutUs';
import Recipes from './pages/Recipes/Recipes';
import Order from './pages/Order/Order';
import LandingV2 from './pages/LandingV2/LandingV2';
import Temas from './pages/ThemePage';
import './App.css';

function App() {
  return (
    <Router>

      <Navbar />
      <div className="bg-background text-text min-h-screen flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/recetas" element={<Recipes />} />
            <Route path="/order" element={<Order />} />
            {/* <Route path="/temas" element={<Temas />} />*/}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
