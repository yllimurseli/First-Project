import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import ProductsMegemanu from './ProductsMegemanu';
import logoImage from './images/apple.png'; 
const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/" className="logo">
                <img src={logoImage} alt="Logo" /> Title
            </Link>
            <ul className="nav-links">
                <li>
                    <Link to="#">Products</Link>
                    <ProductsMegemanu />
                </li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="/support">Support</Link></li>
            </ul>
            <div className="auth-buttons">
                <button className="login-btn">Log In</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        </nav>
    );
}

export default Nav;
