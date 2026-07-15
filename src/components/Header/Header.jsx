import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            {}
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    );
}