import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"

import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="brand">
        <img src="/img/logo.png" alt="logo Clap" />
      </Link>
      <ul>
        <li>
          <Link to="/categorias/rompecabezas">Rompecabezas</Link>
        </li>
        <li>
          <Link to="/categorias/cajas">Cajas</Link>
        </li>
        <li>
          <Link to="/categorias/juegomesa">Juegos de mesa</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
