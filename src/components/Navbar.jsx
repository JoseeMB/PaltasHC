
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full p-4 bg-surface text-text [background-color:var(--color-background)]">
      <ul className="flex gap-7 justify-center">
      <li>
        <Link to="/" className="text-primary font-semibold">Home</Link>
      </li>
      <li>
        <Link to="/about" className="text-primary font-semibold">About Us</Link>
      </li>
      <li>
        <Link to="/recetas" className="text-primary font-semibold">Recetas</Link>
      </li>
      <li>
        <Link to="/order" className="text-primary font-semibold">Realizar Pedido</Link>
      </li>
      <li>
        {/* <Link to="/temas" className="text-primary font-semibold">Theme</Link> */}
      </li>
      </ul>
    </nav>
    );
}

export default Navbar;
