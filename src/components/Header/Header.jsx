import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <NavLink to="/">
                <img src="/logo.svg" alt="Kasa" className="header__logo" />
            </NavLink>
            <nav className="header__nav">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
                    Accueil
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}