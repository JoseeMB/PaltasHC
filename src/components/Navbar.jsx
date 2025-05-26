import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styles

function Navbar() {
  return (
    <nav className="relative w-full p-4 bg-surface text-text [background-color:var(--color-background)] navbar">
      <ul className="flex gap-7 justify-center items-center">
        <li>
          <Link to="/" className="text-secondary font-semibold">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-secondary font-semibold">About Us</Link>
        </li>
        <li>
          <Link to="/recetas" className="text-secondary font-semibold">Recetas</Link>
        </li>
        <li>
          <Link to="/order" className="text-secondary font-semibold">Realizar Pedido</Link>
        </li>
      </ul>

      {/* Efecto crayón debajo */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-no-repeat bg-center bg-cover pointer-events-none"
           style={{ backgroundImage: "url('/poster-mask.png')" }} />
    </nav>
  );
}

export default Navbar;
