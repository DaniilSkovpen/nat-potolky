import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../logo/logo.jpg";

const NavBar = () => {
 const [click, setClick] = useState(false);

 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);
 return (
  <nav className="navbar">
   <div className="navbar-container">
    <NavLink to="/" style={{ cursor: 'pointer' }}><img src={logo} onClick={closeMobileMenu} className='navbar-logo' /></NavLink>
   </div>
   <div className='menu-icon' onClick={handleClick}>
    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
   </div>
   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    <li className='nav-item'>
     <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
      Головна
     </NavLink>
    </li>
    <li className='nav-item'>
     <NavLink to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
      Про нас
     </NavLink>
    </li>
    <li className='nav-item'>
     <NavLink to='/types' className='nav-links' onClick={closeMobileMenu}>
      Типи стель
     </NavLink>
    </li>
    <li className='nav-item'>
     <NavLink to='/contacts' className='nav-links' onClick={closeMobileMenu}>
      Контакти
     </NavLink>
    </li>
   </ul>
  </nav>
 )
}

export default NavBar;
