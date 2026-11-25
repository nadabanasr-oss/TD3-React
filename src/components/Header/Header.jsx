import { Link, NavLink } from "react-router-dom"; 

import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <span className={style.logoIcon}>✈️</span>
        <span>
          Travel<strong>Agency</strong>
        </span>
      </div>

      <nav className={style.nav}>
        <NavLink to="/accueil" className={({isActive})=>isActive?style.active:""}>Accueil</NavLink>
        <NavLink to="/destinations" className={({isActive})=>isActive?style.active:""}>Destinations</NavLink>
        <NavLink to="/apropos" className={({isActive})=>isActive?style.active:""}>À propos</NavLink>
        <NavLink to="/login" className={({isActive})=>isActive?style.active:""}>Login</NavLink>
        <NavLink to="/reserve" className={({isActive})=>isActive?style.active:""}>Réserver</NavLink>
      </nav>

      <Link to="/reservation" className={style.reserve}>
        Réserver maintenant
      </Link>
    </header>
  );
}

export default Header;