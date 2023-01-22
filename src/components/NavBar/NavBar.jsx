import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="menu-container">
            <NavLink to='/'>
                <img className="logo-nav" alt="Logo" src='./images/logo.png' />
            </NavLink>
            <ul>
                <li>
                    <NavLink to='/'>Todos</NavLink>

                </li>

                <li>
                    <NavLink to='/category/Zapatillas'>Zapatillas</NavLink>
                </li>
                
                <li>
                    <NavLink to='/category/Ojotas'>Ojotas</NavLink>
                </li>

                <li>
                    <NavLink to='/category/Zapatos'>Zapatos</NavLink>
                </li>                             
            </ul>
            <CartWidget />
        </div>
    )

}

export default NavBar;