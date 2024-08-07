import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import { NavData } from './components/NavData';
import ProductsMegemanu from './ProductsMegemanu';

const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/" className="logo">Title</Link>
            <ul className="nav-links">
                <li>
                    <Link to="#">Products</Link>
                    <ProductsMegemanu />
                </li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="/support">Support</Link></li> {/* This can be a placeholder or direct to an external URL */}
            </ul>
            <div className="auth-buttons">
                <button className="login-btn">Log In</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        </nav>
    );
}

export default Nav;
